import React from "react";
import { Heart } from "lucide-react";
import type { Artist } from "../types/support";
import DonationButton from "./DonationButton";

interface ArtistSupportCardProps {
  artist: Artist;
}

const ArtistSupportCard: React.FC<ArtistSupportCardProps> = React.memo(
  ({ artist }) => {
    return (
      <div className="flex-1 bg-[var(--color-dark-red)] border border-[var(--color-link)] rounded-2xl shadow-md p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-[var(--font-display)] mb-3 flex items-center justify-center gap-2">
            Support {artist.name}
          </h2>
          <p className="text-[var(--color-text)] mb-4">{artist.description}</p>
        </div>

        <div className="space-y-4">
          {artist.donationLinks.map((link, index) => (
            <DonationButton
              key={`${artist.id}-${link.platform}`}
              donationLink={link}
              variant={index === 0 ? "primary" : "secondary"}
            />
          ))}
        </div>
      </div>
    );
  }
);

ArtistSupportCard.displayName = "ArtistSupportCard";

export default ArtistSupportCard;
