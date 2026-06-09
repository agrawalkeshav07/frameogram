import { Clock, Instagram, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import SectionHeader from './SectionHeader';
import { business } from '../data/siteData';
import { callUrl, generalInquiryMessage, whatsappUrl } from '../utils/whatsapp';

const details = [
  { icon: MapPin, label: 'Location', value: business.address },
  { icon: Phone, label: 'Contact / WhatsApp', value: business.phoneDisplay },
  { icon: Clock, label: 'Opening Hours', value: business.hours },
  { icon: Instagram, label: 'Instagram', value: business.instagramHandle },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Visit Store" title="Find FRAMEOGRAM in Golbazar, Sambalpur." align="center">
          Call, message, follow, or get directions. Every main action is one tap away.
        </SectionHeader>

        <motion.div
          className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <img src="/assets/frameogram-logo.png" alt="FRAMEOGRAM logo" className="mb-7 w-64 rounded-2xl shadow-softGlow" />
            <h3 className="font-display text-3xl font-black text-white">FRAMEOGRAM</h3>
            <p className="mt-2 text-xl font-semibold text-frame-yellow">{business.tagline}</p>
            <div className="mt-8 grid gap-4">
              {details.map((detail) => (
                <div key={detail.label} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <span className="rounded-full bg-frame-yellow/10 p-3 text-frame-yellow">
                    <detail.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-white/[0.54]">{detail.label}</p>
                    <p className="mt-1 font-semibold text-white">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="neon-border flex min-h-[430px] flex-col justify-end overflow-hidden rounded-3xl bg-frame-graphite p-6 sm:p-8">
            <div className="absolute inset-0 bg-lens-grid lens-grid opacity-[0.16]" />
            <div className="absolute inset-x-10 top-16 h-px bg-gradient-to-r from-transparent via-frame-yellow/60 to-transparent" />
            <div className="relative z-10">
              <p className="mb-4 inline-flex rounded-full border border-frame-yellow/25 bg-frame-yellow/10 px-4 py-2 text-sm font-bold text-frame-yellow">
                Gaity Talkies Road, Golbazar
              </p>
              <h3 className="max-w-xl font-display text-4xl font-black text-white sm:text-5xl">Walk in for frames that fit your face and your day.</h3>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton href={callUrl} icon={Phone}>
                  Call Now
                </CTAButton>
                <CTAButton href={whatsappUrl(generalInquiryMessage)} icon={MessageCircle} variant="outline">
                  WhatsApp
                </CTAButton>
                <CTAButton href={business.instagramUrl} icon={Instagram} variant="ghost">
                  Instagram
                </CTAButton>
                <CTAButton href={business.mapsUrl} icon={Navigation} variant="ghost">
                  Get Directions
                </CTAButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
