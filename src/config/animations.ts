import type { Transition } from 'framer-motion';

// Common animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -18 },
  animate: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 18 },
  animate: { opacity: 1, x: 0 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

// Common transitions
export const defaultTransition: Transition = {
  duration: 0.45,
};

export const fastTransition: Transition = {
  duration: 0.28,
};

export const slowTransition: Transition = {
  duration: 0.6,
};

// Staggered animation helpers
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

// Hover animations
export const hoverLift = {
  whileHover: { y: -2 },
  transition: { duration: 0.18 },
};

export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

// Header animations
export const headerAnimation = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
};

export const navItemAnimation = (index: number) => ({
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.28, delay: 0.05 + index * 0.05 },
});

// Section animations
export const sectionAnimation = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay },
});

export const sectionLeftAnimation = (delay: number) => ({
  initial: { opacity: 0, x: -18 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.45, delay },
});

export const sectionRightAnimation = (delay: number) => ({
  initial: { opacity: 0, x: 18 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.45, delay },
});
