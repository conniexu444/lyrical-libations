import React from "react";
import Timeline from "../components/Timeline";

const Archives = React.memo(() => {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)]">
      <div className="pt-6">
        <h1 className="text-3xl font-[var(--font-display)] mb-4 text-center">
          The Archives
        </h1>
      </div>
      <div className="flex items-center justify-center px-4 py-8">
        <Timeline />
      </div>
    </main>
  );
});

Archives.displayName = 'Archives';

export default Archives;
  