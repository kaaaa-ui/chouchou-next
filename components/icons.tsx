/* Minimal stroke icon set (currentColor) */
type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const IcoNoFace = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="9" r="4" />
    <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
    <path d="M3.5 3.5l17 17" />
  </svg>
);
export const IcoHome = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 11l8-7 8 7" />
    <path d="M6 9.5V20h12V9.5" />
    <path d="M10 20v-5h4v5" />
  </svg>
);
export const IcoFemale = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M12 12v8M9 17h6" />
  </svg>
);
export const IcoBanYen = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 7.5l3.5 5 3.5-5M12 12.5V17M9.5 13.5h5M9.5 15.5h5" />
    <path d="M5 5l14 14" />
  </svg>
);
export const IcoCheck = ({ className }: P) => (
  <svg {...base} strokeWidth={3} className={className}>
    <path d="M4.5 12.5l5 5L19.5 7" />
  </svg>
);
export const IcoX = ({ className }: P) => (
  <svg {...base} strokeWidth={2.6} className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const IcoMask = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 9c2.5-1 4.5-1.5 7-1.5S16.5 8 19 9v4c0 3.5-3 6-7 6s-7-2.5-7-6V9z" />
    <path d="M5 10H3.5a1.5 1.5 0 000 3H5M19 10h1.5a1.5 1.5 0 010 3H19" />
  </svg>
);
export const IcoTag = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3h8v8L11 20l-8-8 9-9z" />
    <circle cx="16" cy="7" r="1.4" />
  </svg>
);
export const IcoLock = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 018 0v3" />
  </svg>
);
export const IcoSnsOff = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <path d="M7 7l10 10M17 7L7 17" />
  </svg>
);
export const IcoPhoneBan = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="7" y="3" width="10" height="18" rx="2.5" />
    <path d="M10.5 18.5h3" />
    <path d="M4 4l16 16" />
  </svg>
);
export const IcoClock = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);
export const IcoLaptop = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="5" y="5" width="14" height="10" rx="1.5" />
    <path d="M3 19h18" />
  </svg>
);
export const IcoHeadset = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 13a8 8 0 0116 0" />
    <rect x="3" y="13" width="4" height="6" rx="1.5" />
    <rect x="17" y="13" width="4" height="6" rx="1.5" />
    <path d="M19 19a4 4 0 01-4 2.5" />
  </svg>
);
export const IcoMegaphone = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 10v4l11 4V6L4 10z" />
    <path d="M15 8.5a4 4 0 010 7" />
    <path d="M6.5 14.5l1 5" />
  </svg>
);
export const IcoCalc = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="6" y="3" width="12" height="18" rx="2" />
    <path d="M9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
  </svg>
);
export const IcoScale = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 4v16M5 20h14" />
    <path d="M5 7l14-2" />
    <path d="M5 7l-2.5 5a3 3 0 005 0L5 7zM19 5l-2.5 5a3 3 0 005 0L19 5z" />
  </svg>
);
export const IcoDocSearch = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 3h8l4 4v14H7V3z" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M14 14l2.5 2.5" />
  </svg>
);
export const IcoChart = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 20V10M10 20V5M16 20v-8M21 20H3" />
  </svg>
);
export const IcoPeople = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="9" r="3" />
    <path d="M3.5 19c1-2.8 3-4 5.5-4s4.5 1.2 5.5 4" />
    <circle cx="17" cy="10" r="2.4" />
    <path d="M16 15.2c2 .2 3.6 1.3 4.5 3.3" />
  </svg>
);
export const IcoGauge = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 16a8 8 0 0116 0" />
    <path d="M12 16l4-5" />
    <path d="M3 20h18" />
  </svg>
);
export const IcoHandCoin = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="14" cy="7" r="3.4" />
    <path d="M12.7 5.7l1.3 2 1.3-2M14 7.7V9M13 8.2h2" strokeWidth={1.2} />
    <path d="M3 14h3l4 2h5a1.5 1.5 0 010 3h-6" />
    <path d="M3 20h3l4 1h7l4-3" />
  </svg>
);
export const IcoLine = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 3C6.5 3 2 6.6 2 11.1c0 2.6 1.5 4.9 3.8 6.4-.2.7-.7 2.4-.8 2.8 0 0-.1.4.2.5.3.1.6-.1.6-.1.4-.2 2.6-1.7 3.5-2.4.9.1 1.8.2 2.7.2 5.5 0 10-3.6 10-8.1S17.5 3 12 3z" />
  </svg>
);
export const IcoCrown = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 18l-1-9 5 3 4-7 4 7 5-3-1 9H4z" />
  </svg>
);
export const IcoVideo = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="6" width="13" height="12" rx="2" />
    <path d="M16 10l5-3v10l-5-3" />
  </svg>
);
export const IcoGear = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9L19 19M19 5l-2.1 2.1M7.1 16.9L5 19" />
  </svg>
);
export const IcoPlay = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5l5 3.5-5 3.5v-7z" />
  </svg>
);
export const IcoChat = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 5h16v11H9l-5 4V5z" />
    <path d="M8 9h8M8 12h5" />
  </svg>
);
export const IcoArrowR = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 4l9 8-9 8V4z" />
  </svg>
);
export const IcoSparkle = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
  </svg>
);
export const IcoRibbon = ({ className }: P) => (
  <svg viewBox="0 0 48 28" fill="currentColor" className={className}>
    <path d="M24 14c-4-7-10-11-16-10C3 5 2 11 5 15s9 5 14 2l-2 8c0 .8 1.2 1.2 1.8.5L24 19l5.2 6.5c.6.7 1.8.3 1.8-.5l-2-8c5 3 11 2 14-2s2-10-3-11c-6-1-12 3-16 10zm-3-1.2c-3.5 2.6-8.5 3-11 .8-2.3-2-1.6-6 1.5-7 4-1.2 8 2 9.5 6.2zm6 0c1.5-4.2 5.5-7.4 9.5-6.2 3.1 1 3.8 5 1.5 7-2.5 2.2-7.5 1.8-11-.8z" />
    <circle cx="24" cy="13.5" r="3.2" />
  </svg>
);
