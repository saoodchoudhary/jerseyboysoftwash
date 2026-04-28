import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon, title, description, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group"
        >
            <div className="w-14 h-14 bg-[#5A5F6B]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#5A5F6B] transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}