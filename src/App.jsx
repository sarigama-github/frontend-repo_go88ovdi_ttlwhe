import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OutcomeStrip from './components/OutcomeStrip'
import Services from './components/Services'
import Features from './components/Features'
import Pricing from './components/Pricing'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <OutcomeStrip />
      <Services />
      <Features />
      <Pricing />
      <About />
      <Blog />
      <Contact />
      <CTA />
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Mobile Clients. All rights reserved.</p>
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white">Security</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
