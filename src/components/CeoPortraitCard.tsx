import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { getProxiedImageUrl } from '../utils/imageProxy';

const PRIMARY_KOMMODO_URL = 'https://kommodo.ai/i/i5QAQ87RwuCwkNWFdCt9';
const DIRECT_PUBLIC_IMAGE_URL = 'https://plain-eeur-prod-public.komododecks.com/202609/23/i5QAQ87RwuCwkNWFdCt9/image.jpg';
const LOCAL_FALLBACK_URL = '/Mr%20CEO.jpg';

interface CeoPortraitCardProps {
  aspectRatioClass?: string;
  maxWidthClass?: string;
}

export const CeoPortraitCard: React.FC<CeoPortraitCardProps> = ({
  aspectRatioClass = 'aspect-square',
  maxWidthClass = 'max-w-md'
}) => {
  // Start with the exact URL requested by the user
  const [currentSrc, setCurrentSrc] = useState<string>(PRIMARY_KOMMODO_URL);
  const [fallbackIndex, setFallbackIndex] = useState<number>(0);

  const handleImageError = () => {
    // If the direct kommodo URL gets blocked by 403 or returns HTML, seamlessly try next robust fallback
    if (fallbackIndex === 0) {
      setFallbackIndex(1);
      setCurrentSrc(getProxiedImageUrl(PRIMARY_KOMMODO_URL));
    } else if (fallbackIndex === 1) {
      setFallbackIndex(2);
      setCurrentSrc(DIRECT_PUBLIC_IMAGE_URL);
    } else if (fallbackIndex === 2) {
      setFallbackIndex(3);
      setCurrentSrc(getProxiedImageUrl(DIRECT_PUBLIC_IMAGE_URL));
    } else if (fallbackIndex === 3) {
      setFallbackIndex(4);
      setCurrentSrc(LOCAL_FALLBACK_URL);
    }
  };

  return (
    <div className={`relative w-full ${maxWidthClass} flex flex-col items-center`}>
      <div
        className={`relative w-full rounded-2xl overflow-hidden border-2 border-[#c5a059] shadow-[0_15px_35px_rgba(0,0,0,0.85)] ring-2 ring-[#c5a059]/20 ${aspectRatioClass} bg-[#0c121e]`}
      >
        {/* Static CEO Photograph: Fills photo area with rounded corners, loaded immediately */}
        <img
          src={currentSrc}
          alt="Leslie Flint Young - Chief Executive Officer & Founder, Young Investments Consulting Holdings"
          className="w-full h-full object-cover object-center rounded-2xl transition-opacity duration-300"
          loading="eager"
          onError={handleImageError}
        />

        {/* Ambient Dark Gradient for Legibility */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/90 via-black/15 to-transparent pointer-events-none" />

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
