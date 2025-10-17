import { useState, useEffect, memo } from "react";
import flutes from "../assets/Flutes3.PNG";
import martini from "../assets/Martini.PNG";

interface TrailItem {
  id: number;
  x: number;
  y: number;
  image: string;
}

const IMAGES = [flutes, martini] as const;
const MAX_TRAIL_ITEMS = 10;

const CursorTrail = memo(() => {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newItem: TrailItem = {
        id: idCounter,
        x: e.clientX,
        y: e.clientY,
        image: IMAGES[idCounter % IMAGES.length],
      };

      setTrail((prev) => [...prev, newItem].slice(-MAX_TRAIL_ITEMS));
      setIdCounter((prev) => prev + 1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [idCounter]);

  useEffect(() => {
    // Remove items after they fade out
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      {trail.map((item, index) => (
        <img
          key={item.id}
          src={item.image}
          alt=""
          className="absolute w-6 h-6 object-contain"
          style={{
            left: `${item.x}px`,
            top: `${item.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: (index + 1) / trail.length,
            transition: "opacity 0.1s",
          }}
        />
      ))}
    </div>
  );
});

CursorTrail.displayName = "CursorTrail";

export default CursorTrail;
