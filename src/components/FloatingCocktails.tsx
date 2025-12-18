import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "../hooks/useMediaQuery";
import flutes from "../assets/Flutes3.PNG";
import martini from "../assets/Martini.PNG";

interface Cocktail {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  image: string;
  scale: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const IMAGES = [flutes, martini] as const;
const COCKTAIL_COUNT = 50;
const TARGET_SPEED = 0.3;
const REPEL_DISTANCE = 150;
const TITLE_HEIGHT = 100;

export default function FloatingCocktails() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Initialize cocktails on mount (desktop only)
  useEffect(() => {
    if (isMobile) {
      setCocktails([]);
      return;
    }

    const initialCocktails: Cocktail[] = Array.from({ length: COCKTAIL_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * TITLE_HEIGHT,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      image: IMAGES[i % IMAGES.length],
      scale: 0.6 + Math.random() * 0.4,
    }));
    setCocktails(initialCocktails);
  }, [isMobile]);

  // Track mouse position
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Animation loop with proper cleanup
  useEffect(() => {
    if (isMobile || cocktails.length === 0) return;

    const animate = () => {
      const headerHeight = containerRef.current?.clientHeight || TITLE_HEIGHT;

      setCocktails((prev) =>
        prev.map((cocktail) => {
          let { x, y, vx, vy } = cocktail;

          // Calculate repulsion from mouse
          const dx = x - mousePos.x;
          const dy = y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < REPEL_DISTANCE && distance > 0) {
            const force = (REPEL_DISTANCE - distance) / REPEL_DISTANCE;
            vx += (dx / distance) * force * 1.5;
            vy += (dy / distance) * force * 1.5;
          }

          // Apply velocity
          x += vx;
          y += vy;

          // Bounce off edges (constrained to header area)
          if (x <= 0 || x >= window.innerWidth) {
            vx = -vx;
            x = Math.max(0, Math.min(window.innerWidth, x));
          }
          if (y <= 0 || y >= headerHeight) {
            vy = -vy;
            y = Math.max(0, Math.min(headerHeight, y));
          }

          // Normalize to maintain constant speed
          const currentSpeed = Math.sqrt(vx * vx + vy * vy);
          if (currentSpeed > 0) {
            vx = (vx / currentSpeed) * TARGET_SPEED;
            vy = (vy / currentSpeed) * TARGET_SPEED;
          }

          return { ...cocktail, x, y, vx, vy };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, isMobile, cocktails.length]);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none", zIndex: 1 }}
      aria-hidden="true"
    >
      {cocktails.map((cocktail) => (
        <img
          key={cocktail.id}
          src={cocktail.image}
          alt=""
          className="absolute"
          style={{
            left: `${cocktail.x}px`,
            top: `${cocktail.y}px`,
            transform: `translate(-50%, -50%) scale(${cocktail.scale})`,
            width: "32px",
            height: "32px",
            opacity: 0.6,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}
