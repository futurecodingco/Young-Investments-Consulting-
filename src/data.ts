import { CompanyRegistry, QuadPillar, CareerMilestone, CommodityCategory } from './types';

export const COMPANY_DATA: CompanyRegistry = {
  legalName: "Young Investments Consulting Holdings (Pty) Ltd",
  tradeName: "Young Investments Consulting Holdings",
  enterpriseNumber: "K2020170638",
  incorporationDate: "2020-03-21",
  status: "In Business (Active)",
  healthScore: 83,
  vatNumber: "9395887194",
  legalForm: "Private Company",
  physicalAddress: "482 Farm Road, Unit 52 Sharne Mews, Die Wilgers, Pretoria, Gauteng, 0081, South Africa",
  mailingAddress: "482 Farm Road, Unit 52 Sharne Mews, Die Wilgers, Pretoria, Gauteng, 0081, South Africa",
  primaryOfficer: "Leslie Flint Young",
  officerRole: "Director & Chief Executive Officer",
  headquarters: "Pretoria, Gauteng, South Africa"
};

export const CONTACT_INFO = {
  email: "leslieyoung74@gmail.com",
  phoneDisplay: "078 829 0637",
  phoneRaw: "0788290637",
  internationalPhone: "+27 78 829 0637",
  whatsappLink: "https://wa.me/27788290637",
  city: "Pretoria",
  province: "Gauteng",
  country: "South Africa",
  linkedInUrl: "https://za.linkedin.com/in/leslie-young-91143333",
  metaHandle: "@leslie.young.7549",
  metaUrl: "https://facebook.com/leslie.young.7549",
  tiktokHandle: "@leslieyoung385",
  tiktokUrl: "https://www.tiktok.com/@leslieyoung385",
};

export const HERO_CONTENT = {
  headline: "Bridging Capital, Sourcing Commodities, Securing Logistics Across Africa.",
  subhead: "Young Investments Consulting Holdings delivers institutional project funding, specialized supply chain engineering, and industrial bulk sourcing to optimize complex corporate ecosystems.",
  primaryCta: "Initiate Corporate Consultation",
  secondaryCta: "Explore Executive Pedigree"
};

export const QUAD_PILLARS: QuadPillar[] = [
  {
    id: "project-funding",
    title: "Project Funding Sourcing",
    category: "Structured Finance & Capital Advisory",
    summary: "Navigating the complex financial landscape to secure debt, equity, and structured capital for transformational African enterprises.",
    deepCopy: "We clear the path for large-scale development by auditing project financial viability and matching high-yield infrastructure, mining, agricultural, and real estate initiatives with cross-border investment consortia. Our transaction structures unlock capital tranches from R5M to R100M+ across Southern and Sub-Saharan Africa.",
    deliverables: [
      "Bankable Feasibility Audits & Project Information Memorandums (PIM)",
      "Cross-Border Sovereign & Private Investment Consortia Syndication",
      "Mezzanine, Preferred Equity & Structured Debt Orchestration",
      "Mining & Green Energy Concession Capital Modeling"
    ],
    metrics: "R5M – R100M+ Capital Sourcing Tranches",
    iconName: "TrendingUp"
  },
  {
    id: "supply-chain",
    title: "Global Supply Chain Advisory",
    category: "Enterprise Infrastructure & Procurement",
    summary: "Engineering resilient, frictionless transit systems from factory floor to domestic distribution.",
    deepCopy: "Utilizing frameworks honed within national transport hubs and state-owned logistics enterprises, we map enterprise supply networks to eliminate systemic cost leaks, enhance demand planning models, and establish ironclad supplier SLA protocols with rigorous compliance controls.",
    deliverables: [
      "Customs Clearance, Bonded Warehousing & Port Transit Flow",
      "Cross-Border Freight Routing & Hazardous Cargo Protocols",
      "Enterprise Vendor Pre-Qualification & SLA Engineering",
      "Real-Time Supply Chain Vulnerability & Cost-Leak Auditing"
    ],
    metrics: "15+ Years National Transport Hub Experience",
    iconName: "Layers"
  },
  {
    id: "commodity-procurement",
    title: "Commodity Procurement (Oil & Gas)",
    category: "Bulk Energy & Industrial Feedstocks",
    summary: "Securing the reliable bulk energy resources and industrial feedstocks needed to fuel continuous economic expansion.",
    deepCopy: "Operating deeply within highly volatile commodity markets, we secure critical inputs for energy infrastructure. We mitigate procurement risk by controlling strict vendor compliance, cross-border custom clearing, road transport routing, and logistics management from refinery gate to depot.",
    deliverables: [
      "Bulk Wholesale Diesel (50ppm / 500ppm) & Low-Sulphur Gasoil",
      "Aviation Turbine Fuel (Jet A-1) Supply Channel Contracting",
      "Heavy Fuel Oils (HFO), Lubricants & Industrial Petrochemical Bases",
      "Vessel Bunkering, Off-take Contracts & Letters of Credit Support"
    ],
    metrics: "Refinery-to-Depot Compliance & Cross-Border Allocation",
    iconName: "Fuel"
  },
  {
    id: "property-development",
    title: "Property Development Consulting",
    category: "Spatial Planning & Real Estate",
    summary: "Advising institutional landholders on spatial planning, commercial zoning, and structural feasibility.",
    deepCopy: "Guiding institutional asset managers, private family offices, and municipal stakeholders through commercial zoning, precinct master planning, and capital expenditure modeling for residential developments, logistics hubs, and industrial parks.",
    deliverables: [
      "Commercial & Industrial Zoning Rezoning Due Diligence",
      "Bulk Infrastructure Utility Capacity & Servitude Planning",
      "Joint Venture Developer Equity Modeling & Yield Analysis",
      "Public-Private Partnership (PPP) Municipal Coordination"
    ],
    metrics: "Precinct Feasibility & Structured Yield Engineering",
    iconName: "Building2"
  }
];

export const CEO_BIO = {
  name: "Leslie Flint Young",
  title: "Chief Executive Officer & Founder",
  organization: "Young Investments Consulting Holdings (Pty) Ltd",
  fullBio: "Leslie Flint Young serves as the Chief Executive Officer of Young Investments Consulting Holdings (Pty) Ltd. Over a multi-decade career in high-stakes operational ecosystems, Mr. Young has built a formidable reputation as a master of complex supply chain dynamics and corporate governance.\n\nPrior to establishing the Holdings firm in March 2020, he engineered procurement frameworks for some of South Africa's most critical state-owned enterprises and private corporations. His exceptional career pedigree includes serving as the Strategy Sourcing Specialist for South African Airways (SAA), operating as a Senior Buyer for the Airports Company South Africa (ACSA), and serving as Contracts Manager at LMT Products / Denel Dynamics. He also held prominent management seats as Chief Executive of Revelations Isambulo Holdings and Managing Director of the Young Foundation South Africa.\n\nArmed with cross-functional technical expertise spanning 12 distinct commodity categories, import/export compliance, bonded warehousing, and regional freight logistics, Mr. Young acts as a critical link between global capital providers and major developmental projects.",
  coreStats: [
    { label: "Executive Track Record", value: "20+ Years" },
    { label: "Commodity Sectors Commanded", value: "12 Sectors" },
    { label: "Project Capital Scope", value: "R5M – R100M+" },
    { label: "Registry Health Score", value: "83 / 100" }
  ]
};

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    role: "Founder & Chief Executive Officer",
    organization: "Young Investments Consulting Holdings (Pty) Ltd",
    type: "Corporate Holding",
    period: "March 2020 – Present",
    scope: "Pretoria, Gauteng, South Africa (Pan-African Operations)",
    highlights: [
      "Established multi-sector advisory holding entity specializing in project capital orchestration and bulk energy sourcing.",
      "Secured structured funding pipelines for infrastructure, real estate, and industrial clients across Southern Africa.",
      "Structured bulk petroleum (Diesel 50ppm, Jet A-1) off-take frameworks with direct refinery and allocation channels."
    ]
  },
  {
    role: "Strategy Sourcing Specialist",
    organization: "South African Airways (SAA)",
    type: "State-Owned Enterprise",
    period: "Institutional Procurement Tenure",
    scope: "National Aviation Flagship • Global Procurement",
    highlights: [
      "Directed strategic vendor negotiations, international aviation parts sourcing, and mission-critical aviation fuel contracts.",
      "Engineered cross-border import/export logistics compliance spanning global hubs across Europe, the Americas, and Africa.",
      "Enforced stringent aerospace quality assurance frameworks and public finance governance compliance."
    ]
  },
  {
    role: "Senior Buyer",
    organization: "Airports Company South Africa (ACSA)",
    type: "State-Owned Enterprise",
    period: "Aviation Infrastructure & Operations",
    scope: "9 Major South African Commercial Airports",
    highlights: [
      "Managed multi-million Rand procurement portfolios supporting continuous airport operational infrastructure.",
      "Negotiated complex bulk supply agreements, terminal engineering equipment, and security facility contracts.",
      "Implemented structured supply chain transparency reducing lead times and ensuring zero operational downtime."
    ]
  },
  {
    role: "Contracts Manager",
    organization: "LMT Products / Denel Dynamics",
    type: "Defense & Aerospace",
    period: "Precision Defense Manufacturing",
    scope: "Protected Vehicles & High-Tech Defense Systems",
    highlights: [
      "Led high-security defense procurement, ballistic materials sourcing, and international vendor contract compliance.",
      "Oversaw strict intellectual property, defense export control compliance, and ITAR-level governance protocols.",
      "Coordinated precision engineering supply chains across multi-tier defense vehicle manufacturing lines."
    ]
  },
  {
    role: "Chief Executive Officer",
    organization: "Revelations Isambulo Holdings",
    type: "Corporate Holding",
    period: "Executive Holding Leadership",
    scope: "Commercial Asset Management & Investment",
    highlights: [
      "Formulated corporate investment directives and oversaw private equity holdings in commercial enterprises.",
      "Directed executive teams in portfolio growth, risk mitigation, and corporate restructuring."
    ]
  },
  {
    role: "Managing Director",
    organization: "Young Foundation South Africa",
    type: "Foundational / Advisory",
    period: "Socio-Economic Development",
    scope: "National Community & Economic Empowerment",
    highlights: [
      "Steered foundational non-profit initiatives linking corporate social investments to tangible community development.",
      "Architected strategic partnerships between corporate sponsors, municipal departments, and grassroots programs."
    ]
  }
];

export const TWELVE_COMMODITIES: CommodityCategory[] = [
  {
    number: "01",
    name: "Refined Petroleum Fuels (Diesel 50ppm / 500ppm)",
    segment: "Energy & Petrochemicals",
    items: ["Ultra-Low Sulphur Diesel 50ppm", "Standard Gasoil 500ppm", "Wholesale Bulk Grid Allocations"],
    description: "Reliable bulk fuel distribution to mining houses, national logistics fleets, and regional wholesale depots with strict SGS/Intertek specification conformity."
  },
  {
    number: "02",
    name: "Aviation Turbine Fuel (Jet A-1)",
    segment: "Energy & Petrochemicals",
    items: ["Commercial Jet A-1 Fuel", "Airport Off-take Protocols", "Strategic Reserves Supply"],
    description: "High-spec aviation kerosene procurement backed by rigorous international IATA standards and established pipeline delivery mechanisms."
  },
  {
    number: "03",
    name: "Heavy Fuel Oils (HFO) & Marine Bunkering",
    segment: "Energy & Petrochemicals",
    items: ["HFO 180 CST", "HFO 380 CST", "Bunker Fuel Delivery"],
    description: "Thermal energy fuels powering metallurgical smelting, continuous manufacturing boilers, and marine transit bunkering."
  },
  {
    number: "04",
    name: "Industrial Lubricants & Specialty Fluids",
    segment: "Energy & Petrochemicals",
    items: ["Heavy Machinery Engine Oils", "Hydraulic Fluids", "Gear Oils & Greases"],
    description: "Specialized tribology solutions designed for heavy-duty earthmoving equipment, rail rolling stock, and factory automation."
  },
  {
    number: "05",
    name: "Base Petrochemical Feedstocks",
    segment: "Industrial Feedstocks",
    items: ["Bitumen & Asphalt Blends", "Polymer Pellets", "Industrial Solvents"],
    description: "Essential raw chemical precursors feeding national road construction, plastics fabrication, and regional manufacturing."
  },
  {
    number: "06",
    name: "Ferrous & Non-Ferrous Industrial Metals",
    segment: "Industrial Feedstocks",
    items: ["Structural Steel Beams", "Copper Cathodes", "Aluminum Billets"],
    description: "Sourcing certified construction steel and electrical conduction metals for large-scale civil works and power distribution lines."
  },
  {
    number: "07",
    name: "Mining Chemicals & Separation Reagents",
    segment: "Industrial Feedstocks",
    items: ["Flocculants", "Cyanide Solutions", "Acid Leach Agents"],
    description: "Strictly regulated beneficiation compounds critical for gold, platinum-group metals (PGM), and copper extraction facilities."
  },
  {
    number: "08",
    name: "Agricultural Bulk Commodities & Fertilizers",
    segment: "Industrial Feedstocks",
    items: ["Bulk Nitrogen/Phosphorus/Potassium (NPK)", "Urea 46%", "Grains & Oilseeds"],
    description: "Large-tonnage soil nutrition inputs and grain commodity trades insulating food production corridors against global price spikes."
  },
  {
    number: "09",
    name: "Defense & Protected Vehicle Components",
    segment: "Strategic Logistics",
    items: ["Ballistic Grade Armor Plating", "High-Torque Powertrains", "Specialized Suspensions"],
    description: "Precision-grade materials and engineering assemblies governed by stringent export control and sovereign defense standards."
  },
  {
    number: "10",
    name: "Aviation Maintenance & Ground Support Equipment (GSE)",
    segment: "Strategic Logistics",
    items: ["Aircraft Tuggers", "Ground Power Units (GPU)", "Specialized Tooling"],
    description: "Capital equipment sourcing supporting commercial apron turnaround operations and airline fleet airworthiness."
  },
  {
    number: "11",
    name: "Commercial Building Materials & Prefab Structures",
    segment: "Strategic Logistics",
    items: ["Pre-stressed Concrete Elements", "Commercial Curtain Glass", "Modular Structures"],
    description: "Audited structural materials accelerating commercial precinct rollouts and logistics warehousing developments."
  },
  {
    number: "12",
    name: "Renewable Power & Grid Generation Hardware",
    segment: "Strategic Logistics",
    items: ["Industrial Solar PV Modules", "Commercial Inverters", "Utility Battery Energy Storage (BESS)"],
    description: "Clean energy infrastructure hardware facilitating captive commercial power solutions and microgrid installations."
  }
];

export const LINKEDIN_SERVICES = [
  "Project Capital Sourcing (R5M - R100M+)",
  "Financial Advisory & Structuring",
  "Commercial Real Estate & Development",
  "Management & Corporate Consulting",
  "Mortgage Lending & Institutional Loans",
  "Supply Chain Engineering & Logistics",
  "Strategic Corporate Planning",
  "Bulk Energy & Commodity Procurement",
  "Property Portfolio Management",
  "Non-profit & Social Enterprise Advisory"
];
