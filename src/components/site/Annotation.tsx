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

export function Arrow({
  className = "",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <svg
      viewBox="0 0 80 60"
      width="80"
      height="60"
      className={`text-marker ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
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
    </svg>
  );
}
