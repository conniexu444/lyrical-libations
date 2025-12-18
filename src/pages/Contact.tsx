import { PageWrapper } from "../components/PageWrapper";
import { ContentContainer } from "../components/ContentContainer";
import { Button } from "../components/core/button";
import { useContactForm } from "../hooks/useContactForm";
import drinks from "../assets/drinks.png";
import music from "../assets/music.png";

export default function Contact() {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <PageWrapper className="relative overflow-hidden">
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

      <ContentContainer maxWidth="2xl" className="mt-20">
        <div className="bg-[var(--color-footer)] border border-[var(--color-link)] rounded-2xl shadow-md p-8">
          <p className="mb-6 text-lg">
            Want to collaborate, host us, or just say hi? We'd love to hear from you.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit} role="form" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] focus:border-[var(--color-link)]"
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] focus:border-[var(--color-link)]"
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] focus:border-[var(--color-link)]"
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex justify-center">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </ContentContainer>
    </PageWrapper>
  );
}
