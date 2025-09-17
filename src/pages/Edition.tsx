import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import type { TimelineElement } from "../types/timeline";
import timelineElements from "../assets/timelineElements";
import { ImageWithPlaceholder } from "../components/ImageWithPlaceholder";

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

const EditionPage = React.memo(() => {
  const { id } = useParams<{ id: string }>();

  const edition = useMemo(
    () => timelineElements.find((e: TimelineElement) => e.id === id),
    [id]
  );

  const images = useMemo(
    () => (edition ? editionImages[edition.id] || [] : []),
    [edition]
  );

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

      <p className="text-center text-[var(--color-text)] text-lg opacity-80 mb-6">
        {edition.location} — {edition.date}
      </p>

      {images.length > 0 && (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-4 mt-6 space-y-4">
          {images.map((src, index) => (
            <ImageWithPlaceholder
              key={index}
              src={src}
              alt={`${edition.title} image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
});

EditionPage.displayName = 'EditionPage';

export default EditionPage;
