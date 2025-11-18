import Spline from '@splinetool/react-spline'
import TrustBar from './TrustBar'

const brandBlue = '#146cb6'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to blend with brand blue */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(1200px 600px at 20% 10%, rgba(20,108,182,0.25), transparent 60%), radial-gradient(1000px 600px at 80% 40%, rgba(20,108,182,0.15), transparent 60%)`
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: brandBlue }} />
            <span className="text-xs font-medium text-white/90">AI-Powered Pre-Need Growth</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Grow Your Funeral Business with AI-Powered Pre-Need Tools
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200/90">
            CRM • AI Chat • Guestbook • Lead Generation — All built specifically for the funeral profession.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white font-semibold shadow-lg"
              style={{ backgroundColor: brandBlue }}
            >
              Schedule a Demo
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white/90 border border-white/20 hover:bg-white/10 transition"
            >
              See Plans & Pricing
            </a>
          </div>

          <TrustBar />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            {[
              ['99.99%','Uptime'],
              ['SOC 2','Compliant'],
              ['24/7','Priority Support'],
              ['100+','Clients']
            ].map(([k,v]) => (
              <div key={k} className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-white">{k}</div>
                <div className="text-xs text-slate-300">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
