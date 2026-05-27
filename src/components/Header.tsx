/* ==========================================================
   HEADER — Nexytal Coaching
   Sticky, transparent on scroll, mega-menu, mobile drawer
   ========================================================== */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User, ArrowRight } from "lucide-react";

const megaMenuData = {
  dirigeants: {
    title: "Dirigeants",
    items: [
      { label: "Coaching de dirigeants", href: "/coaching-dirigeants", desc: "PDG, CEO, DG, CODIR/COMEX" },
      { label: "Coaching CODIR/COMEX", href: "/coaching-equipes", desc: "Équipes de direction" },
      { label: "Coaching de transition", href: "/coaching-dirigeants", desc: "Prise de poste, reconversion" },
    ],
  },
  managers: {
    title: "Managers",
    items: [
      { label: "Coaching managérial", href: "/coaching-managers", desc: "Leadership et posture" },
      { label: "Prise de poste", href: "/coaching-managers", desc: "Les 100 premiers jours" },
      { label: "Leadership & influence", href: "/coaching-managers", desc: "Inspirer et mobiliser" },
    ],
  },
  salaries: {
    title: "Salariés & Équipes",
    items: [
      { label: "Coaching individuel", href: "/coaching-salaries", desc: "Collaborateurs, potentiel" },
      { label: "Coaching d'équipe", href: "/coaching-equipes", desc: "Cohésion et performance" },
      { label: "Gestion du stress", href: "/coaching-salaries", desc: "Équilibre et bien-être" },
    ],
  },
};

const navLinks = [
  { label: "Méthode", href: "/methode" },
  { label: "Nos coachs", href: "/coachs" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccOpen, setMobileAccOpen] = useState(false);
  const [location] = useLocation();
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/95"
        }`}
        style={{ borderBottom: scrolled ? "1px solid rgba(10,37,64,0.08)" : "none" }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-0 shrink-0">
              <span className="font-fraunces font-bold text-xl text-navy tracking-tight">Nexytal</span>
              <span className="text-gold text-xl font-bold mx-0.5">·</span>
              <span className="font-inter font-light text-xl text-navy tracking-tight">Coaching</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Mega Menu Trigger */}
              <div
                className="relative"
                ref={megaRef}
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-navy hover:text-gold transition-colors duration-200 py-2"
                  onClick={() => setMegaOpen(!megaOpen)}
                >
                  Nos accompagnements
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {Object.values(megaMenuData).map((col) => (
                          <div key={col.title}>
                            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                              {col.title}
                            </p>
                            <ul className="space-y-2">
                              {col.items.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    className="group flex flex-col gap-0.5 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                  >
                                    <span className="text-sm font-medium text-navy group-hover:text-gold transition-colors">
                                      {item.label}
                                    </span>
                                    <span className="text-xs text-gray-500">{item.desc}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <p className="text-xs text-gray-500">Certifié ICF · EMCC · Qualiopi</p>
                        <Link href="/diagnostic" className="flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline">
                          Faire mon diagnostic gratuit <ArrowRight size={12} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location === link.href ? "text-gold" : "text-navy hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-1.5 text-sm font-medium text-navy hover:text-gold transition-colors px-3 py-2"
              >
                <User size={15} />
                Espace client
              </Link>
              <Link href="/diagnostic" className="btn-gold text-sm py-2.5 px-5">
                Diagnostic offert
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <span className="font-fraunces font-bold text-navy">Nexytal<span className="text-gold">·</span>Coaching</span>
                <button onClick={() => setMobileOpen(false)} className="p-1 text-navy">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-5 space-y-1">
                <button
                  className="w-full flex items-center justify-between py-3 text-sm font-medium text-navy border-b border-gray-100"
                  onClick={() => setMobileAccOpen(!mobileAccOpen)}
                >
                  Nos accompagnements
                  <ChevronDown size={15} className={`transition-transform ${mobileAccOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileAccOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      {Object.values(megaMenuData).map((col) => (
                        <div key={col.title} className="pl-3 py-2">
                          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">{col.title}</p>
                          {col.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block py-1.5 text-sm text-gray-700 hover:text-gold"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-3 text-sm font-medium text-navy border-b border-gray-100 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="p-5 space-y-3 border-t border-gray-100">
                <Link href="/contact" className="btn-navy-outline w-full justify-center text-sm">
                  Espace client
                </Link>
                <Link href="/diagnostic" className="btn-gold w-full justify-center text-sm">
                  Diagnostic offert
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
