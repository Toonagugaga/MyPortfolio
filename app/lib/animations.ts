// Shared animation variants for Framer Motion

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

export const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
