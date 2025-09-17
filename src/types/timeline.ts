export interface TimelineElement {
  id: string;
  title: string;
  location: string;
  date: string;
  icon: 'work' | 'school';
  color: string;
  poster?: string;
}