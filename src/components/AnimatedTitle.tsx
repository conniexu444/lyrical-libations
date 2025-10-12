import ScrambleHover from "./scramble";

const AnimatedTitle = () => {
  return (
    <h1 className="text-2xl font-[var(--font-display)]">
      <ScrambleHover
        text="Lyrical Libations"
        sequential={true}
        scrambleSpeed={50}
        useOriginalCharsOnly={true}
        className="cursor-pointer"
      />
    </h1>
  );
};

export default AnimatedTitle;
