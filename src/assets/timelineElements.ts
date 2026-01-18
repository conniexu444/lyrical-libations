import type { TimelineElement } from "../types/timeline";
import edition2 from "../assets/03-18-edition-2.png";
import edition1 from "../assets/02-19-edition-1.png";

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
];

export default timelineElements.reverse();