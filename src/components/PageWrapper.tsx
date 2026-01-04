import { type ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <main
      role="main"
      className={`min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] px-6 pt-12 pb-6 ${className}`}
    >
      {children}
    </main>
  );
}
