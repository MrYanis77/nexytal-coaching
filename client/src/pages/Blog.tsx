import { fadeUp } from "@/lib/animations";
/* ==========================================================
   BLOG — Nexytal Coaching
   ========================================================== */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { useState } from "react";


const articles = [
  {
    id: 1,
    title: "La solitude du dirigeant : mythe ou réalité ?",
    excerpt: "Être au sommet d'une organisation est souvent perçu comme une position de pouvoir et de privilège. Mais derrière les apparences, nombreux sont les dirigeants qui vivent une solitude profonde...",
    category: "Leadership",
    readTime: "8 min",
    date: "15 mai 2026",
    featured: true,
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
  {
    id: 2,
    title: "5 signes que vous avez besoin d'un coach",
    excerpt: "Comment savoir si le coaching est fait pour vous ? Voici cinq indicateurs qui montrent qu'un accompagnement professionnel pourrait transformer votre leadership.",
    category: "Coaching",
    readTime: "5 min",
    date: "8 mai 2026",
    featured: false,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    id: 3,
    title: "Neurosciences et coaching : ce que la science nous apprend",
    excerpt: "Les avancées en neurosciences révolutionnent notre compréhension du changement comportemental. Comment ces découvertes transforment-elles la pratique du coaching ?",
    category: "Méthode",
    readTime: "10 min",
    date: "1 mai 2026",
    featured: false,
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
  },
  {
    id: 4,
    title: "Manager en 2026 : les compétences qui font la différence",
    excerpt: "Le management a profondément évolué ces dernières années. Quelles sont les compétences indispensables pour les managers d'aujourd'hui et de demain ?",
    category: "Management",
    readTime: "7 min",
    date: "22 avril 2026",
    featured: false,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    id: 5,
    title: "Prévenir le burn-out des dirigeants : guide pratique",
    excerpt: "Le burn-out touche de plus en plus les dirigeants. Comment le prévenir, le détecter et y faire face ? Un guide complet basé sur notre expérience terrain.",
    category: "Bien-être",
    readTime: "12 min",
    date: "15 avril 2026",
    featured: false,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    id: 6,
    title: "Coaching d'équipe vs team building : quelle différence ?",
    excerpt: "On confond souvent coaching d'équipe et team building. Pourtant, ces deux approches sont fondamentalement différentes dans leurs objectifs et leurs résultats.",
    category: "Équipe",
    readTime: "6 min",
    date: "8 avril 2026",
    featured: false,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: 7,
    title: "Les 100 premiers jours : réussir sa prise de poste",
    excerpt: "La prise de poste est un moment critique dans la carrière d'un manager ou d'un dirigeant. Comment maximiser ses chances de succès dans cette période décisive ?",
    category: "Management",
    readTime: "9 min",
    date: "1 avril 2026",
    featured: false,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 8,
    title: "Intelligence émotionnelle : le secret des grands leaders",
    excerpt: "L'intelligence émotionnelle est désormais reconnue comme l'un des facteurs les plus prédictifs du succès en leadership. Comment la développer ?",
    category: "Leadership",
    readTime: "8 min",
    date: "25 mars 2026",
    featured: false,
    img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
  },
];

const categories = ["Tous", "Leadership", "Coaching", "Management", "Méthode", "Équipe", "Bien-être"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = activeCategory === "Tous" ? articles : articles.filter((a) => a.category === activeCategory);
  const featured = filtered.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 bg-navy">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Ressources & Insights</motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white max-w-2xl mb-5">
              Le blog du leadership
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl">
              Insights, méthodes et témoignages pour les dirigeants et managers qui veulent progresser.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-6 bg-cream border-b border-gray-200 sticky top-16 lg:top-20 z-30">
        <div className="container">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 rounded-full border transition-all font-medium ${
                  activeCategory === cat
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-gray-600 border-gray-200 hover:border-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          {/* Article featured */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 mb-12 premium-card overflow-hidden"
            >
              <div className="h-64 lg:h-auto overflow-hidden">
                <img src={featured.img} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-gold/10 text-gold font-semibold px-2.5 py-1 rounded-full">{featured.category}</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={11} />{featured.readTime}</span>
                </div>
                <h2 className="font-fraunces text-2xl font-bold text-navy mb-3 leading-tight">{featured.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{featured.date}</span>
                  <button className="text-sm font-semibold text-navy hover:text-gold transition-colors flex items-center gap-1.5">
                    Lire l'article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grille articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="premium-card overflow-hidden flex flex-col"
              >
                <div className="h-44 overflow-hidden">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-xs bg-navy/5 text-navy font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Tag size={10} />{article.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={10} />{article.readTime}</span>
                  </div>
                  <h3 className="font-fraunces font-bold text-navy mb-2 leading-tight text-base">{article.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{article.date}</span>
                    <button className="text-xs font-semibold text-navy hover:text-gold transition-colors flex items-center gap-1">
                      Lire <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy">
        <div className="container max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Newsletter</p>
            <h2 className="font-fraunces text-2xl font-bold text-white mb-3">Insights leadership chaque semaine</h2>
            <p className="text-white/70 text-sm mb-6">Rejoignez 3 000+ dirigeants qui reçoivent nos insights exclusifs.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold"
              />
              <button className="btn-gold px-5 py-2.5 text-sm">S'abonner</button>
            </div>
            <p className="text-xs text-white/40 mt-3">Désinscription à tout moment. Pas de spam.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
