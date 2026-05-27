/* ==========================================================
   FOOTER — Nexytal Coaching
   Fond bleu nuit, 5 colonnes, bandeau certifications
   ========================================================== */
import { Link } from "wouter";
import { Linkedin, Youtube, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer>
      {/* Certification Banner */}
      <div className="bg-gray-50 border-t border-gray-200 py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              { label: "ICF Certified", sub: "International Coaching Federation" },
              { label: "EMCC", sub: "European Mentoring & Coaching Council" },
              { label: "Qualiopi", sub: "Certification qualité formation" },
              { label: "RNCP", sub: "Répertoire National des Certifications" },
            ].map((cert) => (
              <div key={cert.label} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-2">
                  <span className="text-gold font-fraunces font-bold text-xs">{cert.label.slice(0, 2)}</span>
                </div>
                <p className="text-xs font-semibold text-navy">{cert.label}</p>
                <p className="text-xs text-gray-500 max-w-[120px]">{cert.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-navy text-white">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Col 1 — Brand */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <span className="font-fraunces font-bold text-2xl text-white">Nexytal</span>
                <span className="text-gold text-2xl font-bold mx-0.5">·</span>
                <span className="font-inter font-light text-2xl text-white">Coaching</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                Révéler les leaders,<br />transformer les organisations.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">ICF</span>
                <span className="text-white/30">·</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">EMCC</span>
                <span className="text-white/30">·</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Certifié</span>
              </div>
            </div>

            {/* Col 2 — Accompagnements */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Accompagnements</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Coaching de dirigeants", href: "/coaching-dirigeants" },
                  { label: "Coaching managérial", href: "/coaching-managers" },
                  { label: "Coaching individuel", href: "/coaching-salaries" },
                  { label: "Coaching d'équipe", href: "/coaching-equipes" },
                  { label: "Coaching CODIR/COMEX", href: "/coaching-equipes" },
                  { label: "Coaching de transition", href: "/coaching-dirigeants" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — À propos */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">À propos</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Notre méthode", href: "/methode" },
                  { label: "Nos coachs", href: "/coachs" },
                  { label: "À propos", href: "/a-propos" },
                  { label: "Témoignages", href: "/temoignages" },
                  { label: "Carrières", href: "/contact" },
                  { label: "Presse", href: "/a-propos" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Ressources */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Ressources</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Blog & Articles", href: "/blog" },
                  { label: "Études de cas", href: "/temoignages" },
                  { label: "Livre blanc gratuit", href: "/diagnostic" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Diagnostic offert", href: "/diagnostic" },
                  { label: "Tarifs", href: "/tarifs" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5 — Contact + Newsletter */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Contact</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-sm text-white/70">12 avenue Montaigne<br />75008 Paris</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={14} className="text-gold shrink-0" />
                  <a href="tel:+33142000000" className="text-sm text-white/70 hover:text-gold transition-colors">
                    +33 1 42 00 00 00
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={14} className="text-gold shrink-0" />
                  <a href="mailto:contact@nexytal-coaching.fr" className="text-sm text-white/70 hover:text-gold transition-colors">
                    contact@nexytal-coaching.fr
                  </a>
                </li>
              </ul>

              {/* Newsletter */}
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Newsletter</p>
              {subscribed ? (
                <p className="text-sm text-sage">Merci pour votre inscription !</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold"
                  />
                  <button type="submit" className="bg-gold hover:bg-[#b8913e] text-white px-3 py-2 rounded transition-colors">
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
              <span>© 2026 Nexytal Coaching. Tous droits réservés.</span>
              {[
                { label: "Mentions légales", href: "/mentions-legales" },
                { label: "CGV", href: "/cgv" },
                { label: "Confidentialité", href: "/confidentialite" },
                { label: "Charte déontologique", href: "/charte" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
