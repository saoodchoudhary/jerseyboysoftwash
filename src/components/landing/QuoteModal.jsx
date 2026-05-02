import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';


export default function QuoteModal({ isOpen, onClose }) {
    useEffect(() => {
        if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://link.msgsndr.com/js/form_embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);


    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);


    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Blurred backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col"
                        style={{ maxHeight: '85vh', height: 'auto' }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-slate-100 flex-shrink-0">
                            <h3 className="text-lg font-semibold text-slate-900">Get Your Free Quote</h3>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                            >
                                <X className="w-4 h-4 text-slate-600" />
                            </button>
                        </div>

                        {/* Scrollable form area */}
                        <div className="overflow-y-auto flex-1 p-4">
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/form/2Pg72GWSTVr4YrihjGkX"
                                style={{ width: '100%', height: '560px', border: 'none', display: 'block' }}
                                id="inline-2Pg72GWSTVr4YrihjGkX"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Website Form 4-26"
                                data-height="560"
                                data-layout-iframe-id="inline-2Pg72GWSTVr4YrihjGkX"
                                data-form-id="2Pg72GWSTVr4YrihjGkX"
                                title="Website Form 4-26"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}