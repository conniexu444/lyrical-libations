import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";
import { routes } from "./routes/routes";
import EditionPage from "./pages/Edition";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)]">
        <div className="w-full py-4 px-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Lyrical Libations logo"
                className="w-8 h-8 rounded-full object-contain"
              />
              <h1 className="text-2xl font-[var(--font-display)]">
                Lyrical Libations
              </h1>
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center py-6">
          <div className="w-2/3">
            <Nav />
          </div>
        </div>

        <main className="flex-grow w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollToTop />
            <Routes>
              {/* Static routes */}
              {routes.map(({ href, element }) => (
                <Route key={href} path={href} element={element} />
              ))}

              {/* Dynamic archive route */}
              <Route path="/archives/:id" element={<EditionPage />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
