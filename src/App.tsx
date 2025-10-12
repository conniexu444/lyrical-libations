import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import logo from "./assets/cheers.png";
import { routes } from "./routes/routes";
import EditionPage from "./pages/Edition";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AnimatedTitle from "./components/AnimatedTitle";

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
            <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />

              {routes
                .filter(({ href }) => href !== "/")
                .map(({ href, component: Component }) => (
                  <Route key={href} path={href} element={<Component />} />
                ))}

              <Route path="/archives/:id" element={<EditionPage />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
