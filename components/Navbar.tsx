"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = ["Issues", "Articles", "Contributors", "About"];

export default function Navbar() {
  return (
    <header className="border-b editorial-border">
      <div className="container-editorial">
        <div className="flex items-center justify-between py-6 gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-font text-lg md:text-2xl leading-tight font-[400] tracking-[-0.01em]">
              Cordastra
              <br />
              Literary
            </h1>
          </motion.div>

          {/* Nav links */}
          <nav className="hidden md:block md:ml-16">
            <ul className="flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] font-medium">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="
                      relative
                      group
                      py-2
                      transition-opacity
                      duration-300
                      hover:opacity-70
                    "
                  >
                    {link}
                    <span
                      className="
                        absolute
                        left-0
                        bottom-0
                        h-[1px]
                        w-0
                        bg-black
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              className="
                editorial-accent
                px-5
                py-2
                text-[10px]
                uppercase
                tracking-[0.25em]
              "
            >
              Submit
            </button>
            <button
              className="
                border
                editorial-border
                px-5
                py-2
                text-[10px]
                uppercase
                tracking-[0.25em]
                hover:bg-black
                hover:text-white
                transition-all
              "
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}