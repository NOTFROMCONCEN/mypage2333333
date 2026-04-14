import type { ComponentType } from "react";

type IconProps = {
  className?: string;
};

export type SiteIcon = ComponentType<IconProps>;

export function IconGithub({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.527 2.865 8.367 6.839 9.722.5.096.682-.222.682-.496 0-.245-.009-.894-.014-1.754-2.782.617-3.369-1.372-3.369-1.372-.455-1.183-1.11-1.497-1.11-1.497-.908-.637.069-.624.069-.624 1.004.072 1.532 1.054 1.532 1.054.892 1.564 2.341 1.112 2.91.85.091-.664.349-1.113.635-1.369-2.221-.259-4.555-1.14-4.555-5.072 0-1.12.39-2.036 1.029-2.753-.103-.26-.446-1.307.098-2.724 0 0 .84-.276 2.75 1.052A9.32 9.32 0 0 1 12 6.836a9.32 9.32 0 0 1 2.504.346c1.909-1.328 2.748-1.052 2.748-1.052.546 1.417.202 2.464.1 2.724.64.717 1.027 1.633 1.027 2.753 0 3.942-2.338 4.81-4.566 5.064.359.318.679.944.679 1.903 0 1.374-.012 2.482-.012 2.819 0 .277.18.598.688.495C19.138 20.611 22 16.773 22 12.248 22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

export function IconMail({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconTerminal({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path d="m5 7 4 4-4 4" />
      <path d="M11 15h8" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
    </svg>
  );
}

export function IconShield({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path d="M12 3 5 6v6c0 4.5 2.9 7.9 7 9 4.1-1.1 7-4.5 7-9V6l-7-3Z" />
    </svg>
  );
}

export function IconServer({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <rect x="4" y="4" width="16" height="6" rx="1.5" />
      <rect x="4" y="14" width="16" height="6" rx="1.5" />
      <path d="M8 7h.01M8 17h.01M12 7h4M12 17h4" />
    </svg>
  );
}

export function IconCpu({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3M5 9V7a2 2 0 0 1 2-2h2M19 9V7a2 2 0 0 0-2-2h-2M5 15v2a2 2 0 0 0 2 2h2M19 15v2a2 2 0 0 1-2 2h-2" />
    </svg>
  );
}

export function IconChevronRight({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function IconActivity({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </svg>
  );
}

export function IconGlobe({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export function IconDatabase({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.657 3.134 3 7 3s7-1.343 7-3V6" />
      <path d="M5 12v6c0 1.657 3.134 3 7 3s7-1.343 7-3v-6" />
    </svg>
  );
}

export function IconGrid({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <rect x="4" y="4" width="6" height="6" />
      <rect x="14" y="4" width="6" height="6" />
      <rect x="4" y="14" width="6" height="6" />
      <rect x="14" y="14" width="6" height="6" />
    </svg>
  );
}

export function IconBolt({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13 2 6 13h5l-1 9 8-12h-5l0-8Z" />
    </svg>
  );
}
