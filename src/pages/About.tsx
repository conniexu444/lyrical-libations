import React from "react";
import cheersCello from "../assets/celloWithDrinks.png";

const About = React.memo(() => {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-[var(--font-display)] mb-10 text-center">
          Meet the Artists
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-shrink-0">
            <img
              src={cheersCello}
              alt="Coco and Gabby cheering with cello"
              className="w-3/4 mx-auto md:w-80 lg:w-96 h-auto rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-[var(--font-display)] mb-6">
              Coco & Gabby
            </h2>
            <p className="text-[var(--color-text)] mb-6 text-lg leading-relaxed">
              Coco is a multidisciplinary artist whose work explores the
              intersection of sound, ritual, and sensory storytelling. Her
              performances are layered with poetry, rhythm, and community magic.
            </p>
            <p className="text-[var(--color-text)] text-lg leading-relaxed">
              Gabby is a sonic explorer and producer blending analog textures
              with ethereal vocals. Her installations and soundscapes invite
              audiences into immersive worlds of emotion and memory.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
});

About.displayName = "About";

export default About;
