export interface TimelineElement {
  id: string;
  title: string;
  venue: string;
  address: string;
  location: string; // Keep for backward compatibility (city/area)
  date: string;
  icon: 'work' | 'school';
  color: string;
  poster?: string;
}