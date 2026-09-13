import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TechnologySection from './components/TechnologySection'

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-1 sm:gap-8 lg:gap-28 lg:pt-24">
        <Hero />
        <TechnologySection />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} newestOnTop pauseOnHover theme="light" />
    </>
  )
}

export default App
