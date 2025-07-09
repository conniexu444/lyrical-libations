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
        <div className="absolute inset-0 bg-neutral-200 dark:bg-rose-100/10 rounded-md animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto rounded-md border border-[var(--color-link)] object-cover ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
