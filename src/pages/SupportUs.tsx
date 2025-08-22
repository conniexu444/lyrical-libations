import React from 'react';
import { SUPPORT_DATA } from '../data/supportData';
import ArtistSupportCard from '../components/ArtistSupportCard';
import ProjectSupportSection from '../components/ProjectSupportSection';
import SecurityNotice from '../components/SecurityNotice';

const SupportUs: React.FC = () => {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] p-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-[var(--font-display)] mb-10">
            Support the Artists
          </h1>
          <div className="space-y-4">
            <p className="text-lg">
              Lyrical Libations is an independent artistic project created with love by Coco and Gabby.
            </p>
            <p className="text-base text-[var(--color-link)]">
              Your support helps us continue creating immersive experiences and bringing our art to life.
            </p>
          </div>
        </header>

        <section className="mb-12" aria-labelledby="artist-support-heading">
          <h2 id="artist-support-heading" className="sr-only">
            Individual Artist Support
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {SUPPORT_DATA.artists.map((artist) => (
              <ArtistSupportCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>

        <ProjectSupportSection projectSupport={SUPPORT_DATA.projectSupport} />

        <SecurityNotice />
      </div>
    </main>
  );
};

export default SupportUs;
  