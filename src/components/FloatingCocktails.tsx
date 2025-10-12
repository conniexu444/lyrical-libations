import { useState, useEffect, useRef } from "react";
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

const FloatingCocktails = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const images = [flutes, martini];
  const cocktailCount = 50;

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    // Don't initialize cocktails on mobile
    if (isMobile) {
      setCocktails([]);
      return;
    }

    // Initialize cocktails with random positions and velocities within title area
    const titleHeight = 100; // increased title area height
    const initialCocktails: Cocktail[] = Array.from({ length: cocktailCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * titleHeight,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      image: images[i % images.length],
      scale: 0.6 + Math.random() * 0.4,
    }));
    setCocktails(initialCocktails);
  }, [isMobile]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      const headerHeight = containerRef.current?.clientHeight || 100;

      setCocktails((prev) =>
        prev.map((cocktail) => {
          let { x, y, vx, vy } = cocktail;

          // Move away from mouse
          const dx = x - mousePos.x;
          const dy = y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repelDistance = 150;

          if (distance < repelDistance && distance > 0) {
            const force = (repelDistance - distance) / repelDistance;
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

          // Maintain constant speed (no damping)
          const currentSpeed = Math.sqrt(vx * vx + vy * vy);
          const targetSpeed = 0.3;

          if (currentSpeed > 0) {
            vx = (vx / currentSpeed) * targetSpeed;
            vy = (vy / currentSpeed) * targetSpeed;
          }

          return { ...cocktail, x, y, vx, vy };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  // Don't render anything on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none", zIndex: 1 }}
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
};

export default FloatingCocktails;
