import type { ReactNode, CSSProperties } from "react";

export function Annotation({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`font-hand text-marker text-2xl leading-tight sm:text-3xl ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}

import { motion } from 'framer-motion';

export function Arrow({
  className = "",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <motion.svg
      animate={{ y: [0, -5, 0], rotate }}
      initial={{ rotate }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      viewBox="0 0 80 60"
      width="80"
      height="60"
      className={`text-marker ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 10 C 25 5, 55 30, 70 50" />
      <path d="M70 50 L 60 44" />
      <path d="M70 50 L 66 38" />
    </motion.svg>
  );
}
