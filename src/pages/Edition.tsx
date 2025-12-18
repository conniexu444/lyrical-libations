import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import type { TimelineElement } from "../types/timeline";
import timelineElements from "../assets/timelineElements";
import { ImageWithPlaceholder } from "../components/ImageWithPlaceholder";
import { ImageLightbox } from "../components/ImageLightbox";
import { useIsMobile } from "../hooks/useMediaQuery";
import { optimizeImagesForMobile } from "../utils/randomSelection";

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
  const isMobile = useIsMobile();

  const edition = useMemo(
    () => timelineElements.find((e: TimelineElement) => e.id === id),
    [id]
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const allImages = useMemo(
    () => (edition ? editionImages[edition.id] || [] : []),
    [edition]
  );

  const images = useMemo(() => {
    if (!allImages.length) return [];

    return optimizeImagesForMobile(allImages, isMobile, {
      maxMobileImages: 5,
      seed: edition?.id || 'default'
    });
  }, [allImages, isMobile, edition?.id]);

  const handleImageClick = (displayIndex: number) => {
    // Map displayed image back to full array
    const clickedImageSrc = images[displayIndex];
    const actualIndex = allImages.indexOf(clickedImageSrc);
    setSelectedImageIndex(actualIndex);
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

      <p className="text-center text-[var(--color-text)] text-lg opacity-80 mb-6">
        {edition.location} — {edition.date}
      </p>

      {images.length > 0 && (
        <>
          {isMobile && allImages.length > images.length && (
            <div className="text-center text-sm text-[var(--color-text)] opacity-70 mb-4 px-4">
              Showing {images.length} of {allImages.length} images
              <span className="block text-xs mt-1">
                View on desktop to see all images
              </span>
            </div>
          )}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-4 mt-6 space-y-4">
            {images.map((src, index) => {
              // Generate stable key based on image path to prevent unnecessary re-renders
              const imageKey = src.split('/').pop()?.split('.')[0] || `image-${index}`;
              return (
                <ImageWithPlaceholder
                  key={imageKey}
                  src={src}
                  alt={`${edition.title} image ${index + 1}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  onClick={() => handleImageClick(index)}
                />
              );
            })}
          </div>
        </>
      )}

      {lightboxOpen && (
        <ImageLightbox
          images={allImages}
          initialIndex={selectedImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          editionTitle={edition.title}
        />
      )}
    </div>
  );
}
