import { useState } from 'react'

const faqs = [
  {
    q: "Faut-il un niveau minimum pour s'inscrire ?",
    a: "Non. Nous acceptons tout le monde, même les grands débutants. Un test de positionnement gratuit est réalisé avant le début des cours pour adapter le programme à votre niveau réel.",
  },
  {
    q: "Les cours se font en ligne ou en présentiel ?",
    a: "Les deux ! Vous choisissez le format qui vous convient : en présentiel dans notre salle ou en ligne via visioconférence. Il est aussi possible de combiner les deux selon votre agenda.",
  },
  {
    q: "Comment se déroule un cours typique ?",
    a: "Chaque session est centrée sur la pratique orale et écrite en situation réelle. Pas de cours magistral — vous parlez, vous échangez, vous progressez activement dès la première heure.",
  },
  {
    q: "Quelle est la durée d'un parcours ?",
    a: "Cela dépend de votre niveau de départ et de vos objectifs. En moyenne, un parcours complet dure entre 3 et 6 mois. L'enseignante établit un planning personnalisé dès votre inscription.",
  },
  {
    q: "Comment s'inscrire ?",
    a: "Il suffit de nous contacter par WhatsApp, par email ou via le formulaire ci-dessous. Nous vous répondons sous 24h pour organiser un entretien de positionnement gratuit.",
  },
]

function ChevronIcon({ open }) {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ transition: 'transform .25s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
    >
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6">

        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1B2A6B]/10 rounded-full text-[#1B2A6B] font-bold text-xs mb-4 tracking-widest uppercase">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1B2A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>
            </svg>
            Questions fréquentes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2A6B] leading-tight">
            Vous avez des questions ?
            <span className="text-[#C0392B] block">Nous avons les réponses.</span>
          </h2>
        </div>

        {/* Accordéon */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-[1.5px] rounded-xl overflow-hidden transition-colors duration-200"
              style={{ borderColor: open === i ? '#1B2A6B' : '#e8ecfb' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[#f8f9ff] transition-colors duration-200"
              >
                <span className="text-sm font-bold text-[#1B2A6B]">{item.q}</span>
                <span style={{ color: open === i ? '#C0392B' : '#9ca3af' }}>
                  <ChevronIcon open={open === i} />
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 bg-[#f8f9ff] text-sm text-gray-600 leading-relaxed border-t border-[#e8ecfb]">
                  <p className="pt-3">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}