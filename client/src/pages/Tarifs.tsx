import { fadeUp } from "@/lib/animations";
/* ==========================================================
   TARIFS — Nexytal Coaching
   ========================================================== */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";


const faqs = [
  { q: "Combien coûte vraiment un coaching ?", a: "Nos tarifs varient selon le programme choisi. Pour un coaching individuel court (6 séances), comptez à partir de 1 500 € HT. Pour un coaching managérial (8 séances + outils), à partir de 4 500 € HT. Le coaching de dirigeants est sur devis selon la durée et les objectifs." },
  { q: "Comment financer mon coaching ?", a: "Plusieurs options s'offrent à vous : financement par l'entreprise (plan de développement des compétences), OPCO (si éligible Qualiopi), CPF pour certaines formations certifiantes, ou prise en charge personnelle. Nous vous accompagnons dans les démarches." },
  { q: "Y a-t-il une garantie de résultats ?", a: "Nous nous engageons sur la qualité de l'accompagnement et la rigueur de notre méthode. Les résultats dépendent de l'engagement du coaché. En cas d'insatisfaction après les 2 premières séances, nous proposons un remboursement intégral." },
  { q: "Puis-je arrêter en cours de parcours ?", a: "Oui, vous pouvez interrompre votre parcours à tout moment. Les séances déjà réalisées sont facturées au prorata. Nous vous remboursons les séances non effectuées." },
];

export default function Tarifs() {
  const [toggle, setToggle] = useState<"particuliers" | "entreprises">("particuliers");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 bg-navy">
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Tarifs</motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white mb-5">
              Des accompagnements à la hauteur de vos enjeux
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl mx-auto">
              Transparence totale sur nos tarifs. Financement OPCO disponible grâce à notre certification Qualiopi.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Toggle */}
      <section className="py-8 bg-cream">
        <div className="container flex justify-center">
          <div className="flex bg-white border border-gray-200 rounded-full p-1">
            {(["particuliers", "entreprises"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setToggle(t)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  toggle === t ? "bg-navy text-white shadow-sm" : "text-gray-500 hover:text-navy"
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cartes tarifs */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "ESSENTIEL",
                price: "1 500 €",
                priceNote: "HT — 6 séances",
                target: "Pour les collaborateurs",
                desc: "Coaching individuel court et ciblé pour tout salarié confronté à un défi professionnel.",
                features: [
                  "6 séances de 1h",
                  "Coach dédié",
                  "Assessment de personnalité",
                  "Bilan de fin de parcours",
                  "Visio ou présentiel",
                  "Financement OPCO possible",
                ],
                cta: "Démarrer",
                featured: false,
              },
              {
                name: "PREMIUM",
                price: "4 500 €",
                priceNote: "HT — 8 séances",
                target: "Pour les managers",
                desc: "Coaching managérial complet avec outils d'évaluation et suivi personnalisé sur 4 mois.",
                features: [
                  "8 séances de 1h",
                  "Profil DISC + MBTI",
                  "360° Feedback",
                  "Coach dédié senior",
                  "Bilan tripartite",
                  "Accès plateforme digitale",
                  "Financement OPCO possible",
                ],
                cta: "Choisir PREMIUM",
                featured: true,
                badge: "Le plus choisi",
              },
              {
                name: "EXECUTIVE",
                price: "Sur devis",
                priceNote: "10 à 15 séances",
                target: "Pour les dirigeants",
                desc: "Coaching de dirigeants sur mesure, programme COLA, suivi sur 6 à 12 mois.",
                features: [
                  "10 à 15 séances de 1h30",
                  "Programme COLA propriétaire",
                  "Assessment complet",
                  "360° Leadership",
                  "Disponibilité inter-séances",
                  "Suivi sur 12 mois",
                  "Bilan ROI chiffré",
                ],
                cta: "Demander un devis",
                featured: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative premium-card p-8 flex flex-col ${plan.featured ? "ring-2 ring-gold shadow-2xl scale-105" : ""}`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}
                <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">{plan.name}</p>
                <p className="font-fraunces text-3xl font-bold text-navy mb-1">{plan.price}</p>
                <p className="text-xs text-gray-500 mb-2">{plan.priceNote}</p>
                <p className="text-xs font-semibold text-sage uppercase tracking-wider mb-4">{plan.target}</p>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">{plan.desc}</p>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-sage shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.name === "EXECUTIVE" ? "/contact" : "/diagnostic"}
                  className={plan.featured ? "btn-gold justify-center" : "btn-navy-outline justify-center"}
                >
                  {plan.cta} <ArrowRight size={15} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions entreprises */}
      {toggle === "entreprises" && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-padding bg-white"
        >
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Solutions entreprises</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">Forfaits et contrats-cadres</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                { title: "Forfait Volume", desc: "À partir de 5 coachings simultanés, bénéficiez de tarifs dégressifs et d'un interlocuteur dédié.", price: "-15% à -30%" },
                { title: "Contrat-cadre annuel", desc: "Accès illimité à notre réseau de coachs pour l'ensemble de vos collaborateurs sur 12 mois.", price: "Sur devis" },
                { title: "Coaching d'équipe", desc: "Accompagnement de vos CODIR, COMEX et équipes opérationnelles. Tarification spécifique.", price: "Sur devis" },
              ].map((item, i) => (
                <div key={item.title} className="premium-card p-6">
                  <h3 className="font-fraunces text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <p className="font-fraunces font-bold text-gold text-xl">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Financement */}
      <section className="section-padding bg-navy">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Financement</p>
              <h2 className="font-fraunces text-3xl font-bold text-white">Rendre le coaching accessible</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: "🏢", title: "Plan de développement des compétences", desc: "Votre entreprise peut financer votre coaching dans le cadre du plan de formation annuel." },
                { icon: "💼", title: "OPCO", desc: "Grâce à notre certification Qualiopi, votre OPCO peut prendre en charge tout ou partie du coût." },
                { icon: "📋", title: "CPF", desc: "Certaines de nos formations certifiantes sont éligibles au Compte Personnel de Formation." },
              ].map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} custom={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-fraunces text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Questions fréquentes</p>
              <h2 className="font-fraunces text-3xl font-bold text-navy">FAQ Tarifs</h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
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
          <h2 className="font-fraunces text-3xl font-bold text-white mb-4">Obtenez un devis personnalisé</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">Nous adaptons nos tarifs à votre situation et vos objectifs.</p>
          <Link href="/contact" className="btn-gold text-base px-8 py-3.5">
            Obtenir un devis personnalisé <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
