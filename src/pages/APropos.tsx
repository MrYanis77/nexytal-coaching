import { fadeUp } from "@/lib/animations";
/* ==========================================================
   À PROPOS — Nexytal Coaching
   ========================================================== */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";


const timeline = [
  { year: "2015", title: "Création de Nexytal Coaching", desc: "Fondation du cabinet par une équipe de coachs certifiés ICF, avec une vision : démocratiser l'excellence du coaching exécutif." },
  { year: "2018", title: "50 dirigeants accompagnés", desc: "Première étape symbolique. Notre réputation se construit sur les résultats mesurables et la satisfaction de nos clients." },
  { year: "2021", title: "Certification Qualiopi", desc: "Obtention de la certification qualité Qualiopi, gage de rigueur pédagogique et d'éligibilité aux financements OPCO." },
  { year: "2024", title: "Ouverture bureau Lyon", desc: "Extension de notre présence en région Auvergne-Rhône-Alpes pour accompagner les dirigeants lyonnais." },
  { year: "2026", title: "Lancement plateforme digitale", desc: "Déploiement de notre plateforme de coaching digital pour étendre notre impact à l'échelle nationale." },
];

export default function APropos() {
  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 bg-navy">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">À propos</motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white max-w-2xl mb-5 leading-tight">
              Une vision exigeante de l'accompagnement
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl">
              Depuis 2015, Nexytal Coaching accompagne les leaders qui veulent transformer leur impact professionnel et personnel.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Histoire + Timeline */}
      <section className="section-padding bg-cream">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Notre histoire</p>
                <h2 className="font-fraunces text-3xl font-bold text-navy mb-5">Nés de la conviction que chaque leader mérite un accompagnement d'exception</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nexytal Coaching est né d'une conviction profonde : les dirigeants et managers qui portent la responsabilité de guider des organisations et des équipes méritent un accompagnement à la hauteur de leurs enjeux.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fondé par des praticiens ayant eux-mêmes exercé des responsabilités de direction, notre cabinet allie expertise terrain et rigueur méthodologique pour offrir un coaching véritablement transformateur.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Aujourd'hui, avec plus de 500 dirigeants accompagnés et 50 coachs certifiés, nous sommes l'un des cabinets de référence en coaching exécutif en France.
                </p>
              </div>
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <motion.div key={item.year} variants={fadeUp} custom={i} className="flex gap-5 pb-6 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center shrink-0">
                        <span className="text-gold font-bold text-xs">{item.year.slice(2)}</span>
                      </div>
                      {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-2" />}
                    </div>
                    <div className="pb-2">
                      <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">{item.year}</p>
                      <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Valeurs */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Notre identité</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Mission, Vision & Valeurs</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🎯", title: "Mission", content: "Révéler le potentiel des leaders et transformer les organisations en accompagnant chaque individu vers sa version la plus accomplie." },
                { icon: "🔭", title: "Vision", content: "Un monde professionnel où chaque dirigeant peut exercer son leadership avec clarté, sérénité et impact positif sur son organisation et la société." },
                { icon: "💎", title: "Valeurs", content: "Excellence · Confidentialité · Impact mesurable · Éthique · Humanisme · Innovation" },
              ].map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} custom={i} className="premium-card p-7 text-center">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-fraunces text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section-padding bg-navy">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Nos engagements</p>
              <h2 className="font-fraunces text-3xl font-bold text-white">4 piliers de notre promesse</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: "🏆", title: "Excellence", desc: "Coachs certifiés ICF PCC ou MCC, formation continue, supervision régulière." },
                { icon: "🔒", title: "Confidentialité", desc: "Secret professionnel absolu, aucune information transmise sans accord explicite." },
                { icon: "📊", title: "Impact mesurable", desc: "KPIs définis dès le départ, évaluation régulière, ROI démontré." },
                { icon: "⚖️", title: "Éthique", desc: "Charte ICF, posture non-directive, respect de l'autonomie du coaché." },
              ].map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} custom={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-fraunces text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="section-padding bg-cream">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Pourquoi nous choisir</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Nexytal vs autres approches</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="text-left py-4 px-5 text-sm font-semibold">Critère</th>
                    <th className="text-center py-4 px-5 text-sm font-semibold text-gold">Nexytal Coaching</th>
                    <th className="text-center py-4 px-5 text-sm font-semibold text-white/60">Cabinets traditionnels</th>
                    <th className="text-center py-4 px-5 text-sm font-semibold text-white/60">Coachs indépendants</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Certification ICF/EMCC", "✓ Tous nos coachs", "Variable", "Variable"],
                    ["Supervision des coachs", "✓ Mensuelle", "Rare", "Rare"],
                    ["Mesure du ROI", "✓ Systématique", "Occasionnelle", "Rare"],
                    ["Réseau de coachs", "✓ 50+ coachs", "Limité", "Solo"],
                    ["Approche digitale", "✓ Plateforme dédiée", "Absente", "Absente"],
                    ["Éligibilité OPCO", "✓ Qualiopi", "Variable", "Rare"],
                  ].map(([crit, nexytal, cabinet, indep]) => (
                    <tr key={crit} className="hover:bg-gray-50">
                      <td className="py-3.5 px-5 text-sm text-gray-700 font-medium">{crit}</td>
                      <td className="py-3.5 px-5 text-sm text-center text-green-600 font-semibold">{nexytal}</td>
                      <td className="py-3.5 px-5 text-sm text-center text-gray-400">{cabinet}</td>
                      <td className="py-3.5 px-5 text-sm text-center text-gray-400">{indep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reconnaissances */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Reconnaissances</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Ils parlent de nous</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {["Les Échos", "HBR France", "ICF", "EMCC", "Qualiopi"].map((name) => (
                <div key={name} className="flex items-center justify-center h-16 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-sm font-semibold text-gray-400">{name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container text-center">
          <h2 className="font-fraunces text-3xl font-bold text-white mb-4">Rejoignez les leaders qui ont choisi l'excellence</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">Diagnostic offert de 30 minutes. Confidentiel, sans engagement.</p>
          <Link href="/diagnostic" className="btn-gold text-base px-8 py-3.5">
            Réserver mon diagnostic offert <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
