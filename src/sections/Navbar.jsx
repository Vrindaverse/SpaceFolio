import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Navigation({ activeSection, isMobile }) {
  return (
    <motion.ul
      className={`flex ${isMobile ? "flex-col space-y-4 py-5" : "space-x-8 relative"}`}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {links.map((link) => {
        const id = link.href.substring(1);
        const isActive = activeSection === id;

        return (
          <motion.li
            key={link.href}
            variants={linkVariants}
            whileHover={{ scale: 1.1, color: "#F472B6" }}
            className="relative"
          >
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(id);
                if (el) {
                  window.scrollTo({
                    top: el.offsetTop - 80, // offset for navbar
                    behavior: "smooth",
                  });
                }
              }}
              className={`transition-colors font-medium ${
                isActive ? "text-white" : "text-neutral-400 hover:text-pink-400"
              }`}
            >
              {link.name}
            </a>

            {!isMobile && isActive && (
              <motion.span
                layoutId="active-underline"
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-500 rounded"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // adjust offset for navbar height
      for (let i = links.length - 1; i >= 0; i--) {
        const sectionId = links[i].href.substring(1);
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial active
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed inset-x-0 z-20 w-full bg-transparent"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4 sm:py-2">
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 hover:text-white transition-colors"
          >
            Vrinda
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex sm:hidden text-neutral-400 hover:text-white focus:outline-none"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation activeSection={activeSection} />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="sm:hidden bg-transparent text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Navigation isMobile activeSection={activeSection} />
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
