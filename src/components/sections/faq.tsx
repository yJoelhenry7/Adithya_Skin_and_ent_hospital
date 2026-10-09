"use client";

import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CallButton, WhatsAppButton } from "@/components/cta-buttons";
import { faqs } from "@/lib/clinic";

export function Faq() {
  return (
    <section id="faq" className="bg-blush py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose">
            Questions
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Good to know before you visit.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <WhatsAppButton label="Ask on WhatsApp" />
            <CallButton className="border-ink/15 bg-white text-ink hover:bg-white hover:text-ink" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Accordion className="rounded-3xl border border-border bg-white px-6 shadow-sm">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="py-5 text-base font-semibold text-ink">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
