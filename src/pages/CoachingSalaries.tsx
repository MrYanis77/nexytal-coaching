import { fadeUp } from "@/lib/animations";
/* ==========================================================
   COACHING SALARIÉS — Nexytal Coaching
   ========================================================== */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";


export default function CoachingSalaries() {
  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="container relative">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Coaching individuel</motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white max-w-2xl mb-5 leading-tight">
              Révéler le potentiel de chaque collaborateur
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl mb-8">
              Un accompagnement court et ciblé pour tout salarié confronté à un défi professionnel. Financé par l'entreprise.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">Demander un devis entreprise <ArrowRight size={16} /></Link>
              <Link href="/diagnostic" className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white px-6 py-3 rounded-md text-sm font-medium transition-colors">
                Diagnostic gratuit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="section-padding bg-cream">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Situations accompagnées</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Dans quelles situations intervenir ?</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🚀", label: "Prise de poste" },
                { icon: "🧘", label: "Gestion du stress" },
                { icon: "💪", label: "Confiance en soi" },
                { icon: "💬", label: "Communication" },
                { icon: "⏰", label: "Gestion du temps" },
                { icon: "🔄", label: "Reconversion interne" },
                { icon: "👶", label: "Retour congé maternité" },
                { icon: "⚖️", label: "Équilibre vie pro/perso" },
              ].map((item, i) => (
                <motion.div key={item.label} variants={fadeUp} custom={i} className="premium-card p-5 text-center">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <p className="text-sm font-semibold text-navy">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Format flash */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Format flash</motion.p>
              <motion.h2 variants={fadeUp} className="font-fraunces text-3xl font-bold text-navy mb-5">3 à 6 séances pour un impact immédiat</motion.h2>
              <motion.ul variants={fadeUp} className="space-y-3">
                {[
                  "3 à 6 séances de 1h, en visio ou présentiel",
                  "Coach dédié, disponible entre les séances",
                  "Objectifs définis dès la première séance",
                  "Bilan de fin de parcours avec recommandations",
                  "Financement entreprise ou OPCO",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-sage shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="mt-6 p-5 bg-gold/5 border border-gold/20 rounded-xl">
                <p className="text-sm font-semibold text-navy mb-1">Tarif transparent</p>
                <p className="text-2xl font-fraunces font-bold text-gold">À partir de 1 500 € HT</p>
                <p className="text-xs text-gray-500 mt-1">pour 6 séances — éligible OPCO</p>
              </motion.div>
            </motion.div>

            {/* Pour les DRH */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-navy rounded-2xl p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Pour les DRH</p>
                <h3 className="font-fraunces text-xl font-bold mb-5">Coaching vs Formation classique</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-white/60 font-medium">Critère</th>
                        <th className="text-center py-2 text-gold font-semibold">Coaching</th>
                        <th className="text-center py-2 text-white/60 font-medium">Formation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        ["Personnalisation", "✓ Totale", "Partielle"],
                        ["Impact durable", "✓ Fort", "Modéré"],
                        ["Mesure ROI", "✓ Précise", "Difficile"],
                        ["Confidentialité", "✓ Absolue", "Collective"],
                        ["Délai résultats", "✓ Rapide", "Long terme"],
                      ].map(([crit, coaching, formation]) => (
                        <tr key={crit}>
                          <td className="py-2.5 text-white/70">{crit}</td>
                          <td className="py-2.5 text-center text-green-400 font-medium">{coaching}</td>
                          <td className="py-2.5 text-center text-white/40">{formation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Confidentialité */}
      <section className="py-16 bg-sage/10">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto text-center md:text-left">
            <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center shrink-0">
              <Shield size={28} className="text-white" />
            </div>
            <div>
              <h3 className="font-fraunces text-xl font-bold text-navy mb-2">Confidentialité garantie</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Aucune information échangée lors des séances n'est transmise à votre employeur. Le secret professionnel est un pilier absolu de notre éthique, conforme à la charte ICF. Vous pouvez vous exprimer librement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container text-center">
          <h2 className="font-fraunces text-3xl font-bold text-white mb-4">Investissez dans le potentiel de vos collaborateurs</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">Demandez un devis personnalisé pour votre entreprise.</p>
          <Link href="/contact" className="btn-gold text-base px-8 py-3.5">
            Demander un devis entreprise <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
