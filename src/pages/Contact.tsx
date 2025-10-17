import React from "react";
import drinks from "../assets/drinks.png";
import music from "../assets/music.png";
import { Button } from "../components/core/button";

const Contact = React.memo(() => {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-font)] font-[var(--font-body)] p-6 relative overflow-hidden">
      <img
        src={drinks}
        alt=""
        className="hidden sm:block absolute top-10 right-20 w-32 md:w-40 animate-bounce-slow pointer-events-none select-none"
        aria-hidden="true"
      />

      <img
        src={music}
        alt=""
        className="hidden sm:block absolute bottom-10 left-20 w-32 md:w-40 animate-bounce-slow pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto mt-20">
        <div className="bg-[var(--color-footer)] border border-[var(--color-link)] rounded-2xl shadow-md p-8">
          <p className="mb-6 text-lg">
            Want to collaborate, host us, or just say hi? We'd love to hear from
            you.
          </p>

          <form className="space-y-4" role="form" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full border border-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] focus:border-[var(--color-link)]"
                required
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border border-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] focus:border-[var(--color-link)]"
                required
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full border border-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] focus:border-[var(--color-link)]"
                required
                aria-required="true"
              />
            </div>

            <div className="flex justify-center">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
});

Contact.displayName = 'Contact';

export default Contact;
