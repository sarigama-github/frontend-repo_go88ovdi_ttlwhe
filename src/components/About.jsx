const brandBlue = '#146cb6'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">About Mobile Clients</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Mobile Clients was founded by Justin Nalls, a former million-dollar funeral professional turned tech entrepreneur. Our mission is simple: give funeral homes and pre-need professionals modern tools that actually work — from someone who understands the business inside and out.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-white font-semibold">Industry-first AI</div><div>Purpose-built for deathcare</div></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-white font-semibold">White-glove onboarding</div><div>Migration + training</div></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-white font-semibold">Compliance-driven</div><div>SOC 2 mindset</div></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-white font-semibold">Built to scale</div><div>Single or multi-location</div></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
              <h3 className="text-white font-semibold">Our Promise</h3>
              <p className="mt-2 text-slate-300 text-sm">We measure success by your pre-need growth, family satisfaction, and staff efficiency — not vanity metrics.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
              <h3 className="text-white font-semibold">How We Work</h3>
              <p className="mt-2 text-slate-300 text-sm">We partner closely with owners and counselors to tailor AI playbooks, automate outreach, and modernize the online experience.</p>
              <a href="#demo" className="mt-4 inline-flex rounded-xl px-4 py-2 text-white font-semibold" style={{ backgroundColor: brandBlue }}>Schedule a call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
