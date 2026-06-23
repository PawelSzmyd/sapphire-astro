// Każda rezydencja SAPPHIRE jako jeden obiekt danych.
// Żeby dodać kolejną rezydencję w przyszłości — dopisz nowy obiekt do tej tablicy,
// nie trzeba dotykać żadnego komponentu .astro.

export type ResidenceStatus = "live" | "coming-soon";

export interface Residence {
  slug: string;
  status: ResidenceStatus;
  name: string;
  location: string;
  tagline: string;
  paragraphs: string[];
  amenities: string[];
  image?: string; // tylko dla "live" — ścieżka w /public/assets
  imageAlt?: string;
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
    image: "/assets/adhara-terrace-wine.webp",
    imageAlt: "Taras Adhara z widokiem na basen, kieliszkami wina i powitalną kartą SAPPHIRE",
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
    ctaLabel: "Dołącz do listy prywatnej",
  },
];
