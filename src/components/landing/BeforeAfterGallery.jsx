import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryItems = [
    {
        before: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/fcf874821_IMG_1173.jpg",
        after: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/ab34b7b15_IMG_1175.jpg",
        title: "House Washing"
    },
    {
        before: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/581086617_IMG_0285.jpg",
        after: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/adab8039f_IMG_0290.jpg",
        title: "Paver Cleaning"
    },
    {
        before: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/eef842430_IMG_0224.jpg",
        after: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/189040787_IMG_0230.jpg",
        title: "Front Steps"
    },
    {
        before: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/821287077_IMG_0007.jpg",
        after: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/636831fe6_IMG_0089.jpg",
        title: "Brick Walkway"
    }
];

export default function BeforeAfterGallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);
    const goNext = () => setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
    const goPrev = () => setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => openLightbox(index)}
                        className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                    >
                        <img 
                            src={item.after} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-3 left-3 right-3">
                                <p className="text-white font-medium text-sm">{item.title}</p>
                                <p className="text-white/70 text-xs">Click to compare</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button 
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        
                        <button 
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            className="absolute left-4 text-white/70 hover:text-white p-2"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>
                        
                        <button 
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            className="absolute right-4 text-white/70 hover:text-white p-2"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>

                        <div 
                            className="max-w-5xl w-full grid md:grid-cols-2 gap-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <img 
                                    src={galleryItems[selectedIndex].before}
                                    alt="Before"
                                    className="w-full h-auto rounded-lg"
                                />
                                <div className="absolute bottom-4 left-4 bg-[#5A5F6B] text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Before
                                </div>
                            </div>
                            <div className="relative">
                                <img 
                                    src={galleryItems[selectedIndex].after}
                                    alt="After"
                                    className="w-full h-auto rounded-lg"
                                />
                                <div className="absolute bottom-4 right-4 bg-[#E8A524] text-white px-3 py-1 rounded-full text-sm font-medium">
                                    After
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute bottom-8 text-white text-center">
                            <p className="text-lg font-medium">{galleryItems[selectedIndex].title}</p>
                            <p className="text-white/60 text-sm">{selectedIndex + 1} of {galleryItems.length}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}