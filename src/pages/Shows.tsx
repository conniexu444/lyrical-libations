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
            <div
              key={show.id}
              className="border border-[var(--color-text)] border-opacity-20 rounded-lg p-6 hover:border-opacity-40 transition-all"
            >
              <Link to={`/shows/${show.id}`}>
                <h3 className="text-2xl font-[var(--font-heading)] mb-2 hover:opacity-70 transition-opacity cursor-pointer">
                  {show.title}
                </h3>
              </Link>
              <div className="space-y-1 text-lg opacity-80">
                <p><strong>Date:</strong> {show.date}</p>
                <p><strong>Location:</strong> {show.location}</p>
              </div>
              {show.description && (
                <p className="mt-4 opacity-70">{show.description}</p>
              )}
            </div>
          ))}
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
