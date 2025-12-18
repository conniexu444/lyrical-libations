import { type ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
  maxWidth?: "2xl" | "5xl" | "6xl" | "7xl";
  className?: string;
}

const MAX_WIDTH_CLASSES = {
  "2xl": "max-w-2xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
} as const;

export function ContentContainer({ children, maxWidth = "5xl", className = "" }: ContentContainerProps) {
  return (
    <div className={`${MAX_WIDTH_CLASSES[maxWidth]} mx-auto ${className}`}>
      {children}
    </div>
  );
}
