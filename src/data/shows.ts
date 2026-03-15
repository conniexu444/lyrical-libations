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
    date: "SUN Apr 26, 2026",
    venue: "Fiction Bk",
    address: "308 Hooper St, Brooklyn, NY",
    musicians: [
      "Poiesis Quartet",
      "Sarah Ying Ma, violin",
      "Max Ball, violin",
      "Jasper de Boor, viola",
      "Drew Dansby, cello"
    ],
    details: "Celebrate Spring by spending happy hour with the Poiesis Quartet! They'll be presenting a fresh & fruity program paired with custom-made cocktails. Tix are pay-what-you-wish"
  "Doors: 5:30 PM"
  "Music: 6 PM"
  "Mingle: 'til 9PM"
    ticketingComingSoon: true,
    payLink: "https://www.paypal.com/paypalme/cocomivln"
  }
];
