import './App.css'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import Projects from './components/Projects.jsx'
import Cards from './components/Cards.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Reviews from './components/Reviews.jsx'
import ContactUs from './components/ContactUs.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Projects />
      <Cards />
      <Reviews />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
