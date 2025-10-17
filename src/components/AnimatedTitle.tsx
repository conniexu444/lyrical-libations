import { memo } from "react";
import ScrambleHover from "./scramble";

const SCRAMBLE_CONFIG = {
  sequential: true,
  scrambleSpeed: 50,
  useOriginalCharsOnly: true,
} as const;

const AnimatedTitle = memo(() => {
  return (
    <h1 className="text-2xl font-[var(--font-display)]">
      <ScrambleHover
        text="Lyrical Libations"
        {...SCRAMBLE_CONFIG}
        className="cursor-pointer"
      />
    </h1>
  );
});

AnimatedTitle.displayName = "AnimatedTitle";

export default AnimatedTitle;
