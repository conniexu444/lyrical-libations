export interface Show {
  id: string;
  title: string;
  date: string;
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

export const upcomingShows: Show[] = [
  {
    id: "2026-04-26",
    title: "Lyrical Libations: edition #7 — happy hour edition!",
    date: "Apr 26, 2026",
    venue: "TBD",
    address: "TBD",
    doorsOpen: "5:30 PM",
    showStarts: "6 PM",
    musicians: [
      "Poiesis Quartet",
      "Sarah Ying Ma, violin",
      "Max Ball, violin",
      "Jasper de Boor, viola",
      "Drew Dansby, cello"
    ],
    details: "Happy hour edition! Mingle til 9.",
    ticketingComingSoon: true,
    payLink: "https://www.paypal.com/paypalme/cocomivln"
  }
];
