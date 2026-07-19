"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = ["Issues", "Articles", "About"];

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4l16 16M20 4L4 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
        <path
          d="M11 17v-4.5c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M11 10v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:hello@cordastraliterary.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your actual newsletter provider
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white">
      <div className="container-editorial py-20">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr_1.4fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-font text-3xl leading-tight">
              Cordastra
              <br />
              Literary
            </h2>
            <p className="opacity-60 text-sm mt-4 max-w-xs leading-relaxed">
              A quarterly magazine of literature, essays, poetry, and culture.
            </p>
          </motion.div>

          {/* Links */}
          <div>
            <p className="uppercase tracking-[0.25em] text-xs opacity-50 mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm uppercase tracking-[0.15em] opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#"
                  className="text-sm uppercase tracking-[0.15em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  Submit
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm uppercase tracking-[0.15em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="uppercase tracking-[0.25em] text-xs opacity-50 mb-5">
              Stay in touch
            </p>
            <p className="opacity-70 text-sm mb-5 max-w-sm leading-relaxed">
              New issues, open calls, and the odd editor's note - straight to
              your inbox.
            </p>

            {submitted ? (
              <p className="text-sm opacity-80">
                You're on the list - thank you.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex border-b border-white/30">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="
                    bg-transparent
                    py-3
                    flex-1
                    text-sm
                    outline-none
                    placeholder:opacity-40
                  "
                />
                <button
                  type="submit"
                  className="text-sm uppercase tracking-[0.15em] px-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  Subscribe →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="
            mt-16
            pt-8
            border-t
            border-white/10
            flex
            flex-col-reverse
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Cordastra Literary. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}