import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { business } from '../data/siteData';
import { callUrl, constructionModeReply } from '../utils/whatsapp';

export default function WhatsAppConstructionNotice() {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const showNotice = () => {
      window.clearTimeout(timerRef.current);
      setVisible(true);
      timerRef.current = window.setTimeout(() => setVisible(false), 6500);
    };

    window.addEventListener('frameogram:whatsapp-construction-notice', showNotice);

    return () => {
      window.clearTimeout(timerRef.current);
      window.removeEventListener('frameogram:whatsapp-construction-notice', showNotice);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-5 left-1/2 z-[90] w-[min(calc(100%-24px),520px)] -translate-x-1/2 rounded-3xl border border-frame-yellow/35 bg-frame-black/90 p-4 shadow-glow backdrop-blur-xl sm:bottom-7 sm:p-5"
          initial={{ opacity: 0, y: 22, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 22, scale: 0.96 }}
          role="status"
        >
          <div className="flex gap-4">
            <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-frame-yellow text-frame-black shadow-glow">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-black text-white">{business.name}</p>
              <p className="mt-1 text-sm leading-6 text-white/72">{constructionModeReply}</p>
              <a
                href={callUrl}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-frame-yellow/30 bg-frame-yellow/10 px-4 py-2 text-sm font-bold text-frame-yellow transition hover:bg-frame-yellow hover:text-frame-black"
              >
                <Phone className="h-4 w-4" />
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
