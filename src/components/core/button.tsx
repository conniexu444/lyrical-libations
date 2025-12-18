import { type ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function Button({
  onClick,
  type = "submit",
  children,
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[var(--color-bg)] border px-4 py-2 rounded hover:bg-green-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}
