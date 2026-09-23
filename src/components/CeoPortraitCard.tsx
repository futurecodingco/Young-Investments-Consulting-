import React, { useState, useRef, useEffect } from 'react';
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
  const { photoUrl, saveCustomPhoto } = useCeoPhoto();
  const [loadError, setLoadError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync state if photoUrl changes
  useEffect(() => {
    setLoadError(false);
  }, [photoUrl]);

  // Support seamless paste or drag-and-drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) saveCustomPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) saveCustomPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative w-full ${maxWidthClass} flex flex-col items-center`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className={`relative w-full rounded-2xl overflow-hidden border-2 border-[#c5a059] shadow-[0_15px_35px_rgba(0,0,0,0.85)] ring-2 ring-[#c5a059]/20 ${aspectRatioClass} bg-[#0c121e]`}
      >
        {!loadError ? (
          <img
            src={photoUrl}
            alt="Leslie Flint Young - CEO & Founder, Young Investments Consulting Holdings"
            className="w-full h-full object-cover object-top"
            onError={() => setLoadError(true)}
            loading="eager"
          />
        ) : (
          /* Clean executive monogram if image is loading */
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#121c2d] to-[#080d16] text-center cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full border-2 border-[#c5a059] flex items-center justify-center bg-[#070b12] shadow-[0_0_25px_rgba(197,160,89,0.3)] mb-4">
              <span className="font-display text-2xl font-bold gold-gradient-text tracking-widest">
                LFY
              </span>
            </div>
            <div className="text-base font-display font-bold text-white tracking-wide">
              Leslie Flint Young
            </div>
            <div className="text-xs text-[#c5a059] font-mono mt-1">
              Chief Executive Officer & Founder
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Young Investments Consulting Holdings
            </div>
          </div>
        )}

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

        {/* CIPC Statutory Registration Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-[#c5a059]/40 text-[9px] font-mono text-[#c5a059] pointer-events-none z-10">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>CIPC Registered Director</span>
        </div>

        {/* Executive Identification Bottom Tag */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left pointer-events-none z-10">
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
