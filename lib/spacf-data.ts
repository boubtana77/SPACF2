export type WebsiteStatus = "No Website" | "Weak Website" | "Old Website";
export type Opportunity = "HOT" | "WARM" | "COLD";
export type CrmStatus = "New" | "Contacted" | "Replied" | "Interested" | "Negotiation" | "Closed";

export type Lead = {
  id: number;
  businessName: string;
  category: string;
  city: string;
  country: string;
  mapsUrl: string;
  phone: string;
  email: string;
  socialLinks: string[];
  websiteStatus: WebsiteStatus;
  score: Opportunity;
  reviewCount: number;
  rating: number;
  activityLevel: "High" | "Medium" | "Low";
  crmStatus: CrmStatus;
  seoWeakness: string;
};

export const countries = [
  "Canada",
  "France",
  "United States",
  "United Kingdom",
  "Australia",
  "Germany",
  "Spain",
  "Italy",
  "Mexico",
  "Brazil",
  "South Africa",
  "Japan",
  "India",
  "United Arab Emirates",
];

export const locations = [
  "Toronto, Ontario",
  "Lyon, Auvergne-Rhône-Alpes",
  "Austin, Texas",
  "Manchester, England",
  "Melbourne, Victoria",
  "Berlin, Berlin",
  "Madrid, Community of Madrid",
  "Miami, Florida",
  "Vancouver, British Columbia",
  "Phoenix, Arizona",
];

export const categories = [
  "Dentists",
  "Restaurants",
  "Roofers",
  "Lawyers",
  "HVAC",
  "Plumbers",
  "Clinics",
  "Salons",
  "Gyms",
  "Auto Repair",
  "Real Estate",
];

export const leads: Lead[] = [
  {
    id: 1,
    businessName: "Northline Dental Care",
    category: "Dentists",
    city: "Toronto",
    country: "Canada",
    mapsUrl: "https://maps.google.com/?q=Northline+Dental+Care+Toronto",
    phone: "+1 (416) 555-0198",
    email: "hello@northlinedental.example",
    socialLinks: ["Facebook", "Instagram"],
    websiteStatus: "Old Website",
    score: "HOT",
    reviewCount: 184,
    rating: 4.7,
    activityLevel: "High",
    crmStatus: "New",
    seoWeakness: "Slow mobile pages and no online booking CTA",
  },
  {
    id: 2,
    businessName: "Bistro Rue Local",
    category: "Restaurants",
    city: "Lyon",
    country: "France",
    mapsUrl: "https://maps.google.com/?q=Bistro+Rue+Local+Lyon",
    phone: "+33 4 55 55 01 12",
    email: "contact@bistrorue.example",
    socialLinks: ["Instagram"],
    websiteStatus: "No Website",
    score: "HOT",
    reviewCount: 92,
    rating: 4.5,
    activityLevel: "High",
    crmStatus: "Contacted",
    seoWeakness: "Relies on social profile only; no owned conversion page",
  },
  {
    id: 3,
    businessName: "Summit Shield Roofing",
    category: "Roofers",
    city: "Austin",
    country: "United States",
    mapsUrl: "https://maps.google.com/?q=Summit+Shield+Roofing+Austin",
    phone: "+1 (512) 555-0144",
    email: "quotes@summitshield.example",
    socialLinks: ["Facebook", "LinkedIn"],
    websiteStatus: "Weak Website",
    score: "WARM",
    reviewCount: 47,
    rating: 4.2,
    activityLevel: "Medium",
    crmStatus: "Replied",
    seoWeakness: "Thin service pages and weak local keyword targeting",
  },
  {
    id: 4,
    businessName: "Oak & Stone Legal",
    category: "Lawyers",
    city: "Manchester",
    country: "United Kingdom",
    mapsUrl: "https://maps.google.com/?q=Oak+Stone+Legal+Manchester",
    phone: "+44 161 555 0180",
    email: "admin@oakstonelegal.example",
    socialLinks: ["LinkedIn"],
    websiteStatus: "Old Website",
    score: "WARM",
    reviewCount: 31,
    rating: 4.0,
    activityLevel: "Medium",
    crmStatus: "Interested",
    seoWeakness: "Outdated design and unclear consultation form",
  },
  {
    id: 5,
    businessName: "QuickFlow Plumbing",
    category: "Plumbers",
    city: "Melbourne",
    country: "Australia",
    mapsUrl: "https://maps.google.com/?q=QuickFlow+Plumbing+Melbourne",
    phone: "+61 3 5550 0175",
    email: "service@quickflow.example",
    socialLinks: ["Facebook"],
    websiteStatus: "Weak Website",
    score: "COLD",
    reviewCount: 14,
    rating: 3.8,
    activityLevel: "Low",
    crmStatus: "Negotiation",
    seoWeakness: "Missing emergency service landing pages",
  },
];

export const dashboardStats = [
  { label: "Emails sent", value: "1,284", trend: "+18%" },
  { label: "Open rate", value: "41%", trend: "+6%" },
  { label: "Replies", value: "137", trend: "+22%" },
  { label: "Closed clients", value: "19", trend: "+4" },
  { label: "Active campaigns", value: "8", trend: "live" },
];

export const landingPages = ["Dentist", "Restaurant", "Roofing", "Lawyer"];
