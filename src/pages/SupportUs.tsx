import React from "react";
import violin from "../assets/violinAlone.png";
import { Button } from "../components/core/button";

const SupportUs = React.memo(() => {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-[var(--font-display)] mb-10 text-center">
          Support the Artists
        </h1>

        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
          {/* Image - on right for desktop, top for mobile */}
          <div className="flex-shrink-0">
            <img
              src={violin}
              alt="Violin artwork"
              className="w-1/2 mx-auto md:w-80 lg:w-96 h-auto rounded-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-[var(--font-display)] mb-6">
              Why Support Us?
            </h2>
            <p className="text-[var(--color-text)] mb-6 text-lg leading-relaxed">
              Your support helps us continue creating immersive experiences that
              blend poetry, music, and community. Every contribution directly
              supports the artists and enables us to bring more magical events
              to life.
            </p>
            <p className="text-[var(--color-text)] mb-8 text-lg leading-relaxed">
              From venue costs to artist fees, your generosity makes Lyrical
              Libations possible. Join us in celebrating the intersection of
              sound, ritual, and storytelling.
            </p>
            <div className="flex justify-center">
              <Button>Donate Here</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});

SupportUs.displayName = "SupportUs";

export default SupportUs;
