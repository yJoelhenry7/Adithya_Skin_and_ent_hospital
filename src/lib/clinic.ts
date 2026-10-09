export const clinic = {
  name: "Adithya Skin & ENT Hospital",
  shortName: "Adithya",
  tagline: "Skin, hair, laser and ENT care in the heart of Ravulapalem.",
  hours: {
    days: "Monday – Sunday",
    time: "9:00 AM – 8:00 PM",
    label: "Open every day, 9:00 AM – 8:00 PM",
  },
  address: {
    lines: [
      "2nd Floor, Opposite RK Residency",
      "Above Punjab National Bank, Market Road",
      "Ravulapalem, Andhra Pradesh 533238",
    ],
    full: "Adithya Skin & ENT Hospital, 2nd Floor, Opposite RK Residency, Above Punjab National Bank, Market Road, Ravulapalem, Andhra Pradesh 533238",
  },
  phones: [
    { display: "+91 79979 48666", tel: "+917997948666" },
    { display: "+91 84888 20603", tel: "+918488820603" },
  ],
  whatsapp: {
    number: "917997948666",
    message:
      "Hello Adithya Skin & ENT Hospital, I'd like to book an appointment.",
  },
} as const;

export const whatsappUrl = (message: string = clinic.whatsapp.message) =>
  `https://wa.me/${clinic.whatsapp.number}?text=${encodeURIComponent(message)}`;

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  clinic.address.full,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  clinic.address.full,
)}&output=embed`;

export type ServiceIcon =
  | "sparkles"
  | "droplets"
  | "scissors"
  | "zap"
  | "ear"
  | "baby";

export const services: {
  title: string;
  description: string;
  icon: ServiceIcon;
}[] = [
  {
    title: "Dermatology",
    description:
      "Expert diagnosis and treatment for acne, eczema, pigmentation, infections and chronic skin conditions.",
    icon: "sparkles",
  },
  {
    title: "Skin Care",
    description:
      "Personalised routines and clinical treatments for clearer, healthier, more radiant skin.",
    icon: "droplets",
  },
  {
    title: "Hair Treatments",
    description:
      "Trichology-led care for hair fall, thinning, dandruff and scalp disorders.",
    icon: "scissors",
  },
  {
    title: "Lasers & Aesthetics",
    description:
      "Advanced laser procedures and aesthetic treatments performed by a trained aesthetic physician.",
    icon: "zap",
  },
  {
    title: "Ear Wax Cleaning",
    description:
      "Safe, gentle and hygienic ear wax removal with proper examination.",
    icon: "ear",
  },
  {
    title: "Pediatric ENT Care",
    description:
      "Child-friendly ear, nose and throat care for your little ones.",
    icon: "baby",
  },
];

export const doctor = {
  name: "Dr. Y. Supriya",
  qualifications: "M.B.B.S., MD (DVL)",
  title: "Consultant Dermatologist, Trichologist and Aesthetic Physician",
  specialisation: "Specialised in Lasers and Aesthetics",
  affiliation: "Under IADVL",
  affiliationFull:
    "Indian Association of Dermatologists, Venereologists and Leprologists",
} as const;

export const whyUs = [
  {
    title: "Skin and ENT under one roof",
    description: "One visit, one familiar place for the whole family.",
  },
  {
    title: "Laser and aesthetic expertise",
    description: "Modern procedures guided by an MD-qualified specialist.",
  },
  {
    title: "Open all seven days",
    description: "9:00 AM to 8:00 PM, Monday through Sunday.",
  },
  {
    title: "Right in Ravulapalem",
    description: "Market Road, opposite RK Residency. Easy to find, easy to reach.",
  },
];

export const faqs = [
  {
    q: "What are your clinic timings?",
    a: "We are open every day, Monday to Sunday, from 9:00 AM to 8:00 PM.",
  },
  {
    q: "How can I book an appointment?",
    a: "Tap the Book on WhatsApp button, or call us on +91 79979 48666 or +91 84888 20603. Our team will confirm a convenient slot.",
  },
  {
    q: "Where is the hospital located?",
    a: "We are on the 2nd Floor, opposite RK Residency and above Punjab National Bank, Market Road, Ravulapalem.",
  },
  {
    q: "Which skin and hair concerns do you treat?",
    a: "We treat acne, pigmentation, eczema, skin infections, hair fall, dandruff and scalp conditions, and offer laser and aesthetic treatments.",
  },
  {
    q: "Do you treat children for ear, nose and throat problems?",
    a: "Yes. We provide pediatric ENT care and safe ear wax cleaning in a child-friendly environment.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Please bring any previous prescriptions, reports and a list of medicines or products you are currently using.",
  },
];
