import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * "Wall reveal" — el contenido aparece como un muro construyéndose.
 * Usa clip-path vertical de abajo hacia arriba.
 */
export function WallReveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)", y: 12 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
