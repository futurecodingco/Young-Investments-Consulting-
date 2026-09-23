import React, { useState } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { HomePortal } from './components/HomePortal';
import { LeadershipPage } from './components/LeadershipPage';
import { CapabilitiesPage } from './components/CapabilitiesPage';
import { RegistryPage } from './components/RegistryPage';
import { InquiriesPage } from './components/InquiriesPage';
import { Footer } from './components/Footer';
import { LogoModal } from './components/LogoModal';
import { CONTACT_INFO } from './data';
import { Phone, MessageSquare, ShieldCheck, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [initialIntakeReq, setInitialIntakeReq] = useState('Project Capital Sourcing');
  const [initialIntakeScale, setInitialIntakeScale] = useState('R20M – R100M');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRequirementFromCalc = (req: string, scale: string) => {
    setInitialIntakeReq(req);
    setInitialIntakeScale(scale);
    setCurrentPage('inquiries');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col selection:bg-[#c5a059]/30 selection:text-amber-200 relative">
      {/* Subtle ambient lighting layers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#c5a059]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-blue-950/15 rounded-full blur-[160px]" />
      </div>

      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenLogoModal={() => setIsLogoModalOpen(true)}
      />

      {/* Main Page Content Body with Animated Transitions */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {currentPage === 'home' && (
              <HomePortal
                onNavigate={handleNavigate}
                onOpenLogoModal={() => setIsLogoModalOpen(true)}
              />
            )}

            {currentPage === 'leadership' && (
              <LeadershipPage onNavigate={handleNavigate} />
            )}

            {currentPage === 'capabilities' && (
              <CapabilitiesPage
                onNavigate={handleNavigate}
                onSelectRequirement={handleSelectRequirementFromCalc}
              />
            )}

            {currentPage === 'governance' && (
              <RegistryPage
                onNavigate={handleNavigate}
                onOpenLogoModal={() => setIsLogoModalOpen(true)}
              />
            )}

            {currentPage === 'inquiries' && (
              <InquiriesPage
                initialRequirement={initialIntakeReq}
                initialScale={initialIntakeScale}
                onNavigate={handleNavigate}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate High-Trust Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLogoModal={() => setIsLogoModalOpen(true)}
      />

      {/* Brand Identity / Official Vector Logo Modal */}
      <LogoModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
      />

      {/* Floating Executive Direct Access Dock */}
      <aside aria-label="Executive Direct Access" className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
        <div className="bg-[#0b1220]/90 backdrop-blur-xl border border-[#c5a059]/40 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.85)] p-2 transition-all">
          <div className="flex items-center justify-between gap-3 px-2 py-1 text-[10px] text-slate-400 border-b border-slate-800/80 mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-medium">CEO Desk Direct</span>
            </div>
            <span className="font-mono text-[#c5a059]">Pretoria HQ</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              id="floating-whatsapp-btn"
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Direct WhatsApp with Leslie Flint Young"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              id="floating-phone-btn"
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              title="Call Leslie Flint Young directly"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-[#c5a059] text-white text-xs font-semibold shadow transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-mono text-[11px]">{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
