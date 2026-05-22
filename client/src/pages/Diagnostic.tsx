import { fadeUp } from "@/lib/animations";
/* ==========================================================
   DIAGNOSTIC OFFERT — Nexytal Coaching
   ========================================================== */
import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, Star, ArrowRight } from "lucide-react";
import { useState } from "react";


const slots = [
  { date: "Lundi 26 mai", times: ["09:00", "10:30", "14:00", "15:30"] },
  { date: "Mardi 27 mai", times: ["09:00", "11:00", "14:30", "16:00"] },
  { date: "Mercredi 28 mai", times: ["10:00", "11:30", "15:00"] },
  { date: "Jeudi 29 mai", times: ["09:30", "11:00", "14:00", "17:00"] },
  { date: "Vendredi 30 mai", times: ["09:00", "10:30", "14:00"] },
];

export default function Diagnostic() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", telephone: "", profil: "" });
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-gold" />
          </div>
          <h2 className="font-fraunces text-3xl font-bold text-navy mb-3">Rendez-vous confirmé !</h2>
          <p className="text-gray-600 mb-4">
            Votre diagnostic offert est réservé pour le <strong>{selectedSlot}</strong>.
          </p>
          <p className="text-gray-600 mb-6">
            Vous recevrez un email de confirmation avec le lien de visioconférence dans les prochaines minutes.
          </p>
          <div className="bg-gold/5 border border-gold/20 rounded-xl p-5 text-sm text-gray-700">
            <p className="font-semibold text-navy mb-2">Ce qui vous attend :</p>
            <ul className="space-y-1.5">
              {["30 minutes d'échange confidentiel", "Analyse de votre situation", "Recommandations personnalisées", "Aucun engagement"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 bg-navy">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full mb-5">
              <Star size={14} className="text-gold fill-gold" />
              <span className="text-gold text-xs font-semibold">100% gratuit — Sans engagement</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-white mb-5">
              Votre diagnostic offert de 30 minutes
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl mx-auto">
              Un échange confidentiel avec l'un de nos coachs certifiés pour clarifier votre situation et explorer les solutions adaptées.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-8 bg-cream border-b border-gray-200">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Clock, label: "30 minutes offertes" },
              { icon: Shield, label: "100% confidentiel" },
              { icon: CheckCircle, label: "Sans engagement" },
              { icon: Star, label: "Coach certifié ICF" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-navy">
                <Icon size={16} className="text-gold" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire + Calendrier */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Formulaire */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.h2 variants={fadeUp} className="font-fraunces text-2xl font-bold text-navy mb-6">Vos informations</motion.h2>
              <motion.div variants={fadeUp} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Prénom *"
                    value={form.prenom}
                    onChange={(e) => setForm((f) => ({ ...f, prenom: e.target.value }))}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Nom *"
                    value={form.nom}
                    onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy bg-white"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email professionnel *"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy bg-white"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  value={form.telephone}
                  onChange={(e) => setForm((f) => ({ ...f, telephone: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy bg-white"
                />
                <select
                  value={form.profil}
                  onChange={(e) => setForm((f) => ({ ...f, profil: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy bg-white text-gray-600"
                >
                  <option value="">Votre profil *</option>
                  <option value="dirigeant">Dirigeant / PDG / DG</option>
                  <option value="manager">Manager</option>
                  <option value="drh">DRH / RH</option>
                  <option value="salarie">Salarié</option>
                  <option value="autre">Autre</option>
                </select>
              </motion.div>

              {/* Ce qui se passe */}
              <motion.div variants={fadeUp} className="mt-7 bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-semibold text-navy text-sm mb-3">Lors de votre diagnostic :</p>
                <ul className="space-y-2">
                  {[
                    "Vous exposez votre situation en toute confidentialité",
                    "Le coach identifie vos enjeux clés",
                    "Vous recevez des recommandations personnalisées",
                    "Vous évaluez si le coaching est adapté à votre situation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-gray-600">
                      <CheckCircle size={13} className="text-sage mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Calendrier */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="font-fraunces text-2xl font-bold text-navy mb-6">Choisissez votre créneau</h2>
              <div className="space-y-4">
                {slots.map((day) => (
                  <div key={day.date} className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="font-semibold text-navy text-sm mb-3">{day.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {day.times.map((time) => {
                        const slotKey = `${day.date} à ${time}`;
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedSlot(slotKey)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium border-2 transition-all ${
                              selectedSlot === slotKey
                                ? "border-gold bg-gold text-white"
                                : "border-gray-200 text-gray-700 hover:border-gold/50"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => form.prenom && form.email && form.profil && selectedSlot && setSubmitted(true)}
                disabled={!form.prenom || !form.email || !form.profil || !selectedSlot}
                className="btn-gold w-full justify-center mt-6 disabled:opacity-50 text-base py-3.5"
              >
                Confirmer mon diagnostic offert <ArrowRight size={18} />
              </button>
              <p className="text-xs text-center text-gray-400 mt-3">
                En confirmant, vous acceptez notre politique de confidentialité.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
