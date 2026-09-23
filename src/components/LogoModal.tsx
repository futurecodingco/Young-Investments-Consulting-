import React, { useState } from 'react';
import { Logo } from './Logo';
import { X, Download, Copy, Check, ShieldCheck, Palette, FileText } from 'lucide-react';

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoModal: React.FC<LogoModalProps> = ({ isOpen, onClose }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  if (!isOpen) return null;

  const brandColors = [
    { name: "Imperial Gold", hex: "#C5A059", role: "Primary Accent & Emblem" },
    { name: "Champagne Light", hex: "#F4DC95", role: "Highlight & Contrast" },
    { name: "Deep Obsidian", hex: "#070B12", role: "Institutional Background" },
    { name: "Navy Slate", hex: "#0F172A", role: "Structural Cards & Panels" },
    { name: "Platinum White", hex: "#F8FAFC", role: "Primary Typography" },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const handleDownloadSvg = () => {
    const svgElement = document.querySelector('#brand-logo-modal-svg svg');
    if (!svgElement) return;
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'Young_Investments_Consulting_Holdings_Logo.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div
      id="brand-identity-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0b1118] border border-[#c5a059]/40 rounded-xl p-6 sm:p-8 text-slate-100 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
              Official Corporate Brand Identity
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
              Young Investments Consulting Holdings
            </h2>
          </div>
          <button
            id="close-logo-modal-btn"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Logo Display Showcase */}
        <div className="my-6 p-8 bg-gradient-to-b from-[#101726] to-[#070b12] rounded-xl border border-slate-800/80 flex flex-col items-center justify-center text-center">
          <div id="brand-logo-modal-svg" className="p-4">
            <Logo variant="vertical" size="xl" />
          </div>
          <p className="text-xs text-slate-400 max-w-md mt-4 leading-relaxed">
            The insignia features an interlocking geometric diamond shield representing sovereign stability, the letter "Y" for Young Holdings, and a central celestial diamond compass symbolizing cross-border capital navigation and pan-African supply chain flow.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            <button
              id="download-svg-btn"
              onClick={handleDownloadSvg}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-slate-950 font-semibold text-xs rounded-lg shadow hover:brightness-110 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Official Vector Logo (.SVG)
            </button>
          </div>
        </div>

        {/* Corporate Color Palette */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase">
            <Palette className="w-3.5 h-3.5 text-[#c5a059]" />
            Official Corporate Color Palette
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {brandColors.map((color) => (
              <div
                key={color.hex}
                onClick={() => handleCopy(color.hex)}
                className="group p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-[#c5a059]/50 transition-all cursor-pointer"
              >
                <div
                  className="w-full h-8 rounded mb-2 border border-white/10 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-[11px] font-semibold text-white truncate">{color.name}</div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>{color.hex}</span>
                  {copiedColor === color.hex ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Signature */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-400">
          <div>
            Registered in South Africa • Enterprise No: <span className="font-mono text-slate-300">K2020170638</span>
          </div>
          <div className="text-[#c5a059]">
            Pretoria, Gauteng • Founded March 2020
          </div>
        </div>
      </div>
    </div>
  );
};
