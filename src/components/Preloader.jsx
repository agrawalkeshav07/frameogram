import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-frame-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
    >
      <motion.div
        className="flex w-[min(78vw,420px)] flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
      >
        <img src="/assets/frameogram-logo.svg" alt="FRAMEOGRAM" className="w-full rounded-2xl shadow-softGlow" />
        <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
          <span className="absolute inset-y-0 left-0 w-1/2 bg-frame-yellow shadow-glow animate-sweep" />
        </div>
      </motion.div>
    </motion.div>
  );
}
