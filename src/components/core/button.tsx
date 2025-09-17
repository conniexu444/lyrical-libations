import React from "react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Button = React.memo<ButtonProps>(({
  onClick,
  type = "submit",
  children,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[var(--color-bg)] border px-4 py-2 rounded hover:bg-green-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children || "Send Message"}
    </button>
  );
});

Button.displayName = 'Button';
