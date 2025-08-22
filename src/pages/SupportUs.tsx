import { ExternalLink, Heart, Coffee } from 'lucide-react';

export default function SupportUs() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-[var(--font-display)] mb-10 text-center">
          Support the Artists
        </h1>

        {/* Introduction */}
        <div className="text-center mb-12">
          <p className="text-lg mb-4">
            Lyrical Libations is an independent artistic project created with love by Coco and Gabby.
          </p>
          <p className="text-base text-[var(--color-link)]">
            Your support helps us continue creating immersive experiences and bringing our art to life.
          </p>
        </div>

        {/* Artist Cards with Donation Options */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Coco's Support Card */}
          <div className="flex-1 bg-[var(--color-dark-red)] border border-[var(--color-link)] rounded-2xl shadow-md p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-[var(--font-display)] mb-3 flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-[var(--color-link)]" />
                Support Coco
              </h2>
              <p className="text-[var(--color-text)] mb-4">
                Multidisciplinary artist exploring sound, ritual, and sensory storytelling through poetry, rhythm, and community magic.
              </p>
            </div>
            
            <div className="space-y-4">
              {/* Ko-fi Button Placeholder */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[var(--color-button)] hover:bg-[var(--color-nav)] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                aria-label="Support Coco on Ko-fi"
              >
                <div className="flex items-center justify-center gap-2">
                  <Coffee className="w-5 h-5" />
                  Buy Coco a Coffee
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
              
              {/* PayPal Button Placeholder */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[var(--color-link)] hover:bg-[var(--color-nav)] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                aria-label="Donate to Coco via PayPal"
              >
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Donate via PayPal
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

          {/* Gabby's Support Card */}
          <div className="flex-1 bg-[var(--color-dark-red)] border border-[var(--color-link)] rounded-2xl shadow-md p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-[var(--font-display)] mb-3 flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-[var(--color-link)]" />
                Support Gabby
              </h2>
              <p className="text-[var(--color-text)] mb-4">
                Sonic explorer and producer blending analog textures with ethereal vocals, creating immersive worlds of emotion and memory.
              </p>
            </div>
            
            <div className="space-y-4">
              {/* Ko-fi Button Placeholder */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[var(--color-button)] hover:bg-[var(--color-nav)] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                aria-label="Support Gabby on Ko-fi"
              >
                <div className="flex items-center justify-center gap-2">
                  <Coffee className="w-5 h-5" />
                  Buy Gabby a Coffee
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
              
              {/* PayPal Button Placeholder */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[var(--color-link)] hover:bg-[var(--color-nav)] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                aria-label="Donate to Gabby via PayPal"
              >
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Donate via PayPal
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* General Support Section */}
        <div className="bg-[var(--color-dark-red)] border border-[var(--color-link)] rounded-2xl shadow-md p-8 text-center">
          <h3 className="text-2xl font-[var(--font-display)] mb-4">
            Support Both Artists
          </h3>
          <p className="text-[var(--color-text)] mb-6">
            Want to support the entire Lyrical Libations project? Your contribution helps fund venue costs, equipment, and future shows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[var(--color-button)] hover:bg-[var(--color-nav)] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
              aria-label="Support Lyrical Libations on Ko-fi"
            >
              <div className="flex items-center justify-center gap-2">
                <Coffee className="w-5 h-5" />
                Ko-fi
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
            
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[var(--color-link)] hover:bg-[var(--color-nav)] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
              aria-label="Donate to Lyrical Libations via PayPal"
            >
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                PayPal
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>

        {/* Security & Privacy Notice */}
        <div className="mt-12 text-center text-sm text-[var(--color-link)]">
          <p className="mb-2">
            🔒 All donations are processed securely through trusted payment platforms.
          </p>
          <p>
            We never store your payment information. Your privacy and security are our priority.
          </p>
        </div>
      </div>
    </main>
  );
}
  