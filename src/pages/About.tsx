import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import banner from "../assets/banner.png";
import cocoGabyNight from "../assets/coco-gaby-night.jpg";
import cocoGabyCocktails from "../assets/coco-gaby-cocktails.jpg";
import flutes from "../assets/Flutes3.PNG";
import martini from "../assets/Martini (1).PNG";
import violinist from "../assets/Violinist (1).PNG";
import violinAlone from "../assets/violinAlone.png";
import cheers from "../assets/cheers.png";
import musicNotes from "../assets/musicNotesIcon.png";

const TYPEWRITER_FONT_STYLE = { fontFamily: 'RM Typerighter, monospace' };

export default function About() {
  return (
    <PageWrapper>
      <ContentContainer>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-8">
          <div className="flex-shrink-0">
            <img
              src={banner}
              alt="Coco and Gabby cheering with cello"
              className="w-full mx-auto md:w-96 lg:w-[32rem] h-auto rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-[var(--color-text)] text-2xl leading-relaxed italic">
              Lyrical Libations is a creative safe space for both the performer and audience, a place where you're free to enjoy art on your own terms, curated with love by us.
              <br />
              –Coco and Gaby {'<3'}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-[var(--color-text)] text-base leading-relaxed" style={TYPEWRITER_FONT_STYLE}>
            The two of us met in 2018 and became friends playing chamber music at Juilliard. We have now made it a mission to make classical music more accessible, intimate, and playful, by pairing pieces of music with cocktails in bars across NYC, tasting menu style. By expanding the range of concert types that are presented in classical music, Lyrical Libations aims to create a welcoming environment for everyone, regardless of musical background or knowledge.
          </p>
          <p className="text-[var(--color-text)] text-base leading-relaxed" style={TYPEWRITER_FONT_STYLE}>
            Above all, it's a reminder that the essence of music is connection.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-0 mt-8 mb-8 justify-center items-center mx-auto">
          <img
            src={cocoGabyNight}
            alt="Coco and Gaby"
            className="w-3/4 md:w-1/4 h-auto rounded-lg object-cover mx-auto"
          />
          <img
            src={flutes}
            alt="Cheers"
            className="w-24 h-24 mx-4 my-4 md:my-0"
          />
          <img
            src={cocoGabyCocktails}
            alt="Coco and Gaby with cocktails"
            className="w-3/4 md:w-1/4 h-auto rounded-lg object-cover mx-auto"
          />
        </div>

        <div className="space-y-6">
          <p className="text-[var(--color-text)] text-base leading-relaxed" style={TYPEWRITER_FONT_STYLE}>
            <u>Our story</u> started in 2024, as we were searching for meaning in our music.
          </p>
          <p className="text-[var(--color-text)] text-base leading-relaxed" style={TYPEWRITER_FONT_STYLE}>
            While working with a non-profit to bring concerts to individuals in carceral systems, we finally felt that our music had a bigger purpose. It felt like everyone in the room needed that music, and there were no longer the usual barriers between the audience and performer in classical music spaces.
          </p>
          <p className="text-[var(--color-text)] text-base leading-relaxed" style={TYPEWRITER_FONT_STYLE}>
            One night during this trip, we sat at a bar, sipping on some fun, creatively-crafted cocktails. With libations flowing, we reflected on how we could continue bringing classical music to spaces beyond the concert halls after this residency was over. As the flavors mixed with the music on our minds, we began to see how the senses of taste and sound enhance each other — by pairing flavor notes with pieces of music, classical music can be experienced in new and accessible ways. Most importantly, it was fun! And that is when Lyrical Libations was born.
          </p>
        </div>

        {/* Staggered illustration layout */}
        <div className="relative w-full h-96 mt-12 mb-8">
          {/* Top left - Cocktail */}
          <img
            src={martini}
            alt="Cocktail with music"
            className="absolute top-8 left-1/4 transform -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 object-contain"
          />

          {/* Middle left - Violinist */}
          <img
            src={violinist}
            alt="Violinist"
            className="absolute top-32 left-1/3 transform -translate-x-1/2 w-36 h-36 md:w-44 md:h-44 object-contain"
          />

          {/* Middle right - Violin */}
          <img
            src={violinAlone}
            alt="Violin"
            className="absolute top-40 right-1/3 transform translate-x-1/2 w-28 h-28 md:w-36 md:h-36 object-contain"
          />

          {/* Top right - Champagne glasses */}
          <img
            src={cheers}
            alt="Cheers"
            className="absolute top-6 right-1/4 transform translate-x-1/2 w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </div>

        {/* The Premise section */}
        <div className="space-y-6 mt-12">
          <h2 className="text-[var(--color-text)] text-2xl font-bold mb-4" style={TYPEWRITER_FONT_STYLE}>
            The Premise
          </h2>
          <p className="text-[var(--color-text)] text-lg leading-relaxed" style={TYPEWRITER_FONT_STYLE}>
            At every show, the musical program is the drink menu!
          </p>
          <p className="text-[var(--color-text)] text-base leading-relaxed" style={TYPEWRITER_FONT_STYLE}>
            Think the way one would sample a wine flight or a tasting menu, except with music. You'll see each musical sample paired with a libation!
          </p>
          <p className="text-[var(--color-text)] text-lg leading-relaxed" style={TYPEWRITER_FONT_STYLE}>
            Every show is a different chamber group at a different bar.
          </p>
          <p className="text-[var(--color-text)] text-base leading-relaxed" style={TYPEWRITER_FONT_STYLE}>
            Supporting our local musicians (many of whom are our dear friends!) and local bars!
          </p>
          <p className="text-[var(--color-text)] text-lg leading-relaxed" style={TYPEWRITER_FONT_STYLE}>
            Every show encourages experiencing classical music in a new way.
          </p>
          <p className="text-[var(--color-text)] text-base leading-relaxed" style={TYPEWRITER_FONT_STYLE}>
            Whether you've never listened to classical music, used to play, or currently play, this space is for you. We encourage mingling after the music ends, so don't be surprised if you leave with a new friend or two, a revived love for music, and another favorite bar…
          </p>
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
