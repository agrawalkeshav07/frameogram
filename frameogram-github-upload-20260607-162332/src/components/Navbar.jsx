import { Instagram, MapPin, Menu, MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { business, navItems } from '../data/siteData';
import { generalInquiryMessage, whatsappUrl } from '../utils/whatsapp';

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-frame-black/[0.72] backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-4">
        <button className="flex items-center gap-3 text-left" onClick={() => handleNav('home')} aria-label="Go to home">
          <img src="/assets/frameogram-logo.svg" alt="FRAMEOGRAM logo" className="h-11 w-44 rounded-lg object-cover sm:w-52" />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/[0.08] hover:text-frame-yellow"
              onClick={() => handleNav(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.07] p-3 text-white transition hover:border-frame-yellow/50 hover:text-frame-yellow"
            aria-label="Open Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.07] p-3 text-white transition hover:border-frame-yellow/50 hover:text-frame-yellow"
            aria-label="Get directions"
          >
            <MapPin className="h-4 w-4" />
          </a>
          <a
            href={whatsappUrl(generalInquiryMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-frame-yellow px-5 py-3 text-sm font-bold text-frame-black shadow-glow transition hover:bg-white"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          className="rounded-full border border-white/10 bg-white/[0.07] p-3 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-white/10 bg-frame-black/[0.96] px-4 pb-5 pt-2 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
          >
            <div className="mx-auto grid max-w-lg gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="rounded-xl px-4 py-3 text-left font-semibold text-white/[0.78] transition hover:bg-frame-yellow/10 hover:text-frame-yellow"
                  onClick={() => handleNav(item.id)}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={whatsappUrl(generalInquiryMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-frame-yellow px-5 py-3 font-bold text-frame-black"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Inquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
