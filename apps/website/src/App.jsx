import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import TechStack from './components/TechStack'
import Impact from './components/Impact'
import FutureScope from './components/FutureScope'
import Dashboard from './components/Dashboard'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <TechStack />
        <Impact />
        <FutureScope />
        <Dashboard />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
