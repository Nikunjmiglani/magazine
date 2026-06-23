"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  "Issues",
  "Articles",
  "Multimedia",
  "Contributors",
  "About",
];

export default function Navbar() {
  return (
    <header className="pt-16">
      <div className="container-editorial">
        {/* Logo */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         <h1
  className="
    heading-font
    text-center
    text-6xl
    md:text-8xl
    lg:text-[9.5rem]
    leading-none
    font-[300]
    tracking-[-0.02em]
  "
>
  Cordastra Literary
</h1>

         
        </motion.div>

        {/* Tagline */}

        <div className="flex justify-center mt-8">
          <div
            className="
              editorial-accent
              px-6
              py-2
              text-[11px]
              uppercase
              tracking-[0.3em]
            "
          >
            Literature • Essays • Poetry • Culture
          </div>
        </div>

        {/* Navigation */}

        <div
          className="
            mt-12
            border-b
            editorial-border
            pb-8
          "
        >
          <nav>
            <ul
              className="
                flex
                items-center
                justify-between
                text-[11px]
                md:text-xs
                uppercase
                tracking-[0.22em]
                font-medium
              "
            >
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
        </div>
      </div>
    </header>
  );
}