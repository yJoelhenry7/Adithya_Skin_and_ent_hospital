import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const siteDescription =
  "Adithya Skin & ENT Hospital in Ravulapalem offers dermatology, skin care, hair treatments, laser and aesthetics, ear wax cleaning and pediatric ENT care. Open daily 9 AM to 8 PM.";

export const metadata: Metadata = {
  metadataBase: new URL("https://adithyaskinent.example"),
  title: {
    default: "Adithya Skin & ENT Hospital | Dermatology, Lasers & ENT in Ravulapalem",
    template: "%s | Adithya Skin & ENT Hospital",
  },
  description: siteDescription,
  keywords: [
    "dermatologist Ravulapalem",
    "skin hospital Ravulapalem",
    "ENT Ravulapalem",
    "laser treatment",
    "hair fall treatment",
    "Dr Y Supriya",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Adithya Skin & ENT Hospital, Ravulapalem",
    description: siteDescription,
    type: "website",
    locale: "en_IN",
    siteName: "Adithya Skin & ENT Hospital",
    images: [{ url: "/logo.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#9e1b2e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(dmSans.variable, fraunces.variable, "h-full antialiased scroll-smooth")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
