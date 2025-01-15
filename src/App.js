import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ArtistSection from './components/ArtistSection'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ArtistSection />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
