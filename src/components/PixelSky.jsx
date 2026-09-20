import React, { useMemo } from 'react';

// Pixel Cloud Type A (Larger stepped cloud shape)
const PixelCloudA = ({ size = 1, top = '10%', duration = '120s', delay = '0s', opacity = 0.6, reverse = false }) => (
  <div
    className={`sky-element ${reverse ? 'sky-element--reverse' : ''}`}
    style={{
      top,
      opacity,
      animationDuration: duration,
      animationDelay: delay,
      '--scale': size,
    }}
  >
    <svg
      style={{ transform: reverse ? 'scaleX(-1)' : 'none' }}
      viewBox="0 0 120 60"
      width="120"
      height="60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFFFFF"
        d="M40 10h30v10h20v10h10v20H20V40H10V30H0V20h20V10h20z"
      />
      <path
        fill="#E2E8F0"
        d="M20 50h80v10H20z"
        opacity="0.75"
      />
    </svg>
  </div>
);

// Pixel Cloud Type B (Medium stepped cloud shape)
const PixelCloudB = ({ size = 1, top = '15%', duration = '140s', delay = '0s', opacity = 0.5, reverse = false }) => (
  <div
    className={`sky-element ${reverse ? 'sky-element--reverse' : ''}`}
    style={{
      top,
      opacity,
      animationDuration: duration,
      animationDelay: delay,
      '--scale': size,
    }}
  >
    <svg
      style={{ transform: reverse ? 'scaleX(-1)' : 'none' }}
      viewBox="0 0 80 40"
      width="80"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFFFFF"
        d="M30 0h20v10h20v10h10v10H10V20H0V10h10V0h20z"
      />
      <path
        fill="#E2E8F0"
        d="M10 30h60v10H10z"
        opacity="0.75"
      />
    </svg>
  </div>
);

// Pixel Bird Component
const PixelBird = ({ size = 1, top = '20%', duration = '60s', delay = '0s', reverse = false }) => (
  <div
    className={`sky-element ${reverse ? 'sky-element--reverse' : ''}`}
    style={{
      top,
      animationDuration: duration,
      animationDelay: delay,
      '--scale': size,
    }}
  >
    <div
      className="sky-bird-inner"
      style={{ transform: reverse ? 'scaleX(-1)' : 'none' }}
    >
      <svg
        viewBox="0 0 24 12"
        width="24"
        height="12"
        fill="#64748B"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="4" height="4" />
        <rect x="4" y="4" width="4" height="4" />
        <rect x="8" y="8" width="8" height="4" />
        <rect x="16" y="4" width="4" height="4" />
        <rect x="20" y="0" width="4" height="4" />
      </svg>
    </div>
  </div>
);

export default function PixelSky() {
  // Generate deterministic particles so there's no layout shifts
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 95}%`,
      top: `${(i * 23 + 12) % 90}%`,
      delay: `-${(i * 1.5) % 18}s`,
      duration: `${16 + ((i * 3) % 12)}s`,
    }));
  }, []);

  return (
    <div className="sky-background" aria-hidden="true">
      {/* Floating square particles */}
      <div className="sky-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="sky-particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Pixel Clouds - Distant / Slower */}
      <PixelCloudB size={0.6} top="4%" duration="170s" delay="-20s" opacity={0.35} />
      <PixelCloudB size={0.75} top="9%" duration="150s" delay="-110s" opacity={0.4} reverse={true} />
      <PixelCloudA size={0.7} top="18%" duration="180s" delay="-45s" opacity={0.45} reverse={true} />
      <PixelCloudB size={0.8} top="32%" duration="160s" delay="-80s" opacity={0.4} />
      <PixelCloudA size={0.85} top="65%" duration="175s" delay="-15s" opacity={0.35} reverse={true} />

      {/* Pixel Clouds - Midground */}
      <PixelCloudA size={1.0} top="13%" duration="130s" delay="-25s" opacity={0.65} />
      <PixelCloudB size={1.15} top="24%" duration="115s" delay="-70s" opacity={0.6} />
      <PixelCloudA size={1.3} top="38%" duration="100s" delay="-35s" opacity={0.75} />
      <PixelCloudB size={1.1} top="48%" duration="120s" delay="-65s" opacity={0.55} reverse={true} />
      <PixelCloudA size={1.25} top="75%" duration="110s" delay="-85s" opacity={0.65} />

      {/* Pixel Clouds - Foreground / Crisper */}
      <PixelCloudB size={1.5} top="28%" duration="85s" delay="-15s" opacity={0.85} />
      <PixelCloudA size={1.7} top="54%" duration="95s" delay="-50s" opacity={0.9} />
      <PixelCloudB size={1.4} top="84%" duration="90s" delay="-90s" opacity={0.75} reverse={true} />

      {/* Tiny Pixel Birds */}
      <PixelBird size={0.9} top="11%" duration="65s" delay="-10s" />
      <PixelBird size={0.65} top="19%" duration="80s" delay="-45s" />
      <PixelBird size={1.1} top="27%" duration="50s" delay="-20s" reverse={true} />
      <PixelBird size={0.8} top="42%" duration="70s" delay="-35s" />
      <PixelBird size={0.7} top="62%" duration="75s" delay="-55s" reverse={true} />
    </div>
  );
}
