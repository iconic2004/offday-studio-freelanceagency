"use client";

import type { ReactNode } from "react";

interface WaterRevealTextProps {
  children: ReactNode;
  className?: string;
}

export function WaterRevealText({
  children,
  className = "",
}: WaterRevealTextProps) {
  return <span className={`water-reveal ${className}`}>{children}</span>;
}