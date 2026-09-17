export interface ProjectConfig {
  brandName: string;
  brandTagline: string;
  projectName: string;
  historicalProjectDesignation: string;
  locationCity: string;
  locationState: string;
  locationCountry: string;
  locationPincode: string;
  historicalAddress: string;
  heroHeadline: string;
  heroSubheadline: string;
  whatsappNumber: string;
  whatsappDefaultMsg: string;
  phone: string;
  email: string;
  officeLocation: string;
  surveyNumbers: string[];
  layoutApprovalRef: string;
  municipalOpenSpace: string;
}

export const siteConfig: ProjectConfig = {
  brandName: "Sanjay Properties",
  brandTagline: "Thoughtfully Planned Residential Properties in Coimbatore",
  projectName: "Sanjay Garden",
  historicalProjectDesignation: "Sanjay Garden Phase 1",
  locationCity: "Coimbatore",
  locationState: "Tamil Nadu",
  locationCountry: "India",
  locationPincode: "641035",
  historicalAddress: "Sanjay Garden, PNT Colony, Saravanampatti, Coimbatore – 641035",
  heroHeadline: "A Better Address Begins With Better Planning.",
  heroSubheadline: "Discover Sanjay Garden, a residential address in Saravanampatti, Coimbatore.",
  whatsappNumber: "+919876543210", // Configurable PUBLIC_WHATSAPP
  whatsappDefaultMsg: "Hi Sanjay Properties, I am interested in Sanjay Garden in Saravanampatti, Coimbatore. Please share the current project details and availability.",
  phone: "+91 422 200 0000", // Configurable PUBLIC_PHONE
  email: "enquiry@sanjayproperties.in", // Configurable PUBLIC_EMAIL
  officeLocation: "Saravanampatti, Coimbatore, Tamil Nadu, India – 641035", // Configurable PUBLIC_ADDRESS
  surveyNumbers: ["S.F. No. 402/2pt", "402/3pt", "402/4pt"],
  layoutApprovalRef: "D.D.T.P / C.L.P.A No. 42/2008",
  municipalOpenSpace: "734.85 sq. m.",
};

// 4 Project Information Cards
export const projectInfoCards = [
  {
    id: "01",
    label: "LOCATION",
    title: "Saravanampatti, Coimbatore",
    subtitle: "Tamil Nadu – 641035",
    desc: "A well-established and strategically connected residential corridor in North-East Coimbatore.",
    badge: "Coimbatore North",
  },
  {
    id: "02",
    label: "PROJECT",
    title: "Sanjay Garden",
    subtitle: "Phase 1 Designation",
    desc: "Established residential layout planned with clear road networks and open community space.",
    badge: "Residential Layout",
  },
  {
    id: "03",
    label: "LAYOUT REFERENCE",
    title: "42/2008",
    subtitle: "D.D.T.P / C.L.P.A Approval",
    desc: "Historical layout reference from municipal records. Documentation to be confirmed with Sanjay Properties.",
    badge: "Historical Reference",
  },
  {
    id: "04",
    label: "PROPERTY TYPE",
    title: "Residential House Sites",
    subtitle: "Individual Plots & Sites",
    desc: "House-site planning designed around residential living. Current offerings subject to project verification.",
    badge: "House Sites",
  },
];

// Historical Layout Highlights
export const layoutHighlights = [
  {
    title: "80 FT ROAD",
    desc: "Primary arterial corridor shown in the historical layout plan for seamless access.",
    category: "Road Infrastructure",
  },
  {
    title: "60 FT ROAD",
    desc: "Main connecting avenue facilitating smooth internal vehicular circulation.",
    category: "Road Infrastructure",
  },
  {
    title: "33 FT & 23 FT ROADS",
    desc: "Dedicated residential cross-streets providing quiet neighborhood access.",
    category: "Internal Roads",
  },
  {
    title: "PARK / OPEN SPACE",
    desc: "Municipal records identify approx 734.85 sq. m. designated reserved open space.",
    category: "Open Area",
  },
  {
    title: "SHOP / COMMERCIAL AREA",
    desc: "Designated convenience and commercial sector within the original layout design.",
    category: "Community Sector",
  },
  {
    title: "RESIDENTIAL HOUSE SITES",
    desc: "Structured plot divisions proportioned for residential house construction.",
    category: "Residential Sites",
  },
];

// Why Sanjay Garden - 4 Core Principles
export const whySanjayPrinciples = [
  {
    number: "01",
    title: "SARAVANAMPATTI",
    desc: "A strategically connected part of Coimbatore, surrounded by educational institutions, IT corridors, and healthcare destinations.",
  },
  {
    number: "02",
    title: "PLANNED LAYOUT",
    desc: "The historical layout shows a structured residential layout with multiple road widths (80ft, 60ft, 33ft, 23ft) and designated open space.",
  },
  {
    number: "03",
    title: "RESIDENTIAL FOCUS",
    desc: "House-site planning designed around residential use, prioritizing living comfort, access, and neighborhood tranquility.",
  },
  {
    number: "04",
    title: "LONG-TERM ADDRESS",
    desc: "An established residential address in Coimbatore to build a home and property future, presented with honest factual clarity.",
  },
];

// Location Categories & Verified Landmarks (Editable Distances)
export interface LocationItem {
  name: string;
  distance: string | null; // null = "Details on enquiry"
}

export interface LocationCategory {
  category: string;
  icon: string;
  items: LocationItem[];
}

export const locationCategories: LocationCategory[] = [
  {
    category: "Education Hubs",
    icon: "GraduationCap",
    items: [
      { name: "Kumaraguru College of Technology (KCT)", distance: null },
      { name: "Kumaraguru Institutions Campus", distance: null },
      { name: "SNS Group of Institutions", distance: null },
      { name: "KG College of Arts & Science / KG Institutions", distance: null },
      { name: "Renowned Matriculation & CBSE Schools", distance: null },
    ],
  },
  {
    category: "Technology & Business",
    icon: "Building2",
    items: [
      { name: "KGISL Tech Park", distance: null },
      { name: "CHIL SEZ IT Park & Tech Corridors", distance: null },
      { name: "Keeranatham IT Hub", distance: null },
      { name: "Commercial & Enterprise Centers", distance: null },
    ],
  },
  {
    category: "Healthcare & Hospitals",
    icon: "HeartPulse",
    items: [
      { name: "Multi-Speciality Healthcare Centers", distance: null },
      { name: "Saravanampatti Medical Clinics", distance: null },
      { name: "Specialized Maternity & General Hospitals", distance: null },
      { name: "24/7 Emergency Care Facilities", distance: null },
    ],
  },
  {
    category: "Shopping & Lifestyle",
    icon: "ShoppingBag",
    items: [
      { name: "Prozone Mall", distance: null },
      { name: "Saravanampatti Retail Corridor & Daily Markets", distance: null },
      { name: "Supermarkets, Bakeries & Dining Hubs", distance: null },
    ],
  },
  {
    category: "Key Connectivity",
    icon: "Compass",
    items: [
      { name: "Gandhipuram City Center", distance: null },
      { name: "Coimbatore International Airport", distance: null },
      { name: "Thudiyalur Junction", distance: null },
      { name: "Kovilapalayam Corridor", distance: null },
      { name: "Sathy Road (NH 209) Arterial Access", distance: null },
    ],
  },
];

// Property Showcase Data (Configurable schema with empty/enquiry fallbacks)
export interface PropertyPlot {
  plotNumber: string;
  plotSize: string | null;
  dimensions: string | null;
  facing: string | null;
  availability: "Available" | "Enquiry" | "Reserved";
  price: string | null;
  status: string;
}

export const propertyShowcaseData: PropertyPlot[] = [
  {
    plotNumber: "Plot Site A",
    plotSize: "Configurable / Tailored",
    dimensions: "Available on request",
    facing: "East / North / South options",
    availability: "Enquiry",
    price: null, // "Current availability and pricing available on enquiry."
    status: "Residential House Site",
  },
  {
    plotNumber: "Plot Site B",
    plotSize: "Configurable / Tailored",
    dimensions: "Available on request",
    facing: "Corner / Avenue facing",
    availability: "Enquiry",
    price: null,
    status: "Residential House Site",
  },
  {
    plotNumber: "Plot Site C",
    plotSize: "Configurable / Tailored",
    dimensions: "Available on request",
    facing: "Road Facing",
    availability: "Enquiry",
    price: null,
    status: "Residential House Site",
  },
];

// Architectural Gallery Items
export const galleryCategories = [
  "All",
  "Site",
  "Layout",
  "Roads",
  "Surroundings",
  "Location",
  "Property",
  "Development",
] as const;

export const galleryItems = [
  {
    id: "gal-1",
    title: "Masterplanned Residential Landscape",
    category: "Site",
    image: "/images/gallery-1.jpg",
    caption: "Modern residential architectural vision in Coimbatore",
  },
  {
    id: "gal-2",
    title: "Open Space & Environmental Planning",
    category: "Surroundings",
    image: "/images/gallery-2.jpg",
    caption: "Thoughtfully integrated open areas and natural light",
  },
  {
    id: "gal-3",
    title: "Architectural Horizon & Connectivity",
    category: "Location",
    image: "/images/gallery-3.jpg",
    caption: "Strategic vantage points across North-Eastern Coimbatore",
  },
  {
    id: "gal-4",
    title: "Quality Infrastructure & Craft",
    category: "Development",
    image: "/images/gallery-4.jpg",
    caption: "Enduring residential quality and site planning",
  },
];

// Document Transparency List
export const transparencyDocuments = [
  {
    title: "Layout Plan Reference",
    ref: "D.D.T.P / C.L.P.A No. 42/2008",
    status: "Historical Public Record",
    note: "Official layout drawings available for buyer inspection upon request.",
  },
  {
    title: "Survey References",
    ref: "S.F. No. 402/2pt, 402/3pt, 402/4pt",
    status: "Saravanampatti Village Records",
    note: "Survey demarcations filed under Coimbatore North revenue records.",
  },
  {
    title: "Project Information Sheet",
    ref: "Sanjay Garden Overview",
    status: "Available on Request",
    note: "Comprehensive project details shared directly with prospective buyers.",
  },
  {
    title: "Location Map & Route Guide",
    ref: "Saravanampatti Corridor Map",
    status: "Digital Copy Available",
    note: "Directions and landmark connectivity guide sent via WhatsApp or email.",
  },
];

// Verified FAQ Items (10 Exact Questions Factually Grounded)
export const faqData = [
  {
    question: "1. What is Sanjay Garden?",
    answer:
      "Sanjay Garden (also designated as Sanjay Garden Phase 1) is an established residential layout located in Saravanampatti, Coimbatore, associated with Sanjay Properties. The layout was planned with residential house sites, internal road networks, and designated open community space.",
  },
  {
    question: "2. Where is Sanjay Garden located?",
    answer:
      "Sanjay Garden is located in Saravanampatti, Coimbatore North, Tamil Nadu – 641035 (historical address: Sanjay Garden, PNT Colony, Saravanampatti, Coimbatore – 641035). It is situated in close proximity to major educational institutions, tech corridors, and arterial roads.",
  },
  {
    question: "3. What is the layout reference for Sanjay Garden?",
    answer:
      "The historical layout approval reference is D.D.T.P / C.L.P.A No. 42/2008. Note: This represents historical public record information and documentation should be confirmed directly with Sanjay Properties.",
  },
  {
    question: "4. What survey numbers are associated with the historical layout?",
    answer:
      "The historical layout and Coimbatore Corporation published records reference Survey Field numbers: S.F. No. 402/2pt, 402/3pt, and 402/4pt, Saravanampatti, Coimbatore North.",
  },
  {
    question: "5. What type of property is available?",
    answer:
      "The original layout was designated for residential house sites. Current availability, plot categories, and offerings are subject to verification upon direct enquiry with Sanjay Properties.",
  },
  {
    question: "6. What plot sizes are available?",
    answer:
      "Specific plot dimensions and configurations depend on current inventory. Please contact Sanjay Properties directly to receive the updated availability schedule.",
  },
  {
    question: "7. What is the current price?",
    answer:
      "Current pricing and payment schedules are available upon enquiry. Sanjay Properties does not publish unverified or outdated price figures.",
  },
  {
    question: "8. How can I schedule a site visit?",
    answer:
      "You can schedule a site visit by clicking 'Schedule a Site Visit' on this website, messaging our official WhatsApp line, or filling out the enquiry form. Our team will coordinate a convenient date and time.",
  },
  {
    question: "9. How can I request the project documents?",
    answer:
      "Project documents, layout plans, and verification records can be requested by reaching out through the enquiry form, phone, or WhatsApp. Documentation is provided for legitimate buyer review.",
  },
  {
    question: "10. How can I contact Sanjay Properties?",
    answer:
      "You can contact Sanjay Properties via phone at +91 422 200 0000, through our official WhatsApp line, via email at enquiry@sanjayproperties.in, or by submitting the contact form on this page.",
  },
];
