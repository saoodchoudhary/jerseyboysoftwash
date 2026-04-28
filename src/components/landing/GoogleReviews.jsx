import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ExternalLink, X } from 'lucide-react';

const reviews = [
    {
        name: "Michael Marks",
        rating: 5,
        text: "I recently hired Dom from Jersey Boys Soft Wash to clean my home's delicate cedar siding, and I couldn't be more impressed with the results. He handled the job with exceptional care, using their soft wash technique to gently remove dirt and grime without causing any damage. The siding looks refreshed and vibrant, truly bringing out its natural beauty in a way I didn't think was possible. Five stars all the way!",
        avatar: "M"
    },
    {
        name: "Elaine Brophy",
        rating: 5,
        text: "I hired the Jersey Boys to power wash my house and paver patio. They were efficient, professional and took great care in moving my patio furniture. My house and patio look fantastic!! The Jersey Boys were reasonably priced for the work that they performed and were a pleasure to work with. I would definitely hire them again. They did a great job!",
        avatar: "E"
    },
    {
        name: "Gayle Koepping",
        rating: 5,
        text: "Dom did a fantastic job power washing both my side walk and home siding. So good, we hired him once again to do the backyard patio! Couldn't recommend him more. Wonderful marketing as he continued to beautify my neighbor and extended families' homes!!! Hire him without a doubt.",
        avatar: "G"
    },
    {
        name: "Nancy Farrell",
        rating: 5,
        text: "I used jersey boys this summer. Could not have worked harder for us. Took their time and excellent work. Would give them the highest recommendation. Siding, sidewalk, patio all done very well. Plus reasonably priced. Real pleasure to work with two hard working guys.",
        avatar: "N"
    },
    {
        name: "Kathleen Kurth",
        rating: 5,
        text: "Jersey Boys were great work with on time and professional - would highly recommend them to anyone looking for power washing.",
        avatar: "K"
    },
    {
        name: "Joseph Auci",
        rating: 5,
        text: "Dominic from Jersey Boys soft wash did a fantastic job on the exterior of my house was able to get everything clean and looking brand new. From our first conversation to get a price to the job being finished, he did everything he said he would do and in just a few hours the house look new again.",
        avatar: "J"
    },
];

export default function GoogleReviews() {
    const [selected, setSelected] = useState(null);

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
                    <span className="text-slate-600 font-medium">Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#E8A524] text-[#E8A524]" />
                        ))}
                    </div>
                    <span className="font-bold text-slate-900">5.0</span>
                </div>
                <a href="https://www.google.com/search?q=Jersey+Boys+Soft+Wash" target="_blank" rel="noopener noreferrer" className="text-[#E8A524] hover:underline flex items-center gap-1 text-sm font-medium">
                    View all on Google <ExternalLink className="w-3 h-3" />
                </a>
            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelected(review)}
                        className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 cursor-pointer hover:shadow-md hover:border-slate-200 transition-all duration-200"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-[#5A5F6B] flex items-center justify-center text-white font-medium flex-shrink-0">
                                {review.avatar}
                            </div>
                            <p className="font-medium text-slate-900">{review.name}</p>
                        </div>
                        <div className="flex mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-[#E8A524] text-[#E8A524]" />
                            ))}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">"{review.text}"</p>
                        <p className="text-xs text-[#E8A524] font-medium mt-2">Read more →</p>
                    </motion.div>
                ))}
            </div>

            {/* Full Review Modal */}
            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelected(null)} />
                        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 z-10">
                            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
                                <X className="w-4 h-4 text-slate-600" />
                            </button>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-[#5A5F6B] flex items-center justify-center text-white font-semibold text-lg">
                                    {selected.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">{selected.name}</p>
                                    <div className="flex mt-0.5">
                                        {[...Array(selected.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-[#E8A524] text-[#E8A524]" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-700 leading-relaxed">"{selected.text}"</p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}