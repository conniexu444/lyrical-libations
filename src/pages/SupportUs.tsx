import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import { Button } from "../components/core/button";
import violin from "../assets/violinAlone.png";

export default function SupportUs() {
  return (
    <PageWrapper>
      <ContentContainer>
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
          <div className="flex-shrink-0">
            <img
              src={violin}
              alt="Violin artwork"
              className="w-1/2 mx-auto md:w-80 lg:w-96 h-auto rounded-lg object-cover"
            />
          </div>

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
      </ContentContainer>
    </PageWrapper>
  );
}
