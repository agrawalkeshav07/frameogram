import { motion } from 'framer-motion';

const baseClasses =
  'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-frame-black sm:px-6';

export default function CTAButton({ href, children, icon: Icon, variant = 'primary', onClick, type = 'button', className = '' }) {
  const styles =
    variant === 'primary'
      ? 'bg-frame-yellow text-frame-black shadow-glow hover:bg-white'
      : variant === 'ghost'
        ? 'border border-white/[0.15] bg-white/[0.07] text-white hover:border-frame-yellow/60 hover:bg-frame-yellow/10 hover:text-frame-yellow'
        : 'border border-frame-yellow/[0.35] bg-frame-yellow/10 text-frame-yellow hover:bg-frame-yellow hover:text-frame-black';

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4 transition group-hover:scale-110" strokeWidth={2.3} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className={`${baseClasses} ${styles} ${className}`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${styles} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}
