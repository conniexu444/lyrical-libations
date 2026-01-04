import { Link } from "react-router-dom";
import type { TimelineElement } from "../types/timeline";
import timelineElements from "../assets/timelineElements";
import musicIcon from "../assets/musicNotesIcon.png";

interface TimelineProps {
  defaultColor?: string;
}

export default function Timeline({ defaultColor }: TimelineProps) {
  const colorClass = defaultColor || "bg-[var(--color-link)]";

  return (
    <div>
      {timelineElements.map((element: TimelineElement) => (
        <div key={element.id} className="flex m-4 relative">
          {/* Vertical lines for mobile */}
          <div
            className={`${colorClass} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
          />
          <div
            className={`${colorClass} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
          />

          {/* Side date & icon (desktop only) */}
          <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
            <div className="w-4/5 text-[var(--color-text)]">{element.date}</div>
            <div
              className={`${colorClass} w-px h-full translate-x-5 translate-y-10 opacity-30`}
            />
            <img
              src={musicIcon}
              alt="Music notes icon"
              className="w-10 p-1 rounded-lg z-20 border border-[var(--color-link)] bg-[var(--color-bg)]"
            />
            <div
              className={`${colorClass} h-px w-8 translate-y-5 opacity-30`}
            />
          </div>

          {/* Entire card is a link */}
          <Link
            to={`/archives/${element.id}`}
            className="border border-[var(--color-link)] rounded-lg px-8 py-4 bg-[var(--show-boxes-color)] w-full text-center z-10 sm:w-96 hover:scale-[1.01] transition-transform duration-200"
          >
            <div className="text-xl font-medium text-white">
              {element.title}
            </div>
            <div className="text-white opacity-80 mb-6 sm:mb-8 sm:text-xs">
              {element.location}
              <span className="sm:hidden"> | {element.date}</span>
            </div>

            {/* Poster image if available */}
            {element.poster && (
              <img
                src={element.poster}
                alt={`${element.title} poster`}
                className="w-full rounded-md mb-6 border border-[var(--color-link)]"
              />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
