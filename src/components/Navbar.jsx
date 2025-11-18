import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const brandBlue = '#146cb6'

const NavLink = ({ children, href = '#' }) => (
  <a
    href={href}
    className="text-slate-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white flex items-center justify-center shadow ring-1 ring-black/5">
                <div className="h-6 w-6 rounded bg-[--brand-blue]"></div>
              </div>
              <style>{`:root{--brand-blue:${brandBlue}}`}</style>
              <div className="text-white font-semibold tracking-tight">Mobile Clients</div>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#features">Platform</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#academy">Resources</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#pricing"
                className="px-4 py-2 text-sm font-semibold text-white/90 border border-white/20 rounded-xl"
              >
                See Pricing
              </a>
              <a
                href="#demo"
                className="px-4 py-2 text-sm font-semibold text-white rounded-xl shadow-lg"
                style={{ backgroundColor: brandBlue }}
              >
                Schedule a Demo
              </a>
            </div>
            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4">
              <div className="flex flex-col gap-2">
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#features">Platform</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
                <NavLink href="#academy">Resources</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <a
                  href="#demo"
                  className="mt-2 px-4 py-2 text-sm font-semibold text-white rounded-xl shadow-lg text-center"
                  style={{ backgroundColor: brandBlue }}
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
