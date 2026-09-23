import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useCeoPhoto } from '../utils/ceoPhotoStorage';
import { ShieldCheck, Maximize2, X } from 'lucide-react';

interface CeoPortraitCardProps {
  aspectRatioClass?: string;
  maxWidthClass?: string;
}

export const CeoPortraitCard: React.FC<CeoPortraitCardProps> = ({
  aspectRatioClass = 'aspect-square',
  maxWidthClass = 'max-w-md'
}) => {
  const { photoUrl, saveCustomPhoto } = useCeoPhoto();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback((file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        saveCustomPhoto(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  }, [saveCustomPhoto]);

  // Support paste from clipboard
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            processFile(file);
            break;
          }
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [processFile]);

  return (
    <>
      <div className={`relative w-full ${maxWidthClass} flex flex-col items-center group`}>
        {/* Hidden file input for drag/drop or click replacement */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) processFile(f);
          }}
        />

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            const f = e.dataTransfer.files?.[0];
            if (f) processFile(f);
          }}
          className={`relative w-full rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
            isDragging
              ? 'border-emerald-400 ring-4 ring-emerald-400/40 scale-[1.02]'
              : 'border-[#c5a059] shadow-[0_15px_35px_rgba(0,0,0,0.85)] ring-2 ring-[#c5a059]/20'
          } ${aspectRatioClass} bg-[#0c121e]`}
        >
          {/* Authentic Full-Frame Photograph - Square 1:1 format */}
          <img
            src={photoUrl}
            alt="Leslie Flint Young - Chief Executive Officer & Founder, Young Investments Consulting Holdings"
            className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-700 group-hover:scale-[1.02]"
            onClick={() => setIsLightboxOpen(true)}
            loading="eager"
          />

          {/* Expand Lightbox Button */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            title="View Full Resolution Photo"
            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-20"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          {/* Dark Bottom Vignette for statutory title visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />

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

      {/* Full-Screen Lightbox Modal for Uncropped Full-Resolution View */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden border-2 border-[#c5a059] shadow-2xl bg-black">
              <img
                src={photoUrl}
                alt="Leslie Flint Young - Full Photo"
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>

            <div className="mt-3 text-center">
              <div className="text-sm font-display font-bold text-white">
                Leslie Flint Young
              </div>
              <div className="text-xs text-[#c5a059] font-mono">
                Director &amp; Chief Executive Officer — Young Investments Consulting Holdings
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
