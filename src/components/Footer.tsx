import React from 'react';
import { PageId } from '../types';
import { COMPANY_DATA, CONTACT_INFO } from '../data';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Linkedin, Share2, Shield, ArrowUp, Sparkles, Building2, Video } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLogoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLogoModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="corporate-footer" className="bg-[#03060a] border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper Footer: Brand, Navigation & Footprint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mandate Column */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="horizontal" size="md" onClick={() => onNavigate('home')} />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm pt-2">
              Young Investments Consulting Holdings (Pty) Ltd operates as a high-tier multi-sector holding entity and institutional advisory partner specializing in B2B supply chain engineering, project finance sourcing scaling to R92.5 Billion ZAR ($5.0B USD), property development, and industrial commodity trading (Oil & Gas).
            </p>
            
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="footer-open-brand-kit"
                onClick={onOpenLogoModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-[#c5a059]/30 text-[#c5a059] text-[11px] font-semibold hover:bg-slate-800 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Logo & Vector Download</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Institutional Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Institutional Portal (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leadership')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Executive Leadership (Leslie Flint Young)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('capabilities')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Capabilities & 12 Commodity Sectors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('governance')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Corporate Governance & CIPC Records
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inquiries')}
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Strategic Intake Hub & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Footprint & Direct Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Corporate Footprint & Contact
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_DATA.physicalAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="font-mono hover:text-[#c5a059] transition-colors">
                  {CONTACT_INFO.phoneDisplay} ({CONTACT_INFO.internationalPhone})
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-mono hover:text-[#c5a059] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Verified Digital Footprint Links */}
            <div className="pt-2">
              <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-2">
                Verified Executive Channels:
              </div>
              <div className="flex items-center gap-2">
                <a
                  id="footer-linkedin-link"
                  href={CONTACT_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#c5a059]/60 hover:text-white transition-all"
                  title="Leslie Young on LinkedIn"
                  aria-label="Leslie Young on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                </a>

                <a
                  id="footer-meta-link"
                  href={CONTACT_INFO.metaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#c5a059]/60 hover:text-white transition-all"
                  title="Meta Profile @leslie.young.7549"
                  aria-label="Meta Profile @leslie.young.7549"
                >
                  <Share2 className="w-4 h-4 text-blue-400" />
                </a>

                <a
                  id="footer-tiktok-link"
                  href={CONTACT_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#c5a059]/60 hover:text-white transition-all"
                  title={`TikTok Profile ${CONTACT_INFO.tiktokHandle}`}
                  aria-label={`TikTok Profile ${CONTACT_INFO.tiktokHandle}`}
                >
                  <Video className="w-4 h-4 text-cyan-400" />
                </a>

                <button
                  id="footer-scroll-top-btn"
                  onClick={scrollToTop}
                  className="ml-auto p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
                  title="Back to Top"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Statutory Bottom Sub-Bar */}
      <div className="bg-[#020407] border-t border-slate-900 py-4 px-4 sm:px-8 text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1">
            <span>© {new Date().getFullYear()} {COMPANY_DATA.legalName}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-mono">Enterprise No: {COMPANY_DATA.enterpriseNumber}</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-mono">VAT No: {COMPANY_DATA.vatNumber}</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-mono text-[#c5a059]">Pipeline: R92.5B ZAR ($5B USD)</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-emerald-400">Legal City &amp; CIPC Verified</span>
          </div>

          <div className="text-slate-400">
            Pretoria, Gauteng, Republic of South Africa
          </div>
        </div>
      </div>
    </footer>
  );
};
