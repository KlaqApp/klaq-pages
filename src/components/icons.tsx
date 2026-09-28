import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export const AppleIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M16.37 12.62c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.51 2.69-1.28z" />
  </svg>
);

export const PlayStoreIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path fill="#00d7fe" d="M3.6 2.3 13.4 12l-9.8 9.7c-.35-.2-.6-.6-.6-1.1V3.4c0-.5.25-.9.6-1.1z" />
    <path fill="#ffce00" d="m16.8 15.4-3.4-3.4 3.4-3.4 3.8 2.2c.9.5.9 1.8 0 2.3z" />
    <path fill="#ff3a44" d="M16.8 15.4 13.4 12l-9.8 9.7c.35.2.8.2 1.2 0z" />
    <path fill="#00f076" d="M16.8 8.6 4.8 2.3c-.4-.2-.85-.2-1.2 0l9.8 9.7z" />
  </svg>
);

export const StarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.6} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const PlayIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m10 8.8 5 3.2-5 3.2z" fill="currentColor" />
  </svg>
);

export const BookmarkIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M6.5 3.5h11v17L12 16.5l-5.5 4z" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const ChartIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);

export const UsersIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.6-3.4 3.3-5.5 6.5-5.5s5.9 2.1 6.5 5.5" />
    <path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.8c1.6.8 2.7 2.6 3 5.2" />
  </svg>
);

export const SyncIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M20 12a8 8 0 0 1-14.3 4.9M4 12a8 8 0 0 1 14.3-4.9" />
    <path d="M18.5 3v4.2h-4.2M5.5 21v-4.2h4.2" />
  </svg>
);

export const PaletteIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.8 1.7-1.6 0-1-.8-1.4-.8-2.4 0-.9.7-1.6 1.6-1.6H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z" />
    <circle cx="7.5" cy="11" r="1.2" fill="currentColor" />
    <circle cx="10" cy="7" r="1.2" fill="currentColor" />
    <circle cx="15" cy="7.5" r="1.2" fill="currentColor" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const GlobeIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 3.7 5.7 3.7 9s-1.2 6.3-3.7 9c-2.5-2.7-3.7-5.7-3.7-9S9.5 5.7 12 3z" />
  </svg>
);

export const ArrowLeftIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const ChevronDownIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const CalendarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="3" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export const InfoIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);

export const HomeIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" />
  </svg>
);

export const SearchIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.2-4.2" />
  </svg>
);

export const UserIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c.8-4 4-6 8-6s7.2 2 8 6" />
  </svg>
);

export const HeartIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" />
  </svg>
);

export const ServerIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="3.5" y="4" width="17" height="7" rx="2.5" />
    <rect x="3.5" y="13" width="17" height="7" rx="2.5" />
    <path d="M7.5 7.5h.01M7.5 16.5h.01" />
  </svg>
);

export const ShareIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="18" cy="5" r="2.8" />
    <circle cx="6" cy="12" r="2.8" />
    <circle cx="18" cy="19" r="2.8" />
    <path d="m8.5 10.6 7-4.2M8.5 13.4l7 4.2" />
  </svg>
);

export const BookIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M4 5.5C4 4.4 4.9 4 6 4h6v16H6c-1.1 0-2-.4-2-1.5z" />
    <path d="M20 5.5c0-1.1-.9-1.5-2-1.5h-6v16h6c1.1 0 2-.4 2-1.5z" />
  </svg>
);

export const GameIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M6.5 8h11a4 4 0 0 1 3.9 4.9l-.7 3a2.6 2.6 0 0 1-4.6 1L14 15h-4l-2.1 1.9a2.6 2.6 0 0 1-4.6-1l-.7-3A4 4 0 0 1 6.5 8z" />
    <path d="M7.5 10.8v3M6 12.3h3" />
    <path d="M16.3 11h.01M18.3 13h.01" />
  </svg>
);

export const ListIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M9 6h11M9 12h11M9 18h11" />
    <path d="M4.5 6h.01M4.5 12h.01M4.5 18h.01" />
  </svg>
);

export const BellIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M6 10a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 14 6 10z" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </svg>
);

export const InstagramIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17 7h.01" />
  </svg>
);

export const XIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M4 3h3.8l4.3 5.8L17 3h3l-6.3 8.1L21 21h-3.8l-4.6-6.2L7 21H4l6.7-8.6z" />
  </svg>
);

export const TikTokIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M14 3h2.7c.3 1.9 1.6 3.3 3.6 3.6v2.8c-1.4 0-2.6-.4-3.6-1.1v6.4a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.9a2.5 2.5 0 1 0 1.8 2.4z" />
  </svg>
);

export const SparkIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
);
