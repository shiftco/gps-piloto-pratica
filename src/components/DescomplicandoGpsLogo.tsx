import React from 'react';

interface DescomplicandoGpsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const DescomplicandoGpsLogo: React.FC<DescomplicandoGpsLogoProps> = ({ 
  className = "h-9 sm:h-11 w-auto", 
  size = 'md' 
}) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 540 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain filter drop-shadow-md"
        aria-label="Descomplicando GPS Logo"
      >
        <defs>
          {/* Main Lime Green Gradient for GPS */}
          <linearGradient id="gpsLimeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c4f738" />
            <stop offset="25%" stopColor="#9ee312" />
            <stop offset="70%" stopColor="#76be08" />
            <stop offset="100%" stopColor="#4f8502" />
          </linearGradient>

          {/* 3D Bevel Top Highlight */}
          <linearGradient id="bevelLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#a3e635" stopOpacity="0.2" />
          </linearGradient>

          {/* 3D Bevel Shadow */}
          <linearGradient id="bevelShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#365e02" />
            <stop offset="100%" stopColor="#142600" />
          </linearGradient>

          {/* Red Pin 3D Gradient */}
          <radialGradient id="pinRedGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ff5252" />
            <stop offset="45%" stopColor="#e50914" />
            <stop offset="85%" stopColor="#990000" />
            <stop offset="100%" stopColor="#550000" />
          </radialGradient>

          {/* Pin Drop Shadow */}
          <filter id="pinShadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.7" />
          </filter>

          {/* White Metallic Gradient for DESCOMPLICANDO */}
          <linearGradient id="whiteMetallic" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="75%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          {/* Subtle logo glow */}
          <filter id="greenGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#84cc16" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* --- TOP TEXT: DESCOMPLICANDO --- */}
        <g transform="translate(10, 48) skewX(-14)">
          {/* Black shadow outline for contrast on any background */}
          <text
            x="32"
            y="26"
            fontFamily="'Space Grotesk', 'Impact', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="34"
            letterSpacing="2"
            fill="#090d0b"
            stroke="#090d0b"
            strokeWidth="8"
            strokeLinejoin="round"
          >
            DESCOMPLICANDO
          </text>
          {/* Main metallic white text */}
          <text
            x="32"
            y="26"
            fontFamily="'Space Grotesk', 'Impact', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="34"
            letterSpacing="2"
            fill="url(#whiteMetallic)"
            stroke="#1e293b"
            strokeWidth="1.5"
            strokeLinejoin="round"
          >
            DESCOMPLICANDO
          </text>
          {/* Inner bright bevel highlight */}
          <text
            x="32"
            y="24.5"
            fontFamily="'Space Grotesk', 'Impact', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="34"
            letterSpacing="2"
            fill="#ffffff"
            fillOpacity="0.7"
            clipPath="url(#whiteMetallic)"
          >
            DESCOMPLICANDO
          </text>
        </g>

        {/* --- GIANT 3D BEVELED "GPS" TEXT WITH FURROWS --- */}
        <g transform="translate(0, 78) skewX(-14)">

          {/* === LETTER G === */}
          {/* Drop shadow / dark extrusion for G */}
          <path
            d="M 120 10 
               L 55 10 
               C 22 10 10 32 10 65 
               L 10 85 
               C 10 120 25 140 60 140 
               L 118 140 
               C 126 140 130 135 130 125 
               L 130 92 
               L 78 92 
               L 78 108 
               L 108 108 
               L 108 122 
               L 62 122 
               C 42 122 34 110 34 85 
               L 34 65 
               C 34 40 42 28 62 28 
               L 120 28 
               Z"
            fill="#182e02"
            transform="translate(4, 6)"
          />
          {/* Main G Body */}
          <path
            d="M 120 10 
               L 55 10 
               C 22 10 10 32 10 65 
               L 10 85 
               C 10 120 25 140 60 140 
               L 118 140 
               C 126 140 130 135 130 125 
               L 130 92 
               L 78 92 
               L 78 108 
               L 108 108 
               L 108 122 
               L 62 122 
               C 42 122 34 110 34 85 
               L 34 65 
               C 34 40 42 28 62 28 
               L 120 28 
               Z"
            fill="url(#gpsLimeGrad)"
            stroke="#1c3302"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Agricultural Field Furrow Lines in G (bottom curve) */}
          <g stroke="#142600" strokeWidth="4" strokeLinecap="round" fill="none">
            <path d="M 12 115 Q 38 108 65 108" />
            <path d="M 16 124 Q 46 116 80 116" />
            <path d="M 24 133 Q 56 124 95 124" />
            <path d="M 38 139 Q 68 132 110 132" />
          </g>
          {/* G Inner Highlight Bevel */}
          <path
            d="M 118 13 L 56 13 C 25 13 14 34 14 65 L 14 85"
            stroke="url(#bevelLight)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* === LETTER P === */}
          {/* Drop shadow / dark extrusion for P */}
          <path
            d="M 148 10 
               L 225 10 
               C 255 10 268 28 268 55 
               C 268 82 252 98 222 98 
               L 176 98 
               L 176 140 
               L 148 140 
               Z"
            fill="#182e02"
            transform="translate(4, 6)"
          />
          {/* Main P Body */}
          <path
            d="M 148 10 
               L 225 10 
               C 255 10 268 28 268 55 
               C 268 82 252 98 222 98 
               L 176 98 
               L 176 140 
               L 148 140 
               Z"
            fill="url(#gpsLimeGrad)"
            stroke="#1c3302"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner Counter Hole in P */}
          <path
            d="M 176 28 
               L 218 28 
               C 236 28 244 38 244 54 
               C 244 70 236 80 218 80 
               L 176 80 
               Z"
            fill="#090d0b"
            stroke="#1c3302"
            strokeWidth="2.5"
          />
          {/* P Highlight Bevel */}
          <path
            d="M 151 13 L 223 13 C 250 13 264 29 264 54"
            stroke="url(#bevelLight)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* === LETTER S === */}
          {/* Drop shadow / dark extrusion for S */}
          <path
            d="M 288 38 
               L 380 38 
               L 380 54 
               L 316 54 
               C 300 54 292 62 292 74 
               C 292 86 304 94 324 94 
               L 368 94 
               C 392 94 404 108 404 124 
               C 404 140 388 140 368 140 
               L 278 140 
               L 278 124 
               L 364 124 
               C 376 124 380 120 380 114 
               C 380 108 372 106 356 106 
               L 312 106 
               C 284 106 270 94 270 74 
               C 270 48 282 38 308 38 
               Z"
            fill="#182e02"
            transform="translate(4, 6)"
          />
          {/* Main S Body */}
          <path
            d="M 288 38 
               L 388 38 
               L 388 54 
               L 316 54 
               C 300 54 292 62 292 74 
               C 292 86 304 94 324 94 
               L 368 94 
               C 392 94 404 108 404 124 
               C 404 140 388 140 368 140 
               L 278 140 
               L 278 124 
               L 364 124 
               C 376 124 380 120 380 114 
               C 380 108 372 106 356 106 
               L 312 106 
               C 284 106 270 94 270 74 
               C 270 48 282 38 308 38 
               Z"
            fill="url(#gpsLimeGrad)"
            stroke="#1c3302"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Agricultural Field Furrow Lines in S (bottom shelf) */}
          <g stroke="#142600" strokeWidth="3.5" strokeLinecap="round" fill="none">
            <line x1="324" y1="140" x2="340" y2="124" />
            <line x1="338" y1="140" x2="354" y2="124" />
            <line x1="352" y1="140" x2="368" y2="124" />
            <line x1="366" y1="140" x2="382" y2="124" />
            <line x1="380" y1="140" x2="394" y2="126" />
          </g>
          {/* S Highlight Bevel */}
          <path
            d="M 310 41 L 385 41"
            stroke="url(#bevelLight)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* --- 3D RED LOCATION PIN ABOVE S --- */}
        <g transform="translate(378, 12)" filter="url(#pinShadow)">
          {/* Pin Body (teardrop) */}
          <path
            d="M 28 0 
               C 12.5 0 0 12.5 0 28 
               C 0 46 25 72 28 75 
               C 31 72 56 46 56 28 
               C 56 12.5 43.5 0 28 0 
               Z"
            fill="url(#pinRedGrad)"
            stroke="#7f1d1d"
            strokeWidth="2"
          />
          
          {/* Inner Circular Hole */}
          <circle 
            cx="28" 
            cy="27" 
            r="12.5" 
            fill="#3b0707" 
            stroke="#991b1b" 
            strokeWidth="2"
          />
          
          {/* 3D Glossy Specular Light Flare */}
          <path
            d="M 12 14 
               C 16 8 23 4 30 4 
               C 34 4 38 5 42 8 
               C 36 6 28 6 22 9 
               C 16 12 12 18 10 24 
               C 10 20 11 16 12 14 
               Z"
            fill="#ffffff"
            opacity="0.75"
          />
          
          {/* Small Dot Highlight */}
          <circle cx="20" cy="18" r="2.5" fill="#ffffff" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
};
