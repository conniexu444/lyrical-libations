import { Link } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import cheersCello from "../assets/celloWithDrinks.png";
import cocktailIcon from "../assets/drinksMusic.png";
import cocoGaby from "../assets/about/coco-gaby-cocktails.png";

const HEADING_FONT_STYLE = { fontFamily: 'RM Typerighter, monospace', lineHeight: '1.1' };
const TYPEWRITER_FONT_STYLE = { fontFamily: "RM Typerighter, monospace" };

export default function Home() {

  return (
    <PageWrapper>
      <ContentContainer maxWidth="6xl">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-4 pt-2 md:pt-4 lg:pt-6">
            <img
              src={cocktailIcon}
              alt="Cocktail with music notes"
              className="w-12 h-auto md:w-16 lg:w-20 flex-shrink-0 object-contain"
            />
            <h1 className="text-[var(--color-text)] text-sm md:text-base lg:text-lg text-center" style={HEADING_FONT_STYLE}>
              We pair classical music with cocktails at your favorite NYC bars — tasting menu style!
            </h1>
            <img
              src={cocktailIcon}
              alt="Cocktail with music notes"
              className="w-12 h-auto md:w-16 lg:w-20 flex-shrink-0 object-contain"
            />
          </div>

          <div className="flex justify-center w-full">
            <iframe
              className="w-full max-w-2xl aspect-video"
              src="https://www.youtube.com/embed/kCqkmSYao-o"
              title="Lyrical Libations Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Blurb section — inspired by Bar Snack layout */}
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-36 mt-6 w-full max-w-4xl mx-auto">
            {/* Coco and Gaby sticker - left side */}
            <div className="flex-shrink-0">
              <img
                src={cocoGaby}
                alt="Coco and Gaby"
                className="w-48 md:w-64 h-auto rounded-lg object-cover"
                style={{ aspectRatio: "4/5" }}
              />
            </div>

            {/* Right side: doodle + blurb + button */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src={cheersCello}
                alt="Cheers doodle"
                className="w-20 md:w-24 h-auto mb-4"
              />
              <p
                className="text-[#5f0f40] text-lg md:text-base leading-relaxed mb-6"
                style={TYPEWRITER_FONT_STYLE}
              >
                Lyrical Libations is a new iteration of the classic chamber music
                concert series, offering a creative safe space for the audience and
                performers. Hopping through bars across NYC and pairing libations
                with music, Coco and Gaby aim to make classical music more casual,
                playful, and accessible, while fostering a tight-knit and welcoming
                community.
              </p>
              <Link
                to="/about#premise"
                className="inline-block px-8 py-3 border border-[var(--color-text)] rounded-full hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all text-[var(--color-text)] text-base"
                style={TYPEWRITER_FONT_STYLE}
              >
                MENU
              </Link>
            </div>
          </div>
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
