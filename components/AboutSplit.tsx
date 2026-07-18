"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const menuItems = [
  {
    label: "Quick Reads",
    description:
      "Short-form pieces built for a five minute read - flash fiction, micro-essays, and pocket poems.",
  },
  {
    label: "In the Spotlight",
    description:
      "Contributors and work we're highlighting this season, chosen by the editorial team.",
  },
  {
    label: "Discover Authors",
    description:
      "Meet the voices behind the issue - interviews, bios, and their full body of work.",
  },
];

export default function AboutSplit() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-b editorial-border">
      <div className="grid md:grid-cols-2">
        {/* Sliding menu */}
        <div className="py-20 px-6 md:px-16">
          <ul className="space-y-8">
            {menuItems.map((item, i) => (
              <li key={item.label} className="relative pl-6">
                {active === i && (
                  <motion.span
                    layoutId="aboutSplitIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[3px] bg-black"
                  />
                )}
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="text-left w-full"
                >
                  <span
                    className={`
                      heading-font
                      text-3xl
                      md:text-4xl
                      transition-opacity
                      duration-300
                      ${active === i ? "opacity-100" : "opacity-40"}
                    `}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* About panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-black text-white py-20 px-6 md:px-16 flex flex-col justify-center"
        >
          <p className="uppercase tracking-[0.3em] text-xs opacity-60 mb-4">
            A little about the magazine
          </p>
          <h3 className="heading-font text-2xl md:text-3xl mb-4">
            {menuItems[active].label}
          </h3>
          <p className="opacity-80 leading-relaxed max-w-md">
            {menuItems[active].description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}