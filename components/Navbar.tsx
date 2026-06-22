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
    <header className="pt-8">
      <div className="container-editorial">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            heading-font
            text-center
            text-6xl
            md:text-8xl
            lg:text-[9rem]
            leading-none
          "
        >
          cordastra literary
        </motion.h1>

        <div className="mt-8 border-b editorial-border pb-5">
          <nav>
            <ul className="flex items-center justify-between text-sm md:text-base">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="group relative"
                  >
                    {link}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-1
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

        <div className="flex justify-center mt-5">
          <div className="editorial-accent px-8 py-2 text-sm tracking-wide">
            multimedia magazine for the indulgent
          </div>
        </div>
      </div>
    </header>
  );
}