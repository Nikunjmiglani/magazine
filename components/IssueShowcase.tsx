"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// Swap these for your real spread images - first one is the cover, gets shown larger
const spreads = ["/issue2.png", "/issue1.webp", "/issue1.webp", "/issue1.webp"];
const [cover, ...smalls] = spreads;

export default function IssueShowcase() {
  const [expanded, setExpanded] = useState(true);

  const textBlock = (
    <>
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
          Lotus Eater Vol. II is inspired by classical mythology, exploring
          beauty, longing, memory, and the quiet spaces between movement and
          stillness.
        </motion.p>
      )}
    </>
  );

  return (
    <section className="py-24 bg-neutral-800 text-white border-t border-white/10">
      <div className="container-editorial">
        {/* Mobile: simple stacked fallback */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden aspect-[3/4] mb-4"
          >
            <Image
              src={cover}
              alt="Issue cover"
              width={400}
              height={550}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-3 gap-3 mb-10">
            {smalls.map((src, i) => (
              <div key={i} className="overflow-hidden aspect-[3/4]">
                <Image
                  src={src}
                  alt="Issue spread"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div>{textBlock}</div>
        </div>

        {/* Desktop: big image left (spans both rows), 3 small + arrow top right, text bottom right */}
        <div
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr 72px",
            gridTemplateAreas: `"big s1 s2 s3 arrow" "big text text text ."`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ gridArea: "big" }}
            className="overflow-hidden"
          >
            <Image
              src={cover}
              alt="Issue cover"
              width={500}
              height={700}
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

          {smalls.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ gridArea: `s${i + 1}` }}
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
            style={{ gridArea: "arrow" }}
            className="
              flex
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

          <div style={{ gridArea: "text" }} className="mt-6">
            {textBlock}
          </div>
        </div>
      </div>
    </section>
  );
}