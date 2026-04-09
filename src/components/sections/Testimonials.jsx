const testimonials = [
    {
      name: "Aminata Diallo",
      role: "Étudiante en master",
      avatar: "AD",
      color: "#1B2A6B",
      bg: "#e8ecfb",
      text: "Avant EAM, j'avais honte de parler anglais en classe. Après 3 mois, j'ai passé mon entretien de stage en anglais sans stress. La méthode Learning by Doing change vraiment tout.",
    },
    {
      name: "Moussa Sow",
      role: "Professionnel RH",
      avatar: "MS",
      color: "#C0392B",
      bg: "#fce8e8",
      text: "J'avais besoin d'anglais professionnel rapidement pour un poste à l'international. L'enseignante a su adapter chaque session à mon contexte. Résultat : j'ai décroché le poste.",
    },
    {
      name: "Fatou Ndiaye",
      role: "Lycéenne",
      avatar: "FN",
      color: "#059669",
      bg: "#d1fae5",
      text: "Ce que j'aime chez EAM c'est qu'on ne se sent jamais jugé. J'ai gagné en confiance à l'oral et mes notes ont vraiment progressé. Je recommande à tous mes amis.",
    },
  ]
  
  export default function Testimonials() {
    return (
      <section id="temoignages" className="py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
  
          {/* En-tête */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1B2A6B]/10 rounded-full text-[#1B2A6B] font-bold text-xs mb-4 tracking-widest uppercase">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1B2A6B] leading-tight">
              Ce que disent
              <span className="text-[#C0392B] block">nos apprenants</span>
            </h2>
          </div>
  
          {/* Grille */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border-[1.5px] border-[#e8ecfb] flex flex-col gap-4 hover:border-[#1B2A6B] transition-colors duration-200"
              >
                {/* Guillemet décoratif */}
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                  <path d="M0 20V12C0 5.373 4.477 1.12 13.43 0l1.141 2.08C9.868 3.04 7.5 5.493 7.5 9H12V20H0ZM16 20V12C16 5.373 20.477 1.12 29.43 0l1.141 2.08C25.868 3.04 23.5 5.493 23.5 9H28V20H16Z" fill="#e8ecfb"/>
                </svg>
  
                {/* Texte */}
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {t.text}
                </p>
  
                {/* Auteur */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#f0f2fa]">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ background: t.bg, color: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1B2A6B]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    )
  }