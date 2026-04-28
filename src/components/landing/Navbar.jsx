import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

const services = [
    { label: 'House Washing', href: '#house-washing' },
    { label: 'Roof Cleaning', href: '#roof-cleaning' },
    { label: 'Driveway & Concrete', href: '#driveway' },
    { label: 'Deck & Fence', href: '#deck-fence' },
    { label: 'Paver Sanding & Sealing', href: '#pavers' },
    { label: 'Commercial Cleaning', href: '#commercial' },
];

const locations = [
    'Monmouth County', 'Ocean County'
];

export default function Navbar({ onOpenQuote }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [locationsOpen, setLocationsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
        setServicesOpen(false);
        setLocationsOpen(false);
    };

    const scrollToQuote = () => {
        onOpenQuote();
        setMobileOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2c2f36]/95 backdrop-blur-sm shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        <img
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69922938c9c3fbbd85313d31/8a4566ae8_IMG_1011.jpeg"
                            alt="Jersey Boys Soft Wash"
                            className="h-12 w-auto"
                        />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about'); }} className="text-white/80 hover:text-white text-sm font-medium transition-colors">About Us</a>
                        
                        {/* Services Dropdown */}
                        <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                            <button className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors">
                                Our Services <ChevronDown className="w-4 h-4" />
                            </button>
                            {servicesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                                    {services.map((s) => (
                                        <button key={s.label} onClick={() => scrollTo(s.href)} className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                            {s.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Locations Dropdown */}
                        <div className="relative" onMouseEnter={() => setLocationsOpen(true)} onMouseLeave={() => setLocationsOpen(false)}>
                            <button className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors">
                                Locations <ChevronDown className="w-4 h-4" />
                            </button>
                            {locationsOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                                    {locations.map((loc) => (
                                        <div key={loc} className="px-4 py-2.5 text-sm text-slate-700">{loc}</div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('#faq'); }} className="text-white/80 hover:text-white text-sm font-medium transition-colors">FAQ</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }} className="text-white/80 hover:text-white text-sm font-medium transition-colors">Contact Us</a>
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a href="tel:+17326829551" className="flex items-center gap-2 text-[#E8A524] text-sm font-medium hover:text-[#d4951f] transition-colors">
                            <Phone className="w-4 h-4" /> (732) 682-9551
                        </a>
                        <Button onClick={scrollToQuote} className="bg-[#E8A524] hover:bg-[#d4951f] text-white font-semibold px-5">
                            Get a Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-[#2c2f36]/98 backdrop-blur-sm border-t border-white/10">
                    <div className="px-4 py-6 space-y-4">
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about'); }} className="block text-white/80 py-2 text-sm font-medium">About Us</a>
                        <div>
                            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Our Services</p>
                            {services.map((s) => (
                                <button key={s.label} onClick={() => scrollTo(s.href)} className="block w-full text-left text-white/80 py-2 text-sm pl-3">
                                    {s.label}
                                </button>
                            ))}
                        </div>
                        <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('#faq'); }} className="block text-white/80 py-2 text-sm font-medium">FAQ</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }} className="block text-white/80 py-2 text-sm font-medium">Contact Us</a>
                        <div className="pt-4 flex flex-col gap-3">
                            <a href="tel:+17326829551" className="flex items-center gap-2 text-[#E8A524] font-medium">
                                <Phone className="w-4 h-4" /> (732) 682-9551
                            </a>
                            <Button onClick={scrollToQuote} className="bg-[#E8A524] hover:bg-[#d4951f] text-white font-semibold w-full">
                                Get a Quote
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}