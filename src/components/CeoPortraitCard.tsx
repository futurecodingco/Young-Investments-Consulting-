import React from 'react';
import authenticPhoto from '../assets/images/leslie_young_authentic.jpg';
import { ShieldCheck } from 'lucide-react';

interface CeoPortraitCardProps {
  aspectRatioClass?: string;
  maxWidthClass?: string;
}

export const CeoPortraitCard: React.FC<CeoPortraitCardProps> = ({
  aspectRatioClass = 'aspect-[3/4]',
  maxWidthClass = 'max-w-xs'
}) => {
  return (
    <div className={`relative w-full ${maxWidthClass} flex flex-col items-center`}>
      <div
        className={`relative w-full rounded-2xl overflow-hidden border-2 border-[#c5a059] shadow-[0_15px_35px_rgba(0,0,0,0.85)] ring-2 ring-[#c5a059]/20 ${aspectRatioClass} bg-[#0c121e]`}
      >
        {/* Authentic Photo - Fixed & Bundled */}
        <img
          src={authenticPhoto}
          alt="Leslie Flint Young - Chief Executive Officer & Founder, Young Investments Consulting Holdings"
          className="w-full h-full object-cover object-[50%_18%] transition-transform duration-700 hover:scale-105"
          loading="eager"
        />

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />

        {/* CIPC Statutory Registration Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-[#c5a059]/40 text-[9px] font-mono text-[#c5a059] pointer-events-none z-10">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>CIPC Registered Director</span>
        </div>

        {/* Executive Identification Bottom Tag */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left pointer-events-none z-10">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059]">
            Chief Executive Officer &amp; Founder
          </div>
          <div className="text-xl font-display font-bold text-white leading-tight">
            Leslie Flint Young
          </div>
          <div className="text-[11px] text-slate-300 mt-0.5">
            Pretoria, Gauteng, South Africa
          </div>
        </div>
      </div>
    </div>
  );
};
