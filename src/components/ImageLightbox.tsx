import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  editionTitle?: string;
}

export function ImageLightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
  editionTitle = 'Edition'
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Reset state when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
    setImageLoaded(false);
  }, [initialIndex]);

  // Reset loaded state when navigating
  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  // Navigation handlers
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, images.length]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen && lightboxRef.current) {
      // Save currently focused element
      previousFocusRef.current = document.activeElement as HTMLElement;

      // Focus the lightbox
      lightboxRef.current.focus();

      return () => {
        // Restore focus on close
        previousFocusRef.current?.focus();
      };
    }
  }, [isOpen]);

  // Preload adjacent images
  useEffect(() => {
    if (!isOpen || images.length <= 1) return;

    const nextIdx = (currentIndex + 1) % images.length;
    const prevIdx = (currentIndex - 1 + images.length) % images.length;

    [nextIdx, prevIdx].forEach(idx => {
      const img = new Image();
      img.src = images[idx];
    });
  }, [currentIndex, images, isOpen]);

  // Touch gesture handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // Swiped left, show next image
      handleNext();
    } else {
      // Swiped right, show previous image
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  if (!isOpen) return null;

  const content = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        onClick={onClose}
        ref={lightboxRef}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        tabIndex={-1}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity p-2 z-10"
          aria-label="Close lightbox"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Previous button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-4 text-white hover:opacity-70 transition-opacity p-2 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        )}

        {/* Image container */}
        <div
          className="relative flex items-center justify-center w-full h-full p-8 sm:p-12"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Loading spinner */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}

          {/* Image */}
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${editionTitle} image ${currentIndex + 1} of ${images.length}`}
            onLoad={() => setImageLoaded(true)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-md"
          />
        </div>

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-4 text-white hover:opacity-70 transition-opacity p-2 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        )}

        {/* Image counter */}
        <div
          id="lightbox-counter"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full"
          aria-live="polite"
        >
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
