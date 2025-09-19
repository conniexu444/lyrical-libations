/**
 * Simple Linear Congruential Generator for deterministic pseudo-random numbers.
 * This ensures consistent random selection across renders when given the same seed.
 */
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed % 2147483647;
    if (this.seed <= 0) this.seed += 2147483646;
  }

  /**
   * Generate next pseudo-random number between 0 and 1
   */
  next(): number {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }
}

/**
 * Creates a simple hash from a string for use as a random seed.
 * This ensures the same string always produces the same seed.
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Performs Fisher-Yates shuffle with a seeded random number generator
 * for deterministic results.
 */
function shuffleWithSeed<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  const rng = new SeededRandom(seed);

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng.next() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/**
 * Selects a random subset of items from an array using deterministic seeding.
 * The same seed will always produce the same selection and order.
 *
 * @param items - Array of items to select from
 * @param count - Number of items to select
 * @param seedInput - String or number used to generate deterministic seed
 * @returns Array of selected items in randomized order
 */
export function selectRandomItems<T>(
  items: T[],
  count: number,
  seedInput: string | number
): T[] {
  if (items.length <= count) {
    return items;
  }

  const seed = typeof seedInput === 'string' ? hashString(seedInput) : seedInput;
  const shuffled = shuffleWithSeed(items, seed);

  return shuffled.slice(0, count);
}

/**
 * Configuration options for mobile image optimization
 */
export interface MobileImageConfig {
  /** Maximum number of images to show on mobile */
  maxMobileImages: number;
  /** Seed for deterministic random selection */
  seed: string | number;
}

/**
 * Optimizes image arrays for mobile display by selecting a random subset
 * when the array exceeds the mobile limit.
 *
 * @param images - Array of image URLs
 * @param isMobile - Whether the current viewport is mobile
 * @param config - Configuration for mobile optimization
 * @returns Optimized array of images
 */
export function optimizeImagesForMobile(
  images: string[],
  isMobile: boolean,
  config: MobileImageConfig
): string[] {
  if (!isMobile || images.length <= config.maxMobileImages) {
    return images;
  }

  return selectRandomItems(images, config.maxMobileImages, config.seed);
}