import { fadeUp } from "@/lib/animations";
/* ==========================================================
   TÉMOIGNAGES — Nexytal Coaching
   ========================================================== */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, Quote } from "lucide-react";


const testimonials = [
  {
    name: "Isabelle C.", role: "PDG, Groupe Santé", stars: 5, category: "Dirigeant",
    quote: "Nexytal Coaching m'a permis de sortir d'une impasse stratégique dans laquelle j'étais depuis 18 mois. En 6 séances, j'avais retrouvé ma clarté et ma confiance. Mon coach a su poser les bonnes questions au bon moment.",
    result: "Réorganisation réussie, +25% de performance d'équipe",
  },
  {
    name: "Marc T.", role: "Directeur Commercial, Groupe Tech", stars: 5, category: "Manager",
    quote: "En 4 mois, j'ai complètement transformé ma relation à mon équipe. Je suis passé d'un management directif à un leadership inspirant. Les résultats ont suivi immédiatement : moins de turnover, plus d'engagement.",
    result: "Turnover réduit de 60%, satisfaction équipe +40%",
  },
  {
    name: "Sophie M.", role: "DRH, PME Industrielle", stars: 5, category: "Équipe",
    quote: "Le coaching de notre CODIR a été une révélation. En 6 mois, nous avons transformé des tensions paralysantes en une dynamique collective puissante. Notre prise de décision est devenue plus rapide et plus alignée.",
    result: "Décisions 3x plus rapides, conflits -70%",
  },
  {
    name: "Pierre L.", role: "Directeur Général, Scale-up", stars: 5, category: "Dirigeant",
    quote: "J'étais sceptique au départ. Aujourd'hui, je recommande le coaching à tous les dirigeants que je connais. C'est l'investissement le plus rentable que j'ai fait pour mon développement professionnel.",
    result: "Levée de fonds réussie, équipe x3 en 12 mois",
  },
  {
    name: "Marie-Anne F.", role: "Responsable RH, Banque", stars: 5, category: "Manager",
    quote: "Le coaching de prise de poste m'a été indispensable. Arriver dans un nouveau contexte avec un coach à mes côtés m'a permis d'éviter de nombreux écueils et de m'imposer rapidement comme une leader respectée.",
    result: "Intégration réussie en 3 mois vs 9 mois habituellement",
  },
  {
    name: "Thomas B.", role: "CEO, Startup FinTech", stars: 5, category: "Dirigeant",
    quote: "La solitude du dirigeant est réelle. Avoir un espace confidentiel pour réfléchir à voix haute avec un professionnel expérimenté est précieux. Mon coach m'a aidé à prendre des décisions difficiles avec plus de sérénité.",
    result: "Pivot stratégique réussi, CA x2 en 18 mois",
  },
  {
    name: "Nathalie V.", role: "Manager de proximité, Retail", stars: 5, category: "Manager",
    quote: "Je traversais une période difficile avec mon équipe. Le coaching m'a donné les outils et la confiance pour gérer les conflits et recréer une cohésion. Aujourd'hui, mon équipe est la plus performante du groupe.",
    result: "Meilleure équipe du groupe, objectifs dépassés de 30%",
  },
  {
    name: "Laurent D.", role: "Directeur Opérations, Industrie", stars: 5, category: "Dirigeant",
    quote: "Le programme COLA est remarquablement structuré. Chaque phase m'a apporté des prises de conscience profondes. Je suis sorti du coaching avec une vision claire, un plan d'action concret et une énergie renouvelée.",
    result: "Transformation organisationnelle réussie, économies de 2M€",
  },
  {
    name: "Camille R.", role: "Chef de projet, ESN", stars: 5, category: "Salarié",
    quote: "Je n'aurais jamais pensé que 6 séances de coaching pouvaient changer autant ma façon de travailler. J'ai appris à mieux communiquer, à gérer mon stress et à m'affirmer. Mon manager a remarqué la différence.",
    result: "Promotion obtenue 6 mois après le coaching",
  },
];

const stats = [
  { value: "98%", label: "Taux de satisfaction" },
  { value: "500+", label: "Dirigeants accompagnés" },
  { value: "4,9/5", label: "Note moyenne" },
  { value: "87%", label: "Recommandent Nexytal" },
];

export default function Temoignages() {
  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 bg-navy">
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Témoignages</motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white mb-5">
              Ce que disent nos clients
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl mx-auto">
              Des résultats concrets, mesurables, racontés par ceux qui les ont vécus.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-cream border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-fraunces text-4xl font-bold text-navy mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="break-inside-avoid premium-card p-6 mb-5"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={13} className="text-gold fill-gold" />
                  ))}
                </div>
                {/* Quote */}
                <Quote size={20} className="text-gold/30 mb-2" />
                <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">{t.quote}</p>
                {/* Résultat */}
                <div className="bg-sage/5 border border-sage/20 rounded-lg px-3 py-2 mb-4">
                  <p className="text-xs font-semibold text-sage">Résultat : {t.result}</p>
                </div>
                {/* Auteur */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-navy to-sage rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                  <span className="ml-auto text-xs bg-navy/5 text-navy px-2 py-0.5 rounded-full">{t.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vidéo témoignage */}
      <section className="section-padding bg-cream">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Témoignage vidéo</p>
              <h2 className="font-fraunces text-2xl font-bold text-navy">Isabelle partage son expérience</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="aspect-video bg-navy rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-gold/30 transition-colors">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-14 border-transparent border-l-gold ml-1" style={{ borderLeftColor: "#C9A24B" }} />
                </div>
                <p className="text-white/60 text-sm">Témoignage vidéo — 3 minutes</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container text-center">
          <h2 className="font-fraunces text-3xl font-bold text-white mb-4">Rejoignez nos clients satisfaits</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">Diagnostic offert de 30 minutes. Confidentiel, sans engagement.</p>
          <Link href="/diagnostic" className="btn-gold text-base px-8 py-3.5">
            Réserver mon diagnostic offert <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
