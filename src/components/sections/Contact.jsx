const WHATSAPP_NUMBER = '221772467752'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20cours%20d%27anglais.`

function InfoRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-[#e8ecfb] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
        <p className="text-sm font-semibold text-[#1B2A6B]">{value}</p>
      </div>
    </div>
  )
  return href
    ? <a href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">{content}</a>
    : <div>{content}</div>
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1B2A6B]/10 rounded-full text-[#1B2A6B] font-bold text-xs mb-4 tracking-widest uppercase">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2A6B] leading-tight">
            Prêt à commencer ?
            <span className="text-[#C0392B] block">Contactez-nous.</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Un entretien de positionnement gratuit vous attend. Répondez en moins de 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Infos de contact */}
          <div className="flex flex-col gap-6">

            {/* Horaires */}
            <div className="bg-white rounded-2xl border-[1.5px] border-[#e8ecfb] p-6">
              <h3 className="text-sm font-bold text-[#1B2A6B] mb-4 flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                Horaires d'ouverture
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Lundi — Samedi</span>
                  <span className="font-bold text-[#1B2A6B]">9h00 — 18h00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Dimanche</span>
                  <span className="text-gray-400 font-medium">Fermé</span>
                </div>
              </div>
            </div>

            {/* Coordonnées */}
            <div className="bg-white rounded-2xl border-[1.5px] border-[#e8ecfb] p-6 flex flex-col gap-4">
              <h3 className="text-sm font-bold text-[#1B2A6B] flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Nos coordonnées
              </h3>

              <InfoRow
                href={`tel:+221772467752`}
                label="Téléphone"
                value="+221 77 246 77 52"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                }
              />

              <InfoRow
                href="mailto:englishamust@gmail.com"
                label="Email"
                value="englishamust@gmail.com"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                }
              />

              <InfoRow
                href={WHATSAPP_URL}
                label="WhatsApp"
                value="+221 77 246 77 52"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#1B2A6B">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                }
              />
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-2xl border-[1.5px] border-[#e8ecfb] p-6">
            <h3 className="text-sm font-bold text-[#1B2A6B] mb-5 flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Envoyez-nous un message
            </h3>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500">Prénom & Nom</label>
                  <input
                    type="text"
                    placeholder="Aminata Diallo"
                    className="px-4 py-2.5 rounded-xl border-[1.5px] border-[#e8ecfb] text-sm text-gray-700 outline-none focus:border-[#1B2A6B] transition-colors bg-[#f8f9ff]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="+221 77 000 00 00"
                    className="px-4 py-2.5 rounded-xl border-[1.5px] border-[#e8ecfb] text-sm text-gray-700 outline-none focus:border-[#1B2A6B] transition-colors bg-[#f8f9ff]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="px-4 py-2.5 rounded-xl border-[1.5px] border-[#e8ecfb] text-sm text-gray-700 outline-none focus:border-[#1B2A6B] transition-colors bg-[#f8f9ff]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500">Votre niveau actuel</label>
                <select className="px-4 py-2.5 rounded-xl border-[1.5px] border-[#e8ecfb] text-sm text-gray-700 outline-none focus:border-[#1B2A6B] transition-colors bg-[#f8f9ff]">
                  <option value="">Sélectionnez votre niveau</option>
                  <option value="debutant">Débutant</option>
                  <option value="intermediaire">Intermédiaire</option>
                  <option value="avance">Avancé</option>
                  <option value="inconnu">Je ne sais pas encore</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500">Message (optionnel)</label>
                <textarea
                  rows={3}
                  placeholder="Décrivez votre objectif ou posez une question..."
                  className="px-4 py-2.5 rounded-xl border-[1.5px] border-[#e8ecfb] text-sm text-gray-700 outline-none focus:border-[#1B2A6B] transition-colors bg-[#f8f9ff] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1B2A6B] hover:bg-[#C0392B] text-white font-bold text-sm py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Envoyer ma demande
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>

              <p className="text-center text-xs text-gray-400">
                Ou contactez-nous directement sur{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline">
                  WhatsApp
                </a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}