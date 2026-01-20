import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { routes } from "../routes/routes";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger toggle for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className={`fixed top-8 right-8 z-50 md:hidden p-2 ${
          isOpen ? "text-white" : "text-[var(--color-text)]"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Nav - Simple horizontal layout */}
      <nav className="hidden md:flex gap-8 pt-4 text-base justify-end text-right" style={{ fontFamily: 'RM Typerighter, monospace' }}>
        {routes
          .filter((link) => link.href !== "/")
          .map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.title}
                to={link.href}
                className={`text-[var(--color-text)] hover:opacity-70 transition-opacity ${
                  isActive ? "font-semibold" : ""
                }`}
              >
                {link.title}
              </Link>
            );
          })}
      </nav>

      {/* Mobile Nav with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 flex items-center justify-center"
            style={{ backgroundColor: "#293724" }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-8 text-4xl"
              style={{ fontFamily: 'RM Typerighter, monospace' }}
            >
              {routes
                .filter((link) => link.href !== "/")
                .map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:opacity-70 transition-opacity"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
