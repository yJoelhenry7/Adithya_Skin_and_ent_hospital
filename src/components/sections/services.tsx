"use client";

import {
  Baby,
  Droplets,
  Ear,
  Scissors,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { services, type ServiceIcon } from "@/lib/clinic";

const icons: Record<ServiceIcon, LucideIcon> = {
  sparkles: Sparkles,
  droplets: Droplets,
  scissors: Scissors,
  zap: Zap,
  ear: Ear,
  baby: Baby,
};

export function Services() {
  return (
    <section id="services" className="relative bg-white py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose">
            What we treat
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Complete care for skin, hair and ears.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-x-12 gap-y-0 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group flex items-start gap-5 border-t border-border py-8"
                >
                  <span className="relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-blush text-maroon transition-colors duration-300 group-hover:bg-maroon group-hover:text-white">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm italic text-rose">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-ink">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
