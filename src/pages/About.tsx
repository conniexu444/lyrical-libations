import { useState, useEffect, useCallback } from "react";
import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import banner from "../assets/about/banner.png";
import cocoGabyNight from "../assets/about/coco-gaby-night.png";
import cocoGabyCocktails from "../assets/about/coco-gaby-cocktails.png";
import flutes from "../assets/about/champange-flutes.PNG";
import martini from "../assets/about/glass-with-music-notes-and-lemon.PNG";
import violinist from "../assets/about/violinist.PNG";
import violinAlone from "../assets/about/violinAlone.png";
import cheers from "../assets/cheers.png";

const premiseImageImports = import.meta.glob(
  "../assets/Each drink is paired*.png",
  { eager: true, import: "default" }
);
const premiseImages = Object.entries(premiseImageImports)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, path]) => path as string);

const TYPEWRITER_FONT_STYLE = { fontFamily: "RM Typerighter, monospace" };

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % premiseImages.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + premiseImages.length) % premiseImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <PageWrapper>
      <ContentContainer>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center mb-10">
          <div className="flex-shrink-0">
            <img
              src={banner}
              alt="Coco and Gabby with a violin"
              className="w-full mx-auto md:w-96 lg:w-[32rem] h-auto rounded-lg object-cover bg-[var(--color-bg)]"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
          <div className="flex-1">
            <p className="text-[var(--color-text)] text-2xl leading-relaxed italic">
              Lyrical Libations is a creative safe space for both the performer
              and audience, a place where you're free to enjoy art on your own
              terms, curated with love by us.
              <br />
              –Coco and Gaby {"<3"}
            </p>
          </div>
        </div>

        {/* The Premise gallery */}
        <div id="premise" className="mt-6 mb-10 scroll-mt-24">
          <div className="group relative w-full md:w-5/6 lg:w-3/4 mx-auto">
            <div className="relative overflow-hidden">
              {premiseImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Each drink is paired with a piece of music - ${index + 1}`}
                  className={`w-full h-auto transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100"
            >
              &#8249;
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100"
            >
              &#8250;
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3">
              {premiseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    index === currentSlide ? "bg-[var(--color-text)]" : "bg-[var(--color-text)]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <p
            className="text-[var(--color-text)] text-2xl md:text-base leading-normal"
            style={TYPEWRITER_FONT_STYLE}
          >
            The two of us met in 2018 and became friends playing chamber music
            at Juilliard. We have now made it a mission to make classical music
            more accessible, intimate, and playful, by pairing pieces of music
            with cocktails in bars across NYC, tasting menu style. By expanding
            the range of concert types that are presented in classical music,
            Lyrical Libations aims to create a welcoming environment for
            everyone, regardless of musical background or knowledge.
          </p>
          <p
            className="text-[var(--color-text)] text-2xl md:text-base leading-normal"
            style={TYPEWRITER_FONT_STYLE}
          >
            Above all, it's a reminder that the essence of music is connection.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-0 mt-10 mb-10 justify-center items-center mx-auto">
          <img
            src={cocoGabyCocktails}
            alt="Coco and Gaby with cocktails"
            className="w-3/4 md:w-1/4 h-auto rounded-lg object-cover mx-auto bg-[var(--color-bg)]"
            style={{ aspectRatio: "4/5" }}
          />
          <img
            src={flutes}
            alt="Cheers"
            className="w-24 h-24 mx-4 my-4 md:my-0"
          />
          <img
            src={cocoGabyNight}
            alt="Coco and Gaby"
            className="w-3/4 md:w-1/4 h-auto rounded-lg object-cover mx-auto bg-[var(--color-bg)]"
            style={{ aspectRatio: "4/5" }}
          />
        </div>

        <div className="space-y-8">
          <p
            className="text-[var(--color-text)] text-2xl md:text-base leading-normal"
            style={TYPEWRITER_FONT_STYLE}
          >
            <u>Our story</u> started in 2024, as we were searching for deeper meaning
            in our music.
          </p>
          <p
            className="text-[var(--color-text)] text-2xl md:text-base leading-normal"
            style={TYPEWRITER_FONT_STYLE}
          >
            While working with a non-profit to bring concerts to individuals in
            carceral systems, we finally felt that our music had a bigger
            purpose, and
            there were no longer the usual barriers between the audience and
            performer in classical music spaces.
          </p>
          <p
            className="text-[var(--color-text)] text-2xl md:text-base leading-normal"
            style={TYPEWRITER_FONT_STYLE}
          >
            One night during this trip, we sat at a bar, sipping on some fun,
            creatively-crafted cocktails. With libations flowing, we reflected
            on how we could continue bringing classical music to spaces beyond
            the concert halls after this residency was over. As the flavors
            mixed with the music on our minds, we began to see how the senses of
            taste and sound could enhance each other, and that by pairing flavor notes with
            pieces of music, classical music might be experienced in a new and
            accessible way. Most importantly, it was fun! And that is when
            Lyrical Libations was born.
          </p>
        </div>

        {/* Staggered illustration layout */}
        <div className="relative w-full h-96 mt-6 mb-4">
          {/* Left - Cocktail */}
          <img
            src={martini}
            alt="Cocktail with music"
            className="absolute top-4 left-[10%] transform -translate-x-1/2 w-28 h-28 md:w-36 md:h-36 object-contain"
          />

          {/* Center left - Violinist */}
          <img
            src={violinist}
            alt="Violinist"
            className="absolute top-24 left-[32%] transform -translate-x-1/2 w-52 h-52 md:w-72 md:h-72 object-contain"
          />

          {/* Center right - Violin */}
          <img
            src={violinAlone}
            alt="Violin"
            className="absolute top-28 right-[32%] transform translate-x-1/2 w-40 h-40 md:w-48 md:h-48 object-contain"
          />

          {/* Right - Champagne glasses */}
          <img
            src={cheers}
            alt="Cheers"
            className="absolute top-2 right-[10%] transform translate-x-1/2 w-28 h-28 md:w-36 md:h-36 object-contain"
          />
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
