import type { TimelineElement } from "../types/timeline";
import edition2 from "../assets/03-18-edition-2.png";
import edition1 from "../assets/02-19-edition-1.png";
import edition3Poster from "../assets/Edition3/COVER PIC.jpg";
import edition4Poster from "../assets/Edition4/COVER PIC.jpg";
import edition5Poster from "../assets/Edition5/COVER PIC.png";

const timelineElements: TimelineElement[] = [
  {
    id: "Edition-1",
    title: "Edition 1",
    venue: "Hide & Seek",
    address: "123 Example St, Brooklyn, NY 11201", // Add actual address
    location: "Brooklyn, NY",
    date: "Feb 2025",
    icon: "work",
    color: "purple",
    poster: edition1,
  },
  {
    id: "Edition-2",
    title: "Edition 2",
    venue: "FourFiveSix",
    address: "456 Example Ave, Brooklyn, NY 11201", // Add actual address
    location: "Brooklyn, NY",
    date: "Mar 2025",
    icon: "work",
    color: "purple",
    poster: edition2,
  },
  {
    id: "Edition-3",
    title: "Edition 3",
    venue: "Red Rover",
    address: "928 Manhattan Ave Brooklyn, NY 11222",
    location: "Brooklyn, NY",
    date: "Sep 2025",
    icon: "work",
    color: "purple",
    poster: edition3Poster,
  },
  {
    id: "Edition-4",
    title: "Edition 4",
    venue: "KGB Bar",
    address: "85 E 4th St, New York, NY 10003",
    location: "New York, NY",
    date: "Nov 2025",
    icon: "work",
    color: "purple",
    poster: edition4Poster,
  },
  {
    id: "Edition-5",
    title: "Edition 5",
    venue: "Cordelia",
    address: "942 Bergen St, Brooklyn, NY 11238",
    location: "Brooklyn, NY",
    date: "Dec 2025",
    icon: "work",
    color: "purple",
    poster: edition5Poster,
  },
];

export default timelineElements.reverse();