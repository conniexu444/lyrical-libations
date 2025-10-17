import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import logo from "./assets/cheers.png";
import { routes } from "./routes/routes";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedTitle from "./components/AnimatedTitle";

// Lazy load dynamic route components
const EditionPage = lazy(() => import("./pages/Edition"));
const ShowDetail = lazy(() => import("./pages/ShowDetail"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="text-[var(--color-text)] text-lg opacity-70">Loading...</div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)]">
        <div className="w-full px-16 pt-8 flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Lyrical Libations" className="w-16 h-16 hover:opacity-70 transition-opacity" />
          </Link>
          <div className="flex flex-col items-end">
            <Link to="/">
              <AnimatedTitle />
            </Link>
            <Nav />
          </div>
        </div>

        <main className="flex-grow w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollToTop />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {routes.map(({ href, component: Component }) => (
                  <Route key={href} path={href} element={<Component />} />
                ))}

                <Route path="/archives/:id" element={<EditionPage />} />
                <Route path="/shows/:date" element={<ShowDetail />} />
              </Routes>
            </Suspense>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
