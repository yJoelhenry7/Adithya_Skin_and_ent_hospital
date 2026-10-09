"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { whyUs } from "@/lib/clinic";

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-ink py-28 text-white"
    >
      <div
        aria-hidden
        className="absolute -right-40 -top-40 size-[30rem] rounded-full bg-maroon/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 size-[24rem] rounded-full bg-rose/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose">
            Why Adithya
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Care that feels close to home.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <StaggerItem key={w.title}>
              <div className="border-l border-rose/50 pl-6">
                <span className="font-display text-5xl italic text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {w.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
