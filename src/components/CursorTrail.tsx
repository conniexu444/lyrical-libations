import { useState, useEffect } from "react";
import flutes from "../assets/Flutes3.PNG";
import martini from "../assets/Martini.PNG";

interface TrailItem {
  id: number;
  x: number;
  y: number;
  image: string;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const [idCounter, setIdCounter] = useState(0);
  const images = [flutes, martini];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newItem: TrailItem = {
        id: idCounter,
        x: e.clientX,
        y: e.clientY,
        image: images[idCounter % images.length],
      };

      setTrail((prev) => [...prev, newItem].slice(-10)); // Keep last 10 items
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
    <div className="fixed inset-0 pointer-events-none z-50">
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
};

export default CursorTrail;
