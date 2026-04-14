import type { ComponentType } from 'react';

// Icon types
export type IconProps = {
  className?: string;
};

export type SiteIcon = ComponentType<IconProps>;

// Navigation types
export type NavItem = {
  label: string;
  id: string;
};

// Hero types
export type HeroHighlight = {
  label: string;
  value: string;
};

// Stats types
export type StatItem = {
  label: string;
  value: string;
  sub: string;
  icon: SiteIcon;
};

// Summary types
export type SummaryPanel = {
  id: string;
  title: string;
  value: string;
};

// Timeline types
export type TimelineItem = {
  index: string;
  title: string;
  desc: string;
  tag: string;
};

// Project types
export type ProjectItem = {
  code: string;
  title: string;
  subtitle: string;
  desc: string;
  stack: string;
  role: string;
  result: string;
  icon: SiteIcon;
};

// Section navigation types
export type SectionNavRefs = {
  overview: React.RefObject<HTMLElement | null>;
  archive: React.RefObject<HTMLElement | null>;
  projects: React.RefObject<HTMLElement | null>;
  contact: React.RefObject<HTMLElement | null>;
};

export type UseSectionNavReturn = {
  refs: SectionNavRefs;
  activeNav: number;
  scrollToSection: (index: number) => void;
};
