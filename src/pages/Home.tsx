import React from "react";
import cheersCello from "../assets/celloWithDrinks.png";

const Home = React.memo(() => {
  return (
    <main role="main" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="flex-shrink-0">
            <img
              src={cheersCello}
              alt="Lyrical Libations - A celebration of poetry, music, and community"
              className="w-full md:w-96 lg:w-[500px] h-auto rounded-lg object-cover"
              loading="eager"
            />
          </div>
          <div className="flex-1 space-y-6 mt-12">
            <p className="text-[var(--color-text)] text-5xl" style={{ fontFamily: 'Neka, serif', lineHeight: '1.1' }}>
              This is a creative safe space for both the performers and audience.
            </p>
            <p className="text-[var(--color-text)] text-4xl" style={{ fontFamily: 'Neka, serif', lineHeight: '1.1' }}>
              A place where we feel open to taking risks and being emotionally free
            </p>
            <p className="text-[var(--color-text)] text-3xl" style={{ fontFamily: 'Neka, serif', lineHeight: '1.1' }}>
              A place for playfulness, vulnerability, and connection!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
});

Home.displayName = "Home";

export default Home;
