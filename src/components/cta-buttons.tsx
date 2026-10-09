"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { clinic, whatsappUrl } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const base =
  "h-12 rounded-full px-6 text-base font-semibold gap-2 no-underline";

export function WhatsAppButton({
  className,
  label = "Book on WhatsApp",
  message,
  variant = "default",
}: {
  className?: string;
  label?: string;
  message?: string;
  variant?: "default" | "outline";
}) {
  return (
    <motion.a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(buttonVariants({ variant }), base, className)}
    >
      <MessageCircle className="size-5" />
      {label}
    </motion.a>
  );
}

export function CallButton({
  className,
  label = "Call now",
  phone = clinic.phones[0],
  variant = "outline",
}: {
  className?: string;
  label?: string;
  phone?: { display: string; tel: string };
  variant?: "default" | "outline";
}) {
  return (
    <motion.a
      href={`tel:${phone.tel}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(buttonVariants({ variant }), base, className)}
    >
      <Phone className="size-5" />
      {label}
    </motion.a>
  );
}
