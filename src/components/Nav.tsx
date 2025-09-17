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

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20
    },
    open: {
      opacity: 1,
      y: 0
    }
  };

  const containerVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* Hamburger toggle - pinned in top right corner on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="fixed top-4 right-4 z-50 md:hidden text-[var(--color-link)] bg-[var(--color-bg)] p-2 rounded-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <header className="w-full bg-[var(--color-bg)] px-6 pt-4 pb-2">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-between w-full text-lg font-[font-display]">
            {routes.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.title}
                  to={link.href}
                  className={`text-[var(--color-link)] hover:underline underline-offset-4 ${
                    isActive ? "underline" : ""
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Full-screen Mobile Nav with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed inset-0 bg-[var(--color-bg)] z-40 flex items-center justify-center"
          >
            <motion.nav
              variants={containerVariants}
              className="flex flex-col items-center gap-8 text-2xl font-[var(--font-display)]"
            >
              {routes.map((link, index) => (
                <motion.div
                  key={link.title}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[var(--color-link)] hover:underline underline-offset-4 transition-all duration-300 hover:scale-105"
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
