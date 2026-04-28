import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, MapPin, Shield, Droplets, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/landing/Navbar';
import ServicesGrid from '@/components/landing/ServiceSection';
import AboutSection from '@/components/landing/AboutSection';
import FaqSection from '@/components/landing/FaqSection';
import ContactSection from '@/components/landing/ContactSection';
import GoogleReviews from '@/components/landing/GoogleReviews';
import QuoteModal from '@/components/landing/QuoteModal';

// ─── Placeholder images — swap these URLs with your own photos ────────────────
const PHOTOS = {
    houseWashing: {
        hero:   'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/4fcfffb47_dirty_clean_ai.png',
        before: 'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/c1d0a433b_dirty_house.png',
        after:  'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/e0a38b981_clean_house.png',
    },
    roofCleaning: {
        hero:   'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/1732608fd_Rooftransformation_beforeandafter.png',
        before: 'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/86dc420ce_fulldirtyroof.png',
        after:  'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/e786d8957_fullcleanroofai.png',
    },
    driveway: {
        hero:   'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/f4ab2e57e_aicleandriveway.png',
        before: 'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/f32f92ba0_fulldirtydriveway.png',
        after:  'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/721f50ebc_fullcleandriveway.png',
    },
    deckFence: {
        hero:   'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/14d1caf1f_Beforeandafterwoodcleaning.png',
        before: 'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/3dea95975_fulldirtydeckai.png',
        after:  'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/e77c093b3_fullcleandeckai.png',
    },
    pavers: {
        hero:   'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/6b4eab9bb_aipaverforwebsite.png',
        before: 'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/344e9e721_full_dirty_paver.png',
        after:  'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/50d5ce789_paversealed.png',
    },
    commercial: {
        hero:   'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/2089ca3d1_commericalaiforwebsite.png',
        before: 'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/6d0d36fa3_fulldirtycommercial.png',
        after:  'https://media.base44.com/images/public/69922938c9c3fbbd85313d31/f45c63124_fullcleancommercial.png',
    },
};

const services = [
    {
        id: 'house-washing',
        title: 'House Washing',
        heroImage: PHOTOS.houseWashing.hero,
        beforeImage: PHOTOS.houseWashing.before,
        afterImage: PHOTOS.houseWashing.after,
        description: "Your home's exterior is constantly exposed to dirt, mold, mildew, algae, and environmental pollutants that build up over time. Standard garden hoses and DIY cleaners simply can't reach deep into porous surfaces. Our soft wash house washing process uses professional-grade, biodegradable solutions applied at low pressure to safely and completely restore your siding, brick, or stucco to its original brilliance — without a single risk of damage.",
        bullets: [
            'Removes mold, mildew, algae, and embedded grime',
            'Protects siding integrity — no high-pressure damage',
            'Improves curb appeal and property value',
            'Safe for all exterior surface types',
            'Results that last longer than traditional pressure washing',
        ],
    },
    {
        id: 'roof-cleaning',
        title: 'Roof Washing',
        heroImage: PHOTOS.roofCleaning.hero,
        beforeImage: PHOTOS.roofCleaning.before,
        afterImage: PHOTOS.roofCleaning.after,
        description: "Roofing systems are exposed year-round to moisture, shade, debris, and temperature changes that lead to algae streaking and moss growth. These dark stains don't just affect appearance — they can contribute to gradual deterioration of roofing materials if left untreated. Our roof soft washing service uses controlled low-pressure application methods to safely remove organic buildup while protecting shingle integrity, restoring your roof's natural color and extending its lifespan.",
        bullets: [
            'Eliminates black streaks and moss buildup',
            'Helps extend the usable life of roofing materials',
            'Improves overall property appearance and curb appeal',
            'Reduces moisture retention and surface wear',
            'Maintains consistent exterior upkeep',
        ],
    },
    {
        id: 'driveway',
        title: 'Driveway & Concrete Cleaning',
        heroImage: PHOTOS.driveway.hero,
        beforeImage: PHOTOS.driveway.before,
        afterImage: PHOTOS.driveway.after,
        description: "Driveways, walkways, and concrete surfaces take a beating from vehicles, weather, and foot traffic. Oil stains, tire marks, rust, and embedded grime can make even a well-maintained property look worn. Our professional concrete cleaning removes years of buildup and surface staining, leaving your driveway, patio, or walkway looking fresh and like-new.",
        bullets: [
            'Deep cleans oil stains, tire marks, and rust',
            'Restores the original color of concrete and asphalt',
            'Eliminates slippery algae and mildew growth',
            'Improves safety and appearance of walkways',
            'Prepares surfaces for sealing if desired',
        ],
    },
    {
        id: 'deck-fence',
        title: 'Deck & Fence Cleaning',
        heroImage: PHOTOS.deckFence.hero,
        beforeImage: PHOTOS.deckFence.before,
        afterImage: PHOTOS.deckFence.after,
        description: "Wood and composite decks and fences are naturally susceptible to weathering, graying, mold, and mildew. Left untreated, these surfaces can become slippery, discolored, and structurally compromised. Our deck and fence cleaning service carefully removes organic buildup and surface grime, reviving your outdoor spaces and preparing them for staining or sealing if needed.",
        bullets: [
            'Removes mold, mildew, algae, and weathered gray',
            'Revives faded or discolored wood and composite',
            'Makes surfaces safer by eliminating slippery growth',
            'Prepares surfaces for staining or sealant application',
            'Extends the life of your outdoor structures',
        ],
    },
    {
        id: 'pavers',
        title: 'Paver Sanding & Sealing',
        heroImage: PHOTOS.pavers.hero,
        beforeImage: PHOTOS.pavers.before,
        afterImage: PHOTOS.pavers.after,
        description: "Pavers are a significant investment in your property's beauty and function. Over time, sand erodes from the joints, weeds take hold, and surface staining leaves them looking tired. Our paver restoration service includes a thorough professional cleaning, joint re-sanding to stabilize the surface, and a high-quality sealant application that protects your pavers and brings back their rich, vibrant color.",
        bullets: [
            'Removes stains, moss, and years of surface buildup',
            'Re-sands joints to prevent shifting and weed growth',
            'Sealing locks in color and protects against the elements',
            'Extends paver lifespan significantly',
            'Dramatically improves curb appeal and property value',
        ],
    },
    {
        id: 'commercial',
        title: 'Commercial Cleaning',
        heroImage: PHOTOS.commercial.hero,
        beforeImage: PHOTOS.commercial.before,
        afterImage: PHOTOS.commercial.after,
        description: "First impressions matter. A clean exterior signals professionalism and care to every customer who walks through your door. We provide reliable, professional exterior cleaning for storefronts, office buildings, restaurants, and more. Our commercial cleaning services are scheduled around your business hours to minimize disruption and maximize results.",
        bullets: [
            'Storefront and building façade washing',
            'Parking lot and concrete cleaning',
            'Dumpster pad and grease removal',
            'Flexible scheduling to minimize business disruption',
            'Fully insured with commercial liability coverage',
        ],
    },
];

export default function Home() {
    const [quoteOpen, setQuoteOpen] = React.useState(false);
    const openQuote = () => setQuoteOpen(true);

    return (
        <div className="min-h-screen bg-white">
            <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
            <Navbar onOpenQuote={openQuote} />

            {/* ── Hero ──────────────────────────────────────────────────────── */}
            <section className="relative flex items-center overflow-hidden">
                {/* Hero Background */}
                <div className="absolute inset-0">
                    <img src="https://media.base44.com/images/public/69922938c9c3fbbd85313d31/403cfc953_IMG_1246.jpg" alt="Jersey Boys Soft Wash" className="w-full h-full object-cover object-center" style={{imageRendering: 'crisp-edges'}} />
                    <div className="absolute inset-0 bg-black/55" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20 w-full">
                    <div className="flex flex-col items-center text-center">
                        {/* Hero Content */}
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg tracking-tight">
                                Professional House Washing &
                                <span className="text-[#E8A524]"> Exterior Cleaning</span>
                            </h1>

                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 mb-8">
                                {[
                                    { icon: MapPin,   text: 'Serving Monmouth & Ocean County' },
                                    { icon: Droplets, text: 'Safe Soft Washing Technology' },
                                    { icon: Shield,   text: 'Fully Licensed & Insured' },
                                    { icon: Check,    text: 'Trained & Experienced Technicians' },
                                ].map((item, i) => (
                                    <motion.div key={item.text} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-2">
                                        <item.icon className="w-4 h-4 text-[#E8A524] flex-shrink-0" />
                                        <span className="text-white/90 font-medium">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mb-0 justify-center">
                                <Button onClick={openQuote} className="h-14 px-7 bg-[#E8A524] hover:bg-[#d4951f] text-white font-semibold text-base shadow-lg">
                                    <Send className="w-4 h-4 mr-2" /> Get Your Free Quote
                                </Button>
                                <a href="tel:+17326829551" className="h-14 px-7 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md flex items-center justify-center gap-2 text-base font-semibold transition-all">
                                    <Phone className="w-4 h-4" /> (732) 682-9551
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Google Reviews ─────────────────────────────────────────────── */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <GoogleReviews />
                </div>
            </section>

            {/* ── About / Why Choose Us ──────────────────────────────────────── */}
            <AboutSection />

            {/* ── All Service Sections ───────────────────────────────────────── */}
            <ServicesGrid services={services} />

            {/* ── FAQ ────────────────────────────────────────────────────────── */}
            <FaqSection />

            {/* ── Contact / Quote ─────────────────────────────────────────────── */}
            <ContactSection onOpenQuote={openQuote} />

            {/* ── Final CTA ──────────────────────────────────────────────────── */}
            <section className="py-20 lg:py-28 bg-[#5A5F6B] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                            Ready to Restore Your Home's Exterior?
                        </h2>
                        <p className="text-slate-200 text-lg mb-10 max-w-2xl mx-auto">
                            Request a free, no-obligation quote today. Fast response, transparent pricing, and results that blow you away.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={openQuote} className="h-14 px-8 bg-[#E8A524] text-white hover:bg-[#d4951f] text-lg font-semibold shadow-lg">
                                Request Your Free Quote
                            </Button>
                            <a href="tel:+17326829551" className="h-14 px-8 bg-transparent border-2 border-[#E8A524] text-[#E8A524] hover:bg-[#E8A524]/10 rounded-md flex items-center justify-center gap-2 text-lg font-semibold transition-all">
                                <Phone className="w-5 h-5" /> (732) 682-9551
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Footer ─────────────────────────────────────────────────────── */}
            <footer className="bg-[#3d4047] text-slate-400 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/8a4566ae8_IMG_1011.jpeg" alt="Jersey Boys Soft Wash" className="h-12 w-auto" />
                            <div>
                                <div className="text-white font-bold text-xl mb-1">Jersey Boys Soft Wash</div>
                                <p className="text-sm">Home Exterior Restoration Specialists</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-center">
                            <span>Monmouth & Ocean County, NJ</span>
                            <span className="hidden sm:inline">•</span>
                            <a href="tel:+17326829551" className="hover:text-white transition-colors">(732) 682-9551</a>
                            <span className="hidden sm:inline">•</span>
                            <a href="mailto:domgolda@jerseyboysoftwash.com" className="hover:text-white transition-colors">domgolda@jerseyboysoftwash.com</a>
                        </div>
                    </div>
                    <div className="border-t border-slate-600 mt-8 pt-8 text-center text-sm">
                        © 2026 Jersey Boys Soft Wash. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}