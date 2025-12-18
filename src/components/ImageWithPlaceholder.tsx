import { useState } from "react";

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}

export function ImageWithPlaceholder({
  src,
  alt,
  className = "",
  loading = "lazy",
}: ImageWithPlaceholderProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative w-full mb-4 break-inside-avoid content-visibility-auto min-h-[250px] ${className}`}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-rose-100/10 dark:via-rose-100/20 dark:to-rose-100/10 rounded-md overflow-hidden">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto rounded-md border border-[var(--color-link)] object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
