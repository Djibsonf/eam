import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Accueil from './components/sections/Accueil'
import Cours from './components/sections/Cours'
import Parcours from './components/sections/Parcours'
import About from './components/sections/About'
import Testimonials from './components/sections/Testimonials'
import FAQ          from './components/sections/FAQ'
import Contact      from './components/sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Accueil />
      <Cours />
      <Parcours />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App