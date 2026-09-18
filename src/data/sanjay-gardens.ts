export interface ProjectInfo {
  brandName: string;
  brandTagline: string;
  projectName: string;
  locationCity: string;
  locationState: string;
  locationCountry: string;
  heroHeadline: string;
  heroSubheadline: string;
  whatsappNumber: string;
  whatsappDefaultMsg: string;
  phone: string;
  email: string;
  officeLocation: string;
}

export const siteConfig: ProjectInfo = {
  brandName: "Sanjay Properties",
  brandTagline: "Elevated Living & Thoughtful Land Development in Coimbatore",
  projectName: "Sanjay Gardens",
  locationCity: "Coimbatore",
  locationState: "Tamil Nadu",
  locationCountry: "India",
  heroHeadline: "An Address Worth Coming Home To.",
  heroSubheadline: "Thoughtfully planned properties in Coimbatore, created for better living and long-term value.",
  whatsappNumber: "+919876543210", // Configurable WhatsApp contact
  whatsappDefaultMsg: "Hi Sanjay Properties, I'm interested in Sanjay Gardens in Coimbatore. Please share the project details and schedule a visit.",
  phone: "+91 (0) 422 200 0000",
  email: "enquiry@sanjayproperties.in",
  officeLocation: "Coimbatore, Tamil Nadu, India",
};

export const projectHighlights = [
  {
    id: "01",
    label: "LOCATION",
    title: "Prime Coimbatore Corridor",
    desc: "Strategically positioned with seamless access to educational institutions, IT corridors, and healthcare.",
    badge: "Strategic Connectivity",
    isAccent: false,
  },
  {
    id: "02",
    label: "PLANNING",
    title: "Thoughtfully Designed Layouts",
    desc: "Engineered with expansive internal avenues, optimized natural ventilation, and landscaped green zones.",
    badge: "Masterplanned Community",
    isAccent: true, // Gold accent card inspired by the reference design
  },
  {
    id: "03",
    label: "TRANSPARENCY",
    title: "Clear Title & Verifiable Documentation",
    desc: "Complete documentation clarity ensuring peace of mind for residential homebuyers and long-term investors.",
    badge: "Trust & Clarity",
    isAccent: false,
  },
];

export const projectStoryPrinciples = [
  {
    number: "01",
    title: "Thoughtful Planning",
    desc: "Every layout is designed prioritizing residential comfort, natural light, cross-ventilation, and sustainable infrastructure.",
  },
  {
    number: "02",
    title: "Location First",
    desc: "Positioned in high-growth micro-markets of Coimbatore with rapid infrastructure appreciation and effortless city connectivity.",
  },
  {
    number: "03",
    title: "Transparent Information",
    desc: "Direct, honest documentation and complete title clarity with no hidden clauses or unverified representations.",
  },
  {
    number: "04",
    title: "Customer-Focused Guidance",
    desc: "End-to-end dedicated advisory support from site selection through documentation, site visits, and possession.",
  },
];

export const locationCategories = [
  {
    category: "Education Hubs",
    icon: "GraduationCap",
    items: ["Renowned Engineering & Arts Colleges", "Premier International Schools", "Centrally Accessible Campuses"],
  },
  {
    category: "Healthcare & Wellness",
    icon: "HeartPulse",
    items: ["Multi-speciality Hospitals", "Healthcare Research Centers", "Emergency Medical Care Facilities"],
  },
  {
    category: "Business & IT Corridors",
    icon: "Building2",
    items: ["TIDEL Park & Tech Hubs", "Commercial Business Districts", "Industrial & Manufacturing Zones"],
  },
  {
    category: "Transit & Corridors",
    icon: "Compass",
    items: ["Coimbatore International Airport Access", "Avinashi & Trichy Road Corridors", "Arterial Bypass Highways"],
  },
];

export const galleryItems = [
  {
    id: "gal-1",
    title: "Modern Architectural Facade",
    category: "Contemporary Design",
    image: "/images/gallery-1.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: "gal-2",
    title: "Glass Sanctuary & Reflecting Waters",
    category: "Landscape & Living",
    image: "/images/gallery-2.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: "gal-3",
    title: "Cantilevered Sunset Terrace",
    category: "Scenic Horizons",
    image: "/images/gallery-3.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: "gal-4",
    title: "Stone & Timber Courtyard",
    category: "Natural Materials",
    image: "/images/gallery-4.jpg",
    aspect: "aspect-[4/3]",
  },
];

export const showcaseCategories = [
  {
    id: "overview",
    name: "Overview",
    title: "A Harmonious Sanctuary",
    description: "Sanjay Gardens brings together the serenity of nature and contemporary architectural precision in Coimbatore.",
    badge: "Exclusive Development",
    image: "/images/feature-main.jpg",
  },
  {
    id: "residences",
    name: "Residences",
    title: "Curated Living Spaces",
    description: "Spacious architectural floorplans designed to foster comfort, privacy, and seamless indoor-outdoor living.",
    badge: "Bespoke Architecture",
    image: "/images/about.jpg",
  },
  {
    id: "environment",
    name: "Landscape",
    title: "Green Open Enclaves",
    description: "Pristine open vistas and tranquil water features create an environment where every sunrise feels invigorating.",
    badge: "Eco-Conscious",
    image: "/images/feature-sec.jpg",
  },
  {
    id: "location",
    name: "Location",
    title: "Coimbatore's Prime Growth Zone",
    description: "Conveniently situated with direct connectivity to key transport arteries, academic centers, and retail districts.",
    badge: "Prime Connectivity",
    image: "/images/gallery-3.jpg",
  },
];

export const faqData = [
  {
    question: "What is Sanjay Gardens?",
    answer: "Sanjay Gardens is an exclusive residential community project developed and curated by Sanjay Properties, featuring thoughtfully planned layouts and serene living spaces in Coimbatore, Tamil Nadu.",
  },
  {
    question: "Where is Sanjay Gardens located?",
    answer: "Sanjay Gardens is located in Coimbatore, Tamil Nadu, positioned in a rapidly developing growth corridor with seamless connectivity to key transit hubs, schools, and healthcare facilities.",
  },
  {
    question: "What type of properties are available at Sanjay Gardens?",
    answer: "Sanjay Gardens features thoughtfully planned residential plots and bespoke villa layout options. Detailed masterplan drawings and specification sheets are available on enquiry.",
  },
  {
    question: "What are the available plot and unit sizes?",
    answer: "Specific unit dimensions and plot configurations are tailored for various residential architectural needs. Exact available dimensions are provided directly upon enquiry with our advisory team.",
  },
  {
    question: "How can I schedule a personal site visit?",
    answer: "You can schedule a private site visit by clicking 'Schedule a Site Visit', reaching out via our direct WhatsApp line, or submitting the enquiry form below. Our dedicated advisory team will coordinate a time that suits your schedule.",
  },
  {
    question: "How can I request the project brochure and layout plans?",
    answer: "Digital copies of the Sanjay Gardens project brochure, layout maps, and location documents can be requested instantly through our WhatsApp line or enquiry form.",
  },
];
