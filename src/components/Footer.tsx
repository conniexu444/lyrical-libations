export default function Footer() {
  return (
    <footer className="bg-[var(--color-footer)] py-6 mt-auto text-center text-sm text-[var(--color-text)]">
      <div className="flex justify-center gap-6 items-center mb-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          Instagram
        </a>
        <a href="mailto:" className="hover:opacity-70 transition-opacity">
          Email
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          YouTube
        </a>
      </div>
    </footer>
  );
}
