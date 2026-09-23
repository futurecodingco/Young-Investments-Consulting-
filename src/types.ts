export type PageId = 'home' | 'leadership' | 'capabilities' | 'governance' | 'inquiries';

export interface QuadPillar {
  id: string;
  title: string;
  category: string;
  summary: string;
  deepCopy: string;
  deliverables: string[];
  metrics: string;
  iconName: string;
}

export interface CareerMilestone {
  role: string;
  organization: string;
  type: 'State-Owned Enterprise' | 'Defense & Aerospace' | 'Corporate Holding' | 'Foundational / Advisory';
  period: string;
  highlights: string[];
  scope: string;
}

export interface CommodityCategory {
  number: string;
  name: string;
  segment: 'Energy & Petrochemicals' | 'Industrial Feedstocks' | 'Strategic Logistics';
  items: string[];
  description: string;
}

export interface IntakeSubmission {
  corporateName: string;
  representativeName: string;
  representativeDesignation: string;
  contactEmail: string;
  contactPhone: string;
  operationalRequirement: 'Project Capital Sourcing' | 'Bulk Commodity Sourcing' | 'Supply Chain Optimization' | 'Infrastructure Development';
  targetedFinancialScale: 'R5M – R20M' | 'R20M – R100M' | 'R100M+';
  projectLocation: string;
  projectOverview: string;
  ndaRequired: boolean;
  timestamp: string;
}

export interface CompanyRegistry {
  legalName: string;
  tradeName: string;
  enterpriseNumber: string;
  incorporationDate: string;
  status: string;
  healthScore: number;
  vatNumber: string;
  legalForm: string;
  physicalAddress: string;
  mailingAddress: string;
  primaryOfficer: string;
  officerRole: string;
  headquarters: string;
}

export interface InvestmentInsight {
  id: string;
  headline: string;
  category: 'Project Finance & Debt' | 'Commodities & Mining' | 'Energy & Transition' | 'Logistics & Infrastructure';
  date: string;
  source: string;
  summary: string;
  strategicImplication: string;
  keyMetric: string;
  region: string;
  highlight?: boolean;
}
