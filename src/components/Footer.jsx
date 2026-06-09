import { Instagram, MapPin, Phone } from 'lucide-react';
import { business } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-frame-black py-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <img src="/assets/frameogram-logo.png" alt="FRAMEOGRAM logo" className="w-64 rounded-2xl shadow-softGlow" />
          <p className="mt-4 text-xl font-semibold text-frame-yellow">{business.tagline}</p>
        </div>
        <div className="grid gap-4 text-sm text-white/[0.66] sm:grid-cols-3">
          <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-frame-yellow">
            <Instagram className="h-5 w-5 text-frame-yellow" />
            {business.instagramHandle}
          </a>
          <a href={`tel:+${business.whatsappNumber}`} className="flex items-center gap-3 transition hover:text-frame-yellow">
            <Phone className="h-5 w-5 text-frame-yellow" />
            {business.phoneDisplay}
          </a>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-frame-yellow">
            <MapPin className="h-5 w-5 text-frame-yellow" />
            Sambalpur
          </a>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-white/10 pt-6 text-sm text-white/[0.48]">
        © 2026 FRAMEOGRAM. All Rights Reserved.
      </div>
    </footer>
  );
}
