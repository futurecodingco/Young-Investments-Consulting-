import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_DATA, STATUTORY_SERVICES_DATA } from '../data';
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
  Landmark,
  Search,
  Users,
  CreditCard,
  FileText,
  Mail,
  Fingerprint,
  Scale,
  Sparkles,
  ExternalLink,
  Printer,
  Copy,
  Check
} from 'lucide-react';

interface RegistryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLogoModal: () => void;
}

export const RegistryPage: React.FC<RegistryPageProps> = ({ onNavigate, onOpenLogoModal }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="registry-page" className="w-full py-12 md:py-20 print-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-800/80">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Statutory Compliance &amp; Due Diligence Dossier</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Corporate Governance &amp; Public Records
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Full institutional transparency: Verified registration records from the Companies and Intellectual Property Commission (CIPC), South African Revenue Service (SARS), Registrar of Deeds, and official statutory legal portal networks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 no-print">
            <button
              id="print-dossier-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 hover:border-[#c5a059]/60 transition-all cursor-pointer shadow"
              title="Print or save verified PDF compliance dossier"
            >
              <Printer className="w-4 h-4 text-[#c5a059]" />
              <span>Print / Export Certified Dossier</span>
            </button>
            <button
              onClick={onOpenLogoModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 hover:border-[#c5a059]/60 transition-all cursor-pointer shadow"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Brand Identity Kit</span>
            </button>
          </div>
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
                <span className="text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">
                  [STRONG STANDING]
                </span>
              </div>
              <div className="w-full max-w-xs bg-slate-800 h-2.5 rounded-full overflow-hidden mt-4">
                <div className="bg-gradient-to-r from-emerald-500 to-[#c5a059] h-full rounded-full" style={{ width: '83%' }} />
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Derived from official registry data assessed across filing recency, active registration status, corporate tax standing, and director continuity.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] uppercase font-semibold text-slate-400">Registry Status</div>
                <div className="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  In Business
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Good Standing (Active)</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] uppercase font-semibold text-slate-400">Incorporation</div>
                <div className="text-sm font-bold text-white mt-1 font-mono">2020-03-21</div>
                <div className="text-[11px] text-slate-400 mt-1">Pretoria, Gauteng, SA</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] uppercase font-semibold text-slate-400">Officers Stability</div>
                <div className="text-sm font-bold text-white mt-1">High Continuity</div>
                <div className="text-[11px] text-slate-400 mt-1">Founder Led (CEO)</div>
              </div>

              <div className="p-4 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/40">
                <div className="text-[10px] uppercase font-semibold text-[#c5a059]">Total Sourcing Scale</div>
                <div className="text-sm font-bold text-white font-mono mt-1">R92.5B ZAR</div>
                <div className="text-[11px] text-[#c5a059] mt-1">$5.0B USD Equivalent</div>
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
            <span className="text-[11px] font-mono text-[#c5a059]">Jurisdiction: Republic of South Africa</span>
          </div>

          <div className="divide-y divide-slate-800 text-xs">
            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <span className="text-slate-400 font-medium">Official Legal Registered Name</span>
              <span className="sm:col-span-2 text-white font-semibold text-sm">{COMPANY_DATA.legalName}</span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <span className="text-slate-400 font-medium">Enterprise Registration Number</span>
              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <span className="text-[#c5a059] font-mono font-bold text-sm">{COMPANY_DATA.enterpriseNumber}</span>
                <button
                  onClick={() => handleCopy(COMPANY_DATA.enterpriseNumber, 'enterpriseNumber')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] border border-slate-700 transition-colors cursor-pointer no-print"
                  title="Copy Enterprise Number"
                >
                  {copiedKey === 'enterpriseNumber' ? (
                    <><Check className="w-3 h-3 text-emerald-400" /> Copied</>
                  ) : (
                    <><Copy className="w-3 h-3 text-slate-400" /> Copy Number</>
                  )}
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <span className="text-slate-400 font-medium">Legal Form / Entity Type</span>
              <span className="sm:col-span-2 text-slate-200">{COMPANY_DATA.legalForm} (Pty Ltd)</span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <span className="text-slate-400 font-medium">Date of Incorporation</span>
              <span className="sm:col-span-2 text-slate-200 font-mono">{COMPANY_DATA.incorporationDate} (Established March 2020)</span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <span className="text-slate-400 font-medium">SARS Value Added Tax (VAT) Number</span>
              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <span className="text-slate-200 font-mono font-semibold">{COMPANY_DATA.vatNumber}</span>
                <button
                  onClick={() => handleCopy(COMPANY_DATA.vatNumber, 'vatNumber')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] border border-slate-700 transition-colors cursor-pointer no-print"
                  title="Copy VAT Number"
                >
                  {copiedKey === 'vatNumber' ? (
                    <><Check className="w-3 h-3 text-emerald-400" /> Copied</>
                  ) : (
                    <><Copy className="w-3 h-3 text-slate-400" /> Copy VAT</>
                  )}
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <span className="text-slate-400 font-medium">Total Sourcing &amp; Capital Governance Scope</span>
              <span className="sm:col-span-2 text-emerald-400 font-mono font-bold">
                R92,500,000,000 ZAR <span className="text-slate-300 font-normal">($5,000,000,000 USD Equivalent)</span>
              </span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <span className="text-slate-400 font-medium">Official Registered Legal Address</span>
              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <span className="text-slate-200 leading-relaxed font-mono">
                  {COMPANY_DATA.physicalAddress}
                </span>
                <button
                  onClick={() => handleCopy(COMPANY_DATA.physicalAddress, 'physicalAddress')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] border border-slate-700 transition-colors cursor-pointer shrink-0 no-print"
                  title="Copy Legal Address"
                >
                  {copiedKey === 'physicalAddress' ? (
                    <><Check className="w-3 h-3 text-emerald-400" /> Copied</>
                  ) : (
                    <><Copy className="w-3 h-3 text-slate-400" /> Copy Address</>
                  )}
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <span className="text-slate-400 font-medium">Official Mailing Address</span>
              <span className="sm:col-span-2 text-slate-200 leading-relaxed font-mono">
                {COMPANY_DATA.mailingAddress}
              </span>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <span className="text-slate-400 font-medium">Registered Directors &amp; Officers</span>
              <div className="sm:col-span-2 space-y-1">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                  <strong className="text-white text-xs">{COMPANY_DATA.primaryOfficer}</strong>
                  <span className="text-[10px] font-mono text-slate-400">· DIRECTOR &amp; CHIEF EXECUTIVE OFFICER</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Holds ultimate operational authority, fiduciary command, and institutional signatory power.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal City Statutory Services & Due Diligence Integration Ecosystem */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0c1424] via-[#080d17] to-[#0c1424] border border-[#c5a059]/40 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-widest">
                <Scale className="w-3.5 h-3.5" />
                <span>Statutory Due Diligence &amp; Legal Infrastructure</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Legal City Statutory Verification Network
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Young Investments Consulting Holdings operates with stringent due diligence protocols. Through integration with <strong className="text-white font-medium">Legal City</strong> (South Africa's premier online legal services portal) and direct statutory channels, every transaction, counterparty, land title, and credit exposure scaling up to <strong className="text-[#c5a059] font-medium">R92.5 Billion ZAR ($5B USD)</strong> is verified in real-time.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end shrink-0">
              <div className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-right">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Official Partner Portal</div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span className="text-red-500 font-extrabold tracking-tight">LEGAL</span>
                  <span className="font-light tracking-wide text-slate-200">CITY</span>
                </div>
                <div className="text-[10px] text-slate-400 italic">Your Online LEGAL Partner</div>
              </div>
            </div>
          </div>

          {/* Statutory Credential & Partner Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {STATUTORY_SERVICES_DATA.accreditations.map((acc, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#c5a059] flex items-center justify-between">
                    <span>{acc.name}</span>
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="text-[11px] font-semibold text-white mt-1 leading-snug">
                    {acc.label}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-800/60 leading-tight">
                  {acc.role}
                </div>
              </div>
            ))}
          </div>

          {/* 6 Core Statutory Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* 1. Company Searches (CIPC) */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#c5a059]/40 transition-colors space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Company Searches (CIPC)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct online access to the statutory records of the South African Companies &amp; Intellectual Property Commission (CIPC). Verifies official enterprise status, registration numbers, director registers, authorized share capital, and statutory annual return compliance.
              </p>
              <div className="pt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Statutory Authority: CIPC South Africa</span>
              </div>
            </div>

            {/* 2. Deed Searches (Registrar of Deeds) */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#c5a059]/40 transition-colors space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Deed Searches (Deeds Office)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Real-time online access to the records of the South African Registrar of Deeds (Deeds Office). Essential for validating commercial property ownership, municipal servitude encumbrances, bond registrations, and mineral rights prior to capital disbursement.
              </p>
              <div className="pt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Registrar of Deeds Online Access</span>
              </div>
            </div>

            {/* 3. Consumer & Director Tracing */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#c5a059]/40 transition-colors space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Consumer &amp; Director Tracing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                High-precision statutory tracing of counterparties, registered directors, and absconding debtors by South African ID number, legal name, date of birth, or authenticated contact vector across institutional repositories.
              </p>
              <div className="pt-2 text-[10px] font-mono text-sky-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>ID &amp; Telephone Registry Trace</span>
              </div>
            </div>

            {/* 4. Credit Enquiries (TransUnion & XDS) */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#c5a059]/40 transition-colors space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Credit Enquiries (TransUnion &amp; XDS)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Conduct institutional consumer and business credit enquiries with TransUnion (Approved Partner) and XDS Credit Bureaus. Generates comprehensive risk assessments, default registries, and corporate credit ratings for high-exposure transactions.
              </p>
              <div className="pt-2 text-[10px] font-mono text-amber-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>TransUnion &amp; XDS Credit Bureaus</span>
              </div>
            </div>

            {/* 5. Verification Services */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#c5a059]/40 transition-colors space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Fingerprint className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Verification Services (DHA &amp; ID)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Real-time online access to South African ID verification, Department of Home Affairs (DHA) biometric validations, and counterparty authentication tools. Mitigates fraudulent representation and confirms ultimate beneficial ownership (UBO).
              </p>
              <div className="pt-2 text-[10px] font-mono text-purple-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Real-Time Biometric &amp; ID Auth</span>
              </div>
            </div>

            {/* 6. Debtor Services & Statutory Enforcement */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#c5a059]/40 transition-colors space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Debtor Services &amp; Statutory Compliance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dispatch legislatively compliant statutory collection letters, manage formal legal contractual remedies, and register defaulting debtor notifications directly with credit bureaus under National Credit Regulator (NCR) frameworks.
              </p>
              <div className="pt-2 text-[10px] font-mono text-red-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>NCR Compliant Legal Processing</span>
              </div>
            </div>

          </div>

          {/* Institutional Reassurance Footer Banner */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>
                Statutory due diligence is executed on all transactions across our <strong className="text-white">R92.5 Billion ZAR ($5B USD)</strong> facilitation pipeline.
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              © 2000–2026 Legal City Gateway • CIPC K2020170638
            </div>
          </div>

        </div>

        {/* Corporate Trust & Due Diligence Assurance Band */}
        <div className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 no-print">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-bold text-white">
              Institutional Due Diligence &amp; Proof of Authority
            </h3>
            <p className="text-xs text-slate-400">
              Certified copies of CIPC disclosures, tax clearance certificates, Deeds Office validations, and corporate resolutions are provided to accredited institutions under mutual NDA.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <Printer className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Print Dossier</span>
            </button>
            <button
              onClick={onOpenLogoModal}
              className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              Brand Identity Asset Kit
            </button>
            <button
              onClick={() => onNavigate('inquiries')}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-slate-950 text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all shadow cursor-pointer"
            >
              Request Compliance Dossier
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
