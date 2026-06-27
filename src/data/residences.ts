// Każda rezydencja SAPPHIRE jako jeden obiekt danych.
// Żeby dodać kolejną rezydencję w przyszłości — dopisz nowy obiekt do tej tablicy,
// nie trzeba dotykać żadnego komponentu .astro.

export type ResidenceStatus = "live" | "coming-soon";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string; // krótka etykieta widoczna pod zdjęciem, np. "Salon", "Sypialnia"
}

export interface FaqItem {
  question: string;
  answer: string;
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
  mapQuery?: string; // zapytanie dla Google Maps embed, np. "Torre del Mar, Málaga, Spain"
  areaTitle?: string; // np. "Torre del Mar"
  areaDescription?: string; // krótki opis okolicy
  faq?: FaqItem[];
  bookingUrl?: string; // link do zewnętrznej rezerwacji (np. Booking.com)
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
      { src: "/assets/adhara-living-kitchen.webp", alt: "Otwarta przestrzeń kuchenno-dzienna w rezydencji Adhara", caption: "Salon i kuchnia" },
      { src: "/assets/gallery-adhara/adhara-living-tv.webp", alt: "Salon z telewizorem i wygodną sofą w rezydencji Adhara", caption: "Salon" },
      { src: "/assets/gallery-adhara/adhara-kitchen-bar.webp", alt: "Kuchnia z barem i stołkami w rezydencji Adhara", caption: "Kuchnia" },
      { src: "/assets/gallery-adhara/adhara-kitchen-stools.webp", alt: "Kuchnia — widok na stołki barowe i oświetlenie wiszące", caption: "Kuchnia" },
      { src: "/assets/gallery-adhara/adhara-kitchen-sink.webp", alt: "Zlew i baterie w kuchni rezydencji Adhara", caption: "Kuchnia" },
      { src: "/assets/adhara-bedroom.webp", alt: "Sypialnia rezydencji Adhara z sygnaturową pościelą SAPPHIRE", caption: "Sypialnia" },
      { src: "/assets/gallery-adhara/adhara-bathroom-shower-view.webp", alt: "Łazienka z prysznicem i widokiem na basen przez okno", caption: "Łazienka" },
      { src: "/assets/gallery-adhara/adhara-hallway-plaque.webp", alt: "Korytarz z powitalną tabliczką SAPPHIRE Apartments", caption: "Korytarz" },
      { src: "/assets/gallery-adhara/adhara-balcony-pool-day.webp", alt: "Widok z balkonu na basen w ciągu dnia", caption: "Widok na basen" },
      { src: "/assets/adhara-terrace-wine.webp", alt: "Taras Adhara z widokiem na basen, kieliszkami wina i powitalną kartą SAPPHIRE", caption: "Taras" },
      { src: "/assets/gallery-adhara/adhara-terrace-night.webp", alt: "Taras wieczorem z zadaszeniem i widokiem na okolicę", caption: "Taras wieczorem" },
    ],
    bookingUrl: "https://www.booking.com/hotel/es/residencial-adhara-iii.pl.html",
    ctaLabel: "Poznaj Adharę",
    mapQuery: "Playa de Torre del Mar, Torre del Mar, Málaga, Spain",
    areaTitle: "Torre del Mar",
    areaDescription:
      "Torre del Mar to nadmorskie miasteczko na Costa del Sol, zaledwie kilka minut pieszo od plaży i deptaku spacerowego. W okolicy znajdziesz świeże rybne restauracje, kawiarnie z widokiem na morze oraz codzienny rytm andaluzyjskiego życia — dalej od tłumów Malagi, ale wciąż blisko lotniska (ok. 30 minut jazdy) i atrakcji wybrzeża.",
    faq: [
      {
        question: "Jak wygląda zameldowanie (check-in)?",
        answer: "Korzystamy z systemu samodzielnego zameldowania — dostajesz kod dostępu przed przyjazdem i możesz wejść do apartamentu o dowolnej, wcześniej uzgodnionej godzinie, bez czekania na recepcję.",
      },
      {
        question: "Czy jest parking?",
        answer: "Tak, do apartamentu przypisane jest prywatne miejsce parkingowe.",
      },
      {
        question: "Jak daleko do plaży?",
        answer: "Około 8 minut pieszo do plaży Torre del Mar i nadmorskiego deptaku.",
      },
      {
        question: "Czy apartament nadaje się do pracy zdalnej?",
        answer: "Tak — szybki internet światłowodowy i spokojna okolica sprawiają, że to dobre miejsce na połączenie pracy z wypoczynkiem.",
      },
    ],
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
      { src: "/assets/gallery-urban-sky/urban-sky-towers-render.webp", alt: "Wizualizacja wież URBAN SKY o zachodzie słońca", caption: "Wieże URBAN SKY" },
      { src: "/assets/gallery-urban-sky/urban-sky-pool-rooftop-1.webp", alt: "Widok z drona na basen na dachu URBAN SKY z panoramą Málagi i portu", caption: "Basen na dachu" },
      { src: "/assets/gallery-urban-sky/urban-sky-jacuzzi-1.webp", alt: "Jacuzzi na dachu z widokiem na stare miasto i zamek", caption: "Jacuzzi" },
      { src: "/assets/gallery-urban-sky/urban-sky-pool-sunset-1.webp", alt: "Basen o zachodzie słońca z palmą", caption: "Basen o zachodzie słońca" },
      { src: "/assets/gallery-urban-sky/urban-sky-pool-loungers-1.webp", alt: "Leżaki i strefa relaksu przy basenie na dachu", caption: "Strefa relaksu" },
      { src: "/assets/gallery-urban-sky/urban-sky-pool-blue-1.webp", alt: "Basen z bliska, spokojny kadr", caption: "Basen" },
    ],
    ctaLabel: "Poznaj Urban Sky",
    mapQuery: "Málaga city centre, Málaga, Spain",
    areaTitle: "Málaga",
    areaDescription:
      "Málaga to jedno z najbardziej dynamicznych miast Andaluzji — historyczne centrum, port z promami i statkami wycieczkowymi, plaże oraz scena kulturalna z Muzeum Picassa i Centre Pompidou Málaga w zasięgu krótkiego spacheru. Stąd blisko też na lotnisko oraz w głąb Costa del Sol.",
    faq: [
      {
        question: "Na którym piętrze znajduje się apartament?",
        answer: "Apartament znajduje się na 28. piętrze wieży, z panoramicznym widokiem na miasto, port i góry.",
      },
      {
        question: "Czy jest dostęp do basenu na dachu?",
        answer: "Tak, budynek ma basen rooftop z widokiem 360° na Malagę, dostępny dla gości.",
      },
      {
        question: "Jak daleko do centrum i starówki?",
        answer: "Wieża stoi w bezpośredniej bliskości centrum, większość atrakcji jest w zasięgu spaceru.",
      },
      {
        question: "Czy budynek ma recepcję?",
        answer: "Tak, dostępna jest całodobowa recepcja oraz strefy co-workingowe na terenie budynku.",
      },
    ],
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
    image: "/assets/lumare-placeholder-night.webp",
    imageAlt: "Zdjęcie tymczasowe — nocna panorama miasta z lotu ptaka",
    ctaLabel: "Dołącz do listy prywatnej",
  },
];
