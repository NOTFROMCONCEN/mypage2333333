import { useCallback } from "react";
import { motion } from "framer-motion";
import { IconCpu } from "./icons";
import type { NavItem } from "@/types";

type HeaderNavProps = {
  activeNav: number;
  items: NavItem[];
  onNavClick: (index: number) => void;
};

export function HeaderNav({ activeNav, items, onNavClick }: HeaderNavProps) {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onNavClick(index);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = (index + 1) % items.length;
        onNavClick(nextIndex);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        const prevIndex = (index - 1 + items.length) % items.length;
        onNavClick(prevIndex);
      }
    },
    [items.length, onNavClick]
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="site-header"
      role="banner"
    >
      <div className="site-header__inner">
        <button
          onClick={() => onNavClick(0)}
          className="brand-button"
          type="button"
          aria-label="返回首页"
        >
          <div className="brand-button__icon" aria-hidden="true">
            <IconCpu className="icon icon-lg" />
          </div>
          <div>
            <div className="brand-button__sub">罗德岛人员档案 / Rhodes Island Personnel Archive</div>
            <div className="brand-button__title">HUAMEITANG</div>
          </div>
        </button>

        <nav className="site-nav" aria-label="主导航">
          <ul role="menubar" className="nav-menu">
            {items.map((item, index) => (
              <li key={item.id} role="none">
                <motion.button
                  role="menuitem"
                  tabIndex={activeNav === index ? 0 : -1}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 0.05 + index * 0.05 }}
                  whileHover={{ y: -2 }}
                  onClick={() => onNavClick(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-current={activeNav === index ? "page" : undefined}
                  aria-label={`导航到${item.label}`}
                  className={`nav-chip ${activeNav === index ? "nav-chip--active" : ""}`}
                  type="button"
                >
                  {item.label}
                </motion.button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
