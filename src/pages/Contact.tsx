import { fadeUp } from "@/lib/animations";
/* ==========================================================
   CONTACT — Nexytal Coaching
   Formulaire multi-étapes avec progress bar
   ========================================================== */
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";


const slideIn: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.2 } },
};

type FormData = {
  profil: string;
  besoins: string[];
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  entreprise: string;
  fonction: string;
  message: string;
  creneau: string;
  rgpd: boolean;
};

export default function Contact() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    profil: "", besoins: [], nom: "", prenom: "", email: "", telephone: "",
    entreprise: "", fonction: "", message: "", creneau: "", rgpd: false,
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const toggleBesoin = (b: string) => {
    setForm((f) => ({
      ...f,
      besoins: f.besoins.includes(b) ? f.besoins.filter((x) => x !== b) : [...f.besoins, b],
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-sage" />
          </div>
          <h2 className="font-fraunces text-3xl font-bold text-navy mb-3">Merci, {form.prenom} !</h2>
          <p className="text-gray-600 mb-6">
            Votre demande a bien été reçue. Un membre de notre équipe vous contactera sous <strong>24h ouvrées</strong> pour organiser votre diagnostic offert.
          </p>
          <p className="text-sm text-gray-500">En attendant, découvrez nos ressources gratuites.</p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 bg-navy">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Contact</motion.p>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl font-bold text-white mb-3">Parlons de votre projet</motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 max-w-lg">
              Prenez contact avec notre équipe. Nous vous répondons sous 24h ouvrées.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Colonne gauche — Infos */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fadeUp} className="space-y-6 mb-10">
                {[
                  { icon: Clock, title: "Diagnostic offert 30 min", desc: "Échangez gratuitement avec l'un de nos coachs pour évaluer votre situation.", highlight: true },
                  { icon: Mail, title: "Email", desc: "contact@nexytal-coaching.fr" },
                  { icon: Phone, title: "Téléphone", desc: "+33 1 42 00 00 00" },
                  { icon: MapPin, title: "Adresse", desc: "12 avenue Montaigne, 75008 Paris\n14 rue de la République, 69001 Lyon" },
                ].map(({ icon: Icon, title, desc, highlight }) => (
                  <motion.div key={title} variants={fadeUp} className={`flex gap-4 p-4 rounded-xl ${highlight ? "bg-gold/5 border border-gold/20" : "bg-white border border-gray-100"}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${highlight ? "bg-gold/20" : "bg-navy/5"}`}>
                      <Icon size={18} className={highlight ? "text-gold" : "text-navy"} />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{title}</p>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Horaires */}
              <motion.div variants={fadeUp} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-semibold text-navy text-sm mb-3">Horaires d'ouverture</p>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <div className="flex justify-between"><span>Lundi — Vendredi</span><span className="font-medium text-navy">9h00 — 19h00</span></div>
                  <div className="flex justify-between"><span>Samedi</span><span className="font-medium text-navy">9h00 — 13h00</span></div>
                  <div className="flex justify-between"><span>Dimanche</span><span className="text-gray-400">Fermé</span></div>
                </div>
              </motion.div>

              {/* Map placeholder */}
              <motion.div variants={fadeUp} className="mt-5 h-48 bg-gray-100 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-navy/30 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">12 avenue Montaigne, Paris 8e</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Colonne droite — Formulaire multi-étapes */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Étape {step} sur {totalSteps}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gold rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {/* Étape 1 */}
                  {step === 1 && (
                    <motion.div key="step1" variants={slideIn} initial="hidden" animate="visible" exit="exit">
                      <h3 className="font-fraunces text-xl font-bold text-navy mb-5">Vous êtes ?</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {["Dirigeant", "Manager", "DRH", "Salarié", "Autre"].map((p) => (
                          <button
                            key={p}
                            onClick={() => setForm((f) => ({ ...f, profil: p }))}
                            className={`p-4 rounded-xl border-2 text-sm font-medium transition-all ${
                              form.profil === p ? "border-navy bg-navy text-white" : "border-gray-200 text-gray-700 hover:border-navy/40"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => form.profil && setStep(2)}
                        disabled={!form.profil}
                        className="btn-gold w-full justify-center mt-6 disabled:opacity-50"
                      >
                        Continuer <ArrowRight size={16} />
                      </button>
                    </motion.div>
                  )}

                  {/* Étape 2 */}
                  {step === 2 && (
                    <motion.div key="step2" variants={slideIn} initial="hidden" animate="visible" exit="exit">
                      <h3 className="font-fraunces text-xl font-bold text-navy mb-5">Quel est votre besoin ?</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {["Prise de poste", "Leadership", "Gestion du stress", "Équipe", "Stratégie", "Communication", "Équilibre pro/perso", "Autre"].map((b) => (
                          <button
                            key={b}
                            onClick={() => toggleBesoin(b)}
                            className={`p-3 rounded-lg border-2 text-xs font-medium transition-all text-left ${
                              form.besoins.includes(b) ? "border-gold bg-gold/5 text-navy" : "border-gray-200 text-gray-600 hover:border-gold/40"
                            }`}
                          >
                            {form.besoins.includes(b) && <CheckCircle size={12} className="text-gold inline mr-1" />}
                            {b}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button onClick={() => setStep(1)} className="btn-navy-outline flex-1 justify-center"><ArrowLeft size={16} /></button>
                        <button onClick={() => setStep(3)} className="btn-gold flex-1 justify-center">Continuer <ArrowRight size={16} /></button>
                      </div>
                    </motion.div>
                  )}

                  {/* Étape 3 */}
                  {step === 3 && (
                    <motion.div key="step3" variants={slideIn} initial="hidden" animate="visible" exit="exit">
                      <h3 className="font-fraunces text-xl font-bold text-navy mb-5">Vos coordonnées</h3>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        {[
                          { key: "prenom", label: "Prénom *", type: "text" },
                          { key: "nom", label: "Nom *", type: "text" },
                          { key: "email", label: "Email professionnel *", type: "email" },
                          { key: "telephone", label: "Téléphone", type: "tel" },
                          { key: "entreprise", label: "Entreprise", type: "text" },
                          { key: "fonction", label: "Fonction", type: "text" },
                        ].map(({ key, label, type }) => (
                          <input
                            key={key}
                            type={type}
                            placeholder={label}
                            value={form[key as keyof FormData] as string}
                            onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-navy placeholder-gray-400"
                          />
                        ))}
                      </div>
                      <div className="flex gap-3 mt-4">
                        <button onClick={() => setStep(2)} className="btn-navy-outline flex-1 justify-center"><ArrowLeft size={16} /></button>
                        <button
                          onClick={() => form.prenom && form.email && setStep(4)}
                          disabled={!form.prenom || !form.email}
                          className="btn-gold flex-1 justify-center disabled:opacity-50"
                        >
                          Continuer <ArrowRight size={16} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Étape 4 */}
                  {step === 4 && (
                    <motion.div key="step4" variants={slideIn} initial="hidden" animate="visible" exit="exit">
                      <h3 className="font-fraunces text-xl font-bold text-navy mb-5">Votre message</h3>
                      <textarea
                        placeholder="Décrivez brièvement votre situation et vos objectifs..."
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        rows={4}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-navy placeholder-gray-400 mb-3 resize-none"
                      />
                      <select
                        value={form.creneau}
                        onChange={(e) => setForm((f) => ({ ...f, creneau: e.target.value }))}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-navy text-gray-600 mb-4"
                      >
                        <option value="">Créneau préféré pour le diagnostic</option>
                        <option value="matin">Matin (9h-12h)</option>
                        <option value="midi">Midi (12h-14h)</option>
                        <option value="apres-midi">Après-midi (14h-18h)</option>
                        <option value="soir">Fin de journée (18h-19h)</option>
                      </select>
                      <label className="flex items-start gap-2.5 mb-5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.rgpd}
                          onChange={(e) => setForm((f) => ({ ...f, rgpd: e.target.checked }))}
                          className="mt-0.5"
                        />
                        <span className="text-xs text-gray-500">
                          J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la politique de confidentialité de Nexytal Coaching.
                        </span>
                      </label>
                      <div className="flex gap-3">
                        <button onClick={() => setStep(3)} className="btn-navy-outline flex-1 justify-center"><ArrowLeft size={16} /></button>
                        <button
                          onClick={handleSubmit}
                          disabled={!form.rgpd}
                          className="btn-gold flex-1 justify-center disabled:opacity-50"
                        >
                          Envoyer ma demande <ArrowRight size={16} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
