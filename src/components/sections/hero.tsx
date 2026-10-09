"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/cta-buttons";
import { clinic } from "@/lib/clinic";

const ease = [0.22, 1, 0.36, 1] as const;

function Orb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, delay, ease }}
    />
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 36 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: 0.25 + i * 0.14, ease },
  });

  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-blush"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c4233a22,_transparent_55%),radial-gradient(ellipse_at_bottom_left,_#11111110,_transparent_50%)]" />
        <Orb
          delay={0.1}
          className="absolute -right-32 -top-24 size-[34rem] animate-float rounded-full bg-rose/15 blur-3xl"
        />
        <Orb
          delay={0.3}
          className="absolute -bottom-40 -left-24 size-[30rem] animate-float rounded-full bg-maroon/10 blur-3xl [animation-delay:-3s]"
        />
        <svg
          className="absolute inset-0 size-full opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" className="text-ink" />
        </svg>
        <motion.div
          className="absolute right-[6%] top-1/2 hidden size-[34rem] -translate-y-1/2 lg:block"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-ink/10" />
          <div className="absolute inset-12 rounded-full border border-dashed border-rose/40" />
          <div className="absolute inset-28 rounded-full border border-ink/8" />
          <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose" />
          <span className="absolute bottom-12 right-12 size-2.5 rounded-full bg-ink" />
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-32">
        <motion.p
          {...item(0)}
          className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink/55"
        >
          <MapPin className="size-3.5 text-rose" />
          Ravulapalem, Andhra Pradesh
        </motion.p>

        <motion.h1
          {...item(1)}
          className="font-display text-[clamp(3.6rem,13vw,10.5rem)] font-semibold leading-[0.88] tracking-tight text-ink"
        >
          ADITHYA
        </motion.h1>

        <motion.p
          {...item(2)}
          className="mt-3 font-display text-[clamp(1.4rem,4vw,3rem)] font-light italic text-ink/85"
        >
          Skin <span className="text-rose">&amp;</span> ENT Hospital
        </motion.p>

        <motion.p
          {...item(3)}
          className="mt-8 max-w-md text-lg leading-relaxed text-ink/65"
        >
          {clinic.tagline} Open every day, {clinic.hours.time}.
        </motion.p>

        <motion.div {...item(4)} className="mt-10 flex flex-wrap gap-3">
          <WhatsAppButton />
          <CallButton
            variant="outline"
            className="border-ink/20 bg-white text-ink hover:bg-secondary hover:text-ink"
          />
        </motion.div>
      </div>

      <motion.a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-ink/40"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-6" />
      </motion.a>
    </section>
  );
}
