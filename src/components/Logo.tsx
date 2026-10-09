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
  const markDimensions = {
    sm: 38,
    md: 48,
    lg: 64,
    xl: 88
  }[size];

  return (
    <div
      id="brand-logo-container"
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 select-none ${onClick ? 'cursor-pointer transition-transform hover:scale-[1.01]' : ''} ${
        variant === 'vertical' ? 'flex-col text-center' : 'flex-row'
      } ${className}`}
    >
      {/* Precision Institutional Holdings Crest (YICH — Young Investments & Consulting Holdings) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={markDimensions}
          height={markDimensions}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_4px_14px_rgba(197,160,89,0.28)] transition-transform duration-300"
        >
          <defs>
            {/* Luxury Champagne Gold Linear Gradient */}
            <linearGradient id="yichGoldPrimary" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#fdf3d1" />
              <stop offset="25%" stopColor="#f4dc95" />
              <stop offset="55%" stopColor="#c5a059" />
              <stop offset="85%" stopColor="#9a7428" />
              <stop offset="100%" stopColor="#674a12" />
            </linearGradient>

            {/* Dark Obsidian Inner Shield Gradient */}
            <linearGradient id="yichShieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#141e30" />
              <stop offset="60%" stopColor="#0a101d" />
              <stop offset="100%" stopColor="#05080f" />
            </linearGradient>

            {/* Radial Glow */}
            <radialGradient id="yichGoldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Subtle Ambient Halo */}
          <circle cx="60" cy="60" r="56" fill="url(#yichGoldGlow)" />

          {/* Outer Sovereign Octagonal-Hex Shield */}
          <path
            d="M60 5 L106 28 L106 80 L60 115 L14 80 L14 28 Z"
            fill="url(#yichShieldBg)"
            stroke="url(#yichGoldPrimary)"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />

          {/* Inner Architectural Frame */}
          <path
            d="M60 12 L99 32 L99 76 L60 107 L21 76 L21 32 Z"
            fill="none"
            stroke="url(#yichGoldPrimary)"
            strokeWidth="1"
            opacity="0.7"
          />

          {/* Fine Filigree Inner Ring */}
          <circle
            cx="60"
            cy="57"
            r="34"
            fill="none"
            stroke="url(#yichGoldPrimary)"
            strokeWidth="0.75"
            strokeDasharray="2.5 2.5"
            opacity="0.55"
          />

          {/* Architectural Holdings Pillars (Left & Right Vertical Columns of 'H') */}
          <rect x="33" y="34" width="5.5" height="44" rx="1" fill="url(#yichGoldPrimary)" opacity="0.85" />
          <rect x="81.5" y="34" width="5.5" height="44" rx="1" fill="url(#yichGoldPrimary)" opacity="0.85" />

          {/* Holdings Cross-Bridge ('H' crossbar linking the two institutional pillars) */}
          <rect x="33" y="55" width="54" height="4.2" rx="1" fill="url(#yichGoldPrimary)" opacity="0.9" />

          {/* Central Dominant 'Y' Monogram */}
          <path
            d="M36 28 L55.5 54 L55.5 84 L64.5 84 L64.5 54 L84 28 L73.5 28 L60 46.5 L46.5 28 Z"
            fill="url(#yichGoldPrimary)"
          />

          {/* Sovereign Compass Star at the Crown of the Y */}
          <polygon
            points="60,21 64.5,30 60,39 55.5,30"
            fill="#ffffff"
            opacity="0.95"
          />

          {/* Pedestal Base Steps (Holdings Foundation) */}
          <rect x="46" y="84" width="28" height="3.2" rx="1" fill="url(#yichGoldPrimary)" />
          <rect x="51" y="89" width="18" height="2.5" rx="1" fill="url(#yichGoldPrimary)" opacity="0.85" />

          {/* Engraved YICH Micro-Identifier at Shield Base */}
          <text
            x="60"
            y="101"
            textAnchor="middle"
            fill="#f4dc95"
            fontSize="6.5"
            fontWeight="700"
            fontFamily="Cinzel, Georgia, serif"
            letterSpacing="2.2"
          >
            Y·I·C·H
          </text>

          {/* Corner Facet Studs */}
          <circle cx="60" cy="8.5" r="1.8" fill="#fdf3d1" />
          <circle cx="102" cy="30" r="1.5" fill="#c5a059" />
          <circle cx="18" cy="30" r="1.5" fill="#c5a059" />
          <circle cx="102" cy="78" r="1.5" fill="#c5a059" />
          <circle cx="18" cy="78" r="1.5" fill="#c5a059" />
          <circle cx="60" cy="111" r="1.8" fill="#fdf3d1" />
        </svg>
      </div>

      {/* Official Typographic Wordmark Lockup */}
      {variant !== 'mark-only' && (
        <div className={`flex flex-col ${variant === 'vertical' ? 'items-center' : 'items-start'}`}>
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold tracking-[0.14em] text-white text-sm sm:text-base leading-tight">
              YOUNG INVESTMENTS
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#c5a059] leading-none">
              &amp; CONSULTING HOLDINGS <span className="text-slate-300 font-medium">(PTY) LTD</span>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[9px] tracking-[0.16em] text-slate-400 font-medium uppercase">
              Pretoria • South Africa
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#c5a059]/70" />
            <span className="text-[9px] tracking-wider text-slate-400 font-mono">
              REG. K2020170638
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
