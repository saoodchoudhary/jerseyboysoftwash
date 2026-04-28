import React, { useState, useRef } from 'react';
import { X, Phone, Send, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

function BeforeAfterSlider({ before, after }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    return (
        <div className="relative">
            <div
                ref={containerRef}
                className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={(e) => isDragging && handleMove(e.clientX)}
                onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
            >
                <div className="absolute inset-0">
                    <img src={after} alt="After" className="w-full h-full object-cover" draggable={false} />
                    <div className="absolute bottom-4 right-4 bg-[#E8A524] text-white px-3 py-1 rounded-full text-sm font-semibold">After</div>
                </div>
                <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                    <img src={before} alt="Before" className="w-full h-full object-cover brightness-90" draggable={false} />
                    <div className="absolute bottom-4 left-4 bg-[#5A5F6B] text-white px-3 py-1 rounded-full text-sm font-semibold">Before</div>
                </div>
                <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    </div>
                </div>
            </div>
            <p className="text-center text-sm text-slate-500 mt-3">Drag to compare before & after</p>
        </div>
    );
}

export default function ServiceModal({ service, onClose }) {
    const scrollToQuote = () => {
        onClose();
        setTimeout(() => {
            const el = document.getElementById('quote');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10"
                >
                    {/* Header Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                        <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute inset-0 flex items-end p-6">
                            <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-6">
                        {/* Before/After Slider */}
                        <BeforeAfterSlider before={service.beforeImage} after={service.afterImage} />

                        {/* Description */}
                        <p className="text-slate-600 text-base leading-relaxed">{service.description}</p>

                        {/* Bullets */}
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                            <p className="font-semibold text-slate-900 mb-3">Why homeowners invest in {service.title.toLowerCase()}:</p>
                            <ul className="space-y-2.5">
                                {service.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#E8A524]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-[#E8A524]" />
                                        </div>
                                        <span className="text-slate-700 text-sm">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button onClick={scrollToQuote} className="flex-1 h-12 bg-[#E8A524] hover:bg-[#d4951f] text-white font-semibold">
                                <Send className="w-4 h-4 mr-2" /> Request a Quote
                            </Button>
                            <a
                                href="tel:+17326829551"
                                className="flex-1 h-12 border-2 border-slate-300 text-slate-700 hover:border-slate-400 rounded-md flex items-center justify-center gap-2 font-semibold transition-all"
                            >
                                <Phone className="w-4 h-4" /> (732) 682-9551
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}