import React from "react";

const Footer = React.memo(() => {
  return (
    <footer
      className="bg-[var(--color-footer)] py-6 mt-auto text-center text-sm text-[var(--color-text)]"
      role="contentinfo"
    >
      <nav aria-label="Social media links">
        <div className="flex justify-center gap-6 items-center mb-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] rounded"
            aria-label="Follow us on Instagram"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@lyricalLibations.com"
            className="hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] rounded"
            aria-label="Send us an email"
          >
            Email
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] rounded"
            aria-label="Subscribe to our YouTube channel"
          >
            YouTube
          </a>
        </div>
      </nav>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
