"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featuredArticles } from "@/lib/data";

export default function FeaturedArticles() {
  return (
    <section className="py-28">
      <div className="container-editorial">
        {/* Heading */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-xs editorial-muted mb-4">
            Explore
          </p>

          <h2 className="heading-font text-5xl md:text-6xl">
            Featured Articles
          </h2>

          <p className="editorial-muted mt-4 max-w-xl">
            Essays, interviews, photography, and stories curated from our
            latest issue.
          </p>
        </div>

        {/* Articles */}
        <div className="grid lg:grid-cols-2 gap-10">
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="
                group
                cursor-pointer
                border-b
                editorial-border
                pb-8
              "
            >
              <div className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-6">
                {/* Image */}
                <div className="overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={400}
                    className="
                      h-[140px]
                      md:h-[180px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <p
                    className="
                      uppercase
                      tracking-[0.25em]
                      text-xs
                      editorial-muted
                    "
                  >
                    {article.category}
                  </p>

                  <h3
                    className="
                      heading-font
                      text-2xl
                      md:text-3xl
                      mt-3
                      group-hover:translate-x-1
                      transition-all
                      duration-300
                    "
                  >
                    {article.title}
                  </h3>

                  <p className="editorial-muted mt-4 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer dignissim, massa vel luctus convallis, augue sem
                    vulputate velit.
                  </p>

                  <button
                    className="
                      mt-5
                      w-fit
                      text-sm
                      uppercase
                      tracking-[0.15em]
                    "
                  >
                    Read Article →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}