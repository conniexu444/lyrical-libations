export default function Footer() {
  return (
    <footer
      className="bg-[var(--show-boxes-color)] py-6 mt-auto text-center text-sm text-white"
      role="contentinfo"
    >
      <nav aria-label="Social media links">
        <div className="flex justify-center gap-6 items-center mb-2">
          <a
            href="https://www.instagram.com/lyrical.libations/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity focus:outline-none"
            aria-label="Follow us on Instagram"
          >
            Instagram
          </a>
          <a
            href="mailto:lyricallibationsss@gmail.com"
            className="hover:opacity-70 transition-opacity focus:outline-none"
            aria-label="Send us an email"
          >
            Email
          </a>
          <a
            href="https://www.youtube.com/@Lyrical.Libations"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity focus:outline-none"
            aria-label="Subscribe to our YouTube channel"
          >
            YouTube
          </a>
        </div>
      </nav>
    </footer>
  );
}
