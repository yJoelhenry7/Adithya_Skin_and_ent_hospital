"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/cta-buttons";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#doctor", label: "Doctor" },
  { href: "#why-us", label: "Why Us" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-white/85 py-2.5 backdrop-blur-xl"
          : "bg-transparent py-4",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5">
        <Logo priority className="h-12 sm:h-14" />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <WhatsAppButton
            label="Book"
            className="hidden h-10 px-5 text-sm sm:inline-flex"
          />
          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "size-10 rounded-full border-border bg-white text-ink md:hidden",
              )}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-6">
              <SheetTitle className="font-display text-xl text-ink">
                Menu
              </SheetTitle>
              <nav className="mt-4 flex flex-col gap-1" aria-label="Mobile">
                {links.map((l) => (
                  <SheetClose
                    key={l.href}
                    render={
                      <a
                        href={l.href}
                        className="rounded-xl px-3 py-3 text-lg font-medium text-ink transition-colors hover:bg-blush"
                      />
                    }
                  >
                    {l.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto">
                <WhatsAppButton className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
