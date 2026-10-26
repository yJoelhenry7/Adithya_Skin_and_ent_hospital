"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/cta-buttons";
import { clinic } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 4800;

const slides = [
  {
    letter: "E",
    word: "Ear",
    detail:
      "Safe wax cleaning and gentle care when hearing feels muffled or an ear feels blocked.",
    image: "/hero/ear.jpg",
    alt: "A doctor examining a patient's ear",
    position: "object-[72%_center]",
  },
  {
    letter: "N",
    word: "Nose",
    detail:
      "Attention for congestion, sinus pressure and the strain of breathing through a blocked nose.",
    image: "/hero/nose.jpg",
    alt: "Close profile of a person's nose",
    position: "object-[center_52%]",
  },
  {
    letter: "T",
    word: "Throat",
    detail:
      "Care for sore throats, voice strain and tonsil discomfort, for adults and children.",
    image: "/hero/throat.jpg",
    alt: "A doctor examining a patient's throat",
    position: "object-[center_35%]",
  },
] as const;

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
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    if (reduce) return;
    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, reduce]);

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
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 pb-24 pt-28 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:pt-32">
        <div className="lg:order-1">
        <motion.p
          {...item(0)}
          className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink/55"
        >
          <MapPin className="size-3.5 text-rose" />
          Ravulapalem, Andhra Pradesh
        </motion.p>

        <motion.div {...item(1)}>
          <h1 className="sr-only">Ear, nose and throat care in Ravulapalem</h1>

          <div
            className="relative min-h-[15.5rem]"
            aria-roledescription="carousel"
            aria-label="Ear, nose and throat"
          >
            <p className="sr-only" aria-live="polite">
              {slide.word}. {slide.detail}
            </p>

            {slides.map((entry, i) => {
              const active = i === index;
              return (
                <motion.div
                  key={entry.letter}
                  className={cn(
                    active ? "relative" : "pointer-events-none absolute inset-0",
                  )}
                  initial={false}
                  animate={{ opacity: active ? 1 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.7, ease }}
                  aria-hidden={!active}
                >
                  <div className="flex items-end gap-3 sm:gap-6">
                    <p
                      aria-hidden
                      className="overflow-hidden font-display text-[clamp(5.25rem,16vw,8.5rem)] font-semibold leading-[0.82] tracking-tight text-ink"
                    >
                      {entry.letter}
                    </p>
                    <p className="mb-1 font-display text-[clamp(2rem,5vw,3.6rem)] font-light italic leading-none text-rose sm:mb-3">
                      {entry.word}
                    </p>
                  </div>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/65">
                    {entry.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div
            className="mt-6 flex items-center gap-5"
            role="tablist"
            aria-label="Choose a specialty"
          >
            {slides.map((entry, i) => {
              const active = i === index;
              return (
                <button
                  key={entry.letter}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={entry.word}
                  onClick={() => setIndex(i)}
                  className="group flex items-center gap-3"
                >
                  <span
                    className={cn(
                      "font-display text-xl font-semibold transition-colors",
                      active ? "text-rose" : "text-ink/30 group-hover:text-ink/70",
                    )}
                  >
                    {entry.letter}
                  </span>
                  <span className="relative h-px w-12 overflow-hidden bg-ink/15 sm:w-16">
                    {active && !reduce ? (
                      <motion.span
                        key={index}
                        className="absolute inset-y-0 left-0 w-full origin-left bg-rose"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                      />
                    ) : (
                      <span
                        className={cn(
                          "absolute inset-y-0 left-0 w-full origin-left",
                          active ? "scale-x-100 bg-rose" : "scale-x-0",
                        )}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.p
          {...item(2)}
          className="mt-6 max-w-md text-lg leading-relaxed text-ink/65"
        >
          {clinic.tagline} Open every day, {clinic.hours.time}.
        </motion.p>

        <motion.div {...item(3)} className="mt-6 flex flex-wrap gap-3">
          <WhatsAppButton />
          <CallButton
            variant="outline"
            className="border-ink/20 bg-white text-ink hover:bg-secondary hover:text-ink"
          />
        </motion.div>
        </div>

        <motion.div
          {...item(1)}
          className="relative order-first h-48 overflow-hidden rounded-[1.75rem] bg-secondary shadow-[0_24px_70px_-36px_rgba(17,17,17,0.55)] sm:h-64 lg:order-2 lg:h-[34rem]"
        >
          {slides.map((entry, i) => {
            const active = i === index;
            return (
              <motion.div
                key={entry.letter}
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: active ? 1 : 0, scale: active || reduce ? 1 : 1.05 }}
                transition={{ duration: reduce ? 0 : 0.7, ease }}
              >
                <Image
                  src={entry.image}
                  alt={active ? entry.alt : ""}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className={cn("object-cover", entry.position)}
                />
              </motion.div>
            );
          })}
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
