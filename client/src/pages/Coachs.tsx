import { fadeUp } from "@/lib/animations";
/* ==========================================================
   NOS COACHS — Nexytal Coaching
   ========================================================== */
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, X, Star } from "lucide-react";
import { useState } from "react";


const coaches = [
  { id: 1, name: "Sophie Marchand", title: "Coach Exécutif Senior", cert: ["ICF MCC"], specialties: ["Dirigeants", "Transformation"], langs: ["🇫🇷", "🇬🇧"], location: "Paris", bio: "Ancienne DG d'un groupe international, Sophie accompagne les dirigeants dans leurs transitions stratégiques depuis 15 ans.", fullBio: "Après 20 ans de carrière en direction générale dans les secteurs de la santé et de la technologie, Sophie a choisi de mettre son expérience au service du coaching exécutif. Certifiée MCC par l'ICF, elle accompagne des PDG, DG et membres de CODIR dans leurs transformations les plus exigeantes. Elle est également superviseure de coachs et formatrice certifiée." },
  { id: 2, name: "Pierre Dumont", title: "Coach Leadership & Équipes", cert: ["ICF PCC", "EMCC"], specialties: ["Managers", "Équipes"], langs: ["🇫🇷", "🇬🇧", "🇩🇪"], location: "Paris", bio: "Spécialiste du coaching managérial et des dynamiques d'équipe, Pierre intervient dans les grandes entreprises industrielles.", fullBio: "Pierre est diplômé de l'École Polytechnique et d'HEC. Après une carrière de 18 ans en management opérationnel dans l'industrie, il s'est formé au coaching à l'INSEAD. Certifié ICF PCC et EMCC, il est reconnu pour son approche rigoureuse et son expertise des environnements complexes." },
  { id: 3, name: "Marie-Claire Fontaine", title: "Coach Transition & Reconversion", cert: ["ICF PCC"], specialties: ["Reconversion", "Dirigeants"], langs: ["🇫🇷", "🇪🇸"], location: "Lyon", bio: "Experte en coaching de transition professionnelle, Marie-Claire accompagne les cadres dirigeants dans leurs changements de cap.", fullBio: "Marie-Claire est psychologue clinicienne de formation, spécialisée en psychologie du travail. Elle a exercé comme DRH pendant 12 ans avant de se consacrer entièrement au coaching. Sa double expertise lui permet d'accompagner les transitions professionnelles les plus complexes avec une profondeur rare." },
  { id: 4, name: "Thomas Lebrun", title: "Coach Performance & Leadership", cert: ["ICF PCC", "EMCC"], specialties: ["Managers", "Dirigeants"], langs: ["🇫🇷", "🇬🇧"], location: "Paris", bio: "Ancien consultant McKinsey, Thomas apporte une approche analytique et orientée résultats au coaching exécutif.", fullBio: "Thomas a passé 10 ans chez McKinsey avant de se former au coaching. Sa vision business et son approche data-driven du ROI font de lui un coach particulièrement apprécié des dirigeants issus du monde du conseil et de la finance." },
  { id: 5, name: "Isabelle Renard", title: "Coach Bien-être & Performance", cert: ["ICF ACC"], specialties: ["Salariés", "Stress"], langs: ["🇫🇷"], location: "Paris", bio: "Spécialiste de la gestion du stress et de l'équilibre vie pro/perso, Isabelle accompagne les collaborateurs en difficulté.", fullBio: "Isabelle est certifiée en sophrologie, mindfulness et coaching. Elle travaille principalement sur les problématiques de burn-out, de gestion du stress et de retour à l'emploi après un arrêt longue durée. Son approche holistique intègre les dimensions physique, émotionnelle et cognitive." },
  { id: 6, name: "Laurent Moreau", title: "Coach Stratégie & Innovation", cert: ["ICF MCC"], specialties: ["Dirigeants", "Transformation"], langs: ["🇫🇷", "🇬🇧", "🇮🇹"], location: "Paris", bio: "Ancien CEO d'une scale-up tech, Laurent accompagne les dirigeants dans leurs transformations digitales et organisationnelles.", fullBio: "Laurent a fondé et dirigé deux startups avant de se former au coaching. Son expérience d'entrepreneur lui confère une compréhension unique des enjeux des dirigeants de scale-ups et d'entreprises en transformation. Certifié MCC, il est l'un des rares coachs à combiner expertise tech et profondeur humaine." },
  { id: 7, name: "Nathalie Dubois", title: "Coach Diversité & Inclusion", cert: ["ICF PCC", "EMCC"], specialties: ["Managers", "Équipes"], langs: ["🇫🇷", "🇬🇧"], location: "Lyon", bio: "Experte en coaching de la diversité et de l'inclusion, Nathalie accompagne les organisations dans leurs transformations culturelles.", fullBio: "Nathalie est docteure en sciences sociales et ancienne directrice diversité d'un groupe du CAC 40. Elle accompagne les dirigeants et managers dans le développement d'un leadership inclusif et la création d'environnements de travail équitables." },
  { id: 8, name: "François Petit", title: "Coach Prise de Poste", cert: ["ICF PCC"], specialties: ["Managers", "Reconversion"], langs: ["🇫🇷", "🇬🇧"], location: "Paris", bio: "Spécialiste des 100 premiers jours, François accompagne les managers et dirigeants dans leurs prises de poste.", fullBio: "François a développé une expertise unique sur les transitions managériales après avoir lui-même vécu 5 prises de poste dans des contextes très différents. Sa méthode des 100 jours est reconnue comme l'une des plus efficaces du marché." },
];

const filterOptions = {
  specialite: ["Tous", "Dirigeants", "Managers", "Équipes", "Reconversion"],
  cert: ["Tous", "ICF PCC", "ICF MCC", "EMCC"],
  location: ["Tous", "Paris", "Lyon"],
};

export default function Coachs() {
  const [filters, setFilters] = useState({ specialite: "Tous", cert: "Tous", location: "Tous" });
  const [selectedCoach, setSelectedCoach] = useState<typeof coaches[0] | null>(null);

  const filtered = coaches.filter((c) => {
    if (filters.specialite !== "Tous" && !c.specialties.includes(filters.specialite)) return false;
    if (filters.cert !== "Tous" && !c.cert.includes(filters.cert)) return false;
    if (filters.location !== "Tous" && c.location !== filters.location) return false;
    return true;
  });

  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 bg-navy">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">L'équipe</motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white max-w-2xl mb-5 leading-tight">
              Des praticiens expérimentés au service de votre transformation
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl">
              50 coachs certifiés ICF et EMCC, tous anciens dirigeants ou managers, pour un accompagnement ancré dans la réalité terrain.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-cream border-b border-gray-200 sticky top-16 lg:top-20 z-30">
        <div className="container">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Filtrer par :</span>
            {Object.entries(filterOptions).map(([key, options]) => (
              <div key={key} className="flex gap-2 flex-wrap">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFilters((f) => ({ ...f, [key]: opt }))}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      filters[key as keyof typeof filters] === opt
                        ? "bg-navy text-white border-navy"
                        : "bg-white text-gray-600 border-gray-200 hover:border-navy"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grille coachs */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((coach, i) => (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="premium-card p-6 flex flex-col"
              >
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-br from-navy to-sage rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-fraunces font-bold text-xl">
                    {coach.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-fraunces font-bold text-navy mb-0.5">{coach.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{coach.title}</p>
                {/* Certifications */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {coach.cert.map((c) => (
                    <span key={c} className="text-xs bg-gold/10 text-gold font-semibold px-2 py-0.5 rounded-full">{c}</span>
                  ))}
                </div>
                {/* Spécialités */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {coach.specialties.map((s) => (
                    <span key={s} className="text-xs bg-navy/5 text-navy px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-1">{coach.bio}</p>
                {/* Langues + location */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">{coach.langs.map((l) => <span key={l} className="text-base">{l}</span>)}</div>
                  <span className="text-xs text-gray-400">{coach.location}</span>
                </div>
                <button
                  onClick={() => setSelectedCoach(coach)}
                  className="w-full text-center text-sm font-semibold text-navy hover:text-gold transition-colors border border-navy/20 hover:border-gold rounded-lg py-2"
                >
                  Voir le profil
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rejoindre l'équipe */}
      <section className="py-16 bg-cream">
        <div className="container max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Recrutement</p>
            <h2 className="font-fraunces text-2xl font-bold text-navy mb-4">Rejoindre l'équipe Nexytal</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Vous êtes coach certifié ICF ou EMCC, avec une expérience significative en entreprise ? Rejoignez notre réseau de praticiens d'excellence.
            </p>
            <Link href="/contact" className="btn-navy-outline">
              Candidater <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal Coach */}
      <AnimatePresence>
        {selectedCoach && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setSelectedCoach(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-lg mx-auto bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="bg-navy p-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-sage rounded-full flex items-center justify-center">
                    <span className="text-white font-fraunces font-bold text-lg">
                      {selectedCoach.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-fraunces font-bold text-white text-lg">{selectedCoach.name}</h3>
                    <p className="text-white/60 text-sm">{selectedCoach.title}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedCoach(null)} className="text-white/60 hover:text-white">
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selectedCoach.cert.map((c) => (
                    <span key={c} className="text-xs bg-gold/10 text-gold font-semibold px-2 py-1 rounded-full">{c}</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">{selectedCoach.fullBio}</p>
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">4,9/5 — 47 avis</span>
                </div>
                <Link
                  href="/diagnostic"
                  className="btn-gold w-full justify-center"
                  onClick={() => setSelectedCoach(null)}
                >
                  Réserver une séance découverte <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
