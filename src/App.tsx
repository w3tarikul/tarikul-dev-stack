import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-28 lg:pt-24">
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default App
