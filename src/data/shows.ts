export interface Show {
  id: string;
  title: string;
  date: string;
  venue: string;
  address: string;
  details?: string;
}

export const upcomingShows: Show[] = [
  {
    id: "2026-02-04",
    title: "Lyrical Libations: edition #6",
    date: "Feb 4, 2026",
    venue: "Tawny", 
    address: "173 Henry St. New York City, New York 10002",
    details: "Join us for an unforgettable night of wine and music pairings featuring Trio Cava! Doors open at 7:30 PM, show starts at 8 PM"
  }
];
