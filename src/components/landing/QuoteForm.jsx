import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';

export default function QuoteForm() {
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsExpanded(true); },
            { threshold: 0.3 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://link.msgsndr.com/js/form_embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div ref={containerRef} className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden w-full">
            <AnimatePresence initial={false}>
                {!isExpanded ? (
                    <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-6 text-center"
                    >
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Get a Free Quote</h3>
                        <p className="text-slate-500 text-sm mb-5">No obligation — takes less than a minute.</p>
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="w-full h-13 py-3 px-6 bg-[#E8A524] hover:bg-[#d4951f] text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors text-base shadow"
                        >
                            <Send className="w-4 h-4" /> Request My Free Quote
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/form/2Pg72GWSTVr4YrihjGkX"
                            style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
                            id="inline-2Pg72GWSTVr4YrihjGkX"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="Website Form 4-26"
                            data-height="600"
                            data-layout-iframe-id="inline-2Pg72GWSTVr4YrihjGkX"
                            data-form-id="2Pg72GWSTVr4YrihjGkX"
                            title="Website Form 4-26"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}