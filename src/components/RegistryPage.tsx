import React from 'react';
import { PageId } from '../types';
import { COMPANY_DATA, CONTACT_INFO } from '../data';
import { 
  ShieldCheck, 
  FileCheck, 
  Building2, 
  MapPin, 
  UserCheck, 
  Award, 
  Calendar, 
  Hash, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Landmark
} from 'lucide-react';

interface RegistryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLogoModal: () => void;
}

export const RegistryPage: React.FC<RegistryPageProps> = ({ onNavigate, onOpenLogoModal }) => {
  return (
    <div id="registry-page" className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Statutory Compliance Dossier
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Corporate Governance & Public Records
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
            Full institutional transparency: Verified registration records from the Companies and Intellectual Property Commission (CIPC), South African Revenue Service (SARS), and official corporate registry databases.
          </p>
        </div>

        {/* Health Score & Standing Hero Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0c1422] via-[#090f19] to-[#0c1422] border border-[#c5a059]/40 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
                Official Company Health Score
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl sm:text-6xl font-display font-extrabold text-white">83</span>
                <span className="text-xl sm:text-2xl font-mono text-slate-400 font-bold">/ 100</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
                  STRONG
                </span>
              </div>
              <div className="w-full max-w-xs bg-slate-800 h-2.5 rounded-full overflow-hidden mt-4">
                <div className="bg-gradient-to-r from-emerald-500 to-[#c5a059] h-full rounded-full" style={{ width: '83%' }} />
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Derived from official registry data assessed across filing recency, registry status, and director stability.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] uppercase font-semibold text-slate-400">Registry Status</div>
                <div className="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  In Business
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Good Standing</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] uppercase font-semibold text-slate-400">Incorporation</div>
                <div className="text-sm font-bold text-white mt-1 font-mono">2020-03-21</div>
                <div className="text-[11px] text-slate-400 mt-1">Pretoria, SA</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] uppercase font-semibold text-slate-400">Officers Stability</div>
                <div className="text-sm font-bold text-white mt-1">High Continuity</div>
                <div className="text-[11px] text-slate-400 mt-1">Founder Led</div>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Public Record Registry Table */}
        <div className="rounded-2xl bg-gradient-to-b from-[#101726] to-[#090e18] border border-slate-800 overflow-hidden shadow-xl">
          <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#c5a059]" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                Statutory Registration Parameters
              </h2>
            </div>
            <span className="text-[11px] font-mono text-[#c5a059]">Jurisdiction: South Africa</span>
          </div>

          <div className="divide-y divide-slate-800 text-xs">
            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-slate-400 font-medium">Official Legal Registered Name</span>
              <span className="sm:col-span-2 text-white font-semibold text-sm">{COMPANY_DATA.legalName}</span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-slate-400 font-medium">Enterprise Registration Number</span>
              <span className="sm:col-span-2 text-[#c5a059] font-mono font-bold">{COMPANY_DATA.enterpriseNumber}</span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-slate-400 font-medium">Legal Form / Entity Type</span>
              <span className="sm:col-span-2 text-slate-200">{COMPANY_DATA.legalForm} (Pty Ltd)</span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-slate-400 font-medium">Date of Incorporation</span>
              <span className="sm:col-span-2 text-slate-200 font-mono">{COMPANY_DATA.incorporationDate} (Established March 2020)</span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-slate-400 font-medium">SARS Value Added Tax (VAT) Number</span>
              <span className="sm:col-span-2 text-slate-200 font-mono font-semibold">{COMPANY_DATA.vatNumber}</span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-slate-400 font-medium">Official Registered Legal Address</span>
              <span className="sm:col-span-2 text-slate-200 leading-relaxed font-mono">
                {COMPANY_DATA.physicalAddress}
              </span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-slate-400 font-medium">Official Mailing Address</span>
              <span className="sm:col-span-2 text-slate-200 leading-relaxed font-mono">
                {COMPANY_DATA.mailingAddress}
              </span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-slate-400 font-medium">Registered Directors & Officers</span>
              <div className="sm:col-span-2 space-y-1">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                  <strong className="text-white text-xs">{COMPANY_DATA.primaryOfficer}</strong>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">DIRECTOR / CEO</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Holds ultimate operational authority and strategic fiduciary oversight.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Trust & Due Diligence Assurance Band */}
        <div className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-bold text-white">
              Institutional Due Diligence & Proof of Authority
            </h3>
            <p className="text-xs text-slate-400">
              Certified copies of CIPC disclosures, tax clearance certificates, and corporate resolutions are provided to accredited institutions under mutual NDA.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenLogoModal}
              className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              Brand Identity Asset Kit
            </button>
            <button
              onClick={() => onNavigate('inquiries')}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-slate-950 text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all shadow"
            >
              Request Compliance Dossier
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
