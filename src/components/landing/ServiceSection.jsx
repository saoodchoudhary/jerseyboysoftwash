import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal';

export default function ServicesGrid({ services }) {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="services" className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Services</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">Click any service to learn more and see before & after results.</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07 }}
                            onClick={() => setSelectedService(service)}
                            className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 bg-white"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.heroImage}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute inset-0 flex items-end p-4">
                                    <span className="text-white font-bold text-lg drop-shadow">{service.title}</span>
                                </div>
                                <div className="absolute top-3 right-3 bg-[#E8A524] text-white text-xs font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Details →
                                </div>
                            </div>

                            {/* Brief Description */}
                            <div className="p-4">
                                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedService && (
                <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
            )}
        </section>
    );
}