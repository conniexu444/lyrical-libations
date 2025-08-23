export interface DonationLink {
  platform: 'kofi' | 'paypal';
  url: string;
  label: string;
}

export interface Artist {
  id: string;
  name: string;
  description: string;
  donationLinks: DonationLink[];
}

export interface SupportData {
  artists: Artist[];
  projectSupport: {
    description: string;
    donationLinks: DonationLink[];
  };
}