import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import cheersCello from "../assets/celloWithDrinks.png";

const HEADING_FONT_STYLE = { fontFamily: 'RM Typerighter, monospace', lineHeight: '1.1' };

export default function Home() {
  return (
    <PageWrapper>
      <ContentContainer maxWidth="6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="flex-shrink-0">
            <img
              src={cheersCello}
              alt="Lyrical Libations - A celebration of poetry, music, and community"
              className="w-full md:w-96 lg:w-[500px] h-auto rounded-lg object-cover"
              loading="eager"
            />
          </div>
          <div className="flex-1 space-y-10 mt-12">
            <p className="text-[var(--color-text)] text-5xl text-left" style={HEADING_FONT_STYLE}>
              This is a creative safe space for both the performers and audience.
            </p>
            <p className="text-[var(--color-text)] text-3xl text-right" style={HEADING_FONT_STYLE}>
              A place where we feel open to taking risks and being emotionally free
            </p>
            <p className="text-[var(--color-text)] text-2xl text-left" style={HEADING_FONT_STYLE}>
              A place for playfulness, vulnerability, and connection!
            </p>
          </div>
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
