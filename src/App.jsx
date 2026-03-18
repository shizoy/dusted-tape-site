import Header from './components/Header'
import Hero from './components/Hero'
import Radio from './components/Radio'
import StreamingLogos from './components/StreamingLogos'
import Modules from './components/Modules'
import Mixes from './components/Mixes'
import Releases from './components/Releases'
import About from './components/About'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Radio />
      <StreamingLogos />
      <Modules />
      <Mixes />
      <Releases />
      <About />
      <Cta />
      <Footer />
    </div>
  )
}
