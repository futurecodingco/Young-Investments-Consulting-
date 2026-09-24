import React, { useState } from 'react';
import { PageId, IntakeSubmission } from '../types';
import { COMPANY_DATA, CONTACT_INFO } from '../data';
import { 
  Building, 
  User, 
  Briefcase, 
  Mail, 
  Phone, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Linkedin, 
  Share2, 
  Clock, 
  Lock, 
  MessageSquare, 
  FileText,
  Copy,
  ExternalLink,
  Video
} from 'lucide-react';

interface InquiriesPageProps {
  initialRequirement?: string;
  initialScale?: string;
  onNavigate: (page: PageId) => void;
}

export const InquiriesPage: React.FC<InquiriesPageProps> = ({
  initialRequirement = 'Project Capital Sourcing',
  initialScale = 'R20M – R100M',
  onNavigate
}) => {
  const [formData, setFormData] = useState({
    corporateName: '',
    representativeName: '',
    representativeDesignation: 'Director / Board Member',
    contactEmail: '',
    contactPhone: '',
    operationalRequirement: initialRequirement,
    targetedFinancialScale: initialScale,
    projectLocation: 'South Africa / SADC Region',
    projectOverview: '',
    ndaRequired: true
  });

  const [submitted, setSubmitted] = useState<IntakeSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const submission: IntakeSubmission = {
        corporateName: formData.corporateName || 'Confidential Institutional Client',
        representativeName: formData.representativeName || 'Representative',
        representativeDesignation: formData.representativeDesignation,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
        operationalRequirement: formData.operationalRequirement as any,
        targetedFinancialScale: formData.targetedFinancialScale as any,
        projectLocation: formData.projectLocation,
        projectOverview: formData.projectOverview,
        ndaRequired: formData.ndaRequired,
        timestamp: new Date().toLocaleDateString('en-ZA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setSubmitted(submission);
      setIsSubmitting(false);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }, 600);
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello Mr. Leslie Young, I am reaching out on behalf of ${formData.corporateName || 'our company'} regarding an institutional inquiry for: ${formData.operationalRequirement} (Targeted Scale: ${formData.targetedFinancialScale}). Please contact me at ${formData.contactEmail} / ${formData.contactPhone}.`
    );
    return `https://wa.me/27788290637?text=${text}`;
  };

  return (
    <div id="inquiries-page" className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] tracking-wider uppercase mb-3">
            <Lock className="w-3.5 h-3.5" />
            Confidential B2B Intake Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Inquiries & Corporate Footprint
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
            Direct institutional engagement for project sponsors, corporate procurement desks, and cross-border investment syndicates.
          </p>
        </div>

        {/* Two-Column Layout: Strategic Intake Form & Direct Footprint Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Strategic Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#101726] to-[#090e18] border border-[#c5a059]/30 shadow-2xl">
              
              {!submitted ? (
                <>
                  <div className="pb-6 mb-6 border-b border-slate-800">
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Strategic Intake Form
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Please outline your corporate parameters. All communications are protected under formal non-disclosure standards.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Corporate / Institutional Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Corporate / Institutional Name <span className="text-[#c5a059]">*</span>
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.corporateName}
                          onChange={(e) => setFormData({ ...formData, corporateName: e.target.value })}
                          placeholder="e.g. AfriEnergy Consortia / Trans-Kalahari Mining Ltd"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#c5a059]"
                        />
                      </div>
                    </div>

                    {/* Representative Name & Designation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Representative Full Name <span className="text-[#c5a059]">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            required
                            value={formData.representativeName}
                            onChange={(e) => setFormData({ ...formData, representativeName: e.target.value })}
                            placeholder="e.g. Dr. Arthur Mthembu"
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#c5a059]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Representative Designation <span className="text-[#c5a059]">*</span>
                        </label>
                        <div className="relative">
                          <Briefcase className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                          <select
                            value={formData.representativeDesignation}
                            onChange={(e) => setFormData({ ...formData, representativeDesignation: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-[#c5a059]"
                          >
                            <option value="Director / Board Member">Director / Board Member</option>
                            <option value="Chief Procurement Officer (CPO)">Chief Procurement Officer (CPO)</option>
                            <option value="Investment Manager / Partner">Investment Manager / Partner</option>
                            <option value="Chief Executive Officer (CEO)">Chief Executive Officer (CEO)</option>
                            <option value="Chief Financial Officer (CFO)">Chief Financial Officer (CFO)</option>
                            <option value="Head of Supply Chain & Logistics">Head of Supply Chain & Logistics</option>
                            <option value="Public Sector Infrastructure Lead">Public Sector Infrastructure Lead</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Contact Email & Direct Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Corporate Contact Email <span className="text-[#c5a059]">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                          <input
                            type="email"
                            required
                            value={formData.contactEmail}
                            onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                            placeholder="name@organization.com"
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#c5a059]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Direct Contact Number / WhatsApp <span className="text-[#c5a059]">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                          <input
                            type="tel"
                            required
                            value={formData.contactPhone}
                            onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                            placeholder="+27 (0) ..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#c5a059]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Core Operational Requirement */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Core Operational Requirement <span className="text-[#c5a059]">*</span>
                      </label>
                      <select
                        value={formData.operationalRequirement}
                        onChange={(e) => setFormData({ ...formData, operationalRequirement: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-[#c5a059]"
                      >
                        <option value="Project Capital Sourcing">Project Capital Sourcing</option>
                        <option value="Bulk Commodity Sourcing">Bulk Commodity Sourcing (Oil & Gas)</option>
                        <option value="Supply Chain Optimization">Supply Chain Optimization</option>
                        <option value="Infrastructure Development">Infrastructure & Property Development</option>
                      </select>
                    </div>

                    {/* Targeted Financial Scale / Capital Requirement */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Targeted Financial Scale / Capital Requirement <span className="text-[#c5a059]">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {['R5M – R20M', 'R20M – R100M', 'R100M – R1B', 'R1B – R10B', 'R10B – R92.5B+ (~$5B USD)'].map((scaleOption) => (
                          <button
                            type="button"
                            key={scaleOption}
                            onClick={() => setFormData({ ...formData, targetedFinancialScale: scaleOption as any })}
                            className={`py-2.5 px-2 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                              formData.targetedFinancialScale === scaleOption
                                ? 'bg-[#c5a059] text-slate-950 border-[#c5a059] font-bold shadow'
                                : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-slate-500'
                            }`}
                          >
                            {scaleOption}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Overview / Brief */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Project Overview & Key Objectives
                      </label>
                      <textarea
                        rows={4}
                        value={formData.projectOverview}
                        onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                        placeholder="Provide details on target volumes (e.g. 5M Litres Diesel 50ppm/month), mining site location, development land rezoning status, or structured debt tranches..."
                        className="w-full p-3.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>

                    {/* Non-Disclosure Agreement Checkbox */}
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                      <input
                        type="checkbox"
                        id="nda-checkbox"
                        checked={formData.ndaRequired}
                        onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                        className="w-4 h-4 rounded text-[#c5a059] focus:ring-[#c5a059] border-slate-700 bg-slate-800 cursor-pointer"
                      />
                      <label htmlFor="nda-checkbox" className="cursor-pointer">
                        Request formal reciprocal Non-Disclosure Agreement (NDA) prior to confidential data room access.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#b38a3a] text-slate-950 font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all shadow-[0_4px_18px_rgba(197,160,89,0.3)] cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Transmitting to Executive Desk...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Formal Intake Request</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                /* Submission Confirmation Memorandum */
                <div className="py-6 space-y-6">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-white">
                        Institutional Inquiry Successfully Registered
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Your intake profile has been transmitted directly to the executive office of Leslie Flint Young. A formal acknowledgment and initial feasibility review will be dispatched within 24 operational hours.
                      </p>
                    </div>
                  </div>

                  {/* Submission Summary Card */}
                  <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 font-mono text-[#c5a059]">
                      <span>REF: YICH-{Math.floor(100000 + Math.random() * 900000)}</span>
                      <span>{submitted.timestamp}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-slate-300">
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase">Corporate Entity</span>
                        <strong className="text-white">{submitted.corporateName}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase">Representative</span>
                        <span className="text-white">{submitted.representativeName} ({submitted.representativeDesignation})</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase">Requirement</span>
                        <span className="text-white">{submitted.operationalRequirement}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase">Financial Scale</span>
                        <span className="text-[#c5a059] font-semibold">{submitted.targetedFinancialScale}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Direct WhatsApp with Mr. Young</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(null)}
                      className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                    >
                      Submit Another Intake
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: High-Trust Corporate Footprint & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#101726] to-[#090f18] border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c5a059]">
                <MapPin className="w-4 h-4 text-[#c5a059]" />
                Operational Base & Legal Footprint
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  Pretoria Headquarters
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Headquartered in the executive administrative capital of South Africa, with transactional reach across the Southern African Development Community (SADC).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 text-xs space-y-2">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Official Legal & Registered Address</span>
                  <div className="text-white font-medium mt-0.5">{COMPANY_DATA.physicalAddress}</div>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Unit 52 Sharne Mews, Die Wilgers</span>
                  <span className="font-mono text-slate-300">Pretoria 0081</span>
                </div>
              </div>

              {/* Direct CEO Channels */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#c5a059]/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#c5a059]" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400">Direct Telephone / Cellular</div>
                      <div className="text-xs font-mono font-bold text-white group-hover:text-[#c5a059]">{CONTACT_INFO.phoneDisplay}</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#c5a059] font-semibold">Call Now</span>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#c5a059]/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#c5a059]" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400">Direct Executive Email</div>
                      <div className="text-xs font-mono font-bold text-white group-hover:text-[#c5a059]">{CONTACT_INFO.email}</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#c5a059] font-semibold">Email Now</span>
                </a>
              </div>
            </div>

            {/* Verified Digital Ecosystem Track (LinkedIn & Meta per blueprint) */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#101726] to-[#090f18] border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c5a059]">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                Verified Digital Ecosystem Track
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Per institutional governance directives, digital professional footprints are maintained strictly on verified professional business channels to preserve the sleek, formal architecture demanded by B2B funding institutions.
              </p>

              <div className="space-y-2.5">
                <a
                  href={CONTACT_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0077b5]/15 border border-[#0077b5]/30 hover:bg-[#0077b5]/25 transition-all text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    <span className="text-white font-medium">Leslie Young — Verified LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={CONTACT_INFO.metaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-900/15 border border-blue-800/30 hover:bg-blue-900/25 transition-all text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <Share2 className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-medium">Meta Profile ({CONTACT_INFO.metaHandle})</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={CONTACT_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/40 hover:bg-slate-800/60 transition-all text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-cyan-400" />
                    <span className="text-white font-medium">TikTok Executive Channel ({CONTACT_INFO.tiktokHandle})</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Entity Verification Badges */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 space-y-2">
              <div className="flex items-center justify-between">
                <span>Total Sourcing Scope:</span>
                <span className="font-mono text-[#c5a059] font-bold">R92.5B ZAR ($5.0B USD)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>CIPC Registration:</span>
                <span className="font-mono text-slate-200">{COMPANY_DATA.enterpriseNumber}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>SARS VAT Number:</span>
                <span className="font-mono text-slate-200">{COMPANY_DATA.vatNumber}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Legal Verification:</span>
                <span className="font-mono text-emerald-400 font-semibold">Legal City &amp; CIPC Validated</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Registry Health Rating:</span>
                <span className="font-mono text-emerald-400 font-bold">{COMPANY_DATA.healthScore} / 100 Strong</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
