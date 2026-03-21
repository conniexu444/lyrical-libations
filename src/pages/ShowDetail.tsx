import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import type { Show } from "../types/show";

const TYPEWRITER_FONT_STYLE = { fontFamily: "RM Typerighter, monospace" };

export default function ShowDetail() {
  const { date } = useParams<{ date: string }>();
  const [show, setShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/shows")
      .then((r) => r.json())
      .then((data: Show[]) => {
        const match = Array.isArray(data) ? data.find((s) => s.id === date) : null;
        setShow(match ?? null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [date]);

  if (loading) {
    return (
      <PageWrapper>
        <ContentContainer>
          <p className="text-center opacity-60" style={TYPEWRITER_FONT_STYLE}>Loading...</p>
        </ContentContainer>
      </PageWrapper>
    );
  }

  if (!show) {
    return (
      <PageWrapper>
        <ContentContainer>
          <div className="text-center">
            <h2 className="text-3xl font-[var(--font-heading)] mb-4">Show Not Found</h2>
            <p className="text-lg opacity-80 mb-6">
              The show you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/shows"
              className="inline-block px-6 py-3 border border-[var(--color-text)] rounded hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all"
            >
              Back to Shows
            </Link>
          </div>
        </ContentContainer>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <ContentContainer>
        <Link
          to="/shows"
          className="inline-block mb-6 opacity-70 hover:opacity-100 transition-opacity"
        >
          &larr; Back to Shows
        </Link>

        <div className="border border-[var(--color-text)] border-opacity-20 rounded-lg p-8" style={TYPEWRITER_FONT_STYLE}>
          <h1 className="text-4xl font-[var(--font-heading)] mb-6">{show.title}</h1>

          <div className="space-y-4 text-lg mb-8">
            <div>
              <strong className="opacity-80">Date:</strong>
              <p className="text-xl">{show.date}</p>
            </div>
            <div>
              <strong className="opacity-80">Venue:</strong>
              <p className="text-xl">{show.venue}</p>
            </div>
            <div>
              <strong className="opacity-80">Address:</strong>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(show.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:opacity-70 transition-opacity underline block"
              >
                {show.address}
              </a>
            </div>
            {(show.doorsOpen || show.showStarts) && (
              <div>
                <p className="text-xl">
                  {show.doorsOpen && <>Doors open at {show.doorsOpen}</>}
                  {show.doorsOpen && show.showStarts && ", "}
                  {show.showStarts && <>show starts at {show.showStarts}</>}
                </p>
              </div>
            )}
          </div>

          {show.musicians && show.musicians.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-[var(--font-heading)] mb-3">Musicians</h3>
              <ul className="text-lg opacity-80 space-y-1">
                {show.musicians.map((musician, index) => (
                  <li key={index}>{musician}</li>
                ))}
              </ul>
            </div>
          )}

          {(show.ticketing || show.ticketingComingSoon) && (
            <div className="mb-8">
              <h3 className="text-2xl font-[var(--font-heading)] mb-3">Ticketing</h3>
              {show.ticketingComingSoon ? (
                <p className="text-lg opacity-80">Coming soon</p>
              ) : (
                <ul className="text-lg opacity-80 space-y-2">
                  {show.ticketing?.map((ticket, index) => (
                    <li key={index}>
                      <strong>{ticket.price}</strong> – {ticket.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {show.payLink && (
            <div className="mb-8">
              <h3 className="text-2xl font-[var(--font-heading)] mb-3">Pay What You Wish</h3>
              <a
                href={show.payLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-[var(--color-text)] rounded hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all"
              >
                Pay via PayPal
              </a>
            </div>
          )}

          {show.details && (
            <div>
              <h3 className="text-2xl font-[var(--font-heading)] mb-3">Details</h3>
              <p className="text-lg opacity-80">{show.details}</p>
            </div>
          )}
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
