import stars from "../assets/star.png";
import { Button } from "../components/core/button";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-font)] font-[var(--font-body)] p-6 relative overflow-hidden">
      {/* Animated Stars Image - Top Right */}
      <img
        src={stars}
        alt="Stars"
        className="hidden sm:block absolute top-10 right-20 w-32 md:w-40 animate-bounce-slow pointer-events-none select-none"
      />

      {/* Animated Stars Image - Bottom Left */}
      <img
        src={stars}
        alt="Stars"
        className="hidden sm:block absolute bottom-10 left-20 w-32 md:w-40 animate-bounce-slow pointer-events-none select-none"
      />

      <div className="max-w-2xl mx-auto">
        <div className="bg-[var(--color-footer)] border border-[var(--color-link)] rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-[var(--font-display)] mb-6 text-center">
            Contact Us
          </h1>

          <p className="mb-6 text-lg">
            Want to collaborate, host us, or just say hi? We'd love to hear from
            you.
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="flex justify-center">
              <Button />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
