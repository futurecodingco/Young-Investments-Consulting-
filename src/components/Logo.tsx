import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'mark-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  onClick
}) => {
  // Dimensions based on size
  const markDimensions = {
    sm: 36,
    md: 46,
    lg: 60,
    xl: 76
  }[size];

  return (
    <div
      id="brand-logo-container"
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 select-none ${onClick ? 'cursor-pointer transition-transform hover:scale-[1.01]' : ''} ${
        variant === 'vertical' ? 'flex-col text-center' : 'flex-row'
      } ${className}`}
    >
      {/* Precision Geometric Vector Insignia */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={markDimensions}
          height={markDimensions}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_4px_14px_rgba(197,160,89,0.3)] transition-transform duration-300"
        >
          <defs>
            {/* Luxury Champagne Gold Linear Gradient */}
            <linearGradient id="goldGradientPrimary" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#fdf3d1" />
              <stop offset="25%" stopColor="#f4dc95" />
              <stop offset="55%" stopColor="#c5a059" />
              <stop offset="85%" stopColor="#9a7428" />
              <stop offset="100%" stopColor="#674a12" />
            </linearGradient>

            {/* Dark Obsidian Inner Shield Gradient */}
            <linearGradient id="shieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#151e2e" />
              <stop offset="60%" stopColor="#0a101d" />
              <stop offset="100%" stopColor="#05080e" />
            </linearGradient>

            {/* Radial Glow */}
            <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx="50" cy="50" r="46" fill="url(#goldGlow)" />

          {/* Outer Diamond / Hexagonal Shield */}
          <path
            d="M50 4 L88 24 L88 68 L50 96 L12 68 L12 24 Z"
            fill="url(#shieldBg)"
            stroke="url(#goldGradientPrimary)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Inner Accent Inset Border */}
          <path
            d="M50 11 L81 28 L81 64 L50 89 L19 64 L19 28 Z"
            fill="none"
            stroke="url(#goldGradientPrimary)"
            strokeWidth="0.9"
            strokeDasharray="2 2"
            opacity="0.75"
          />

          {/* Interlocking Monogram: The "Y" with Capital & Logistics Cross-Bar */}
          {/* Upper Left Wing */}
          <path
            d="M26 26 L46 50 L46 76 L54 76 L54 50 L74 26 L64 26 L50 43 L36 26 Z"
            fill="url(#goldGradientPrimary)"
          />

          {/* Central Architectural Compass Diamond (African Capital / Strategic Direction) */}
          <polygon
            points="50,30 55,39 50,48 45,39"
            fill="#ffffff"
            opacity="0.95"
          />

          {/* Horizontal Logistics Anchor Bar (Crossing the Stem) */}
          <rect
            x="38"
            y="61"
            width="24"
            height="3"
            rx="1.5"
            fill="url(#goldGradientPrimary)"
          />

          {/* Bottom Foundation Triangles */}
          <polygon points="50,81 44,76 56,76" fill="url(#goldGradientPrimary)" />

          {/* Decorative Corner Facets */}
          <circle cx="50" cy="7" r="1.8" fill="#fdf3d1" />
          <circle cx="85" cy="26" r="1.4" fill="#c5a059" />
          <circle cx="15" cy="26" r="1.4" fill="#c5a059" />
          <circle cx="85" cy="66" r="1.4" fill="#c5a059" />
          <circle cx="15" cy="66" r="1.4" fill="#c5a059" />
          <circle cx="50" cy="92" r="1.8" fill="#fdf3d1" />
        </svg>
      </div>

      {/* Typographic Identity */}
      {variant !== 'mark-only' && (
        <div className={`flex flex-col ${variant === 'vertical' ? 'items-center' : 'items-start'}`}>
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold tracking-[0.16em] text-slate-100 text-sm sm:text-base leading-tight">
              YOUNG INVESTMENTS
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#c5a059] leading-none">
              CONSULTING HOLDINGS <span className="opacity-75">(PTY) LTD</span>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[9px] tracking-[0.18em] text-slate-400 font-medium uppercase">
              Pretoria • South Africa
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#c5a059]/60"></span>
            <span className="text-[9px] tracking-wider text-slate-400 font-mono">
              K2020170638
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
