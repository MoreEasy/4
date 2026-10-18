type IconProps = { className?: string };

export function Flame({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.6 1.6c.3 2.9-.9 4.6-2.6 6.3-1.8 1.8-3.7 3.7-3.7 6.6A5.9 5.9 0 0 0 8 19.2c-.5-2.9.9-4.6 2.4-5.9.4 1.1 1.1 1.9 2 2.5 1.1.8 2.3 1.7 2.3 3.3 0 .9-.4 1.7-1 2.3a6.1 6.1 0 0 0 3.9-5.7c0-2-.8-3.4-1.6-4.7-.9-1.5-1.9-3-1.9-5 0-1.6.3-3.2 1.5-4.4Z" />
      <path d="M12 22.2a6.3 6.3 0 0 1-4-1.4c.5.1 1 .1 1.4 0 2.9-.5 4.8-2.6 4.3-5.3-.2-1-.7-1.8-1.4-2.5 1.5.5 2.8 1.4 3.6 2.8.3 3.4-1.3 5.6-3.9 6.4Z" opacity=".45" />
    </svg>
  );
}

export function Chili({ className = "", off = false }: IconProps & { off?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={off ? "none" : "currentColor"}
      stroke="currentColor"
      strokeWidth={off ? 1.7 : 0}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M17.4 5.3c.3-1.6-.5-2.8-2-3.2-.4-.1-.8.1-.9.5-.1.4.1.8.5.9.7.2 1 .7.9 1.4"
        fill="none"
        strokeWidth={1.7}
      />
      <path d="M15.9 4.8c2.4.9 3.6 3.1 3.2 6.1-.6 4.3-4 8.2-8.5 9.6-3.4 1.1-7 .5-9.7-1.2-.5-.3-.4-1.1.2-1.3 2.7-.9 5.1-2.9 6.9-5.7 1.8-3 4.6-5.7 7.9-7.5Z" />
    </svg>
  );
}

export function Star({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.4 14.9 8.6l6.7.6-5.1 4.5 1.5 6.6L12 16.9l-6 3.4 1.5-6.6-5.1-4.5 6.7-.6L12 2.4Z" />
    </svg>
  );
}

export function Spark({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.3 7.7L22 12l-7.7 2.3L12 22l-2.3-7.7L2 12l7.7-2.3L12 2Z" />
    </svg>
  );
}

export function Pin({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21.5s-7.2-6.4-7.2-11.3a7.2 7.2 0 1 1 14.4 0C19.2 15.1 12 21.5 12 21.5Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5.5 3.5h3l1.7 4.2-2.1 1.6a12.8 12.8 0 0 0 6.6 6.6l1.6-2.1 4.2 1.7v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function Clock({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
    </svg>
  );
}

export function Arrow({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 12h16" />
      <path d="M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function Instagram({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Bag({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5.5 8h13l-1 12.5h-11L5.5 8Z" />
      <path d="M8.5 10.5V6.8a3.5 3.5 0 0 1 7 0v3.7" />
    </svg>
  );
}

export function Plate({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
    </svg>
  );
}

export function Quote({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4 13.2C4 8.9 6.6 5.9 10.4 5v2.9c-1.9.7-3 2-3.2 3.7h2.9V19H4v-5.8Zm10 0c0-4.3 2.6-7.3 6.4-8.2v2.9c-1.9.7-3 2-3.2 3.7h2.9V19H14v-5.8Z" />
    </svg>
  );
}
