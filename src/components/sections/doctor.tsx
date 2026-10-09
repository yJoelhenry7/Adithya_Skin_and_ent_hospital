"use client";

import { Award, BadgeCheck, Sparkles, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { WhatsAppButton } from "@/components/cta-buttons";
import { doctor } from "@/lib/clinic";

function DoctorSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      role="img"
      aria-label="Doctor illustration"
    >
      <path
        d="M34 52c0-18 11-30 26-30s26 12 26 30v34c0 6-5 10-11 8l-6-2H51l-6 2c-6 2-11-2-11-8V52Z"
        fill="currentColor"
      />
      <ellipse cx="60" cy="50" rx="15" ry="18" fill="#f7f4f1" />
      <path
        d="M22 118c0-20 16-32 38-32s38 12 38 32v2H22v-2Z"
        fill="currentColor"
      />
      <path d="M48 88l12 20 12-20" fill="#f7f4f1" />
      <path
        d="M44 90c0 14 6 18 12 18M76 90c0 14-6 18-12 18"
        stroke="#f7f4f1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="60" cy="110" r="4" fill="#f7f4f1" />
    </svg>
  );
}

export function Doctor() {
  return (
    <section
      id="doctor"
      className="relative overflow-hidden bg-blush py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="relative mx-auto w-full max-w-md">
          <motion.div
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2rem] border-2 border-rose/50 bg-white p-8 shadow-[0_30px_80px_-30px] shadow-maroon/30"
          >
            <div className="flex items-center gap-6">
              <DoctorSilhouette className="size-28 shrink-0 text-maroon" />
              <div className="text-center">
                <p className="font-display text-3xl font-semibold text-ink">
                  {doctor.name}
                </p>
                <p className="mt-1 text-sm font-medium text-ink/70">
                  {doctor.qualifications}
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-5 text-center text-sm leading-relaxed text-ink/80">
              <p>{doctor.title}</p>
              <p className="mt-2 font-semibold text-maroon">{doctor.specialisation}</p>
              <p className="mt-1 font-semibold text-ink">{doctor.affiliation}</p>
            </div>
          </motion.div>
          <div
            aria-hidden
            className="absolute -bottom-6 -right-6 -z-10 size-40 rounded-full bg-rose/20 blur-2xl"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose">
            Meet our specialist
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            {doctor.name}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/65">
            {doctor.title}, bringing specialist expertise in lasers and
            aesthetics to every patient in Ravulapalem.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                icon: Award,
                text: `${doctor.qualifications} in Dermatology, Venereology and Leprosy`,
              },
              {
                icon: Stethoscope,
                text: "Consultant Dermatologist and Trichologist",
              },
              { icon: Sparkles, text: doctor.specialisation },
              {
                icon: BadgeCheck,
                text: `${doctor.affiliation} (${doctor.affiliationFull})`,
              },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4 text-ink">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-maroon text-white">
                  <Icon className="size-4" />
                </span>
                <span className="pt-1.5 leading-snug text-ink/85">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <WhatsAppButton
              label="Book a consultation"
              message="Hello, I'd like to book a consultation with Dr. Y. Supriya."
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
