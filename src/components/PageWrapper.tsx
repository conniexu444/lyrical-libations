import { memo, type ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * Shared page wrapper component that provides consistent layout and styling
 * across all pages. Reduces code duplication and ensures consistency.
 */
export const PageWrapper = memo<PageWrapperProps>(({ children, className = "" }) => {
  return (
    <main
      role="main"
      className={`min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] p-6 ${className}`}
    >
      {children}
    </main>
  );
});

PageWrapper.displayName = "PageWrapper";
