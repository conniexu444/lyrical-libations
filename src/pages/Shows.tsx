import React from "react";

const Shows = React.memo(() => {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-[var(--font-display)] mb-4 text-center">
          Upcoming Shows
        </h1>
        <p className="text-center text-lg opacity-80">
          Stay tuned for announcements about our upcoming performances!
        </p>
      </div>
    </main>
  );
});

Shows.displayName = 'Shows';

export default Shows;
