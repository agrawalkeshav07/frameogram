import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import CTAButton from './CTAButton';
import { productCategories } from '../data/siteData';
import { productInquiryMessage, whatsappUrl } from '../utils/whatsapp';

export default function Products() {
  return (
    <section id="products" className="relative py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Collections" title="Eyewear categories with a premium FRAMEOGRAM edge." align="center">
          Explore the core collection pillars. Each category is ready for easy image and content updates when your real
          product photos are available.
        </SectionHeader>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((product, index) => (
            <motion.article
              key={product.title}
              className="group neon-border overflow-hidden rounded-3xl bg-frame-graphite/70"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.title} sample eyewear`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-frame-black via-transparent to-transparent" />
                <div className="absolute right-4 top-4 rounded-full border border-frame-yellow/30 bg-frame-yellow/10 p-3 text-frame-yellow backdrop-blur">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-black text-white">{product.title}</h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-white/[0.66]">{product.description}</p>
                <CTAButton
                  href={whatsappUrl(productInquiryMessage(product.title))}
                  icon={MessageCircle}
                  variant="outline"
                  className="mt-5 w-full"
                >
                  Ask on WhatsApp
                </CTAButton>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
