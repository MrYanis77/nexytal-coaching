import { fadeUp } from "@/lib/animations";
/* ==========================================================
   COACHING DIRIGEANTS — Nexytal Coaching
   ========================================================== */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, ChevronDown, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/TA7k9beZLMnzqYhK9JuijT/hero-dirigeant-7ndgvxPJycrPJhWNURih9H.webp";


const faqs = [
  { q: "Quelle est la différence entre coaching et thérapie ?", a: "Le coaching se concentre sur le présent et l'avenir professionnel, sur l'action et la performance. La thérapie traite des problématiques passées et psychologiques. Nos coachs sont formés pour maintenir ce cadre et orienter vers un professionnel de santé si nécessaire." },
  { q: "La confidentialité est-elle vraiment garantie ?", a: "Absolument. Le secret professionnel est un pilier de notre éthique. Aucune information échangée en séance n'est partagée avec l'entreprise, même si c'est elle qui finance l'accompagnement. Nous respectons scrupuleusement la charte ICF." },
  { q: "Comment se déroule la première séance ?", a: "La première séance est un diagnostic offert de 30 minutes. Elle permet de clarifier votre situation, vos enjeux et d'évaluer l'adéquation avec notre approche. Sans engagement de votre part." },
  { q: "Peut-on combiner présentiel et visio ?", a: "Oui, le format hybride est notre option la plus choisie. Nous nous adaptons à vos contraintes d'agenda et de déplacement. Les séances en visio sont aussi efficaces que le présentiel." },
  { q: "Quels résultats puis-je espérer ?", a: "Les résultats varient selon les objectifs, mais nos clients rapportent en moyenne une amélioration significative de leur clarté décisionnelle, de leur leadership et de leur équilibre vie pro/perso dès les 3 premières séances." },
];

export default function CoachingDirigeants() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img src={HERO_IMG} alt="Coaching dirigeants" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container relative py-20">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Coaching de dirigeants
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white max-w-2xl mb-5 leading-tight">
              Sortir de la solitude du pouvoir
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl mb-8">
              Un accompagnement d'exception pour les dirigeants qui veulent aligner vision, performance et équilibre personnel.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/diagnostic" className="btn-gold">Diagnostic offert <ArrowRight size={16} /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white px-6 py-3 rounded-md text-sm font-medium transition-colors">
                Nous contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* À qui s'adresse */}
      <section className="section-padding bg-cream">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Public cible</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">À qui s'adresse cet accompagnement ?</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["PDG / CEO", "Directeurs Généraux", "Membres CODIR", "Membres COMEX", "Entrepreneurs", "Cadres en transition"].map((p, i) => (
                <motion.div key={p} variants={fadeUp} custom={i} className="premium-card p-5 text-center">
                  <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users size={18} className="text-navy" />
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
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Nos domaines d'intervention</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Les enjeux que nous traitons</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🧭", title: "Clarification stratégique", desc: "Retrouver le cap, aligner vision et actions, prioriser l'essentiel." },
                { icon: "🧠", title: "Gestion de la charge mentale", desc: "Libérer l'espace cognitif, gérer la pression et prévenir le burn-out." },
                { icon: "⚡", title: "Prise de décision", desc: "Décider avec plus de sérénité, d'efficacité et de discernement." },
                { icon: "🌟", title: "Leadership et influence", desc: "Renforcer votre impact, votre charisme et votre capacité à mobiliser." },
                { icon: "🔄", title: "Transformation & changement", desc: "Conduire le changement, gérer les résistances et embarquer les équipes." },
                { icon: "⚖️", title: "Équilibre vie pro/perso", desc: "Retrouver un équilibre durable sans sacrifier ni performance ni épanouissement." },
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

      {/* Programme COLA */}
      <section className="section-padding bg-navy">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Notre programme exclusif</p>
              <h2 className="font-fraunces text-3xl font-bold text-white">Le programme COLA</h2>
              <p className="text-white/60 mt-3 max-w-lg mx-auto">Une méthode propriétaire en 4 phases pour une transformation profonde et durable.</p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { letter: "C", title: "Conscience", desc: "Prise de conscience de vos patterns, croyances limitantes et ressources inexploitées.", duration: "Séances 1-3", livrables: "Cartographie personnelle" },
                { letter: "O", title: "Objectif", desc: "Co-construction d'objectifs SMART alignés avec vos valeurs et votre vision.", duration: "Séances 4-6", livrables: "Contrat d'objectifs" },
                { letter: "L", title: "Libération", desc: "Lever les freins, transformer les obstacles en leviers, expérimenter de nouveaux comportements.", duration: "Séances 7-10", livrables: "Plan d'action" },
                { letter: "A", title: "Action", desc: "Ancrage des nouveaux comportements, mesure des résultats et consolidation des acquis.", duration: "Séances 11-15", livrables: "Bilan & plan autonome" },
              ].map((phase, i) => (
                <motion.div key={phase.letter} variants={fadeUp} custom={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
                    <span className="font-fraunces font-bold text-white text-xl">{phase.letter}</span>
                  </div>
                  <h3 className="font-fraunces text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{phase.desc}</p>
                  <div className="border-t border-white/10 pt-3 space-y-1">
                    <p className="text-xs text-gold font-medium">{phase.duration}</p>
                    <p className="text-xs text-white/50">{phase.livrables}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modalités */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Modalités pratiques</motion.p>
              <motion.h2 variants={fadeUp} className="font-fraunces text-3xl font-bold text-navy mb-6">Un cadre adapté à votre agenda</motion.h2>
              <motion.ul variants={fadeUp} className="space-y-4">
                {[
                  "10 à 15 séances de 1h30 sur 6 à 12 mois",
                  "Présentiel à Paris (8e) ou Lyon, ou visioconférence",
                  "Confidentialité absolue — secret professionnel garanti",
                  "Coach dédié, disponible entre les séances",
                  "Outils propriétaires : assessment, 360°, baromètre d'impact",
                  "Bilan tripartite possible avec l'entreprise (si souhaité)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={17} className="text-sage mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="font-fraunces text-xl font-bold text-navy mb-6">ROI mesurable</h3>
                <div className="space-y-5">
                  {[
                    { icon: TrendingUp, label: "Performance d'équipe", value: "+40%", color: "text-sage" },
                    { icon: Users, label: "Réduction du turnover", value: "-50%", color: "text-gold" },
                    { icon: Zap, label: "Accélération des décisions", value: "+60%", color: "text-navy" },
                  ].map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={color} />
                        <span className="text-sm font-medium text-gray-700">{label}</span>
                      </div>
                      <span className={`font-fraunces font-bold text-xl ${color}`}>{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">* Données issues de nos bilans clients sur 12 mois</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Questions fréquentes</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">FAQ Dirigeants</h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium text-navy text-sm pr-4">{faq.q}</span>
                    <ChevronDown size={16} className={`text-gold shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container text-center">
          <h2 className="font-fraunces text-3xl font-bold text-white mb-4">Prêt à franchir le cap ?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">Réservez votre diagnostic offert de 30 minutes. Confidentiel, sans engagement.</p>
          <Link href="/diagnostic" className="btn-gold text-base px-8 py-3.5">
            Réserver mon diagnostic offert <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
