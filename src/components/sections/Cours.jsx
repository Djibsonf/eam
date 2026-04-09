export default function Cours() {
  const courses = [
    {
      id: 1,
      title: "Speaking",
      icon: "🗣️",
      description: "Exprimez-vous avec aisance et confiance. Nos sessions interactives vous plongent dans des conversations réelles pour briser la barrière de la parole.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Writing",
      icon: "✍️",
      description: "Maîtrisez l'art de l'écriture anglaise. Des emails professionnels aux rédactions académiques, apprenez à structurer vos idées avec clarté.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Listening",
      icon: "🎧",
      description: "Développez votre oreille à tous les accents. À travers des contenus variés, entraînez-vous à comprendre l'anglais tel qu'il est vraiment parlé.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Reading",
      icon: "📖",
      description: "Plongez dans l'univers de la lecture anglaise. Articles, romans, documents professionnels : comprenez rapidement et enrichissez votre vocabulaire.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Grammar",
      icon: "🔤",
      description: "Structurez votre anglais avec une grammaire solide. Nos leçons vous aident à parler et écrire sans fautes, naturellement.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Vocabulary",
      icon: "📚",
      description: "Enrichissez votre lexique jour après jour. Des thèmes variés pour retenir et utiliser vos nouveaux mots avec facilité.",
      gradient: "from-rose-500 to-orange-500"
    }
  ]

  return (
    <section id="cours" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#1B2A6B]/10 rounded-full text-[#1B2A6B] font-semibold text-sm mb-4">
            📚 Notre offre pédagogique
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A6B] mb-4">
            Des cours pour maîtriser
            <span className="text-[#C0392B] block">chaque aspect de l'anglais</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Une approche complète et progressive pour développer toutes vos compétences linguistiques
          </p>
        </div>

        <div className="space-y-12">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 group`}
            >
              {/* Icône avec grand cercle */}
              <div className="flex-shrink-0">
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${course.gradient} flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <span className="text-5xl md:text-6xl">{course.icon}</span>
                </div>
              </div>

              {/* Texte */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-[#1B2A6B]/5 text-[#1B2A6B] text-sm font-semibold mb-3">
                  {course.title}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1B2A6B] mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {course.description}
                </p>
                
                {/* Ligne décorative au survol */}
                <div className={`mt-4 h-1 w-16 bg-gradient-to-r ${course.gradient} rounded-full transition-all duration-500 group-hover:w-32 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1B2A6B] hover:bg-[#C0392B] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Commencez votre apprentissage
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}