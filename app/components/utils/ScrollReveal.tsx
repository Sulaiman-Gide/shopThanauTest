import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export default function ScrollReveal({
  children,
  width = "100%",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
