import React from 'react';
import { PageId } from '../types';
import { CEO_BIO, CAREER_MILESTONES, LINKEDIN_SERVICES, CONTACT_INFO, COMPANY_DATA } from '../data';
import { 
  Building, 
  Plane, 
  Shield, 
  Briefcase, 
  HeartHandshake, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ArrowRight, 
  Award, 
  CheckCircle,
  ExternalLink,
  Calendar,
  Share2,
  ShieldCheck,
  CheckCircle2,
  Lock,
  MessageSquare,
  FileText,
  Compass,
  Zap,
  Video
} from 'lucide-react';
import { CeoPortraitCard } from './CeoPortraitCard';

interface LeadershipPageProps {
  onNavigate: (page: PageId) => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate }) => {
  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case 'State-Owned Enterprise':
        return <Plane className="w-5 h-5 text-[#c5a059]" />;
      case 'Defense & Aerospace':
        return <Shield className="w-5 h-5 text-[#c5a059]" />;
      case 'Corporate Holding':
        return <Building className="w-5 h-5 text-[#c5a059]" />;
      case 'Foundational / Advisory':
        return <HeartHandshake className="w-5 h-5 text-[#c5a059]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#c5a059]" />;
    }
  };

  return (
    <div id="leadership-page" className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            Executive Leadership & Institutional Trust Anchor
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Executive Leadership
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
            Decades of institutional procurement governance, strategic state-owned enterprise sourcing, and cross-border project facilitation across the African continent.
          </p>
        </div>

        {/* Executive Profile Showcase Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#101827] via-[#0d1422] to-[#090f19] border border-[#c5a059]/40 p-6 sm:p-10 shadow-2xl mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* CEO Portrait Column with Instant Authentic Photo Support */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <CeoPortraitCard aspectRatioClass="aspect-square" maxWidthClass="max-w-md" />

              {/* Direct Reach Pill */}
              <div className="w-full max-w-md mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2.5">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                    Direct CEO Line:
                  </span>
                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="font-mono text-[#c5a059] font-bold hover:underline">
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                    Direct Email:
                  </span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-mono text-slate-200 hover:text-[#c5a059] truncate max-w-[200px]">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-slate-400 text-[11px]">
                  <span>Statutory Authority:</span>
                  <span className="text-emerald-400 font-mono font-semibold">Active Director & Board Lead</span>
                </div>
              </div>
            </div>

            {/* CEO Biography Text Block (Blueprint Exact Copy) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#c5a059] uppercase">
                  <span>Founder & Director</span>
                  <span>•</span>
                  <span>Enterprise K2020170638</span>
                  <span>•</span>
                  <span>Pretoria, South Africa</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-1">
                  Leslie Flint Young
                </h2>
                <div className="text-sm font-semibold text-[#c5a059] mt-1">
                  Chief Executive Officer — Young Investments Consulting Holdings (Pty) Ltd
                </div>
              </div>

              {/* Verified Exact Copy-Paste Bio Text Block */}
              <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-light">
                <p>
                  <strong className="text-white font-medium">Leslie Flint Young</strong> serves as the Chief Executive Officer of Young Investments Consulting Holdings (Pty) Ltd. Over a multi-decade career in high-stakes operational ecosystems, Mr. Young has built a formidable reputation as a master of complex supply chain dynamics and corporate governance.
                </p>
                <p>
                  Prior to establishing the Holdings firm in March 2020, he engineered procurement frameworks for some of South Africa's most critical state-owned enterprises and private corporations. His exceptional career pedigree includes serving as the <span className="text-white font-medium">Strategy Sourcing Specialist for South African Airways (SAA)</span>, operating as a <span className="text-white font-medium">Senior Buyer for the Airports Company South Africa (ACSA)</span>, and serving as <span className="text-white font-medium">Contracts Manager at LMT Products / Denel Dynamics</span>. He also held prominent management seats as Chief Executive of Revelations Isambulo Holdings and Managing Director of the Young Foundation South Africa.
                </p>
                <p>
                  Armed with cross-functional technical expertise spanning 12 distinct commodity categories, import/export compliance, bonded warehousing, and regional freight logistics, Mr. Young acts as a critical link between global capital providers and major developmental projects.
                </p>
              </div>

              {/* Core Credential Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
                {CEO_BIO.coreStats.map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-lg sm:text-xl font-display font-bold text-white">{stat.value}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Verified Digital Footprint Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  id="ceo-linkedin-profile-link"
                  href={CONTACT_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-white text-xs font-semibold border border-[#0077b5]/40 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>Verified LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  id="ceo-meta-profile-link"
                  href={CONTACT_INFO.metaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-900/20 hover:bg-blue-900/30 text-white text-xs font-semibold border border-blue-700/40 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Meta Platform Profile ({CONTACT_INFO.metaHandle})</span>
                </a>

                <a
                  id="ceo-tiktok-profile-link"
                  href={CONTACT_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700/60 hover:border-cyan-400/40 transition-colors"
                >
                  <Video className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TikTok ({CONTACT_INFO.tiktokHandle})</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <button
                  id="ceo-initiate-consultation-btn"
                  onClick={() => onNavigate('inquiries')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-slate-950 text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow"
                >
                  <span>Engage Mr. Young Directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Verification: Field Command & Operational Governance */}
        <div className="mb-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0c1422] via-[#090f19] to-[#0c1422] border border-slate-800 shadow-xl">
          <div className="max-w-4xl space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              The Field Command Advantage
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Ground-Level Verification Across African Corridors
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Unlike detached financial intermediaries who operate exclusively behind computer terminals, Leslie Flint Young is recognized for in-person operational oversight. Whether conducting physical logistics assessments at Southern African port terminals, reviewing rezoning site topographies for multi-hectare property developments, or verifying refinery allocations ex-tank, our executive desk provides direct, on-the-ground certainty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#c5a059]" />
                  Direct Supplier Negotiations
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Direct access to primary refinery allocations, eliminating broker chains and ensuring verifiable SGS inspection standards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                  Physical Project Audits
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  On-site physical site inspections across Gauteng, Mpumalanga, KwaZulu-Natal, and the SADC borders prior to capital release.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp Line: +27 78 829 0637</span>
              </a>
            </div>
          </div>
        </div>

        {/* Executive Declaration Quote Card */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-b from-[#101928] to-[#0a101d] border-l-4 border-l-[#c5a059] border-y border-r border-slate-800 shadow-xl">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-mono font-semibold">
              Executive Statement from the CEO
            </span>
            <blockquote className="text-base sm:text-lg text-slate-200 font-light italic leading-relaxed">
              "In high-capital markets across Southern Africa, true value is not created in spreadsheets alone—it is forged on the ground through verified supply chains, ironclad contractual governance, and unyielding fiduciary discipline. Whether structuring a fifty-million-rand project debt facility or delivering twenty million litres of fuel to a remote mining site, our word and our governance are non-negotiable."
            </blockquote>
            <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-slate-800/80">
              <div>
                <div className="text-sm font-display font-bold text-white">
                  Leslie Flint Young
                </div>
                <div className="text-xs text-[#c5a059]">
                  Chief Executive Officer & Founder — Young Investments Consulting Holdings (Pty) Ltd
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Incorporation 2020/03/21 • CIPC Registered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Career Pedigree & Leadership Milestones Timeline */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Institutional Career Pedigree
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              A chronological testament to executive integrity, high-value state-owned enterprise management, and defense contract precision.
            </p>
          </div>

          <div className="space-y-6">
            {CAREER_MILESTONES.map((item, idx) => (
              <div
                key={idx}
                id={`milestone-item-${idx}`}
                className="relative p-6 sm:p-7 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-[#c5a059]/40 transition-all shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/30 shrink-0">
                      {getMilestoneIcon(item.type)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">
                          {item.type}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs text-slate-400 font-mono">
                          {item.scope}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white mt-1">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-slate-200">
                        {item.organization}
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700 shrink-0 self-start">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="pl-0 md:pl-16 space-y-2 text-xs sm:text-sm text-slate-300">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-1" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Public LinkedIn Service Capabilities Breakdown */}
        <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0c1422] to-[#070b12] border border-slate-800">
          <div className="max-w-3xl mb-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
              Cross-Functional Institutional Scope
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
              Advisory & Management Services Portfolio
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Verified service capabilities and advisory specializations commanded by Leslie Flint Young across public and private sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {LINKEDIN_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-[#c5a059]/40 text-xs font-medium text-slate-200 flex items-center gap-2.5 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
                <span>{srv}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need a bespoke project information audit or senior buyer advisory session?
            </div>
            <button
              id="leadership-schedule-intake-btn"
              onClick={() => onNavigate('inquiries')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c5a059] text-slate-950 text-xs font-semibold tracking-wider uppercase hover:brightness-110 transition-all cursor-pointer"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
