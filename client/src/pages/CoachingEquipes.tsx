import { fadeUp } from "@/lib/animations";
/* ==========================================================
   COACHING ÉQUIPES — Nexytal Coaching
   ========================================================== */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/TA7k9beZLMnzqYhK9JuijT/coaching-team-KsN8KHwbijNPLDzRHTiqMP.webp";


export default function CoachingEquipes() {
  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <img src={TEAM_IMG} alt="Coaching d'équipe" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container relative py-20">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Coaching d'équipe</motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white max-w-2xl mb-5 leading-tight">
              Quand le collectif dépasse la somme des individus
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl mb-8">
              Transformez la dynamique de vos équipes dirigeantes et opérationnelles pour des performances collectives exceptionnelles.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="btn-gold">Organiser un atelier découverte <ArrowRight size={16} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team building vs Coaching */}
      <section className="section-padding bg-cream">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Différenciation</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Team building vs Coaching d'équipe</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto">
                <thead>
                  <tr className="border-b-2 border-navy/10">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Critère</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gold bg-gold/5 rounded-t-lg">Coaching d'équipe</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-400">Team Building</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Objectif", "Transformation profonde", "Cohésion ponctuelle"],
                    ["Durée", "3 à 6 mois", "1 à 2 jours"],
                    ["Impact", "Durable et mesurable", "Temporaire"],
                    ["Approche", "Systémique & individuelle", "Collective uniquement"],
                    ["ROI", "Élevé et chiffrable", "Difficile à mesurer"],
                  ].map(([crit, coaching, tb]) => (
                    <tr key={crit}>
                      <td className="py-3 px-4 text-sm text-gray-600 font-medium">{crit}</td>
                      <td className="py-3 px-4 text-sm text-center text-navy font-semibold bg-gold/5">{coaching}</td>
                      <td className="py-3 px-4 text-sm text-center text-gray-400">{tb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3 Offres */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Nos offres</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Trois dispositifs sur mesure</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Coaching CODIR/COMEX",
                  desc: "Renforcer la cohésion, aligner les visions et améliorer les prises de décision collectives au plus haut niveau.",
                  features: ["Diagnostic systémique", "Ateliers de vision stratégique", "Séances collectives mensuelles"],
                  duration: "6 mois",
                },
                {
                  num: "02",
                  title: "Équipes opérationnelles",
                  desc: "Améliorer la collaboration, résoudre les tensions et booster la performance des équipes terrain.",
                  features: ["Cartographie des dynamiques", "Ateliers de régulation", "Suivi individuel des leaders"],
                  duration: "3 à 4 mois",
                  featured: true,
                },
                {
                  num: "03",
                  title: "Séminaires de cohésion",
                  desc: "Des séminaires stratégiques pour aligner vision, valeurs et modes de fonctionnement collectif.",
                  features: ["1 à 2 jours en résidentiel", "Facilitation experte", "Plan d'action collectif"],
                  duration: "1 à 2 jours",
                },
              ].map((offer, i) => (
                <motion.div key={offer.num} variants={fadeUp} custom={i} className={`premium-card p-7 ${offer.featured ? "ring-2 ring-gold" : ""}`}>
                  {offer.featured && (
                    <span className="inline-block bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Le plus demandé</span>
                  )}
                  <p className="text-3xl font-fraunces font-bold text-gold/20 mb-2">{offer.num}</p>
                  <h3 className="font-fraunces text-xl font-bold text-navy mb-3">{offer.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{offer.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {offer.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-semibold text-gold uppercase tracking-wider">Durée : {offer.duration}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Méthode 5 étapes */}
      <section className="section-padding bg-navy">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Notre méthode</p>
              <h2 className="font-fraunces text-3xl font-bold text-white">5 étapes pour transformer votre équipe</h2>
            </motion.div>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { num: "01", title: "Diagnostic 360°", desc: "Évaluation des dynamiques, tensions et potentiels de l'équipe." },
                { num: "02", title: "Atelier de vision", desc: "Co-construction d'une vision partagée et d'un mode de fonctionnement collectif." },
                { num: "03", title: "Séances collectives", desc: "Sessions régulières de travail sur les enjeux identifiés." },
                { num: "04", title: "Suivi individuel", desc: "Accompagnement des leaders clés pour ancrer les changements." },
                { num: "05", title: "Bilan d'ancrage", desc: "Évaluation des progrès et plan d'autonomie collective." },
              ].map((step, i) => (
                <motion.div key={step.num} variants={fadeUp} custom={i} className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-xl p-5">
                  <span className="font-fraunces font-bold text-gold text-2xl shrink-0">{step.num}</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-white/60">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cas client */}
      <section className="section-padding bg-cream">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Étude de cas</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Un cas client anonymisé</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">Contexte</p>
                  <p className="text-sm text-gray-600">PME industrielle, 250 salariés. CODIR de 8 personnes en tension après une fusion. Décisions bloquées, conflits interpersonnels.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">Problématique</p>
                  <p className="text-sm text-gray-600">Manque de confiance mutuelle, visions divergentes, communication défaillante entre les membres du CODIR.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">Accompagnement</p>
                  <p className="text-sm text-gray-600">6 mois de coaching d'équipe : 2 séminaires résidentiels + 8 séances collectives + suivi individuel des 3 membres clés.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">Résultats</p>
                  <ul className="space-y-1">
                    {["+45% de satisfaction interne", "-60% de conflits décisionnels", "Chiffre d'affaires +18% en 12 mois"].map((r) => (
                      <li key={r} className="text-sm text-navy font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-sage rounded-full" />{r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container text-center">
          <h2 className="font-fraunces text-3xl font-bold text-white mb-4">Prêt à transformer votre équipe ?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">Organisez un atelier découverte gratuit de 2h avec votre équipe.</p>
          <Link href="/contact" className="btn-gold text-base px-8 py-3.5">
            Organiser un atelier découverte <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
