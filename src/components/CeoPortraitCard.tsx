import React, { useState, useEffect } from 'react';
import { ShieldCheck, Upload, AlertCircle } from 'lucide-react';

// Automatically detect any CEO image in src/assets/images/
const imageModules = import.meta.glob<{ default: string }>(
  '../assets/images/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);

interface CeoPortraitCardProps {
  aspectRatioClass?: string;
  maxWidthClass?: string;
}

export const CeoPortraitCard: React.FC<CeoPortraitCardProps> = ({
  aspectRatioClass = 'aspect-square',
  maxWidthClass = 'max-w-md'
}) => {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);

  useEffect(() => {
    // 1. Check local storage if previously uploaded in preview
    const cached = localStorage.getItem('young_investments_ceo_photo');
    if (cached) {
      setPhotoSrc(cached);
      return;
    }

    // 2. Check detected images in src/assets/images/
    // Look for Mr CEO, ceo, leslie, young, or any image not being infrastructure/logo
    const candidates = Object.entries(imageModules);
    const ceoEntry = candidates.find(([path]) => {
      const lower = path.toLowerCase();
      return (
        lower.includes('mr') ||
        lower.includes('ceo') ||
        lower.includes('leslie') ||
        (!lower.includes('infrastructure') && !lower.includes('logo'))
      );
    });

    if (ceoEntry) {
      setPhotoSrc(ceoEntry[1].default);
    } else {
      // 3. Check public static path fallback
      setPhotoSrc('/Mr%20CEO.jpg');
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      localStorage.setItem('young_investments_ceo_photo', dataUrl);
      setPhotoSrc(dataUrl);

      // Save permanently to server in src/assets/images/
      fetch('/api/upload-ceo-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: dataUrl })
      }).catch(err => console.error('Upload error:', err));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`relative w-full ${maxWidthClass} flex flex-col items-center`}>
      <div
        className={`relative w-full rounded-2xl overflow-hidden border-2 border-[#c5a059] shadow-[0_15px_35px_rgba(0,0,0,0.85)] ring-2 ring-[#c5a059]/20 ${aspectRatioClass} bg-[#0c121e] flex flex-col items-center justify-center`}
      >
        {photoSrc ? (
          <>
            {/* The Authentic Photograph of Leslie Flint Young */}
            <img
              src={photoSrc}
              alt="Leslie Flint Young - Chief Executive Officer & Founder, Young Investments Consulting Holdings"
              className="w-full h-full object-cover object-center"
              loading="eager"
              onError={() => {
                // If the static path failed, fallback to file upload helper
                setPhotoSrc(null);
              }}
            />

            {/* Ambient Dark Gradient for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent pointer-events-none" />

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
          </>
        ) : (
          /* One-click upload if file is not yet in directory */
          <label className="w-full h-full p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-900/50 transition-colors">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            <div className="w-14 h-14 rounded-full border border-[#c5a059]/50 bg-[#0c1322] flex items-center justify-center mb-3">
              <Upload className="w-6 h-6 text-[#c5a059]" />
            </div>
            <div className="text-sm font-bold text-white">Click to add Mr CEO.jpg</div>
            <div className="text-[11px] text-slate-400 mt-1 max-w-xs">
              Select your "Mr CEO.jpg" file to display it immediately on the site.
            </div>
          </label>
        )}
      </div>
    </div>
  );
};
