import profileImg from '../../assets/images/profile.png'

export default function Accueil() {
  return (
    <section id="accueil" className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-100/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          
          <div className="flex-1 pt-8 md:pt-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2A6B] mb-6 leading-tight">
              Apprenez l'anglais avec
              <span className="text-[#C0392B] block">une méthode unique</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Découvrez l'approche <span className="font-semibold text-[#1B2A6B]">"Learning by Doing"</span> d'English A Must. 
              Des cours d'anglais modernes et efficaces pour tous les niveaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-[#1B2A6B] hover:bg-[#C0392B] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Commencer
              </a>
              <a href="#cours" className="border-2 border-[#1B2A6B] text-[#1B2A6B] hover:bg-[#1B2A6B] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
                Nos cours
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center -mt-32 md:-mt-36">
            <img 
              src={profileImg} 
              alt="Enseignante English A Must" 
              className="transform scale-x-[-1] w-full max-w-lg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}