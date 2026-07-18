"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CarouselItem = {
  id: string | number;
  title: string;
  image: string;
  category: string;
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

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-x-6
            gap-y-10
          "
        >
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[4/3] max-w-[85%] mx-auto sm:mx-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
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
              <p className="mt-3 text-xs uppercase tracking-[0.2em] editorial-muted">
                {item.category}
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.15em]">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <button
            aria-label={`See more ${label}`}
            className="
              border
              editorial-border
              p-3
              hover:bg-black
              hover:text-white
              transition-all
            "
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}