import { BadgeCheck, Glasses, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { business } from '../data/siteData';

const values = [
  { icon: Glasses, title: 'Style-first frames', copy: 'Modern silhouettes selected to match daily wear, occasions, and personal expression.' },
  { icon: BadgeCheck, title: 'Trusted comfort', copy: 'A focus on fit, clarity, and dependable quality so every frame feels easy to live with.' },
  { icon: Sparkles, title: 'Premium presence', copy: 'A boutique eyewear experience with bold design, clean guidance, and friendly service.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeader eyebrow="About FRAMEOGRAM" title="Where clear vision meets serious style.">
          FRAMEOGRAM is an optical store built for people who see eyewear as more than a necessity. From clean
          everyday spectacles to expressive sunglasses, computer glasses, and kids frames, the store blends sharp
          optical utility with modern fashion, comfort, and confident service.
        </SectionHeader>

        <motion.div
          className="glass-panel neon-border rounded-3xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center gap-4">
            <img src="/assets/frameogram-logo.svg" alt="FRAMEOGRAM logo" className="h-16 w-56 rounded-xl object-cover" />
            <div className="hidden h-px flex-1 bg-gradient-to-r from-frame-yellow/50 to-transparent sm:block" />
          </div>
          <p className="text-lg leading-8 text-white/[0.74]">
            The experience is premium but approachable: choose frames that fit your face, support your lifestyle, and
            make your look feel complete. Every recommendation is shaped around clear vision, long-wear comfort, quality
            materials, and eyewear that feels current.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <item.icon className="mb-4 h-6 w-6 text-frame-yellow" />
                <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.62]">{item.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-frame-yellow/20 bg-frame-yellow/10 p-4 text-frame-yellow">
            <MapPin className="h-5 w-5 shrink-0" />
            <span className="font-semibold">{business.address}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
