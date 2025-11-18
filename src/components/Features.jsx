const brandBlue = '#146cb6'

const features = [
  {
    title: 'Case & Arrangement Management',
    desc: 'From first call to final documentation, manage every detail with audit trails and smart checklists.',
  },
  {
    title: 'Scheduling & Fleet',
    desc: 'Coordinate services, view team availability, and optimize routes with calendar integrations.',
  },
  {
    title: 'Family Portal',
    desc: 'Secure portal for approvals, obituary drafts, tributes, and memorial assets in one place.',
  },
  {
    title: 'Compliance & Records',
    desc: 'Digitized forms, e-signatures, certificates, and reporting aligned with local regulations.',
  },
  {
    title: 'Inventory & Contracts',
    desc: 'Manage caskets, urns, pre-need contracts, and pricing with margin insights.',
  },
  {
    title: 'Payments & Invoicing',
    desc: 'Transparent, itemized invoices with financing and insurance assignment support.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(800px 400px at 10% 10%, rgba(20,108,182,0.12), transparent 60%), radial-gradient(800px 400px at 90% 30%, rgba(20,108,182,0.12), transparent 60%)`
      }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Built for modern funeral enterprises</h2>
          <p className="mt-3 text-slate-300">
            Streamline operations, elevate the family experience, and grow with confidence.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-4 shadow" style={{ backgroundColor: brandBlue }}>
                <span className="text-white font-semibold">✦</span>
              </div>
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
