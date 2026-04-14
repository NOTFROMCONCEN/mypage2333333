import { useCallback, type ReactNode } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

type HoverCardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

type AngledPanelProps = {
  children: ReactNode;
  className?: string;
  accent?: boolean;
};

type SectionHeaderProps = {
  no: string;
  title: string;
  en: string;
};

export function HoverCard({ children, className = "", glow = true }: HoverCardProps) {
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const background = useTransform(
    [x, y],
    ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,211,77,0.12), transparent 34%)`
  );

  const onMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const px = ((event.clientX - rect.left) / rect.width) * 100;
      const py = ((event.clientY - rect.top) / rect.height) * 100;
      x.set(px);
      y.set(py);
    },
    [x, y]
  );

  return (
    <motion.div
      onMouseMove={onMove}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      className={`hover-card relative ${className}`}
      style={{ willChange: "transform" }}
    >
      {glow && <motion.div aria-hidden="true" className="hover-glow" style={{ background }} />}
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export function AngledPanel({ children, className = "", accent = false }: AngledPanelProps) {
  return (
    <div className={`angled-panel ${className}`}>
      <div className="angled-panel__overlay" />
      {accent && <div className="angled-panel__accent" />}
      <div className="relative">{children}</div>
    </div>
  );
}

export function SectionHeader({ no, title, en }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-header__left">
        <div className="section-header__no">{no}</div>
        <div>
          <div className="section-header__en">{en}</div>
          <h2 className="section-header__title">{title}</h2>
        </div>
      </div>
      <div className="section-header__line" />
    </div>
  );
}
