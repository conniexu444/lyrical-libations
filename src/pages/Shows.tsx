import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import type { Show } from "../types/show";

const TYPEWRITER_FONT_STYLE = { fontFamily: "RM Typerighter, monospace" };

export default function Shows() {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/shows")
      .then((r) => r.json())
      .then((data) => {
        setShows(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <PageWrapper>
      <ContentContainer>
        <h2 className="text-3xl font-[var(--font-heading)] mb-8 text-center">Upcoming Shows</h2>

        {loading ? (
          <p className="text-center opacity-60" style={TYPEWRITER_FONT_STYLE}>Loading...</p>
        ) : shows.length === 0 ? (
          <p className="text-center opacity-60" style={TYPEWRITER_FONT_STYLE}>No upcoming shows at this time. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {shows.map((show) => (
              <Link
                key={show.id}
                to={`/shows/${show.id}`}
                className="block bg-[var(--show-boxes-color)] text-white border border-[var(--color-text)] border-opacity-20 rounded-lg p-6 hover:opacity-90 transition-all cursor-pointer"
                style={TYPEWRITER_FONT_STYLE}
              >
                <h3 className="text-2xl font-[var(--font-heading)] mb-2">{show.title}</h3>
                <div className="space-y-1 text-lg opacity-80">
                  <p><strong>Date:</strong> {show.date}</p>
                  <p><strong>Venue:</strong> {show.venue}</p>
                  <p>
                    <strong>Address:</strong>{" "}
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(show.address)}`,
                          "_blank"
                        );
                      }}
                      className="hover:opacity-70 transition-opacity underline cursor-pointer"
                    >
                      {show.address}
                    </span>
                  </p>
                </div>
                {show.details && <p className="mt-4 opacity-70">{show.details}</p>}
              </Link>
            ))}
          </div>
        )}
      </ContentContainer>
    </PageWrapper>
  );
}
