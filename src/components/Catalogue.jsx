import { MessageCircle, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import SectionHeader from './SectionHeader';
import CTAButton from './CTAButton';
import { catalogueProducts } from '../data/siteData';
import { productInquiryMessage, whatsappUrl } from '../utils/whatsapp';

const categories = ['All', 'Spectacles', 'Sunglasses', 'Computer Glasses', 'Kids Frames'];

export default function Catalogue() {
  const [active, setActive] = useState('All');
  const filteredProducts = useMemo(
    () => (active === 'All' ? catalogueProducts : catalogueProducts.filter((product) => product.category === active)),
    [active],
  );

  return (
    <section id="catalogue" className="relative py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader eyebrow="Online Catalogue" title="Browse sample pieces, then inquire instantly.">
            The catalogue is intentionally data-driven. Update the array later with your real product photos, names,
            prices, and categories without changing the layout.
          </SectionHeader>
          <div className="flex gap-2 overflow-x-auto pb-2 lg:justify-end hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-3 text-sm font-bold transition ${
                  active === category
                    ? 'border-frame-yellow bg-frame-yellow text-frame-black shadow-glow'
                    : 'border-white/10 bg-white/[0.07] text-white/[0.72] hover:border-frame-yellow/40 hover:text-frame-yellow'
                }`}
                onClick={() => setActive(category)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <motion.article
              layout
              key={product.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] transition hover:border-frame-yellow/40 hover:shadow-glow"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} sample`}
                  onError={(event) => {
                    const fallback = product.fallbackImage || '/assets/spectacles.png';
                    if (event.currentTarget.src.endsWith(fallback)) return;
                    event.currentTarget.src = fallback;
                  }}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-frame-black/[0.88] via-frame-black/[0.18] to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-frame-yellow/30 bg-frame-black/60 px-3 py-2 text-xs font-bold text-frame-yellow backdrop-blur">
                  {product.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-black text-white">{product.name}</h3>
                <p className="mt-2 font-semibold text-frame-yellow">{product.price}</p>
                <CTAButton
                  href={whatsappUrl(productInquiryMessage(product.name))}
                  icon={MessageCircle}
                  variant="ghost"
                  className="mt-5 w-full"
                >
                  Inquire Now
                </CTAButton>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
