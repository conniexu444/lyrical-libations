import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import banner from "../assets/banner.png";
import cocoGabyNight from "../assets/coco-gaby-night.jpg";
import cocoGabyCocktails from "../assets/coco-gaby-cocktails.jpg";
import flutes from "../assets/Flutes3.PNG";

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

        <div className="space-y-6 font-['RM_Typerighter']">
          <p className="text-[var(--color-text)] text-lg leading-relaxed">
            The two of us met in 2018 and became friends playing chamber music at Juilliard. We have now made it a mission to make classical music more accessible, intimate, and playful, by pairing pieces of music with cocktails in bars across NYC, tasting menu style. By expanding the range of concert types that are presented in classical music, Lyrical Libations aims to create a welcoming environment for everyone, regardless of musical background or knowledge.
          </p>
          <p className="text-[var(--color-text)] text-lg leading-relaxed">
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
            className="w-16 h-16 mx-4 my-4 md:my-0"
          />
          <img
            src={cocoGabyCocktails}
            alt="Coco and Gaby with cocktails"
            className="w-3/4 md:w-1/4 h-auto rounded-lg object-cover mx-auto"
          />
        </div>

        <div className="space-y-6 font-['RM_Typerighter']">
          <p className="text-[var(--color-text)] text-lg leading-relaxed">
            <u>Our story</u> started in 2024, as we were searching for meaning in our music.
          </p>
          <p className="text-[var(--color-text)] text-lg leading-relaxed">
            While working with a non-profit to bring concerts to individuals in carceral systems, we finally felt that our music had a bigger purpose. It felt like everyone in the room needed that music, and there were no longer the usual barriers between the audience and performer in classical music spaces.
          </p>
          <p className="text-[var(--color-text)] text-lg leading-relaxed">
            One night during this trip, we sat at a bar, sipping on some fun, creatively-crafted cocktails. With libations flowing, we reflected on how we could continue bringing classical music to spaces beyond the concert halls after this residency was over. As the flavors mixed with the music on our minds, we began to see how the senses of taste and sound enhance each other — by pairing flavor notes with pieces of music, classical music can be experienced in new and accessible ways. Most importantly, it was fun! And that is when Lyrical Libations was born.
          </p>
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
