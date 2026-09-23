import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_DATA, CONTACT_INFO } from '../data';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Shield, Menu, X, ArrowRight, Sparkles, Building } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenLogoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenLogoModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Institutional Portal' },
    { id: 'leadership', label: 'Executive Leadership' },
    { id: 'capabilities', label: 'Capabilities & Sectors', badge: '12 Sectors' },
    { id: 'governance', label: 'Corporate Registry', badge: '83/100' },
    { id: 'inquiries', label: 'Inquiries & Footprint' }
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Institutional Metadata Bar */}
      <div className="bg-[#04070c] border-b border-slate-800/80 text-[11px] text-slate-400 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-300">
              <Shield className="w-3 h-3 text-[#c5a059]" />
              <span className="text-[#c5a059] font-mono font-semibold">CIPC: {COMPANY_DATA.enterpriseNumber}</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="hidden sm:inline">Registry Health: <strong className="text-emerald-400 font-mono">83/100 Strong</strong></span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-slate-500" />
              Pretoria, Gauteng, South Africa
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              id="top-bar-phone-link"
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#c5a059] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#c5a059]" />
              <span className="font-mono font-medium">{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              id="top-bar-email-link"
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#c5a059] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#c5a059]" />
              <span className="font-mono">{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav className="subtle-glass border-b border-slate-800/90 shadow-2xl px-4 sm:px-8 py-3 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <Logo
              variant="horizontal"
              size="md"
              onClick={() => handleNav('home')}
            />
            <button
              id="open-brand-kit-btn"
              onClick={onOpenLogoModal}
              title="View brand identity and download official vector logo"
              className="hidden xl:inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold text-[#c5a059] bg-[#c5a059]/10 hover:bg-[#c5a059]/20 border border-[#c5a059]/30 rounded-md transition-all cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              Official Logo & Specs
            </button>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className={`relative px-3 py-2 text-xs font-medium tracking-wide rounded-md transition-all cursor-pointer ${
                    isActive
                      ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive
                          ? 'bg-[#c5a059] text-slate-950 font-bold'
                          : 'bg-slate-800 text-[#c5a059] border border-[#c5a059]/30'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-consultation-cta"
              onClick={() => handleNav('inquiries')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#b38a3a] hover:brightness-110 rounded-md shadow-[0_2px_12px_rgba(197,160,89,0.3)] transition-all cursor-pointer active:scale-95"
            >
              <span>Initiate Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-logo-btn"
              onClick={onOpenLogoModal}
              className="p-2 text-[#c5a059] hover:bg-slate-800/60 rounded-md"
              title="Official Logo"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-md hover:bg-slate-800/80 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-nav-panel" className="lg:hidden mt-3 pt-3 border-t border-slate-800 space-y-1.5 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm font-medium ${
                  currentPage === item.id
                    ? 'bg-[#c5a059]/15 text-[#c5a059] border border-[#c5a059]/30 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-[#c5a059] border border-[#c5a059]/30 font-mono">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-2 pb-1">
              <button
                id="mobile-nav-cta"
                onClick={() => handleNav('inquiries')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#d4af37] to-[#c5a059] rounded-lg shadow"
              >
                <span>Initiate Corporate Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
