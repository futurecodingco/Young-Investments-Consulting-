import React, { useState } from 'react';
import { InvestmentInsight, PageId } from '../types';
import { INVESTMENT_INSIGHTS } from '../data/investmentInsights';
import { 
  TrendingUp, 
  Globe2, 
  Landmark, 
  Truck, 
  Zap, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Search, 
  X,
  FileText,
  Building2,
  Calendar,
  Layers,
  Sparkles,
  ChevronRight,
  Activity
} from 'lucide-react';

interface InvestmentInsightsSectionProps {
  onNavigate: (page: PageId) => void;
}

type FilterCategory = 'All' | 'Project Finance & Debt' | 'Logistics & Infrastructure' | 'Energy & Transition' | 'Commodities & Mining';

export const InvestmentInsightsSection: React.FC<InvestmentInsightsSectionProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [selectedInsight, setSelectedInsight] = useState<InvestmentInsight | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  React.useEffect(() => {
    if (!selectedInsight) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedInsight(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedInsight]);

  const categories: FilterCategory[] = [
    'All',
    'Project Finance & Debt',
    'Logistics & Infrastructure',
    'Energy & Transition',
    'Commodities & Mining'
  ];

  const filteredInsights = INVESTMENT_INSIGHTS.filter((insight) => {
    const matchesCategory = activeCategory === 'All' || insight.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      insight.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: InvestmentInsight['category']) => {
    switch (category) {
      case 'Project Finance & Debt':
        return <Landmark className="w-3.5 h-3.5 text-[#c5a059]" />;
      case 'Logistics & Infrastructure':
        return <Truck className="w-3.5 h-3.5 text-blue-400" />;
      case 'Energy & Transition':
        return <Zap className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Commodities & Mining':
        return <Layers className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <TrendingUp className="w-3.5 h-3.5 text-[#c5a059]" />;
    }
  };

  return (
    <section id="investment-insights-section" className="py-16 md:py-24 bg-[#05080f] border-t border-slate-800 relative">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(197,160,89,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] tracking-wider uppercase">
              <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              <span>Investment Insights & Market Intelligence</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              African Project Finance & Commodity Horizons
            </h2>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Curated intelligence tracking sovereign infrastructure allocations, domestic capital mobilization, private rail concessions, and commodity off-take flow dynamics across South Africa and the broader SADC trade bloc.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="insights-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search trends, minerals, corridors..."
                className="w-full sm:w-64 pl-9 pr-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#c5a059]/60 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              id="insights-intake-cta-header"
              onClick={() => onNavigate('inquiries')}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#c5a059] text-slate-950 text-xs font-semibold tracking-wider uppercase hover:brightness-110 transition-all cursor-pointer shrink-0"
            >
              <span>Consult Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#c5a059] text-slate-950 font-bold shadow-md shadow-[#c5a059]/20'
                  : 'bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat === 'All' ? 'All Market Intel' : cat}
            </button>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((insight) => (
            <article
              key={insight.id}
              className={`rounded-2xl bg-gradient-to-b from-[#0e1422] to-[#080d16] border transition-all duration-300 flex flex-col justify-between p-6 group hover:translate-y-[-2px] ${
                insight.highlight 
                  ? 'border-[#c5a059]/40 shadow-[0_10px_30px_rgba(197,160,89,0.08)]' 
                  : 'border-slate-800/90 hover:border-slate-700 shadow-lg'
              }`}
            >
              <div className="space-y-4">
                {/* Meta Top: Category Pill, Region & Date */}
                <div className="flex items-center justify-between gap-2 text-[11px]">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                    {getCategoryIcon(insight.category)}
                    <span>{insight.category}</span>
                  </div>

                  <span className="text-slate-500 font-mono text-[10px]">{insight.date}</span>
                </div>

                {/* Headline */}
                <h3 className="text-base font-display font-bold text-white group-hover:text-[#c5a059] transition-colors leading-snug">
                  {insight.headline}
                </h3>

                {/* Region & Source Attribution */}
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <span className="text-[#c5a059] font-medium">{insight.region}</span>
                  <span>•</span>
                  <span className="truncate">{insight.source}</span>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-xs leading-relaxed font-light line-clamp-3">
                  {insight.summary}
                </p>

                {/* Strategic Take Box */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[11px] space-y-1">
                  <div className="text-[#c5a059] font-semibold flex items-center gap-1 text-[10px] uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Advisory Mandate Impact</span>
                  </div>
                  <p className="text-slate-300 font-light leading-snug">
                    {insight.strategicImplication}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#c5a059] text-[11px] font-mono font-bold">
                  <span>{insight.keyMetric}</span>
                </div>

                <button
                  id={`view-insight-${insight.id}`}
                  onClick={() => setSelectedInsight(insight)}
                  className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-[#c5a059] transition-colors font-medium cursor-pointer"
                >
                  <span>Examine Brief</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredInsights.length === 0 && (
          <div className="p-10 rounded-2xl bg-slate-900/50 border border-slate-800 text-center space-y-3">
            <p className="text-slate-400 text-sm">No intelligence items match your search parameter "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="text-xs text-[#c5a059] underline hover:text-amber-300"
            >
              Reset filters and view all market intelligence
            </button>
          </div>
        )}

        {/* Advisory Cross-Tie Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#121a2c] via-[#0f1625] to-[#121a2c] border border-[#c5a059]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono font-semibold text-[#c5a059] uppercase tracking-wider">
              Transaction Structuring & Commodity Offtake Advisory
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white">
              Positioning Your Project Capital & Supply Chain Within These SADC Shifts
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl font-light">
              Young Investments Consulting Holdings leverages verified domestic banking channels, Transnet rail allocation networks, and physical bonded terminal storage to structure bankable projects and direct off-take agreements.
            </p>
          </div>

          <button
            id="insights-bottom-inquire-btn"
            onClick={() => onNavigate('inquiries')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#c5a059] text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shrink-0 shadow-lg"
          >
            <span>Initiate Capital or Commodity Intake</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Institutional Brief Modal */}
      {selectedInsight && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedInsight(null)}
        >
          <div 
            className="relative w-full max-w-2xl rounded-2xl bg-[#0b101b] border border-[#c5a059]/50 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-[#c5a059]">
                  {getCategoryIcon(selectedInsight.category)}
                  <span>{selectedInsight.category}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 font-mono text-[10px]">{selectedInsight.region}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white leading-snug">
                  {selectedInsight.headline}
                </h3>
              </div>

              <button
                onClick={() => setSelectedInsight(null)}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              <div>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block mb-1">
                  Market Context & Grounded Intelligence:
                </span>
                <p>{selectedInsight.summary}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Executive Strategic Implication (Leslie Flint Young Advisory Mandate):</span>
                </div>
                <p className="text-slate-200">
                  {selectedInsight.strategicImplication}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block uppercase">Validated Intelligence Source</span>
                  <span className="text-slate-300 font-medium">{selectedInsight.source}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block uppercase">Benchmark Valuation / Scale</span>
                  <span className="text-[#c5a059] font-bold">{selectedInsight.keyMetric}</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-slate-400 text-center sm:text-left">
                Ref: {selectedInsight.id} • Verified SADC Intelligence Matrix
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedInsight(null)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium hover:bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedInsight(null);
                    onNavigate('inquiries');
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#c5a059] text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-110"
                >
                  <span>Initiate Intake For This Trend</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
