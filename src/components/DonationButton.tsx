import React from 'react';
import { ExternalLink, Heart, Coffee } from 'lucide-react';
import type { DonationLink } from '../types/support';

interface DonationButtonProps {
  donationLink: DonationLink;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const DonationButton: React.FC<DonationButtonProps> = React.memo(({ 
  donationLink, 
  variant = 'primary',
  className = ''
}) => {
  const isPrimaryVariant = variant === 'primary';
  const isKofi = donationLink.platform === 'kofi';
  
  const baseClasses = 'block w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = isPrimaryVariant 
    ? 'bg-[var(--color-button)] hover:bg-[var(--color-nav)] focus:ring-[var(--color-button)]'
    : 'bg-[var(--color-link)] hover:bg-[var(--color-nav)] focus:ring-[var(--color-link)]';
  
  const Icon = isKofi ? Coffee : Heart;
  
  return (
    <a
      href={donationLink.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses} text-white ${className}`}
      aria-label={`${donationLink.label} - Opens in a new tab`}
    >
      <div className="flex items-center justify-center gap-2">
        <Icon className="w-5 h-5" aria-hidden="true" />
        {donationLink.label}
        <ExternalLink className="w-4 h-4" aria-hidden="true" />
      </div>
    </a>
  );
});

DonationButton.displayName = 'DonationButton';

export default DonationButton;