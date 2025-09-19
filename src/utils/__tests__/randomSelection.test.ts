import { selectRandomItems, optimizeImagesForMobile } from '../randomSelection';

describe('randomSelection utilities', () => {
  const mockImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
  ];

  describe('selectRandomItems', () => {
    it('returns all items when count is greater than or equal to array length', () => {
      const result = selectRandomItems(mockImages, 10, 'test-seed');
      expect(result).toHaveLength(mockImages.length);
    });

    it('returns exact count when count is less than array length', () => {
      const result = selectRandomItems(mockImages, 5, 'test-seed');
      expect(result).toHaveLength(5);
    });

    it('returns consistent results with same seed', () => {
      const result1 = selectRandomItems(mockImages, 5, 'test-seed');
      const result2 = selectRandomItems(mockImages, 5, 'test-seed');
      expect(result1).toEqual(result2);
    });

    it('returns different results with different seeds', () => {
      const result1 = selectRandomItems(mockImages, 5, 'seed1');
      const result2 = selectRandomItems(mockImages, 5, 'seed2');
      expect(result1).not.toEqual(result2);
    });

    it('returns subset of original array', () => {
      const result = selectRandomItems(mockImages, 3, 'test-seed');
      result.forEach(item => {
        expect(mockImages).toContain(item);
      });
    });

    it('handles empty array', () => {
      const result = selectRandomItems([], 5, 'test-seed');
      expect(result).toEqual([]);
    });

    it('handles numeric seeds', () => {
      const result1 = selectRandomItems(mockImages, 3, 12345);
      const result2 = selectRandomItems(mockImages, 3, 12345);
      expect(result1).toEqual(result2);
    });
  });

  describe('optimizeImagesForMobile', () => {
    const config = {
      maxMobileImages: 5,
      seed: 'edition-test',
    };

    it('returns all images when not on mobile', () => {
      const result = optimizeImagesForMobile(mockImages, false, config);
      expect(result).toEqual(mockImages);
    });

    it('returns all images when count is within mobile limit', () => {
      const smallArray = mockImages.slice(0, 3);
      const result = optimizeImagesForMobile(smallArray, true, config);
      expect(result).toEqual(smallArray);
    });

    it('returns limited images on mobile when count exceeds limit', () => {
      const result = optimizeImagesForMobile(mockImages, true, config);
      expect(result).toHaveLength(config.maxMobileImages);
    });

    it('returns consistent results on mobile with same seed', () => {
      const result1 = optimizeImagesForMobile(mockImages, true, config);
      const result2 = optimizeImagesForMobile(mockImages, true, config);
      expect(result1).toEqual(result2);
    });

    it('returns different results with different seeds on mobile', () => {
      const config1 = { ...config, seed: 'seed1' };
      const config2 = { ...config, seed: 'seed2' };

      const result1 = optimizeImagesForMobile(mockImages, true, config1);
      const result2 = optimizeImagesForMobile(mockImages, true, config2);
      expect(result1).not.toEqual(result2);
    });

    it('handles empty array', () => {
      const result = optimizeImagesForMobile([], true, config);
      expect(result).toEqual([]);
    });
  });
});