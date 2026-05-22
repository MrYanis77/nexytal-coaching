import { fadeUp } from "@/lib/animations";
/* ==========================================================
   HOME PAGE — Nexytal Coaching
   Hero + Logos + Pour qui + Chiffres + Méthode + Témoignages + CTA
   ========================================================== */
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Star, Quote, ChevronLeft, ChevronRight, Award, Users, TrendingUp, Clock } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/TA7k9beZLMnzqYhK9JuijT/hero-dirigeant-7ndgvxPJycrPJhWNURih9H.webp";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/TA7k9beZLMnzqYhK9JuijT/coaching-team-KsN8KHwbijNPLDzRHTiqMP.webp";

// Animated counter
function Counter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}


const testimonials = [
  {
    quote: "Nexytal Coaching m'a permis de retrouver une clarté stratégique que je n'avais plus depuis des mois. Un accompagnement d'une rare profondeur.",
    name: "Thomas D.",
    role: "PDG, Groupe industriel",
    rating: 5,
  },
  {
    quote: "En 6 mois, j'ai transformé ma posture managériale. Mon équipe a retrouvé confiance et les résultats sont là. Je recommande sans réserve.",
    name: "Sophie M.",
    role: "Directrice des Opérations, Scale-up Tech",
    rating: 5,
  },
  {
    quote: "Le diagnostic initial a été une révélation. La méthode COLA est structurée, exigeante et profondément humaine. Exactement ce dont j'avais besoin.",
    name: "Laurent B.",
    role: "DG, Groupe Santé",
    rating: 5,
  },
  {
    quote: "Une approche qui allie rigueur scientifique et intelligence émotionnelle. Mes prises de décision sont plus rapides, plus sereines.",
    name: "Isabelle R.",
    role: "Membre CODIR, Finance",
    rating: 5,
  },
];

const clientLogos = [
  "Groupe Renault", "BNP Paribas", "Sanofi", "Airbus", "L'Oréal", "Total Energies", "Société Générale", "Michelin"
];

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const prev = () => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setTestimonialIdx((i) => (i + 1) % testimonials.length);

  const visible = [
    testimonials[testimonialIdx % testimonials.length],
    testimonials[(testimonialIdx + 1) % testimonials.length],
    testimonials[(testimonialIdx + 2) % testimonials.length],
  ];

  return (
    <main className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-cream pt-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  <Award size={11} />
                  Certifié ICF · EMCC · Qualiopi
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-fraunces text-4xl lg:text-5xl xl:text-6xl font-bold text-navy leading-tight mb-6"
              >
                Le coaching qui{" "}
                <span className="italic text-gold">transforme</span>{" "}
                les leaders d'aujourd'hui
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Accompagnement premium des dirigeants, managers et collaborateurs vers l'excellence professionnelle et l'équilibre durable.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
                <Link href="/diagnostic" className="btn-gold">
                  Réserver un diagnostic offert
                  <ArrowRight size={16} />
                </Link>
                <Link href="/methode" className="btn-navy-outline">
                  Découvrir notre méthode
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
                {[
                  { icon: Users, label: "+500 dirigeants accompagnés" },
                  { icon: Star, label: "95% de satisfaction" },
                  { icon: Award, label: "Certifié ICF & Qualiopi" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon size={15} className="text-gold" />
                    <span>{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMG}
                  alt="Séance de coaching dirigeant à Paris"
                  className="w-full h-[500px] lg:h-[580px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                  <TrendingUp size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">ROI moyen</p>
                  <p className="font-fraunces font-bold text-navy text-lg">700%</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-5 -right-5 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                  <Clock size={18} className="text-sage" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Expérience</p>
                  <p className="font-fraunces font-bold text-navy text-lg">20+ ans</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LOGOS CLIENTS ── */}
      <section className="py-10 border-y border-gray-100 bg-white overflow-hidden">
        <div className="container mb-4">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
            Ils nous font confiance
          </p>
        </div>
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center whitespace-nowrap"
          >
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <span key={i} className="text-sm font-semibold text-gray-300 uppercase tracking-widest px-4">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── POUR QUI ? ── */}
      <section className="section-padding bg-cream">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Nos accompagnements</p>
              <h2 className="font-fraunces text-3xl lg:text-4xl font-bold text-navy mb-4">
                Un coaching sur mesure pour chaque profil
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Que vous soyez dirigeant, manager ou collaborateur, nous avons conçu un programme adapté à vos enjeux spécifiques.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "👔",
                  title: "Dirigeants",
                  subtitle: "PDG · CEO · DG · CODIR",
                  desc: "Sortir de la solitude du pouvoir, clarifier votre vision stratégique et renforcer votre leadership dans la durée.",
                  href: "/coaching-dirigeants",
                  features: ["Clarification stratégique", "Gestion de la charge mentale", "Leadership et influence"],
                  color: "navy",
                },
                {
                  icon: "🎯",
                  title: "Managers",
                  subtitle: "Managers · Futurs managers",
                  desc: "Développer votre posture managériale, inspirer vos équipes et conduire le changement avec assurance.",
                  href: "/coaching-managers",
                  features: ["Leadership authentique", "Communication assertive", "Gestion des conflits"],
                  color: "gold",
                  featured: true,
                },
                {
                  icon: "🌱",
                  title: "Salariés & Équipes",
                  subtitle: "Collaborateurs · Équipes",
                  desc: "Révéler le potentiel de chaque collaborateur et transformer la dynamique collective de vos équipes.",
                  href: "/coaching-salaries",
                  features: ["Confiance en soi", "Gestion du stress", "Cohésion d'équipe"],
                  color: "sage",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  custom={i}
                  className={`premium-card p-8 relative ${card.featured ? "ring-2 ring-gold shadow-xl" : ""}`}
                >
                  {card.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Le plus demandé
                    </span>
                  )}
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="font-fraunces text-xl font-bold text-navy mb-1">{card.title}</h3>
                  <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">{card.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{card.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} className="text-sage shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={card.href} className="flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors">
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 700, suffix: "%", label: "ROI moyen", sub: "retour sur investissement" },
              { value: 20, suffix: "+", label: "ans d'expérience", sub: "expertise éprouvée" },
              { value: 50, suffix: "", label: "coachs certifiés", sub: "ICF · EMCC · Qualiopi" },
              { value: 95, suffix: "%", label: "de satisfaction", sub: "clients recommandent" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <p className="font-fraunces text-4xl lg:text-5xl font-bold text-gold mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white font-semibold text-lg mb-1">{stat.label}</p>
                <p className="text-white/50 text-sm">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTHODE EN 4 ÉTAPES ── */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Notre approche</p>
              <h2 className="font-fraunces text-3xl lg:text-4xl font-bold text-navy mb-4">
                Une méthode en 4 étapes éprouvées
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Chaque accompagnement suit un processus rigoureux, ancré dans les neurosciences et la psychologie positive.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-0 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

              {[
                { num: "01", title: "Diagnostic", desc: "Évaluation approfondie de votre situation, enjeux et objectifs lors d'un entretien offert de 30 minutes.", icon: "🔍" },
                { num: "02", title: "Co-construction", desc: "Définition ensemble du contrat d'objectifs, des modalités et des indicateurs de succès mesurables.", icon: "🤝" },
                { num: "03", title: "Accompagnement", desc: "Séances régulières avec votre coach dédié, outils propriétaires et exercices entre les séances.", icon: "🚀" },
                { num: "04", title: "Ancrage durable", desc: "Bilan de fin de parcours, plan d'action autonome et suivi post-coaching pour pérenniser les acquis.", icon: "⚓" },
              ].map((step, i) => (
                <motion.div key={step.num} variants={fadeUp} custom={i} className="relative flex flex-col items-center text-center px-6">
                  <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mb-5 relative z-10 shadow-lg">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2">{step.num}</span>
                  <h3 className="font-fraunces text-lg font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-12">
              <Link href="/methode" className="btn-navy-outline">
                Découvrir notre méthode complète <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION VISUELLE ── */}
      <section className="relative h-80 lg:h-96 overflow-hidden">
        <img src={TEAM_IMG} alt="Coaching d'équipe" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Notre différence</p>
            <h2 className="font-fraunces text-3xl lg:text-4xl font-bold mb-4">
              "L'alliance entre rigueur scientifique<br className="hidden lg:block" /> et profondeur humaine"
            </h2>
            <p className="text-white/70 max-w-lg mx-auto">
              Neurosciences cognitives · Approche systémique · Psychologie positive · Pratique réflexive
            </p>
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="section-padding bg-cream">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Témoignages</p>
                <h2 className="font-fraunces text-3xl lg:text-4xl font-bold text-navy">
                  Ils ont transformé leur leadership
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {visible.map((t, i) => (
                <motion.div
                  key={t.name + i}
                  variants={fadeUp}
                  custom={i}
                  className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 gold-border-card"
                >
                  <Quote size={24} className="text-gold/30 mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-5 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <Link href="/temoignages" className="flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors justify-center">
                Voir tous les témoignages <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Passez à l'action</p>
            <h2 className="font-fraunces text-3xl lg:text-4xl font-bold text-white mb-5">
              Prêt à transformer votre leadership ?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Réservez votre diagnostic offert de 30 minutes avec l'un de nos coachs certifiés. Sans engagement, en toute confidentialité.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/diagnostic" className="btn-gold text-base px-8 py-3.5">
                Réserver mon diagnostic offert
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium py-3.5 px-6 border border-white/20 rounded-md hover:border-white/40">
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
