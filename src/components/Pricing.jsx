import { useState } from 'react'

const brandBlue = '#146cb6'

const plans = [
  { name: 'Starter', price: 297, bestFor: 'Solo pre-need agents or small firms' },
  { name: 'Growth', price: 497, bestFor: 'Multi-staff or location-based firms' },
  { name: 'Premier', price: 997, bestFor: 'Enterprise & white-labeled setups' },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  const format = (p) => {
    const monthly = annual ? Math.round((p * 11) / 12) : p
    return `$${monthly}/mo` + (annual ? ' (billed annually)' : '')
  }

  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-3 text-slate-300">Annual plans get 1 month free. Cancel anytime.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span>Monthly</span>
            <button
              onClick={() => setAnnual((v) => !v)}
              className="relative h-6 w-11 rounded-full bg-white/10 border border-white/10"
              aria-label="Toggle annual pricing"
            >
              <span
                className={`absolute top-0.5 ${annual ? 'left-[22px]' : 'left-0.5'} h-5 w-5 rounded-full bg-white transition-all`}
              />
            </button>
            <span>Annual</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={p.name} className={`rounded-2xl border ${i===1 ? 'border-[color:var(--brand)]' : 'border-white/10'} bg-slate-900/50 p-6 backdrop-blur relative`}
                 style={{ ['--brand'] : brandBlue }}>
              {i===1 && (
                <div className="absolute -top-3 right-6 rounded-full bg-[color:var(--brand)] px-3 py-1 text-xs text-white shadow-md">Most Popular</div>
              )}
              <h3 className="text-white font-semibold text-lg">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold text-white">{format(p.price)}</div>
              <p className="mt-2 text-slate-300 text-sm">{p.bestFor}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                <li>AI chat widget</li>
                <li>Signature Guestbook</li>
                <li>CRM with tasks & reminders</li>
                <li>Review manager</li>
                <li>Social posting</li>
              </ul>
              <button className="mt-6 w-full rounded-xl px-4 py-3 text-white font-semibold shadow-lg" style={{ backgroundColor: brandBlue }}>
                Start Free Assessment
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
