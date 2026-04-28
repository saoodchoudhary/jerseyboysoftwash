import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Sparkles, Clock, Search, Leaf, Star, Users } from 'lucide-react';

const reasons = [
    {
        icon: Search,
        title: 'No Spot Left Behind',
        description: "We tackle the corners, crevices, and hard-to-reach areas that ordinary washers walk right past. Every inch gets our full attention."
    },
    {
        icon: Leaf,
        title: 'Plant & Lawn Protection',
        description: "We pre-wet and carefully guard your plants, grass, and landscaping throughout every job. Your yard stays green and healthy — always."
    },
    {
        icon: Star,
        title: 'Exceeding Expectations',
        description: "Good enough isn't good enough for us. We set the bar high and push past it on every project, leaving results that genuinely blow you away."
    },
    {
        icon: Users,
        title: 'Small Team, Personal Care',
        description: "We're not a big faceless company. Every home gets our personal attention and pride — because your property matters to us."
    },
    {
        icon: Shield,
        title: 'Fully Insured & Transparent',
        description: "No hidden fees, no surprises. You know exactly what you're paying for, and you're covered by full insurance every step of the way."
    },
    {
        icon: Sparkles,
        title: 'Final Walkthrough Guarantee',
        description: "Before we pack up, we walk the entire job with you. We don't leave until you're 100% satisfied with the results."
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why Choose Jersey Boys</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        We take pride in our work and treat every property as if it were our own. From the first rinse to the final walkthrough — we deliver results you'll love.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="flex gap-4"
                        >
                            <div className="w-12 h-12 bg-[#E8A524]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <item.icon className="w-6 h-6 text-[#E8A524]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}