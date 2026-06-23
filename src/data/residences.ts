// Każda rezydencja SAPPHIRE jako jeden obiekt danych.
// Żeby dodać kolejną rezydencję w przyszłości — dopisz nowy obiekt do tej tablicy,
// nie trzeba dotykać żadnego komponentu .astro.

export type ResidenceStatus = "live" | "coming-soon";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Residence {
  slug: string;
  status: ResidenceStatus;
  name: string;
  location: string;
  tagline: string;
  paragraphs: string[];
  amenities: string[];
  image?: string; // zdjęcie na karcie na stronie głównej
  imageAlt?: string;
  gallery?: GalleryImage[]; // dodatkowe zdjęcia na podstronie /rezydencje/[slug]
  ctaLabel: string;
}

export const residences: Residence[] = [
  {
    slug: "adhara",
    status: "live",
    name: "ADHARA",
    location: "Torre del Mar",
    tagline: "Quiet Mediterranean Living.",
    paragraphs: [
      "Położona zaledwie kilka kroków od Morza Śródziemnego rezydencja Adhara została stworzona dla osób poszukujących spokoju, światła i bliskości natury.",
      "Przestronny prywatny taras pozwala celebrować rytm andaluzyjskiego wybrzeża od wschodu do zachodu słońca.",
    ],
    amenities: [
      "Bezpośrednia bliskość plaży",
      "Prywatny parking",
      "Przestronny taras",
      "Spokojna lokalizacja",
      "Szybki internet światłowodowy",
      "Idealna przestrzeń do dłuższych pobytów",
    ],
    image: "/assets/adhara-living-kitchen.webp",
    imageAlt: "Otwarta przestrzeń kuchenno-dzienna w rezydencji Adhara",
    gallery: [
      { src: "/assets/adhara-living-kitchen.webp", alt: "Otwarta przestrzeń kuchenno-dzienna w rezydencji Adhara" },
      { src: "/assets/adhara-terrace-wine.webp", alt: "Taras Adhara z widokiem na basen, kieliszkami wina i powitalną kartą SAPPHIRE" },
      { src: "/assets/adhara-bedroom.webp", alt: "Sypialnia rezydencji Adhara z sygnaturową pościelą SAPPHIRE" },
      { src: "/assets/adhara-terrace-photo.png", alt: "Taras przy śródziemnomorskiej plaży w Torre del Mar" },
    ],
    ctaLabel: "Poznaj Adharę",
  },
  {
    slug: "urban-sky",
    status: "live",
    name: "URBAN SKY",
    location: "Málaga",
    tagline: "Above Málaga. Beyond ordinary.",
    paragraphs: [
      "Na 28. piętrze nowoczesnej wieży Urban Sky Malaga rozpościera się u Twoich stóp.",
      "Panoramiczne widoki na port, góry oraz dachy miasta tworzą wyjątkową przestrzeń dla osób ceniących energię nowoczesnego lifestyle'u.",
    ],
    amenities: [
      "Panoramiczny widok na Malagę",
      "Basen rooftop 360°",
      "Całodobowa recepcja",
      "Strefy co-workingowe",
      "Nowoczesna architektura premium",
      "Doskonała lokalizacja w centrum miasta",
    ],
    image: "/assets/gallery-urban-sky/urban-sky-pool-rooftop-1.webp",
    imageAlt: "Widok z drona na basen na dachu URBAN SKY z panoramą Málagi i portu",
    gallery: [
      { src: "/assets/gallery-urban-sky/urban-sky-pool-rooftop-1.webp", alt: "Widok z drona na basen na dachu URBAN SKY z panoramą Málagi i portu" },
      { src: "/assets/gallery-urban-sky/urban-sky-jacuzzi-1.webp", alt: "Jacuzzi na dachu z widokiem na stare miasto i zamek" },
      { src: "/assets/gallery-urban-sky/urban-sky-pool-sunset-1.webp", alt: "Basen o zachodzie słońca z palmą" },
      { src: "/assets/gallery-urban-sky/urban-sky-pool-loungers-1.webp", alt: "Leżaki i strefa relaksu przy basenie na dachu" },
      { src: "/assets/gallery-urban-sky/urban-sky-pool-blue-1.webp", alt: "Basen z bliska, spokojny kadr" },
    ],
    ctaLabel: "Poznaj Urban Sky",
  },
  {
    slug: "vega",
    status: "coming-soon",
    name: "VEGA",
    location: "Marbella",
    tagline: "Effortless Mediterranean elegance.",
    paragraphs: [
      "Rezydencja VEGA powstaje w samym sercu Marbelli — tam, gdzie elegancja wybrzeża spotyka się z energią miasta.",
      "Przestrzeń zaprojektowana dla gości, którzy cenią dyskretny luksus i nieprzypadkowe lokalizacje.",
    ],
    amenities: [],
    image: "/assets/vega-placeholder-bedroom.webp",
    imageAlt: "Zdjęcie tymczasowe — sypialnia w stylu, jaki będzie reprezentował VEGA",
    ctaLabel: "Dołącz do listy prywatnej",
  },
  {
    slug: "lumare",
    status: "coming-soon",
    name: "LUMARE",
    location: "Nerja",
    tagline: "Where the cliffs meet the light.",
    paragraphs: [
      "LUMARE powstaje na klifach Nerji, z widokiem na Morze Śródziemne rozciągającym się aż po horyzont.",
      "Dramatyczne wybrzeże i złote światło zachodu słońca — rezydencja stworzona dla wyjątkowych chwil.",
    ],
    amenities: [],
    image: "/assets/lumare-placeholder-sunset.webp",
    imageAlt: "Zdjęcie tymczasowe — zachód słońca nad morzem z palmami",
    ctaLabel: "Dołącz do listy prywatnej",
  },
];
