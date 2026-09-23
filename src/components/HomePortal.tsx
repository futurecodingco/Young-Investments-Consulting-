import React, { useState } from 'react';
import { PageId, QuadPillar } from '../types';
import { HERO_CONTENT, QUAD_PILLARS, COMPANY_DATA, CONTACT_INFO, CEO_BIO } from '../data';
import { 
  TrendingUp, 
  Layers, 
  Fuel, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Globe2, 
  FileText, 
  ChevronRight, 
  Landmark, 
  BadgeCheck, 
  Award, 
  PhoneCall, 
  Sparkles,
  MapPin,
  Anchor,
  Truck,
  MessageSquare,
  Activity,
  ExternalLink
} from 'lucide-react';
import ceoPortrait from '../assets/images/leslie_young_ceo_portrait_1790071601748.jpg';
import { InvestmentInsightsSection } from './InvestmentInsightsSection';
import { CeoPortraitCard } from './CeoPortraitCard';

interface HomePortalProps {
  onNavigate: (page: PageId) => void;
  onOpenLogoModal: () => void;
}

interface TradeCorridor {
  id: string;
  name: string;
  type: string;
  region: string;
  focus: string;
  leadTime: string;
  strategicValue: string;
}

const TRADE_CORRIDORS: TradeCorridor[] = [
  {
    id: 'pretoria',
    name: 'Pretoria Institutional HQ',
    type: 'Corporate Seat',
    region: 'Gauteng, South Africa',
    focus: 'Capital Structuring & Executive Command',
    leadTime: 'Immediate Direct Access',
    strategicValue: 'Direct liaison with South African SOEs, government ministries, commercial banks, and private equity syndicates.'
  },
  {
    id: 'durban',
    name: 'Port of Durban & Island View',
    type: 'Petrochemical & Bulk Hub',
    region: 'KwaZulu-Natal Coast',
    focus: 'Diesel 50ppm, Jet A-1 & Heavy Fuel Oil',
    leadTime: '24-48 hr Off-take / Ex-Tank',
    strategicValue: 'The primary maritime entry point for Southern Africa, supporting high-volume bonded storage and refinery tank transfers.'
  },
  {
    id: 'richardsbay',
    name: 'Port of Richards Bay',
    type: 'Deepwater Dry Bulk Terminal',
    region: 'Northern KwaZulu-Natal',
    focus: 'Coal, Chrome & Industrial Minerals',
    leadTime: '3-5 Days Train Scheduling',
    strategicValue: 'Specialized deepwater berths capable of handling Capesize vessels for bulk mining exports to Asian and European off-takers.'
  },
  {
    id: 'maputo',
    name: 'Maputo Corridor Gateway',
    type: 'Cross-Border Rail & Road Arterial',
    region: 'Mpumalanga to Mozambique',
    focus: 'Fertilizer, LNG & Transit Freight',
    leadTime: '48 hr Border Clearance',
    strategicValue: 'High-speed alternative transit corridor bypassing coastal port bottlenecks for fast regional re-export.'
  },
  {
    id: 'walvis',
    name: 'Walvis Bay Corridor Link',
    type: 'Atlantic Deepwater Routing',
    region: 'Namibia / Trans-Kalahari',
    focus: 'Mining Consumables & European Imports',
    leadTime: '5-7 Days Transit',
    strategicValue: 'Fast Atlantic gateway connecting the Americas and Western Europe directly to Gauteng and the Copperbelt.'
  },
  {
    id: 'beitbridge',
    name: 'Beitbridge Northbound Corridor',
    type: 'SADC North Overland Gateway',
    region: 'Limpopo / Zimbabwe Border',
    focus: 'Refined Fuel, Cement & FMCG Fleets',
    leadTime: 'Pre-cleared Customs Escorts',
    strategicValue: 'The busiest overland arterial in Sub-Saharan Africa, serving as the lifelines for Zambia, DRC, and Zimbabwe.'
  }
];

export const HomePortal: React.FC<HomePortalProps> = ({ onNavigate, onOpenLogoModal }) => {
  const [activeCorridor, setActiveCorridor] = useState<TradeCorridor>(TRADE_CORRIDORS[0]);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#c5a059]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#c5a059]" />;
      case 'Fuel': return <Fuel className="w-6 h-6 text-[#c5a059]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#c5a059]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#c5a059]" />;
    }
  };

  return (
    <div id="home-portal-page" className="w-full">
      {/* Live Indicative Market & Capital Benchmark Ticker */}
      <div className="w-full bg-[#080d16] border-b border-slate-800/90 py-2.5 px-4 overflow-x-auto text-[11px] font-mono scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 whitespace-nowrap text-slate-400">
          <div className="flex items-center gap-2 text-[#c5a059]">
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span className="font-semibold uppercase tracking-wider text-[10px]">Indicative Desks:</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="text-slate-300 font-semibold">Low-Sulphur Diesel 50ppm:</span>
              <span className="text-emerald-400 font-bold">$645.00/MT (CIF Durban)</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-slate-300 font-semibold">Jet A-1 Aviation Fuel:</span>
              <span className="text-emerald-400 font-bold">$78.80/bbl (Ex-Tank)</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-slate-300 font-semibold">Project Debt Facility Range:</span>
              <span className="text-[#c5a059] font-bold">R5,000,000 – R100,000,000+</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-slate-300 font-semibold">USD / ZAR Reference:</span>
              <span className="text-slate-200">18.15</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3 h-3" />
              <span>CIPC Registry: Active (K2020170638)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hero Zone */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-800/80">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-950/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#c5a059]/40 text-xs text-slate-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
            <span className="font-semibold text-[#c5a059]">Pan-African Advisory & Holdings</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Reg. K2020170638</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
                Bridging Capital,{' '}
                <span className="gold-gradient-text block sm:inline">Sourcing Commodities,</span>{' '}
                Securing Logistics Across Africa.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-light">
                {HERO_CONTENT.subhead}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  id="hero-primary-cta"
                  onClick={() => onNavigate('inquiries')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-[#e7c776] via-[#c5a059] to-[#a87f2d] hover:brightness-110 rounded-lg shadow-[0_4px_20px_rgba(197,160,89,0.35)] transition-all cursor-pointer"
                >
                  <span>{HERO_CONTENT.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => onNavigate('leadership')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-[#c5a059]/50 rounded-lg transition-all cursor-pointer"
                >
                  <Award className="w-4 h-4 text-[#c5a059]" />
                  <span>Executive Pedigree</span>
                </button>

                <button
                  id="hero-logo-btn"
                  onClick={onOpenLogoModal}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold text-[#c5a059] bg-[#c5a059]/10 hover:bg-[#c5a059]/20 border border-[#c5a059]/30 rounded-lg transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Brand Crest & Specs</span>
                </button>
              </div>

              {/* Fast Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white">15+ Years</div>
                  <div className="text-xs text-slate-400 mt-0.5">Procurement Command</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-[#c5a059]">12 Sectors</div>
                  <div className="text-xs text-slate-400 mt-0.5">Bulk Commodity Scope</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white">R5M – R100M+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Capital Structuring</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-emerald-400 font-mono">83 / 100</div>
                  <div className="text-xs text-slate-400 mt-0.5">Registry Health Score</div>
                </div>
              </div>
            </div>

            {/* Right Strategic Visual Card */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl bg-gradient-to-b from-[#111927] to-[#0a101b] border border-[#c5a059]/30 p-6 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                      Corporate Directive
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active Entity
                  </span>
                </div>

                <div className="mt-4 space-y-3.5 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Registered Entity</span>
                    <strong className="text-white text-sm font-semibold">{COMPANY_DATA.legalName}</strong>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                      <span className="text-slate-400 block text-[10px] uppercase">Enterprise No</span>
                      <span className="font-mono text-slate-200 font-semibold">{COMPANY_DATA.enterpriseNumber}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                      <span className="text-slate-400 block text-[10px] uppercase">VAT Registration</span>
                      <span className="font-mono text-slate-200 font-semibold">{COMPANY_DATA.vatNumber}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Operational Base</span>
                    <div className="text-slate-200 font-medium">{COMPANY_DATA.headquarters}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{COMPANY_DATA.physicalAddress}</div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/30">
                    <div className="text-[11px] font-semibold text-[#c5a059]">Executive Leadership</div>
                    <div className="text-white font-medium">{CEO_BIO.name}</div>
                    <div className="text-[11px] text-slate-300">Ex-SAA Strategy Sourcing • Ex-ACSA Senior Buyer</div>
                  </div>

                  <button
                    id="hero-verify-dossier-btn"
                    onClick={() => onNavigate('governance')}
                    className="w-full py-2.5 px-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>View Official CIPC Registry Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Quad-Pillar Matrix (Main Body) */}
      <section className="py-16 md:py-24 bg-[#060a10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] tracking-wider uppercase mb-3">
              Strategic Advisory Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              The Quad-Pillar Operational Matrix
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              Four specialized, mutually reinforcing divisions built to clear execution bottlenecks, structure multi-million-rand capital, and ensure uninterrupted cross-border supply chains.
            </p>
          </div>

          {/* Grid of 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {QUAD_PILLARS.map((pillar, index) => (
              <div
                key={pillar.id}
                id={`pillar-card-${pillar.id}`}
                className="group relative rounded-xl bg-gradient-to-b from-[#0f1726] to-[#090e18] border border-slate-800 hover:border-[#c5a059]/60 p-7 shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold">
                      PILLAR 0{index + 1}
                    </span>
                  </div>

                  <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase mb-1.5">
                    {pillar.category}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#f4dc95] transition-colors mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {pillar.summary}
                  </p>

                  {/* Core Deliverables List */}
                  <div className="space-y-2 pt-3 border-t border-slate-800/80 mb-6">
                    {pillar.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-[#c5a059] font-medium">
                    {pillar.metrics}
                  </span>
                  <button
                    id={`pillar-learn-more-${pillar.id}`}
                    onClick={() => onNavigate('capabilities')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#c5a059] transition-colors cursor-pointer"
                  >
                    <span>Capabilities Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Band */}
          <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#121c2c] via-[#0f1726] to-[#121c2c] border border-[#c5a059]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
                Tailored Institutional Engagement
              </div>
              <h4 className="text-lg sm:text-xl font-display font-bold text-white">
                Require structured debt, equity syndication, or bulk fuel allocations?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Direct engagement with Leslie Flint Young and the executive advisory desk.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                id="home-direct-call-cta"
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Call {CONTACT_INFO.phoneDisplay}</span>
              </a>
              <button
                id="home-intake-cta"
                onClick={() => onNavigate('inquiries')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-slate-950 text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all shadow"
              >
                <span>Consultation Intake Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SADC Strategic Trade & Capital Corridors Interactive Module */}
      <section className="py-16 md:py-24 bg-[#080e18] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] uppercase tracking-wider mb-2">
                <Globe2 className="w-3.5 h-3.5" />
                Cross-Border Logistics Command
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                SADC Strategic Trade & Capital Corridors
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                Young Investments coordinates procurement, customs bonding, and capital structuring along the vital supply lines connecting South Africa to regional markets.
              </p>
            </div>
            <span className="text-xs font-mono text-[#c5a059] self-start md:self-end">
              Select a Corridor Node below:
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Corridor Selector Buttons */}
            <div className="lg:col-span-5 space-y-2">
              {TRADE_CORRIDORS.map((corridor) => {
                const isActive = activeCorridor.id === corridor.id;
                return (
                  <button
                    key={corridor.id}
                    onClick={() => setActiveCorridor(corridor)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#172338] to-[#111927] border-[#c5a059] shadow-lg text-white' 
                        : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono text-[#c5a059] uppercase tracking-wider mb-0.5">
                        {corridor.type}
                      </div>
                      <div className="text-sm font-bold text-white">
                        {corridor.name}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {corridor.region}
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#c5a059] translate-x-1' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Corridor Dossier */}
            <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-[#0f1726] to-[#0a101b] border border-[#c5a059]/40 p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Anchor className="w-5 h-5 text-[#c5a059]" />
                  <span className="text-xs font-mono font-semibold uppercase text-white">
                    Corridor Profile: {activeCorridor.name}
                  </span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30">
                  {activeCorridor.leadTime}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Strategic Mandate & Logistics Value:
                  </span>
                  <p className="text-sm sm:text-base text-slate-200 mt-1 leading-relaxed font-light">
                    {activeCorridor.strategicValue}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Primary Commodities</span>
                    <strong className="text-xs text-[#c5a059] block mt-1">{activeCorridor.focus}</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Jurisdiction Scope</span>
                    <strong className="text-xs text-white block mt-1">{activeCorridor.region}</strong>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Require freight escort, customs bonded clearance, or allocation off-take?
                  </div>
                  <button
                    onClick={() => onNavigate('capabilities')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c5a059] text-slate-950 text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                  >
                    <span>View Logistics Capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* African Investment Insights & Market Intelligence Section */}
      <InvestmentInsightsSection onNavigate={onNavigate} />

      {/* Refined Executive Leadership Spotlight on Home Portal */}
      <section className="py-16 md:py-24 border-t border-slate-800/80 bg-[#090f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-2xl bg-gradient-to-r from-[#101828] via-[#0d1422] to-[#101828] border border-[#c5a059]/40 p-6 sm:p-10 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Executive Portrait Card with Instant Authentic Photo Support */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <CeoPortraitCard maxWidthClass="max-w-xs" />

                <div className="w-full max-w-xs mt-3 text-center">
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct: +27 78 829 0637</span>
                  </a>
                </div>
              </div>

              {/* Executive Overview & Credibility Statement */}
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059]">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Executive Leadership Spotlight
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Steered by Institutional Procurement Veteran Leslie Flint Young
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Over a multi-decade career steering procurement frameworks for South Africa's most critical state-owned enterprises, Mr. Young links international capital consortia with large-scale African infrastructure, refinery fuel allocations, and industrial commodity flows.
                </p>

                <blockquote className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-l-[#c5a059] border-y border-r border-slate-800/80 text-xs sm:text-sm text-slate-300 italic font-light">
                  "In high-capital markets across Southern Africa, true value is forged through verified supply chains, ironclad contractual governance, and direct on-the-ground presence."
                </blockquote>

                {/* Pedigree Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-[#c5a059] font-bold block">Former Strategy Sourcing</span>
                    <span className="text-slate-300 text-[11px]">South African Airways (SAA)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-[#c5a059] font-bold block">Former Senior Buyer</span>
                    <span className="text-slate-300 text-[11px]">Airports Company SA (ACSA)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-[#c5a059] font-bold block">Former Contracts Manager</span>
                    <span className="text-slate-300 text-[11px]">LMT Products / Denel Dynamics</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    id="home-view-ceo-profile"
                    onClick={() => onNavigate('leadership')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c5a059] text-slate-950 text-xs font-semibold tracking-wider uppercase hover:brightness-110 transition-all cursor-pointer"
                  >
                    <span>Read Full Executive Biography</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    id="home-contact-ceo-desk"
                    onClick={() => onNavigate('inquiries')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <span>Direct Advisory Desk Intake</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#c5a059]" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
