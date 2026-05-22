import { fadeUp } from "@/lib/animations";
/* ==========================================================
   COACHING MANAGERS — Nexytal Coaching
   ========================================================== */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

const MANAGER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/TA7k9beZLMnzqYhK9JuijT/coaching-manager-UguArdaEMjdbJCSUpDFaez.webp";


export default function CoachingManagers() {
  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <img src={MANAGER_IMG} alt="Coaching managérial" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container relative py-20">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Coaching managérial</motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white max-w-2xl mb-5 leading-tight">
              Devenir le manager qui inspire ses équipes
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl mb-8">
              Développez votre leadership authentique, renforcez votre posture et mobilisez vos collaborateurs vers l'excellence.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/diagnostic" className="btn-gold">Diagnostic offert <ArrowRight size={16} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cible */}
      <section className="section-padding bg-cream">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Public cible</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Pour quel profil ?</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Managers de proximité", "Managers de managers", "Futurs managers", "Prise de poste"].map((p, i) => (
                <motion.div key={p} variants={fadeUp} custom={i} className="premium-card p-5 text-center">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gold font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-sm font-semibold text-navy">{p}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enjeux */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Domaines d'intervention</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Les enjeux managériaux que nous traitons</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🌟", title: "Leadership authentique", desc: "Développer un style de management aligné avec vos valeurs et votre personnalité." },
                { icon: "💬", title: "Communication assertive", desc: "Exprimer vos attentes clairement, gérer les situations difficiles avec diplomatie." },
                { icon: "🤝", title: "Gestion des conflits", desc: "Transformer les tensions en opportunités de croissance pour l'équipe." },
                { icon: "🔥", title: "Motivation d'équipe", desc: "Identifier les leviers de motivation individuels et collectifs." },
                { icon: "🔄", title: "Conduite du changement", desc: "Accompagner vos équipes dans les transformations organisationnelles." },
                { icon: "🎯", title: "Posture managériale", desc: "Trouver le juste équilibre entre proximité et autorité." },
              ].map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} custom={i} className="premium-card p-6">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-fraunces text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programme */}
      <section className="section-padding bg-navy">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Programme</p>
              <h2 className="font-fraunces text-3xl font-bold text-white">8 séances sur 4 mois</h2>
              <p className="text-white/60 mt-3">Un programme structuré pour une transformation managériale durable.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { phase: "Mois 1", title: "Diagnostic & Objectifs", desc: "Évaluation DISC/MBTI, 360° feedback, définition des objectifs." },
                { phase: "Mois 2", title: "Expérimentation", desc: "Nouvelles pratiques managériales, mises en situation, débriefing." },
                { phase: "Mois 3", title: "Ancrage", desc: "Consolidation des acquis, gestion des situations complexes." },
                { phase: "Mois 4", title: "Autonomie", desc: "Bilan, plan d'action autonome, suivi post-coaching." },
              ].map((p, i) => (
                <motion.div key={p.phase} variants={fadeUp} custom={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">{p.phase}</p>
                  <h3 className="font-fraunces text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-white/60">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prise de poste */}
      <section className="section-padding bg-cream">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Offre spéciale</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Coaching de prise de poste</h2>
              <p className="text-gray-600 mt-3 max-w-lg mx-auto">Les 100 premiers jours sont décisifs. Nous vous accompagnons pour réussir votre prise de fonction.</p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { period: "J1–J30", title: "Écoute & Observation", desc: "Cartographier les enjeux, les acteurs clés et la culture." },
                { period: "J31–J60", title: "Diagnostic & Vision", desc: "Formuler votre vision, identifier les quick wins." },
                { period: "J61–J90", title: "Action & Légitimité", desc: "Premiers chantiers, communication de votre style." },
                { period: "J91–J100", title: "Bilan & Ancrage", desc: "Consolidation, ajustements et plan à 6 mois." },
              ].map((step, i) => (
                <motion.div key={step.period} variants={fadeUp} custom={i} className="premium-card p-5">
                  <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">{step.period}</p>
                  <h3 className="font-fraunces text-base font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outils */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Nos outils</motion.p>
              <motion.h2 variants={fadeUp} className="font-fraunces text-3xl font-bold text-navy mb-6">Des outils validés scientifiquement</motion.h2>
              <motion.ul variants={fadeUp} className="space-y-4">
                {[
                  { tool: "Profil DISC", desc: "Comprendre votre style comportemental et celui de vos collaborateurs." },
                  { tool: "MBTI", desc: "Explorer vos préférences psychologiques et votre mode de fonctionnement." },
                  { tool: "360° Feedback", desc: "Recueillir les perceptions de votre entourage professionnel." },
                  { tool: "Format individuel, collectif ou hybride", desc: "Adapter le dispositif à vos contraintes et objectifs." },
                ].map((item) => (
                  <li key={item.tool} className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-sage mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-navy text-sm">{item.tool}</span>
                      <span className="text-gray-600 text-sm"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-navy rounded-2xl p-8 text-white">
                <h3 className="font-fraunces text-xl font-bold mb-5">Témoignage</h3>
                <p className="text-white/80 italic leading-relaxed mb-5">
                  "En 4 mois, j'ai complètement transformé ma relation à mon équipe. Je suis passé d'un management directif à un leadership inspirant. Les résultats ont suivi immédiatement."
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">Marc T.</p>
                  <p className="text-white/50 text-sm">Directeur Commercial, Groupe Tech</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container text-center">
          <h2 className="font-fraunces text-3xl font-bold text-white mb-4">Prêt à devenir le manager qui inspire ?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">Diagnostic offert de 30 minutes. Sans engagement.</p>
          <Link href="/diagnostic" className="btn-gold text-base px-8 py-3.5">
            Réserver mon diagnostic offert <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
