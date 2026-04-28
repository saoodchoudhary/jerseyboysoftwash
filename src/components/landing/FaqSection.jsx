import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: "What is soft washing and how is it different from pressure washing?",
        a: "Soft washing uses low-pressure water combined with professional-grade cleaning solutions to safely remove dirt, algae, mold, and mildew. Unlike pressure washing, it won't damage siding, shingles, or painted surfaces."
    },
    {
        q: "Will the cleaning solutions harm my plants or lawn?",
        a: "Absolutely not. We take extra precautions to pre-wet all surrounding plants, grass, and landscaping before we begin and rinse them thoroughly afterward. Protecting your flora is a top priority on every job."
    },
    {
        q: "How long does a typical job take?",
        a: "Most residential jobs take between 2–5 hours depending on the size of the property and services requested. We'll give you a more specific estimate when we provide your free quote."
    },
    {
        q: "Do you do a walkthrough when the job is finished?",
        a: "Yes — always. Before we leave, we walk the entire property with you to make sure you're 100% satisfied. We don't consider a job done until you're happy."
    },
    {
        q: "Are you insured?",
        a: "Yes. Jersey Boys Soft Wash is fully insured. You're protected throughout every job."
    },
    {
        q: "What areas do you serve?",
        a: "We primarily serve Monmouth County and Ocean County, NJ. Contact us if you're unsure whether we cover your area."
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-20 lg:py-28 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
                    <p className="text-slate-500 text-lg">Everything you need to know before booking.</p>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="font-semibold text-slate-900 text-sm pr-4">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-[#E8A524] flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}