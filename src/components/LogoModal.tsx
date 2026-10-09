import React, { useState } from 'react';
import { Logo } from './Logo';
import { X, Download, Copy, Check, ShieldCheck, Palette, Image as ImageIcon } from 'lucide-react';

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoModal: React.FC<LogoModalProps> = ({ isOpen, onClose }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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

  // Builds a complete standalone SVG containing the YICH crest + full legal name lockup
  const getStandaloneLogoSvg = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="1200" height="600" fill="none">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0d1524" />
          <stop offset="100%" stop-color="#05080f" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stop-color="#fdf3d1" />
          <stop offset="25%" stop-color="#f4dc95" />
          <stop offset="55%" stop-color="#c5a059" />
          <stop offset="85%" stop-color="#9a7428" />
          <stop offset="100%" stop-color="#674a12" />
        </linearGradient>
        <linearGradient id="shieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#141e30" />
          <stop offset="60%" stop-color="#0a101d" />
          <stop offset="100%" stop-color="#05080f" />
        </linearGradient>
      </defs>
      <rect width="1200" height="600" fill="url(#bgGrad)" />
      <rect x="24" y="24" width="1152" height="552" rx="16" fill="none" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.4" />
      <g transform="translate(490, 75) scale(1.85)">
        <path d="M60 5 L106 28 L106 80 L60 115 L14 80 L14 28 Z" fill="url(#shieldBg)" stroke="url(#goldGrad)" stroke-width="2.8" stroke-linejoin="round" />
        <path d="M60 12 L99 32 L99 76 L60 107 L21 76 L21 32 Z" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.7" />
        <circle cx="60" cy="57" r="34" fill="none" stroke="url(#goldGrad)" stroke-width="0.75" stroke-dasharray="2.5 2.5" opacity="0.55" />
        <rect x="33" y="34" width="5.5" height="44" rx="1" fill="url(#goldGrad)" opacity="0.85" />
        <rect x="81.5" y="34" width="5.5" height="44" rx="1" fill="url(#goldGrad)" opacity="0.85" />
        <rect x="33" y="55" width="54" height="4.2" rx="1" fill="url(#goldGrad)" opacity="0.9" />
        <path d="M36 28 L55.5 54 L55.5 84 L64.5 84 L64.5 54 L84 28 L73.5 28 L60 46.5 L46.5 28 Z" fill="url(#goldGrad)" />
        <polygon points="60,21 64.5,30 60,39 55.5,30" fill="#ffffff" opacity="0.95" />
        <rect x="46" y="84" width="28" height="3.2" rx="1" fill="url(#goldGrad)" />
        <rect x="51" y="89" width="18" height="2.5" rx="1" fill="url(#goldGrad)" opacity="0.85" />
        <text x="60" y="101" text-anchor="middle" fill="#f4dc95" font-size="6.5" font-weight="700" font-family="Cinzel, Georgia, serif" letter-spacing="2.2">Y·I·C·H</text>
      </g>
      <text x="600" y="370" text-anchor="middle" fill="#ffffff" font-size="40" font-weight="700" font-family="Cinzel, Georgia, serif" letter-spacing="7">YOUNG INVESTMENTS</text>
      <text x="600" y="418" text-anchor="middle" fill="#c5a059" font-size="24" font-weight="600" font-family="Cinzel, Georgia, serif" letter-spacing="6">&amp; CONSULTING HOLDINGS (PTY) LTD</text>
      <line x1="380" y1="450" x2="820" y2="450" stroke="#c5a059" stroke-width="1" stroke-opacity="0.45" />
      <text x="600" y="482" text-anchor="middle" fill="#94a3b8" font-size="15" font-weight="500" font-family="Plus Jakarta Sans, Arial, sans-serif" letter-spacing="4">PRETORIA, SOUTH AFRICA • CIPC REG. K2020170638</text>
    </svg>`;
  };

  const handleDownloadSvg = () => {
    const svgData = getStandaloneLogoSvg();
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'Young_Investments_And_Consulting_Holdings_Pty_Ltd_Logo.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
  };

  const handleDownloadHighResPng = () => {
    const svgData = getStandaloneLogoSvg();
    const img = new Image();
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 2400;
      canvas.height = 1200;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, 2400, 1200);
        const pngUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = 'Young_Investments_And_Consulting_Holdings_Pty_Ltd_Logo.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
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
              Official Corporate Identity
            </div>
            <h2 className="text-lg sm:text-xl font-display font-bold text-white mt-1">
              Young Investments &amp; Consulting Holdings (Pty) Ltd
            </h2>
          </div>
          <button
            id="close-logo-modal-btn"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors cursor-pointer"
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
            The official <strong className="text-slate-200">Y·I·C·H</strong> institutional insignia unites an interlocking sovereign shield with the <strong className="text-slate-200">Y</strong> &amp; <strong className="text-slate-200">H</strong> architectural monogram for <strong className="text-[#c5a059]">Young Investments &amp; Consulting Holdings (Pty) Ltd</strong> (Private Company, CIPC Reg. K2020170638).
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

            <button
              id="download-raster-crest-btn"
              onClick={handleDownloadHighResPng}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-[#c5a059]/40 hover:border-[#c5a059] font-semibold text-xs rounded-lg shadow transition-all cursor-pointer"
            >
              <ImageIcon className="w-4 h-4 text-[#c5a059]" />
              Download High-Res Lockup (.PNG)
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
            Registered Private Company • Enterprise No: <span className="font-mono text-slate-300">K2020170638</span>
          </div>
          <div className="text-[#c5a059]">
            Pretoria, Gauteng • Incorporated March 2020
          </div>
        </div>
      </div>
    </div>
  );
};
