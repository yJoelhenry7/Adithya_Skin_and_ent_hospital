import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Doctor } from "@/components/sections/doctor";
import { WhyUs } from "@/components/sections/why-us";
import { Location } from "@/components/sections/location";
import { Faq } from "@/components/sections/faq";
import { clinic, doctor } from "@/lib/clinic";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  medicalSpecialty: ["Dermatology", "Otolaryngology"],
  telephone: clinic.phones.map((p) => p.tel),
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "2nd Floor, Opposite RK Residency, Above Punjab National Bank, Market Road",
    addressLocality: "Ravulapalem",
    addressRegion: "Andhra Pradesh",
    postalCode: "533238",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "20:00",
  },
  employee: { "@type": "Physician", name: doctor.name },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Doctor />
      <WhyUs />
      <Location />
      <Faq />
    </>
  );
}
