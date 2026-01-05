import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import cheersCello from "../assets/celloWithDrinks.png";
import cocktailIcon from "../assets/drinksMusic.png";

const HEADING_FONT_STYLE = { fontFamily: 'RM Typerighter, monospace', lineHeight: '1.1' };

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
            <h1 className="text-[var(--color-text)] text-xs md:text-sm lg:text-base text-center" style={HEADING_FONT_STYLE}>
              We pair classical music with cocktails at your favorite NYC bars — tasting menu style!
            </h1>
            <img
              src={cocktailIcon}
              alt="Cocktail with music notes"
              className="w-12 h-auto md:w-16 lg:w-20 flex-shrink-0 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={cheersCello}
              alt="Lyrical Libations - A celebration of poetry, music, and community"
              className="w-full md:w-96 lg:w-[375px] h-auto rounded-lg object-cover"
              loading="eager"
            />
          </div>
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
