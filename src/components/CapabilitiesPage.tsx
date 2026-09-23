import React, { useState } from 'react';
import { PageId, CommodityCategory } from '../types';
import { TWELVE_COMMODITIES } from '../data';
import { 
  TrendingUp, 
  Fuel, 
  Layers, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  ShieldCheck, 
  Calculator, 
  Filter,
  DollarSign,
  Truck,
  FileCheck2,
  ChevronRight
} from 'lucide-react';

interface CapabilitiesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectRequirement?: (req: string, scale: string) => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ 
  onNavigate,
  onSelectRequirement 
}) => {
  const [selectedSegment, setSelectedSegment] = useState<string>('All');
  const [activeCommodity, setActiveCommodity] = useState<CommodityCategory | null>(null);

  // Interactive Capital Sourcing Estimator state
  const [calcScale, setCalcScale] = useState<'R5M – R20M' | 'R20M – R100M' | 'R100M+'>('R20M – R100M');
  const [calcType, setCalcType] = useState<string>('Project Capital Sourcing');
  const [calcAssetClass, setCalcAssetClass] = useState<string>('Energy & Bulk Infrastructure');

  const segments = ['All', 'Energy & Petrochemicals', 'Industrial Feedstocks', 'Strategic Logistics'];

  const filteredCommodities = selectedSegment === 'All'
    ? TWELVE_COMMODITIES
    : TWELVE_COMMODITIES.filter(c => c.segment === selectedSegment);

  const handleLaunchIntakeWithParams = () => {
    if (onSelectRequirement) {
      onSelectRequirement(calcType, calcScale);
    }
    onNavigate('inquiries');
  };

  return (
    <div id="capabilities-page" className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] tracking-wider uppercase mb-3">
            Institutional Execution Modules
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Our Capabilities & Sectors
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
            Engineered specifically for institutional enterprises, state agencies, and multi-million-rand private developers demanding rigorous corporate governance and reliable cross-border execution.
          </p>
        </div>

        {/* Section 1: Capital Structure & Intermediary Funding */}
        <div id="section-capital-structure" className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1624] via-[#090f1a] to-[#060a12] border border-[#c5a059]/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#c5a059]" />
              </div>
              <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase">
                Section 1 • Capital Advisory
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Capital Structure & Intermediary Funding
              </h2>
              <div className="inline-block font-mono text-xs font-semibold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                Targeted Scale: R5M – R100M+
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-light p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-white font-medium">Project Finance Sourcing:</strong> We clear the path for large-scale development by auditing project financial viability and matching high-yield infrastructure, mining, agricultural, and real estate initiatives with cross-border investment consortia.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Debt & Equity Structuring</div>
                  <p className="text-xs text-slate-400">Auditing capital requirements, preparing Information Memorandums, and aligning with institutional risk appetites.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Cross-Border Syndication</div>
                  <p className="text-xs text-slate-400">Connecting regional African project sponsors to private credit funds, DFIs, and institutional mezzanine providers.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Due Diligence Assurance</div>
                  <p className="text-xs text-slate-400">Verifying bankable engineering feasibilities, off-take security, and regulatory permissions prior to capital deployment.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Bespoke Capital Instruments</div>
                  <p className="text-xs text-slate-400">Convertible notes, concessionary debt structures, and structured supplier credit lines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Industrial Sourcing & Bulk Commodity Logistics (Oil & Gas) */}
        <div id="section-commodity-procurement" className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1624] via-[#090f1a] to-[#060a12] border border-slate-800 hover:border-[#c5a059]/40 transition-all shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center">
                <Fuel className="w-6 h-6 text-[#c5a059]" />
              </div>
              <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase">
                Section 2 • Bulk Sourcing
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Industrial Sourcing & Bulk Commodity Logistics
              </h2>
              <div className="inline-block font-mono text-xs font-semibold text-[#c5a059] px-2.5 py-1 rounded bg-[#c5a059]/10 border border-[#c5a059]/20">
                Oil, Gas & Energy Infrastructure Feedstocks
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-light p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-white font-medium">Oil, Gas, and Raw Material Procurement:</strong> Operating deeply within highly volatile commodity markets, we secure critical inputs for energy infrastructure. We mitigate procurement risk by controlling strict vendor compliance, cross-border custom clearing, road transport routing, and logistics management.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Refinery Allocation Contracts</div>
                  <p className="text-xs text-slate-400">Direct allocation channels for Wholesale Diesel 50ppm and Jet A-1 kerosene backed by verifiable refinery proof of product.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Quality & SGS Specification</div>
                  <p className="text-xs text-slate-400">Ensuring zero flashpoint or contamination deviations through accredited independent laboratory batch certifications.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Transit Routing & Customs Escort</div>
                  <p className="text-xs text-slate-400">Over-the-road tanker fleet dispatch, bonded road freight transit permits, and cross-border SADC corridor clearance.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Commercial Hedging & Payment</div>
                  <p className="text-xs text-slate-400">Support for standby letters of credit (SBLC), documentary collections, and secure escrow settlement mechanisms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: End-to-End Supply Chain Engineering */}
        <div id="section-supply-chain" className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1624] via-[#090f1a] to-[#060a12] border border-slate-800 hover:border-[#c5a059]/40 transition-all shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center">
                <Layers className="w-6 h-6 text-[#c5a059]" />
              </div>
              <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase">
                Section 3 • Operations Advisory
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                End-to-End Supply Chain Engineering
              </h2>
              <div className="inline-block font-mono text-xs font-semibold text-blue-400 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                National Transport Hub Heritage
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-light p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-white font-medium">Enterprise Advisory:</strong> Utilizing frameworks honed within national transport hubs, we map enterprise supply networks to eliminate systemic cost leaks, enhance demand planning models, and establish ironclad supplier SLA protocols.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Systemic Cost Leak Elimination</div>
                  <p className="text-xs text-slate-400">Granular procurement audit uncovering uncompetitive sole-source contracts, demurrage fees, and tariff inefficiencies.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Ironclad Supplier SLAs</div>
                  <p className="text-xs text-slate-400">Designing actionable key performance indicators, penalty frameworks, and contract enforcement terms.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Bonded Warehousing Architecture</div>
                  <p className="text-xs text-slate-400">Optimizing inland port depots, customs deferment accounts, and just-in-time inventory buffering.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Strategic Sourcing Transformation</div>
                  <p className="text-xs text-slate-400">Migrating legacy purchasing departments into proactive, strategic sourcing centers of excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Property Development Consulting */}
        <div id="section-property-development" className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0e1624] via-[#090f1a] to-[#060a12] border border-slate-800 hover:border-[#c5a059]/40 transition-all shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#c5a059]" />
              </div>
              <div className="text-xs font-semibold tracking-wider text-[#c5a059] uppercase">
                Section 4 • Built Environment
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Property Development Consulting
              </h2>
              <div className="inline-block font-mono text-xs font-semibold text-amber-400 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                Spatial Planning & Zoning
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-light p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-white font-medium">Precinct Advisory:</strong> Advising institutional landholders on spatial planning, commercial zoning, and structural feasibility to maximize land value and unlock development finance.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Commercial & Industrial Rezoning</div>
                  <p className="text-xs text-slate-400">Navigating municipal planning tribunals, environmental authorizations, and bulk service contributions.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Developer Equity & Yield Analysis</div>
                  <p className="text-xs text-slate-400">Financial cash-flow modeling, IRR projections, construction draw scheduling, and bankability audits.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Logistics & Industrial Parks</div>
                  <p className="text-xs text-slate-400">Site layout planning tailored for heavy freight turning radiuses, high-bay racking, and container staging.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <div className="font-semibold text-white text-xs mb-1">Mortgage & Construction Finance</div>
                  <p className="text-xs text-slate-400">Arranging commercial property bonds, senior debt facilities, and joint-venture equity partnerships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 12 Complex Commodity Sectors Matrix */}
        <div id="commodities-matrix" className="pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
                Executive Technical Command
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                The 12 Core Commodity Sectors
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl">
                Mastery spanning 12 distinct commodity categories, import/export compliance, bonded warehousing, and cross-border transit logistics:
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-slate-900 border border-slate-800">
              {segments.map((seg) => (
                <button
                  key={seg}
                  onClick={() => setSelectedSegment(seg)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                    selectedSegment === seg
                      ? 'bg-[#c5a059] text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {seg}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Commodities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCommodities.map((item) => (
              <div
                key={item.number}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-[#c5a059]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-[#c5a059]">
                      SECTOR {item.number}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono px-2 py-0.5 rounded bg-slate-800">
                      {item.segment}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[10px] uppercase font-semibold text-slate-400 mb-1.5">
                    Standard Inputs:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.items.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Capital & Project Feasibility Estimator */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#111a28] via-[#0d1522] to-[#111a28] border border-[#c5a059]/50 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Preliminary Engagement Estimator
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Targeted Capital & Sourcing Scope Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Select your organization's targeted capital requirement or commodity sourcing volume to preview typical structuring timelines and transfer directly to our Strategic Intake Desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Field 1: Operational Requirement */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                Operational Requirement
              </label>
              <select
                value={calcType}
                onChange={(e) => setCalcType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a059]"
              >
                <option value="Project Capital Sourcing">Project Capital Sourcing</option>
                <option value="Bulk Commodity Sourcing">Bulk Commodity Sourcing (Oil & Gas)</option>
                <option value="Supply Chain Optimization">Supply Chain Optimization</option>
                <option value="Infrastructure Development">Infrastructure & Property Development</option>
              </select>
            </div>

            {/* Field 2: Target Financial Scale */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                Targeted Financial Scale
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {(['R5M – R20M', 'R20M – R100M', 'R100M+'] as const).map((sc) => (
                  <button
                    key={sc}
                    type="button"
                    onClick={() => setCalcScale(sc)}
                    className={`py-2 px-1 text-center rounded text-xs font-semibold transition-all cursor-pointer ${
                      calcScale === sc
                        ? 'bg-[#c5a059] text-slate-950 font-bold'
                        : 'bg-slate-900 text-slate-300 border border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {sc}
                  </button>
                ))}
              </div>
            </div>

            {/* Field 3: Sector Asset Class */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                Industry Domain
              </label>
              <select
                value={calcAssetClass}
                onChange={(e) => setCalcAssetClass(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a059]"
              >
                <option value="Energy & Bulk Infrastructure">Energy & Bulk Infrastructure (Oil/Gas)</option>
                <option value="Mining & Beneficiation">Mining & Mineral Beneficiation</option>
                <option value="Commercial Property & Precincts">Commercial Property & Precincts</option>
                <option value="Agriculture & Fertilizer Supply">Agro-Processing & Fertilizer Bulk</option>
                <option value="Transport & Aviation Fleet Logistics">Transport & Aviation Fleet Logistics</option>
              </select>
            </div>
          </div>

          {/* Preliminary Output Card */}
          <div className="mt-8 p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs text-slate-400 font-mono">
                Selected Advisory Profile: <span className="text-white font-semibold">{calcType}</span> • <span className="text-[#c5a059] font-semibold">{calcScale}</span>
              </div>
              <div className="text-xs text-slate-300">
                Preliminary Feasibility Review: <strong className="text-white">Direct Executive Audit with Leslie Flint Young (CEO)</strong>
              </div>
            </div>

            <button
              id="calc-proceed-to-intake-btn"
              onClick={handleLaunchIntakeWithParams}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-slate-950 text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shrink-0"
            >
              <span>Transfer to Strategic Intake Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
