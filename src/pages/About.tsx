import { memo } from "react";
import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import banner from "../assets/banner.png";

const About = memo(() => {
  return (
    <PageWrapper>
      <ContentContainer>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-shrink-0">
            <img
              src={banner}
              alt="Coco and Gabby cheering with cello"
              className="w-3/4 mx-auto md:w-80 lg:w-96 h-auto rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-[var(--font-display)] mb-6">
              Coco & Gaby
            </h2>
            <p className="text-[var(--color-text)] mb-6 text-lg leading-relaxed">
              Coco and Gaby are two NYC based musicians who want to bring
              classical music to bars. Lyrical Libations started as a way to
              make classical music more accessible.
            </p>
            <p className="text-[var(--color-text)] text-lg leading-relaxed">
              This would be another paragraph about Lyrical Libations as a
              whole.
            </p>
          </div>
        </div>
      </ContentContainer>
    </PageWrapper>
  );
});

About.displayName = "About";

export default About;
