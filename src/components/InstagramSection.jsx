import { Instagram, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import SectionHeader from './SectionHeader';
import { business, instagramReasons } from '../data/siteData';

export default function InstagramSection() {
  return (
    <section id="instagram" className="relative py-24">
      <div className="section-shell">
        <motion.div
          className="glass-panel neon-border grid gap-10 rounded-3xl p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader eyebrow="Instagram" title={`Follow us on Instagram: ${business.instagramHandle}`}>
            Watch FRAMEOGRAM for fresh drops, styling ideas, offers, and eyewear trends curated for a sharper everyday
            look.
          </SectionHeader>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {instagramReasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <Sparkles className="h-5 w-5 text-frame-yellow" />
                  <span className="font-semibold text-white/80">{reason}</span>
                </div>
              ))}
            </div>
            <CTAButton href={business.instagramUrl} icon={Instagram} className="mt-7">
              Open Instagram
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
