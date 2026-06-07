import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CursorMagnifier() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { stiffness: 230, damping: 32, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 230, damping: 32, mass: 0.35 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    setEnabled(finePointer.matches);

    const handleMove = (event) => {
      x.set(event.clientX - 78);
      y.set(event.clientY - 78);
    };

    if (finePointer.matches) {
      window.addEventListener('mousemove', handleMove, { passive: true });
    }

    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return <motion.div className="cursor-magnifier" style={{ x: smoothX, y: smoothY }} aria-hidden="true" />;
}
