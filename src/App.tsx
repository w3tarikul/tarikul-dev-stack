import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-28 pt-24">
        <Hero />
      </main>
    </>
  )
}

export default App
