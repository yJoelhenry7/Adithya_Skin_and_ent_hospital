import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <a
      href="#top"
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/10",
        className,
      )}
      aria-label="Adithya Skin & ENT Hospital"
    >
      <Image
        src="/logo.png"
        alt="Adithya Skin & ENT Hospital"
        width={720}
        height={240}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </a>
  );
}
