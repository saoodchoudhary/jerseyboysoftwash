import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function ContactSection({ onOpenQuote }) {
    return (
        <section id="contact" className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Get In Touch</h2>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">Ready to get started? Reach out for a free quote or give us a call — we'd love to hear from you.</p>
                </motion.div>


                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-[#E8A524]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-[#E8A524]" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Call or Text Us</p>
                                <a href="tel:+17326829551" className="text-[#E8A524] text-lg font-medium hover:underline">(732) 682-9551</a>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-[#E8A524]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-[#E8A524]" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Email Us</p>
                                <a href="mailto:domgolda@jerseyboysoftwash.com" className="text-slate-600 hover:text-slate-900 transition-colors">domgolda@jerseyboysoftwash.com</a>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-[#E8A524]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-[#E8A524]" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Service Area</p>
                                <p className="text-slate-600">Monmouth County & Ocean County, NJ</p>
                            </div>
                        </div>
                    </motion.div>


                    {/* Quote CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 rounded-2xl p-10 text-center border border-slate-100"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Get Your Free Quote</h3>
                        <p className="text-slate-500 mb-6">No obligation. Fast response. Transparent pricing.</p>
                        <Button onClick={onOpenQuote} className="h-13 px-8 py-3 bg-[#E8A524] hover:bg-[#d4951f] text-white font-semibold text-base shadow-md w-full">
                            <Send className="w-4 h-4 mr-2" /> Request My Free Quote
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}