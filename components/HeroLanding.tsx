"use client";

import { motion } from "framer-motion";

export default function HeroLanding() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Illustration background - swap the bg-image path for your own asset, or delete this div */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.06]
          bg-[url('/hero-illustration.svg')]
          bg-center
          bg-cover
        "
      />

      <div className="container-editorial text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="heading-font text-3xl md:text-5xl leading-tight max-w-3xl mx-auto"
        >
          Every story is a lotus that opens in its own season.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="editorial-muted uppercase tracking-[0.3em] text-xs mt-6"
        >
          Cordastra Literary Magazine
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="flex flex-col items-center gap-3 mt-20"
      >
        <span className="uppercase tracking-[0.3em] text-xs editorial-muted">
          Discover More
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4 8L10 14L16 8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>
    </section>
  );
}