import { fadeUp } from "@/lib/animations";
/* ==========================================================
   MÉTHODE — Nexytal Coaching
   ========================================================== */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const ABSTRACT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/TA7k9beZLMnzqYhK9JuijT/methode-abstract-LkEiArZpbUq3MFe5kDfsKq.webp";


const roiData = [
  { mois: "M0", leadership: 40, communication: 35, decisions: 45 },
  { mois: "M1", leadership: 48, communication: 42, decisions: 50 },
  { mois: "M2", leadership: 55, communication: 52, decisions: 58 },
  { mois: "M3", leadership: 65, communication: 62, decisions: 68 },
  { mois: "M4", leadership: 73, communication: 70, decisions: 75 },
  { mois: "M5", leadership: 82, communication: 79, decisions: 83 },
  { mois: "M6", leadership: 88, communication: 85, decisions: 90 },
];

export default function Methode() {
  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <img src={ABSTRACT_IMG} alt="Notre méthode" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container relative py-20">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Notre approche</motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white max-w-2xl mb-5 leading-tight">
              L'alliance entre rigueur scientifique et profondeur humaine
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl">
              Une méthode propriétaire fondée sur les neurosciences, la psychologie positive et 20 ans d'expérience terrain.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4 Piliers */}
      <section className="section-padding bg-cream">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Nos fondements</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">4 piliers scientifiques</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: "🧠", title: "Neurosciences cognitives", desc: "Comprendre les mécanismes cérébraux pour faciliter l'apprentissage et le changement durable." },
                { icon: "🔗", title: "Approche systémique", desc: "Analyser les interactions entre l'individu, son équipe et son organisation pour agir sur les leviers pertinents." },
                { icon: "✨", title: "Psychologie positive", desc: "S'appuyer sur les forces et ressources plutôt que sur les déficits pour générer un élan durable." },
                { icon: "🪞", title: "Pratique réflexive", desc: "Développer la capacité d'auto-observation et d'apprentissage continu à partir de l'expérience." },
              ].map((pilier, i) => (
                <motion.div key={pilier.title} variants={fadeUp} custom={i} className="premium-card p-7 text-center">
                  <span className="text-4xl mb-4 block">{pilier.icon}</span>
                  <h3 className="font-fraunces text-lg font-bold text-navy mb-3">{pilier.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pilier.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parcours type */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Le parcours coaché</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">6 étapes pour une transformation complète</h2>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { num: "01", title: "Diagnostic gratuit", desc: "Entretien de 30 minutes pour évaluer votre situation, vos enjeux et l'adéquation avec notre approche. Sans engagement." },
                { num: "02", title: "Tripartite client/coach/manager", desc: "Réunion à trois pour aligner les attentes, définir les objectifs et établir les règles de confidentialité." },
                { num: "03", title: "Contrat d'objectifs", desc: "Formalisation des objectifs SMART, des indicateurs de succès et du cadre de l'accompagnement." },
                { num: "04", title: "Séances de coaching", desc: "Sessions régulières avec votre coach dédié, utilisation des outils propriétaires et exercices inter-séances." },
                { num: "05", title: "Évaluation mi-parcours", desc: "Bilan intermédiaire pour ajuster les objectifs et célébrer les progrès réalisés." },
                { num: "06", title: "Bilan & ancrage", desc: "Évaluation finale, plan d'action autonome et recommandations pour pérenniser les acquis." },
              ].map((step, i) => (
                <motion.div key={step.num} variants={fadeUp} custom={i} className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center shrink-0">
                    <span className="font-fraunces font-bold text-gold text-sm">{step.num}</span>
                  </div>
                  <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                    <h3 className="font-fraunces text-lg font-bold text-navy mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outils propriétaires */}
      <section className="section-padding bg-navy">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Nos outils</p>
              <h2 className="font-fraunces text-3xl font-bold text-white">Outils propriétaires Nexytal</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: "📊", title: "Assessment de personnalité", desc: "Évaluation multidimensionnelle combinant DISC, MBTI et valeurs professionnelles." },
                { icon: "🔄", title: "360° Leadership", desc: "Recueil structuré des perceptions de votre entourage professionnel (N+1, pairs, N-1)." },
                { icon: "📈", title: "Baromètre d'impact", desc: "Mesure régulière de l'évolution de vos compétences clés tout au long du parcours." },
                { icon: "🗺️", title: "Cartographie systémique", desc: "Visualisation de vos relations professionnelles et des dynamiques d'influence." },
              ].map((outil, i) => (
                <motion.div key={outil.title} variants={fadeUp} custom={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <span className="text-3xl mb-4 block">{outil.icon}</span>
                  <h3 className="font-fraunces text-lg font-bold text-white mb-2">{outil.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{outil.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Éthique */}
      <section className="section-padding bg-cream">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Notre éthique</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Un cadre déontologique rigoureux</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Charte ICF", desc: "Tous nos coachs respectent le Code de déontologie de l'International Coaching Federation, référence mondiale du coaching professionnel." },
                { title: "Supervision régulière", desc: "Chaque coach bénéficie d'une supervision mensuelle pour maintenir la qualité de sa pratique et prévenir les risques éthiques." },
                { title: "Confidentialité absolue", desc: "Le secret professionnel est garanti. Aucune information échangée en séance n'est transmise à un tiers sans accord explicite du coaché." },
                { title: "Posture non-directive", desc: "Le coach ne donne pas de conseils ni de solutions. Il accompagne le coaché à trouver ses propres réponses et à développer son autonomie." },
              ].map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} custom={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 gold-border-card">
                  <h3 className="font-fraunces text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Chart */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Mesure du ROI</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Évolution typique des compétences sur 6 mois</h2>
              <p className="text-gray-600 mt-3 max-w-lg mx-auto">Données issues de nos bilans clients — score sur 100</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-gray-50 rounded-2xl p-8">
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="mois" tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <YAxis domain={[30, 100]} tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#0A2540", border: "none", borderRadius: "8px", color: "white" }}
                    labelStyle={{ color: "#C9A24B", fontWeight: "bold" }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="leadership" stroke="#0A2540" strokeWidth={2.5} dot={{ fill: "#0A2540", r: 4 }} name="Leadership" />
                  <Line type="monotone" dataKey="communication" stroke="#C9A24B" strokeWidth={2.5} dot={{ fill: "#C9A24B", r: 4 }} name="Communication" />
                  <Line type="monotone" dataKey="decisions" stroke="#6B9080" strokeWidth={2.5} dot={{ fill: "#6B9080", r: 4 }} name="Prise de décision" />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container text-center">
          <h2 className="font-fraunces text-3xl font-bold text-white mb-4">Découvrez comment notre méthode peut vous transformer</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">Diagnostic offert de 30 minutes avec l'un de nos coachs certifiés.</p>
          <Link href="/diagnostic" className="btn-gold text-base px-8 py-3.5">
            Réserver mon diagnostic offert <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
