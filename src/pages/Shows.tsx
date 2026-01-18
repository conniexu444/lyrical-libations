import { Link } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import { upcomingShows } from "../data/shows";

export default function Shows() {
  return (
    <PageWrapper>
      <ContentContainer>
        <h2 className="text-3xl font-[var(--font-heading)] mb-8 text-center">Upcoming Shows</h2>

        <div className="space-y-6">
          {upcomingShows.map((show) => (
            <Link
              key={show.id}
              to={`/shows/${show.id}`}
              className="block bg-[var(--show-boxes-color)] text-white border border-[var(--color-text)] border-opacity-20 rounded-lg p-6 hover:opacity-90 transition-all cursor-pointer"
            >
              <h3 className="text-2xl font-[var(--font-heading)] mb-2">
                {show.title}
              </h3>
              <div className="space-y-1 text-lg opacity-80">
                <p><strong>Date:</strong> {show.date}</p>
                <p><strong>Venue:</strong> {show.venue}</p>
                <p>
                  <strong>Address:</strong>{" "}
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(show.address)}`, '_blank');
                    }}
                    className="hover:opacity-70 transition-opacity underline cursor-pointer"
                  >
                    {show.address}
                  </span>
                </p>
              </div>
              {show.details && (
                <p className="mt-4 opacity-70">{show.details}</p>
              )}
            </Link>
          ))}
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
