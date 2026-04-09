export default function Parcours() {
    const parcours = [
      {
        id: 1,
        level: "Débutant",
        accentColor: "#059669",
        bgColor: "#ecfdf5",
        borderColor: "#059669",
        iconColor: "#059669",
        iconBg: "#d1fae5",
        btnBg: "#059669",
        btnHover: "#047857",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22V12"/>
            <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
            <path d="M12 2a5 5 0 0 1 5 5c0 3-5 7-5 7S7 10 7 7a5 5 0 0 1 5-5z"/>
          </svg>
        ),
        description: "Vous partez de zéro ? Ce parcours est fait pour vous, à votre rythme.",
        features: [
          "Alphabet et prononciation",
          "Salutations et présentations",
          "Vocabulaire du quotidien",
          "Phrases simples à l'oral",
        ],
        why: "Pas de pression. Notre méthode vous fait parler dès le premier jour, avec bienveillance.",
      },
      {
        id: 2,
        level: "Intermédiaire",
        accentColor: "#1B2A6B",
        bgColor: "#eef0fb",
        borderColor: "#1B2A6B",
        iconColor: "#1B2A6B",
        iconBg: "#e8ecfb",
        btnBg: "#1B2A6B",
        btnHover: "#14205a",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
        ),
        description: "Vous comprenez mais bloquez à l'oral ? Passez au niveau supérieur.",
        features: [
          "Conversations courantes",
          "Temps verbaux essentiels",
          "Expression d'opinions",
          "Compréhension de textes variés",
        ],
        why: "Sessions en situations réelles : voyages, entretiens, réunions. La fluidité par la pratique.",
      },
      {
        id: 3,
        level: "Avancé",
        accentColor: "#C0392B",
        bgColor: "#fef2f2",
        borderColor: "#C0392B",
        iconColor: "#C0392B",
        iconBg: "#fce8e8",
        btnBg: "#C0392B",
        btnHover: "#a93226",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        ),
        description: "Vous visez un niveau professionnel ou une certification internationale ?",
        features: [
          "Expressions idiomatiques",
          "Débats et argumentation",
          "Anglais des affaires",
        ],
        why: "Subtilités, registre soutenu, communication pro. Vous devenez véritablement bilingue.",
      },
    ]
  
    return (
      <section id="parcours" className="py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
  
          {/* En-tête */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1B2A6B]/10 rounded-full text-[#1B2A6B] font-bold text-xs mb-4 tracking-widest uppercase">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
              Parcours personnalisés
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1B2A6B] mb-3 leading-tight">
              Un parcours adapté à
              <span className="text-[#C0392B] block">votre niveau</span>
            </h2>
            <p className="text-gray-500 text-base max-w-md mx-auto">
              Débutant ou avancé — nous avons le programme qu'il vous faut.
            </p>
          </div>
  
          {/* Bloc 3 colonnes jointives */}
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border border-[#e0e4f5]">
            {parcours.map((item, i) => (
              <div
                key={item.id}
                className="bg-white px-6 py-8 flex flex-col hover:bg-[#f4f6ff] transition-colors duration-200"
                style={{ borderRight: i < 2 ? '1.5px solid #e0e4f5' : 'none' }}
              >
                {/* Barre accent */}
                <div className="h-1 rounded-full mb-6" style={{ background: item.accentColor }} />
  
                {/* Icône */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: item.iconBg }}
                >
                  {item.icon}
                </div>
  
                {/* Niveau + description */}
                <h3 className="text-xl font-extrabold text-[#1B2A6B] mb-2">{item.level}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{item.description}</p>
  
                {/* Features */}
                <ul className="flex flex-col gap-2 mb-6">
                  {item.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={item.iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
  
                {/* Pourquoi EAM */}
                <div
                  className="text-sm leading-relaxed text-gray-700 px-3 py-3 mb-6 rounded-r-lg flex-1"
                  style={{
                    background: item.bgColor,
                    borderLeft: `3px solid ${item.borderColor}`,
                  }}
                >
                  {item.why}
                </div>
  
                {/* CTA */}
                <a
                  href="#contact"
                  className="block text-center text-sm font-bold py-2.5 rounded-xl text-white transition-opacity duration-200 hover:opacity-90"
                  style={{ background: item.btnBg }}
                >
                  Je commence ce parcours
                </a>
              </div>
            ))}
          </div>
  
          {/* Note */}
          <p className="text-center mt-8 text-xs text-gray-400 flex items-center justify-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            Tous les parcours incluent un suivi personnalisé et des ressources illimitées
          </p>
  
        </div>
      </section>
    )
  }