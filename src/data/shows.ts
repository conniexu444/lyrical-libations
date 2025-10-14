export interface Show {
  id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
  details?: string;
}

export const upcomingShows: Show[] = [
  {
    id: "2025-11-15",
    title: "Lyrical Libations: Fall Showcase",
    date: "November 15, 2025",
    location: "The Poetry Lounge, Brooklyn NY",
    description: "An evening of poetry and craft cocktails",
    details: "Join us for an unforgettable night featuring local poets and mixologists collaborating to create unique experiences. Doors open at 7 PM, show starts at 8 PM."
  },
  {
    id: "2025-12-20",
    title: "Winter Solstice Special",
    date: "December 20, 2025",
    location: "Moonlight Bar, Manhattan NY",
    description: "Celebrating the longest night with verse and libations",
    details: "A special winter edition bringing together spoken word artists and seasonal cocktails. This intimate venue seats 50 guests, so early arrival is recommended. Show begins at 9 PM."
  }
];
