import ScrambleHover from "./scramble";

const SCRAMBLE_CONFIG = {
  sequential: true,
  scrambleSpeed: 50,
  useOriginalCharsOnly: true,
} as const;

export default function AnimatedTitle() {
  return (
    <h1 className="text-2xl font-[var(--font-display)]">
      <ScrambleHover
        text="Lyrical Libations"
        {...SCRAMBLE_CONFIG}
        className="cursor-pointer"
      />
    </h1>
  );
}
