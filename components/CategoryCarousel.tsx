"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CarouselItem = {
  id: string | number;
  title: string;
  image: string;
  author: string;
};

export default function CategoryCarousel({
  label,
  items,
}: {
  label: string;
  items: CarouselItem[];
}) {
  return (
    <section className="py-16 border-t editorial-border">
      <div className="container-editorial">
        <h3 className="heading-font text-3xl md:text-4xl mb-8">{label}</h3>

        {/* Mobile: full-width stacked feed */}
        <div className="md:hidden space-y-10">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={450}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>
              <p className="heading-font text-xl mt-4">{item.title}</p>
              <p className="editorial-muted text-sm mt-1">by {item.author}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: wrapping grid, tighter spacing */}
        <div className="hidden md:grid grid-cols-3 gap-x-3 gap-y-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={533}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>
              <p className="heading-font text-base mt-3 pr-2 leading-snug">
                {item.title}
              </p>
              <p className="editorial-muted text-xs mt-1">by {item.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}