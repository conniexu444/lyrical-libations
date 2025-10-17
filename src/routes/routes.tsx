// Routes for the nav bar / menu / navigations
import { lazy } from "react";
import type { RouteConfig } from "../types/routes";

// Lazy load all page components for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Shows = lazy(() => import("../pages/Shows"));
const Archives = lazy(() => import("../pages/Archives"));
const SupportUs = lazy(() => import("../pages/SupportUs"));
const Contact = lazy(() => import("../pages/Contact"));

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