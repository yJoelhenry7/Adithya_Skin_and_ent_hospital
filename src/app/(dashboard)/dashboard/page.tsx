import type { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

// Placeholder for the upcoming hospital dashboard (auth, appointments, patients).
export default function DashboardPage() {
  return (
    <main className="flex min-h-svh flex-1 flex-col items-center justify-center gap-5 bg-blush px-5 text-center">
      <span className="flex size-16 items-center justify-center rounded-2xl bg-maroon text-white">
        <LayoutDashboard className="size-7" />
      </span>
      <h1 className="font-display text-4xl font-semibold text-ink">
        {clinic.name} Dashboard
      </h1>
      <p className="max-w-md text-ink/65">
        Appointments, patients and clinic management are coming soon.
      </p>
      <Link href="/" className="font-semibold text-maroon underline underline-offset-4">
        Back to website
      </Link>
    </main>
  );
}
