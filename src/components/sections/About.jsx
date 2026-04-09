export default function About() {
    const stats = [
      { value: "3",    label: "niveaux couverts"       },
      { value: "6",    label: "disciplines enseignées" },
      { value: "100%", label: "pratique active"         },
      { value: "2",    label: "formats disponibles"     },
    ]
  
    const valeurs = [
      {
        title: "Learning by Doing",
        description: "Vous pratiquez dès le premier cours — pas de théorie sans application.",
        iconColor: "#1B2A6B",
        iconBg: "#e8ecfb",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        ),
      },
      {
        title: "Suivi personnalisé",
        description: "Une enseignante dédiée qui connaît votre niveau et vos objectifs.",
        iconColor: "#C0392B",
        iconBg: "#fce8e8",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4"/>
            <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
          </svg>
        ),
      },
      {
        title: "Bienveillance",
        description: "Un cadre sans pression où chaque progrès est valorisé.",
        iconColor: "#059669",
        iconBg: "#ecfdf5",
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        ),
      },
    ]
  
    return (
      <section id="apropos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
  
          {/* En-tête */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1B2A6B]/10 rounded-full text-[#1B2A6B] font-bold text-xs mb-4 tracking-widest uppercase">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              Qui sommes-nous
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1B2A6B] leading-tight">
              English A Must —
              <span className="text-[#C0392B] block">apprendre en Pratiquant</span>
            </h2>
          </div>
  
          {/* Contenu principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
  
            {/* Texte + modes */}
            <div>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                <span className="font-bold text-[#1B2A6B]">English A Must (EAM)</span> est une école d'anglais fondée autour d'une conviction simple : on apprend vraiment une langue en la pratiquant, pas en l'étudiant.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Notre méthode exclusive <span className="font-semibold text-[#C0392B]">"Learning by Doing"</span> place la conversation et la mise en situation au cœur de chaque cours. Résultat : vous parlez dès les premières séances.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Les cours sont assurés par une enseignante expérimentée, passionnée et disponible, qui adapte chaque session à votre profil et vos objectifs.
              </p>
  
              {/* Modes en ligne / présentiel */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border-[1.5px] border-[#e0e4f5] text-sm font-semibold text-[#1B2A6B]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21h8M12 17v4"/>
                  </svg>
                  Cours en ligne
                  <span className="ml-auto text-xs font-normal text-gray-400">Où que vous soyez</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border-[1.5px] border-[#e0e4f5] text-sm font-semibold text-[#C0392B]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  Cours en présentiel
                  <span className="ml-auto text-xs font-normal text-gray-400">En salle, face à face</span>
                </div>
              </div>
            </div>
  
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center px-4 py-6 rounded-2xl bg-[#f8f9ff] border-[1.5px] border-[#e8ecfb]">
                  <div className="text-3xl font-extrabold text-[#1B2A6B]">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Valeurs - Version avec grandes cases */}
          <div className="border-t border-gray-100 pt-12">
            <h3 className="text-center text-xl font-extrabold text-[#1B2A6B] mb-8">Ce qui nous distingue</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valeurs.map((v, i) => (
                <div key={i} className="p-8 rounded-2xl border-[1.5px] border-[#e8ecfb] bg-[#f8f9ff] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: v.iconBg }}
                  >
                    {v.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#1B2A6B] mb-2">{v.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Citation */}
          <p className="text-center mt-12 text-xs text-gray-400 italic max-w-lg mx-auto border-t border-gray-100 pt-8">
            "Apprendre l'anglais, c'est ouvrir une porte vers un nouveau monde. Chez EAM, nous vous aidons à la franchir."
          </p>
  
        </div>
      </section>
    )
  }