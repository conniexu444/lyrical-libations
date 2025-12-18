import { useParams, Link } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import { upcomingShows } from "../data/shows";

export default function ShowDetail() {
  const { date } = useParams<{ date: string }>();
  const show = upcomingShows.find((s) => s.id === date);

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

        <div className="border border-[var(--color-text)] border-opacity-20 rounded-lg p-8">
          <h1 className="text-4xl font-[var(--font-heading)] mb-6">{show.title}</h1>

          <div className="space-y-4 text-lg mb-8">
            <div>
              <strong className="opacity-80">Date:</strong>
              <p className="text-xl">{show.date}</p>
            </div>

            <div>
              <strong className="opacity-80">Location:</strong>
              <p className="text-xl">{show.location}</p>
            </div>
          </div>

          {show.description && (
            <div className="mb-6">
              <h3 className="text-2xl font-[var(--font-heading)] mb-3">About</h3>
              <p className="text-lg opacity-80">{show.description}</p>
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
