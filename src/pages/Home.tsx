import React from "react";
import banner from "../assets/banner.png";

const Home = React.memo(() => {
  return (
    <main role="main">
      <div className="w-full py-10">
        <img
          src={banner}
          alt="Lyrical Libations - A celebration of poetry, music, and community"
          className="w-4/5 mx-auto h-auto max-h-[600px] object-cover rounded-lg"
          loading="eager"
        />
      </div>
    </main>
  );
});

Home.displayName = "Home";

export default Home;
