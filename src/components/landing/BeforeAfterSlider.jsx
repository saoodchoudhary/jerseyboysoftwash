import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfterSlider() {
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

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-2xl mx-auto"
        >
            <div 
                ref={containerRef}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
            >
                {/* After Image (Background) */}
                <div className="absolute inset-0">
                    <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/ab34b7b15_IMG_1175.jpg"
                        alt="After cleaning"
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                    <div className="absolute bottom-4 right-4 bg-[#E8A524] text-white px-3 py-1 rounded-full text-sm font-medium">
                        After
                    </div>
                </div>
                
                {/* Before Image (Overlay with clip) */}
                <div 
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/fcf874821_IMG_1173.jpg"
                        alt="Before cleaning"
                        className="w-full h-full object-cover brightness-90"
                        draggable={false}
                    />
                    <div className="absolute bottom-4 left-4 bg-[#5A5F6B] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Before
                    </div>
                </div>
                
                {/* Slider Handle */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    </div>
                </div>
            </div>
            
            <p className="text-center text-sm text-slate-500 mt-4">
                Drag to compare before & after
            </p>
        </motion.div>
    );
}