/**
 * Static prerender step (runs automatically after `vite build`).
 *
 * Why a headless browser instead of ReactDOMServer:
 * the app gates its content behind an auth/settings check that runs in a
 * `useEffect` (see src/lib/AuthContext.jsx). `useEffect` never fires during
 * server-string rendering, so renderToString would only capture the loading
 * spinner. A real browser runs the effects, so the actual landing-page markup
 * is produced and can be written into the initial HTML — exactly what Google
 * Ads and other non-JS crawlers need.
 *
 * This is the same technique react-snap uses, but with a modern browser that
 * works both on Apple Silicon (local) and inside Vercel's Linux build:
 *   - Local dev  -> the Chrome already installed on the machine (channel).
 *   - Vercel/CI  -> @sparticuz/chromium, which ships the shared libraries the
 *                   Vercel build container is missing (libnss3 / libnspr4 …).
 *   - Override   -> set PUPPETEER_EXECUTABLE_PATH to force a specific binary.
 *
 * If the browser cannot launch, the build fails by default so a broken
 * (non-prerendered) page is never shipped. Set PRERENDER_OPTIONAL=true to
 * downgrade that to a warning instead.
 */
import { preview } from 'vite';
import puppeteer from 'puppeteer-core';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

// Routes to prerender. Add more paths here as new pages are created.
const ROUTES = ['/'];
const PORT = 4183;
const OUT_DIR = 'dist';

async function resolveLaunchOptions() {
  const baseArgs = ['--no-sandbox', '--disable-setuid-sandbox'];

  // 1. Explicit override wins everywhere.
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return {
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      args: baseArgs,
      headless: true,
    };
  }

  // 2. Vercel / any Linux build container -> bundled serverless Chromium.
  if (process.env.VERCEL || process.platform === 'linux') {
    const chromium = (await import('@sparticuz/chromium')).default;
    return {
      executablePath: await chromium.executablePath(),
      args: [...chromium.args, ...baseArgs],
      headless: chromium.headless,
      defaultViewport: chromium.defaultViewport,
    };
  }

  // 3. Local dev -> the Chrome/Chromium installed on the machine.
  return { channel: 'chrome', args: baseArgs, headless: true };
}

async function run() {
  const server = await preview({ preview: { port: PORT, strictPort: true } });
  const origin = `http://localhost:${PORT}`;

  const browser = await puppeteer.launch(await resolveLaunchOptions());

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 900 });
      await page.goto(`${origin}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 60000,
      });

      // Scroll through so `whileInView` animations reveal their content,
      // then return to the top before capturing.
      await page.evaluate(
        () =>
          new Promise((res) => {
            let y = 0;
            const step = 500;
            const timer = setInterval(() => {
              window.scrollBy(0, step);
              y += step;
              if (y >= document.body.scrollHeight) {
                clearInterval(timer);
                window.scrollTo(0, 0);
                res();
              }
            }, 80);
          })
      );
      // Let any in-flight animations/paints settle.
      await new Promise((r) => setTimeout(r, 800));

      const html = await page.content();
      const outFile =
        route === '/'
          ? resolve(OUT_DIR, 'index.html')
          : resolve(OUT_DIR, route.replace(/^\//, ''), 'index.html');
      mkdirSync(dirname(outFile), { recursive: true });
      writeFileSync(outFile, html, 'utf8');
      console.log(`✓ prerendered ${route} -> ${outFile}`);
      await page.close();
    }
  } finally {
    await browser.close();
    await server.close();
  }
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Prerender failed:', err);
    if (String(process.env.PRERENDER_OPTIONAL).toLowerCase() === 'true') {
      console.warn(
        '⚠ PRERENDER_OPTIONAL=true — shipping the non-prerendered SPA shell.'
      );
      process.exit(0);
    }
    process.exit(1);
  });
