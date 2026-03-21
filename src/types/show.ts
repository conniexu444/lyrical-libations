export interface Show {
  id: string;
  title: string;
  date: string;
  dateIso: string;
  venue: string;
  address: string;
  doorsOpen?: string;
  showStarts?: string;
  musicians?: string[];
  ticketing?: { price: string; description: string }[];
  ticketingComingSoon?: boolean;
  details?: string;
  payLink?: string;
}
