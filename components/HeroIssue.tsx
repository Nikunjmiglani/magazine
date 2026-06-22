"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container-editorial">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className="
            heading-font
            text-5xl
            md:text-6xl
            mb-4
          "
          >
            Our Latest Issue
          </h2>

          <p className="editorial-muted text-lg">
            A season of reflection, storytelling, and creation.
          </p>
        </motion.div>

        <div
          className="
          mt-16
          grid
          gap-10
          lg:grid-cols-[320px_1fr_700px]
          items-start
        "
        >
          {/* COVER */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="overflow-hidden">
              <Image
                src="/issue2.png"
                alt="Issue Cover"
                width={400}
                height={550}
                className="
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
              uppercase
              tracking-[0.3em]
              text-xs
              editorial-muted
            "
            >
              Summer 2026
            </p>

            <h3
              className="
              heading-font
              text-5xl
              lg:text-6xl
              mt-4
              mb-6
            "
            >
              Lotus Eater Vol. II
            </h3>

            <p
              className="
              text-lg
              leading-relaxed
              editorial-muted
            "
            >
              Inspired by classical mythology,
              this issue explores beauty,
              longing, memory, and the quiet
              spaces between movement and stillness.
            </p>

            <div className="flex gap-4 mt-10">
              <button
                className="
                border
                px-6
                py-3
                hover:bg-black
                hover:text-white
                transition-all
              "
              >
                Read Issue →
              </button>

              <button
                className="
                border
                px-6
                py-3
                hover:bg-black
                hover:text-white
                transition-all
              "
              >
                Archive →
              </button>
            </div>
          </motion.div>

          {/* FEATURED IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="overflow-hidden">
              <Image
                src="/issue1.webp"
                alt="Editorial"
                width={900}
                height={650}
                className="
                  w-full
                  aspect-[16/10]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}