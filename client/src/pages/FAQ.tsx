import { fadeUp } from "@/lib/animations";
/* ==========================================================
   FAQ — Nexytal Coaching
   ========================================================== */
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";


const faqCategories = [
  {
    category: "Le coaching en général",
    items: [
      { q: "Qu'est-ce que le coaching professionnel ?", a: "Le coaching professionnel est un accompagnement structuré qui aide une personne à atteindre ses objectifs professionnels, à développer ses compétences et à surmonter ses obstacles. Contrairement au conseil, le coach ne donne pas de solutions : il aide le coaché à trouver ses propres réponses grâce à des questions puissantes et des outils adaptés." },
      { q: "Quelle est la différence entre coaching, conseil et thérapie ?", a: "Le coaching se concentre sur le présent et l'avenir, sur l'action et la performance professionnelle. Le conseil apporte des solutions et des recommandations externes. La thérapie traite des problématiques psychologiques et du passé. Ces approches sont complémentaires et nos coachs savent orienter vers le bon professionnel si nécessaire." },
      { q: "Le coaching est-il fait pour moi ?", a: "Le coaching est fait pour vous si vous souhaitez progresser, surmonter un obstacle, prendre une décision importante, développer votre leadership ou traverser une transition professionnelle. Il n'est pas adapté aux situations de détresse psychologique sévère, qui nécessitent un suivi thérapeutique." },
      { q: "Combien de temps dure un accompagnement ?", a: "La durée varie selon vos objectifs. Un coaching flash peut durer 3 séances, un coaching court 6 séances sur 3 mois, un coaching standard 8 à 12 séances sur 6 mois. Pour les dirigeants, nous proposons des accompagnements d'un an avec suivi continu." },
    ],
  },
  {
    category: "Notre méthode",
    items: [
      { q: "En quoi consiste la méthode COLA ?", a: "COLA est notre méthode propriétaire en 4 phases : Clarification (définir les enjeux et objectifs), Observation (explorer les ressources et freins), Leviers (identifier et expérimenter les solutions), Ancrage (consolider les acquis et préparer l'autonomie). Cette méthode est ancrée dans les neurosciences et la psychologie positive." },
      { q: "Quels outils utilisez-vous ?", a: "Nous utilisons une combinaison d'outils : assessments de personnalité (MBTI, DISC, 360°), outils de pleine conscience, techniques de visualisation, journaling structuré, et nos propres outils propriétaires développés sur 20 ans de pratique." },
      { q: "Les séances se déroulent-elles en présentiel ou en visio ?", a: "Nous proposons les deux formats. Le présentiel est disponible dans nos bureaux à Paris et Lyon. La visio est tout aussi efficace et permet plus de flexibilité. De nombreux clients optent pour un format hybride." },
      { q: "Comment se passe la première séance ?", a: "La première séance est un diagnostic offert de 30 minutes. Elle permet de clarifier votre situation, vos enjeux et d'évaluer l'adéquation avec notre approche. Sans engagement de votre part. Si vous décidez de continuer, nous co-construisons votre contrat d'objectifs lors de la séance suivante." },
    ],
  },
  {
    category: "Tarifs et financement",
    items: [
      { q: "Quels sont vos tarifs ?", a: "Nos tarifs varient selon le programme : coaching flash (3 séances) à partir de 900 € HT, coaching court (6 séances) à partir de 1 800 € HT, coaching managérial (8 séances) à partir de 4 500 € HT, coaching dirigeants sur devis. Nous proposons également des packages entreprise." },
      { q: "Comment financer mon coaching ?", a: "Plusieurs options : financement par l'entreprise (plan de développement des compétences), OPCO (si éligible Qualiopi), CPF pour certaines formations certifiantes, ou prise en charge personnelle. Nous vous accompagnons dans les démarches de financement." },
      { q: "Y a-t-il une garantie de satisfaction ?", a: "Oui. Si vous n'êtes pas satisfait après les 2 premières séances, nous vous remboursons intégralement. Nous sommes confiants dans la qualité de notre accompagnement et nous nous engageons sur votre satisfaction." },
      { q: "Puis-je arrêter en cours de parcours ?", a: "Oui, vous pouvez interrompre votre parcours à tout moment. Les séances déjà réalisées sont facturées au prorata. Nous vous remboursons les séances non effectuées sans frais supplémentaires." },
    ],
  },
  {
    category: "Confidentialité et éthique",
    items: [
      { q: "La confidentialité est-elle garantie ?", a: "Absolument. Le secret professionnel est un pilier fondamental de notre éthique. Aucune information échangée en séance n'est partagée avec l'entreprise, même si c'est elle qui finance l'accompagnement. Nous respectons scrupuleusement la charte déontologique ICF et EMCC." },
      { q: "Que se passe-t-il si c'est mon employeur qui finance ?", a: "Même si votre employeur finance le coaching, la confidentialité est totale. Nous pouvons partager avec l'entreprise uniquement les informations que vous avez explicitement accepté de partager, et seulement dans le cadre défini au départ (ex : atteinte des objectifs généraux)." },
      { q: "Vos coachs sont-ils certifiés ?", a: "Tous nos coachs sont certifiés par des organismes reconnus : ICF (International Coaching Federation), EMCC (European Mentoring & Coaching Council), et/ou Qualiopi. Ils ont tous au minimum 500 heures de pratique et une supervision régulière." },
    ],
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Le coaching en général");

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 bg-navy">
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">FAQ</motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white mb-5">
              Questions fréquentes
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl mx-auto">
              Tout ce que vous souhaitez savoir sur le coaching et notre approche.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filtres catégories */}
      <section className="py-6 bg-cream border-b border-gray-200 sticky top-16 lg:top-20 z-30">
        <div className="container">
          <div className="flex gap-2 flex-wrap">
            {faqCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`text-xs px-4 py-2 rounded-full border transition-all font-medium ${
                  activeCategory === cat.category
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-gray-600 border-gray-200 hover:border-navy"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordéon */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl">
          {faqCategories
            .filter((cat) => cat.category === activeCategory)
            .map((cat) => (
              <div key={cat.category}>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-fraunces text-2xl font-bold text-navy mb-6"
                >
                  {cat.category}
                </motion.h2>
                <div className="space-y-3">
                  {cat.items.map((item, i) => {
                    const key = `${cat.category}-${i}`;
                    const isOpen = openItem === key;
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="premium-card overflow-hidden"
                      >
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className="font-semibold text-navy pr-4">{item.q}</span>
                          <ChevronDown
                            size={18}
                            className={`text-gold shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                              <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="container max-w-2xl text-center">
          <h2 className="font-fraunces text-2xl font-bold text-navy mb-3">Vous ne trouvez pas votre réponse ?</h2>
          <p className="text-gray-600 mb-6">Notre équipe est disponible pour répondre à toutes vos questions.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-navy-outline">
              Nous contacter
            </Link>
            <Link href="/diagnostic" className="btn-gold">
              Diagnostic offert <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
