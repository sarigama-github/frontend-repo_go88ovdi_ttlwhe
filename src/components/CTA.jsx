const brandBlue = '#146cb6'

export default function CTA() {
  return (
    <section id="demo" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-12 backdrop-blur-xl overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30" style={{ background: brandBlue }} />
          <div className="relative z-10 grid items-center gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold text-white tracking-tight">Experience the Mogul Standard</h3>
              <p className="mt-3 text-slate-300">White-glove onboarding, data migration, and executive training included. Let us tailor a demo to your operations.</p>
            </div>
            <form className="grid grid-cols-1 gap-3">
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2" placeholder="Full name" />
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2" placeholder="Work email" />
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2" placeholder="Company" />
              <button type="button" className="mt-2 rounded-xl px-5 py-3 text-white font-semibold shadow-lg" style={{ backgroundColor: brandBlue }}>Request demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
