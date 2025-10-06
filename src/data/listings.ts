import p1 from "../assets/pools/p1.jpg";
import p2 from "../assets/pools/p2.jpg";
import p3 from "../assets/pools/p3.avif";
import p4 from "../assets/pools/p4.avif";

type Lang = "en" | "ar";
type Localized = { en: string; ar: string };

export type ListingType = "pool" | "camp";
export interface Listing {
  id: string;
  type: ListingType;
  name: Localized;
  area: Localized;
  price: string;
  img: string;
}

export const pools: Listing[] = [
  {
    id: "p1",
    type: "pool",
    name: { en: "Hidd Private Pool", ar: "مسبح خاص في الحد" },
    area: { en: "Hidd", ar: "الحد" },
    price: "BHD 10",
    img: p1,
  },
  {
    id: "p2",
    type: "pool",
    name: { en: "Muharraq Family Pool", ar: "مسبح عائلي في المحرق" },
    area: { en: "Muharraq", ar: "المحرق" },
    price: "BHD 15",
    img: p2,
  },
  {
    id: "p3",
    type: "pool",
    name: { en: "Hamala Family Pool", ar: "مسبح عائلي في الهملة" },
    area: { en: "Hamala", ar: "الهملة" },
    price: "BHD 17",
    img: p3,
  },
  {
    id: "p4",
    type: "pool",
    name: { en: "Saluber Pool", ar: "مسبح سالوبر" },
    area: { en: "Manama", ar: "المنامة" },
    price: "BHD 50",
    img: p4,
  },
];

export const camps: Listing[] = [
  {
    id: "c1",
    type: "camp",
    name: { en: "Sakhir Desert Camp", ar: "مخيم صحراء الصخير" },
    area: { en: "Sakhir", ar: "الصخير" },
    price: "BHD 80",
    img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "c2",
    type: "camp",
    name: { en: "Riffa Weekend Camp", ar: "مخيم نهاية الأسبوع في الرفاع" },
    area: { en: "Riffa", ar: "الرفاع" },
    price: "BHD 70",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
];


export const allListings: Listing[] = [...pools, ...camps];
export const byId = new Map(allListings.map((l) => [l.id, l]));
export const getByType = (type: ListingType) => allListings.filter((l) => l.type === type);
export const getByArea = (area: string) =>
  allListings.filter((l) => l.area.en.toLowerCase() === area.toLowerCase());

export const pickLocale = (loc: Localized, lang: Lang) => loc[lang] || loc.en;