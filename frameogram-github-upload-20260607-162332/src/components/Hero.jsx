import { CalendarCheck, Eye, Instagram, MessageCircle, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingElements from './FloatingElements';
import CTAButton from './CTAButton';
import { business } from '../data/siteData';
import { generalInquiryMessage, whatsappUrl } from '../utils/whatsapp';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <FloatingElements />
      <div className="section-shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <img
            src="/assets/frameogram-logo.svg"
            alt="FRAMEOGRAM logo"
            className="mb-8 w-72 rounded-2xl border border-frame-yellow/20 shadow-softGlow sm:w-96"
          />
          <p className="mb-5 inline-flex rounded-full border border-frame-yellow/30 bg-frame-yellow/10 px-4 py-2 text-sm font-bold text-frame-yellow">
            Premium Optical Store in Sambalpur
          </p>
          <h1 className="font-display text-5xl font-black leading-none text-white sm:text-6xl lg:text-8xl">
            FRAMEOGRAM
          </h1>
          <p className="mt-5 text-2xl font-semibold text-frame-yellow sm:text-3xl">{business.tagline}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.72] sm:text-lg">
            Stylish eyewear, precise vision comfort, and confident optical fashion crafted for people who want their
            frames to feel as sharp as they look.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <CTAButton icon={ShoppingBag} onClick={() => scrollTo('products')}>
              View Collection
            </CTAButton>
            <CTAButton icon={MessageCircle} href={whatsappUrl(generalInquiryMessage)} variant="outline">
              WhatsApp Inquiry
            </CTAButton>
            <CTAButton icon={CalendarCheck} onClick={() => scrollTo('appointment')} variant="ghost">
              Book Appointment
            </CTAButton>
            <CTAButton icon={Instagram} href={business.instagramUrl} variant="ghost">
              Follow on Instagram
            </CTAButton>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[420px] lg:min-h-[620px]"
          initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          <motion.div
            className="absolute inset-x-0 top-10 mx-auto h-[340px] w-[340px] rounded-full border border-frame-yellow/20 sm:h-[450px] sm:w-[450px] lg:h-[540px] lg:w-[540px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-x-6 top-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-softGlow"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/assets/spectacles.png"
              alt="Premium black spectacles sample"
              className="product-image-mask h-[330px] w-full object-cover sm:h-[430px] lg:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-frame-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-frame-yellow">Optical fashion</p>
                <p className="mt-1 text-2xl font-black text-white">Frames with presence</p>
              </div>
              <div className="hidden rounded-full border border-frame-yellow/30 bg-frame-yellow/10 p-4 text-frame-yellow sm:block">
                <Eye className="h-7 w-7" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-0 rounded-2xl border border-frame-yellow/25 bg-frame-black/70 p-5 shadow-glow backdrop-blur-xl"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          >
            <p className="text-sm text-white/[0.58]">Open daily</p>
            <p className="mt-1 font-bold text-frame-yellow">{business.hours}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
