import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { galleryItems } from '../data/siteData';

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Gallery" title="A dark, polished visual shelf for eyewear photos." align="center">
          Sample images are placed in a gallery system designed for real store photography, campaign drops, and new
          collection updates.
        </SectionHeader>

        <div className="mt-14 grid auto-rows-[270px] gap-5 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-frame-graphite ${item.span}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-frame-black/[0.88] via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-frame-black/60 p-4 backdrop-blur-xl">
                <figcaption className="font-display text-lg font-bold text-white">{item.title}</figcaption>
                <span className="rounded-full bg-frame-yellow p-3 text-frame-black">
                  <Camera className="h-5 w-5" />
                </span>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
