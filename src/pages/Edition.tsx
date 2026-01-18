import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import type { TimelineElement } from "../types/timeline";
import timelineElements from "../assets/timelineElements";
import { ImageLightbox } from "../components/ImageLightbox";

const edition1ImageImports = import.meta.glob(
  "../assets/Edition1/LLArchive*.jpg",
  { eager: true, import: "default" }
);
const edition2ImageImports = import.meta.glob(
  "../assets/Edition2/LLArchive*.jpg",
  { eager: true, import: "default" }
);

const editionImages: Record<string, string[]> = {
  "Edition-1": Object.entries(edition1ImageImports)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, path]) => path as string),

  "Edition-2": Object.entries(edition2ImageImports)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, path]) => path as string),
};

export default function EditionPage() {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const edition = useMemo(
    () => timelineElements.find((e: TimelineElement) => e.id === id),
    [id]
  );

  const images = useMemo(
    () => (edition ? editionImages[edition.id] || [] : []),
    [edition]
  );

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  if (!edition) {
    return (
      <div className="py-10 text-center">
        <h1 className="text-2xl font-semibold text-red-600">
          Edition not found
        </h1>
      </div>
    );
  }

  return (
    <div className="py-10">
      <h1 className="text-3xl font-[var(--font-display)] mb-4 text-center">
        {edition.title}
      </h1>

      <div className="text-center text-[var(--color-text)] text-lg opacity-80 mb-8">
        <p className="font-semibold">{edition.venue}</p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(edition.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity underline"
        >
          {edition.address}
        </a>
        <p className="mt-2">{edition.date}</p>
      </div>

      {/* Gallery Wall */}
      {images.length > 0 && (
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg cursor-pointer group relative bg-neutral-100 dark:bg-neutral-900"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${edition.title} image ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-200 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      <ImageLightbox
        images={images}
        initialIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        editionTitle={edition.title}
      />
    </div>
  );
}
