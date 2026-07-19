"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = ["Issues", "Articles", "About"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b editorial-border relative">
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

          {/* Nav links - desktop */}
          <nav className="hidden md:block ml-auto mr-10">
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

          {/* CTAs - desktop */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
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

          {/* Hamburger - mobile only */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden relative w-8 h-8 shrink-0"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-1/2 w-8 h-[1.5px] bg-black origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-1/2 w-8 h-[1.5px] bg-black"
            />
            <motion.span
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-1/2 w-8 h-[1.5px] bg-black origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t editorial-border"
          >
            <nav className="container-editorial py-10">
              <ul className="space-y-6">
                {links.map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                  >
                    <Link
                      href="#"
                      onClick={() => setOpen(false)}
                      className="heading-font text-3xl"
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: links.length * 0.06 }}
                className="flex flex-col gap-3 mt-10"
              >
                <button className="editorial-accent px-5 py-3 text-[11px] uppercase tracking-[0.25em]">
                  Submit
                </button>
                <button className="border editorial-border px-5 py-3 text-[11px] uppercase tracking-[0.25em]">
                  Join Us
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}