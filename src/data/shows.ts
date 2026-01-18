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
}

export const upcomingShows: Show[] = [
  {
    id: "2026-02-04",
    title: "Lyrical Libations: edition #6",
    date: "Feb 4, 2026",
    venue: "Tawny",
    address: "173 Henry St. New York City, New York 10002",
    doorsOpen: "7:30 PM",
    showStarts: "8 PM",
    musicians: [
      "Yebin Yoo, violin",
      "Elena Ariza, cello",
      "Lucas Amory, piano"
    ],
    ticketingComingSoon: true
  }
];
