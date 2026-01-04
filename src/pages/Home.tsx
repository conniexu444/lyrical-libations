import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import cheersCello from "../assets/celloWithDrinks.png";

const HEADING_FONT_STYLE = { fontFamily: 'RM Typerighter, monospace', lineHeight: '1.1' };

export default function Home() {
  return (
    <PageWrapper>
      <ContentContainer maxWidth="6xl">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-[var(--color-text)] text-xl md:text-2xl lg:text-3xl text-center" style={HEADING_FONT_STYLE}>
            We pair classical music with cocktails at your favorite NYC bars — tasting menu style!
          </h1>
          <div className="flex justify-center">
            <img
              src={cheersCello}
              alt="Lyrical Libations - A celebration of poetry, music, and community"
              className="w-full md:w-96 lg:w-[500px] h-auto rounded-lg object-cover"
              loading="eager"
            />
          </div>
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
