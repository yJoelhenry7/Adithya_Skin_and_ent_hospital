import { Clock, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { clinic, mapsSearchUrl } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo className="h-16 sm:h-20" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            {clinic.tagline}
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-rose" />
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="leading-relaxed hover:text-white"
            >
              {clinic.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
          </div>
          <div className="flex gap-3">
            <Clock className="mt-0.5 size-4 shrink-0 text-rose" />
            <p>
              {clinic.hours.days}
              <span className="block">{clinic.hours.time}</span>
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-sm">
          <Phone className="mt-0.5 size-4 shrink-0 text-rose" />
          <div className="space-y-1">
            {clinic.phones.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="block hover:text-white"
              >
                {p.display}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        &copy; {clinic.name}. All rights reserved.
      </div>
    </footer>
  );
}
