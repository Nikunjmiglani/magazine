"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// Swap these for your real spread images - first one is the cover, gets shown larger
const spreads = ["/issue2.png", "/issue1.webp", "/issue1.webp", "/issue1.webp"];

export default function IssueShowcase() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="py-24 bg-neutral-800 text-white border-t border-white/10">
      <div className="container-editorial">
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-4
            md:grid-cols-[1.6fr_1fr_1fr_1fr_72px]
            gap-4
            items-stretch
          "
        >
          {spreads.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden aspect-[3/4]"
            >
              <Image
                src={src}
                alt="Issue spread"
                width={400}
                height={550}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </motion.div>
          ))}

          <button
            aria-label="See more spreads"
            className="
              hidden
              md:flex
              items-center
              justify-center
              self-center
              border
              border-white/40
              p-3
              hover:bg-white
              hover:text-black
              transition-all
            "
          >
            →
          </button>
        </div>

        <div className="mt-10">
          <h3 className="heading-font text-4xl md:text-5xl">Latest Issue</h3>
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mt-4 text-sm uppercase tracking-[0.15em] flex items-center gap-2"
          >
            {expanded ? "−" : "+"} Description
          </button>
          {expanded && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="opacity-70 mt-4 max-w-xl leading-relaxed"
            >
              Lotus Eater Vol. II is inspired by classical mythology,
              exploring beauty, longing, memory, and the quiet spaces
              between movement and stillness.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}