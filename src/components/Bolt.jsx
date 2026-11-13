// Glossy 3D-style orange arrow/bolt used as decoration (like the reference).
export default function Bolt({ className = "" }) {
  return (
    <svg viewBox="0 0 200 300" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFB070" />
          <stop offset=".45" stopColor="#FF5A1F" />
          <stop offset="1" stopColor="#8A2A05" />
        </linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <path d="M110 5 L190 130 L135 130 L165 295 L20 140 L80 140 Z" fill="url(#bg1)" opacity=".92" filter="url(#glow)" />
      <path d="M110 25 L168 125 L120 125 L140 235 L52 138 L100 138 Z" fill="none" stroke="#FFD2A8" strokeOpacity=".7" strokeWidth="3" />
    </svg>
  );
}
