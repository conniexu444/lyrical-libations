import React from "react";

type SendButtonProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
};

export function Button({
  onClick,
  type = "submit",
  children,
}: SendButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[var(--color-bg)] border px-4 py-2 rounded hover:bg-green-300 transition"
    >
      {children || "Send Message"}
    </button>
  );
}
