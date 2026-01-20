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
            <p className="text-[var(--color-text)] mb-6 text-lg leading-relaxed" style={{ fontFamily: "var(--font-typewriter)" }}>
            With your support we can continue making classical music more accessible and fun, and support our local musicians!  Every contribution helps &lt;3
            </p>
            <div className="flex justify-center">
              <a href="https://www.paypal.com/paypalme/cocomivln" target="_blank" rel="noopener noreferrer">
                <Button className="!bg-transparent !text-[#9A031E] !border-[#9A031E] hover:!bg-[#9A031E] hover:!text-white">Donate Here</Button>
              </a>
            </div>
          </div>
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
