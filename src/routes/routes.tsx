// Routes for the nav bar / menu / navigations
import type { RouteConfig } from "../types/routes";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import SupportUs from "../pages/SupportUs";
import Shows from "../pages/Shows";
import Archives from "../pages/Archives";

export const routes: RouteConfig[] = [
  {
    title: "Home",
    href: "/",
    component: Home,
  },
  {
    title: "About",
    href: "/about",
    component: About,
  },
  {
    title: "Shows",
    href: "/shows",
    component: Shows,
  },
  {
    title: "Archives",
    href: "/archives",
    component: Archives,
  },
  {
    title: "Support Us",
    href: "/support",
    component: SupportUs,
  },
  {
    title: "Contact",
    href: "/contact",
    component: Contact,
  },
];