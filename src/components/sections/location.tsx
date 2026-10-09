"use client";

import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CallButton, WhatsAppButton } from "@/components/cta-buttons";
import { buttonVariants } from "@/components/ui/button";
import { clinic, mapsEmbedUrl, mapsSearchUrl } from "@/lib/clinic";
import { cn } from "@/lib/utils";

export function Location() {
  return (
    <section id="location" className="bg-white py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose">
            Visit us
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Find us in Ravulapalem.
          </h2>

          <div className="mt-10 space-y-7">
            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blush text-maroon">
                <MapPin className="size-5" />
              </span>
              <address className="not-italic leading-relaxed text-ink">
                <span className="block font-semibold">{clinic.name}</span>
                {clinic.address.lines.map((l) => (
                  <span key={l} className="block text-ink/65">
                    {l}
                  </span>
                ))}
              </address>
            </div>

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blush text-maroon">
                <Clock className="size-5" />
              </span>
              <p className="leading-relaxed text-ink">
                <span className="block font-semibold">{clinic.hours.days}</span>
                <span className="text-ink/65">{clinic.hours.time}</span>
              </p>
            </div>

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blush text-maroon">
                <Phone className="size-5" />
              </span>
              <div className="space-y-1 text-ink">
                {clinic.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="block font-semibold hover:text-rose"
                  >
                    {p.display}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <WhatsAppButton />
            <CallButton className="border-ink/15 bg-white text-ink hover:bg-blush hover:text-ink" />
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "h-12 gap-2 rounded-full px-5 text-base font-semibold text-ink hover:bg-blush hover:text-ink",
              )}
            >
              <Navigation className="size-5" />
              Directions
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="min-h-96">
          <div className="relative h-full min-h-96 overflow-hidden rounded-[2rem] border-2 border-border shadow-[0_30px_80px_-35px] shadow-ink/25">
            <iframe
              title="Adithya Skin & ENT Hospital location map"
              src={mapsEmbedUrl}
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
