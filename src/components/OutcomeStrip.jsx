const brandBlue = '#146cb6'

export default function OutcomeStrip() {
  return (
    <section className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center">
          <p className="text-sm text-slate-300">Outcome-first platform for deathcare</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
            CRM • AI Chat • Guestbook • Lead Generation — all working together to grow pre-need
          </h2>
          <div className="mt-4 flex justify-center gap-3">
            <a href="#demo" className="rounded-xl px-4 py-2 text-white font-semibold" style={{ backgroundColor: brandBlue }}>Schedule a Demo</a>
            <a href="#pricing" className="rounded-xl px-4 py-2 font-semibold text-white/90 border border-white/20">See Plans & Pricing</a>
          </div>
        </div>
      </div>
    </section>
  )
}
