import React from 'react';
import { useCeoPhoto } from '../utils/ceoPhotoStorage';
import { ShieldCheck } from 'lucide-react';

interface CeoPortraitCardProps {
  aspectRatioClass?: string;
  maxWidthClass?: string;
}

export const CeoPortraitCard: React.FC<CeoPortraitCardProps> = ({
  aspectRatioClass = 'aspect-[3/4]',
  maxWidthClass = 'max-w-xs'
}) => {
  const { photoUrl } = useCeoPhoto();

  return (
    <div className={`relative w-full ${maxWidthClass} flex flex-col items-center group`}>
      <div
        className={`relative w-full rounded-2xl overflow-hidden border-2 border-[#c5a059] shadow-[0_15px_35px_rgba(0,0,0,0.85)] ${aspectRatioClass} transition-all duration-300 ring-2 ring-[#c5a059]/20`}
      >
        <img
          src={photoUrl}
          alt="Leslie Flint Young - CEO & Founder, Young Investments Consulting Holdings"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />

        {/* CIPC Statutory Registration Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-[#c5a059]/40 text-[9px] font-mono text-[#c5a059] pointer-events-none">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>CIPC Registered Director</span>
        </div>

        {/* Executive Identification Bottom Tag */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left pointer-events-none">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059]">
            Chief Executive Officer & Founder
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
