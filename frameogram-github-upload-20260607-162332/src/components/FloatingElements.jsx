import { motion } from 'framer-motion';

const pieces = [
  { className: 'left-[6%] top-[18%] h-16 w-32 opacity-35', delay: 0 },
  { className: 'right-[8%] top-[22%] h-20 w-40 opacity-30', delay: 0.7 },
  { className: 'bottom-[18%] left-[12%] h-14 w-28 opacity-25', delay: 1.2 },
  { className: 'bottom-[12%] right-[16%] h-12 w-24 opacity-25', delay: 1.7 },
];

function FrameOutline({ className, delay }) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      initial={{ opacity: 0, y: 20, rotate: -4 }}
      animate={{ opacity: 1, y: [0, -14, 0], rotate: [-4, 3, -4] }}
      transition={{ delay, duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <div className="absolute left-0 top-1/2 h-12 w-12 -translate-y-1/2 rounded-[18px] border border-frame-yellow/[0.55]" />
      <div className="absolute right-0 top-1/2 h-12 w-12 -translate-y-1/2 rounded-[18px] border border-frame-yellow/[0.55]" />
      <div className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 bg-frame-yellow/[0.55]" />
      <div className="absolute left-4 top-0 h-px w-16 -rotate-12 bg-white/20" />
      <div className="absolute right-4 top-0 h-px w-16 rotate-12 bg-white/20" />
    </motion.div>
  );
}

export default function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-lens-grid lens-grid opacity-[0.18]" />
      <motion.div
        className="absolute left-1/2 top-24 h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-frame-yellow/40 to-transparent"
        animate={{ opacity: [0.25, 0.6, 0.25], scaleX: [0.88, 1, 0.88] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {pieces.map((piece) => (
        <FrameOutline key={piece.className} {...piece} />
      ))}
      <motion.div
        className="absolute bottom-28 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
