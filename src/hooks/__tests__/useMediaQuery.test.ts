import { renderHook, act } from '@testing-library/react';
import { useMediaQuery, useIsMobile } from '../useMediaQuery';

// Mock matchMedia
const mockMatchMedia = (matches: boolean) => ({
  matches,
  media: '',
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

describe('useMediaQuery', () => {
  beforeEach(() => {
    // Reset window.matchMedia before each test
    delete (window as any).matchMedia;
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('returns initial match state', () => {
    window.matchMedia = jest.fn().mockReturnValue(mockMatchMedia(true));

    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'));

    expect(result.current).toBe(true);
    expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 768px)');
  });

  it('updates when media query changes', () => {
    const mockMedia = {
      ...mockMatchMedia(false),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };

    window.matchMedia = jest.fn().mockReturnValue(mockMedia);

    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'));

    expect(result.current).toBe(false);

    // Simulate media query change
    const changeHandler = mockMedia.addEventListener.mock.calls[0][1];
    act(() => {
      changeHandler({ matches: true } as MediaQueryListEvent);
    });

    expect(result.current).toBe(true);
  });

  it('handles debouncing correctly', () => {
    jest.useFakeTimers();

    const mockMedia = {
      ...mockMatchMedia(false),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };

    window.matchMedia = jest.fn().mockReturnValue(mockMedia);

    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)', 200));

    const changeHandler = mockMedia.addEventListener.mock.calls[0][1];

    // Trigger multiple rapid changes
    act(() => {
      changeHandler({ matches: true } as MediaQueryListEvent);
      changeHandler({ matches: false } as MediaQueryListEvent);
      changeHandler({ matches: true } as MediaQueryListEvent);
    });

    // Should still be false before debounce timeout
    expect(result.current).toBe(false);

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(200);
    });

    // Should now be true (last change)
    expect(result.current).toBe(true);
  });

  it('cleans up event listeners on unmount', () => {
    const mockMedia = {
      ...mockMatchMedia(false),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };

    window.matchMedia = jest.fn().mockReturnValue(mockMedia);

    const { unmount } = renderHook(() => useMediaQuery('(max-width: 768px)'));

    expect(mockMedia.addEventListener).toHaveBeenCalled();

    unmount();

    expect(mockMedia.removeEventListener).toHaveBeenCalled();
  });

  it('handles server-side rendering (no window)', () => {
    const originalWindow = global.window;
    (global as any).window = undefined;

    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'));

    expect(result.current).toBe(false);

    global.window = originalWindow;
  });
});

describe('useIsMobile', () => {
  beforeEach(() => {
    delete (window as any).matchMedia;
  });

  it('uses correct mobile breakpoint query', () => {
    window.matchMedia = jest.fn().mockReturnValue(mockMatchMedia(true));

    renderHook(() => useIsMobile());

    expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 767px)');
  });

  it('returns mobile state correctly', () => {
    window.matchMedia = jest.fn().mockReturnValue(mockMatchMedia(true));

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });
});