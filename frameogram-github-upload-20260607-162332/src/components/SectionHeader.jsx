import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, children, align = 'left' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-4 inline-flex items-center gap-3 rounded-full border border-frame-yellow/25 bg-frame-yellow/10 px-4 py-2 text-sm font-semibold text-frame-yellow">
        <span className="h-2 w-2 rounded-full bg-frame-yellow shadow-glow" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-black text-frame-white sm:text-4xl lg:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">{children}</p>}
    </motion.div>
  );
}
