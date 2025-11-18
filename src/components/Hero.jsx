import Spline from '@splinetool/react-spline'

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
            <span className="text-xs font-medium text-white/90">Enterprise Funeral Management</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Dignified service, powered by modern software
          </h1>
          <p className="mt-6 text-lg text-slate-200/90">
            A complete operating system for funeral homes and mortuaries—case management, scheduling, compliance, and family portals. Seamless, secure, and built for mogul-class operations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white font-semibold shadow-lg"
              style={{ backgroundColor: brandBlue }}
            >
              Book a demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white/90 border border-white/20 hover:bg-white/10 transition"
            >
              Explore features
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            {[
              ['99.99%','Uptime'],
              ['SOC 2','Compliant'],
              ['24/7','Priority Support'],
              ['500+','Locations']
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
