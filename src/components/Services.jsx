import { motion } from 'framer-motion'

const brandBlue = '#146cb6'

const services = [
  {
    key: 'guestbook',
    title: 'Signature Guestbook',
    headline: 'Turn Condolences into Conversations',
    desc: 'Automatically capture visitor data and remarket to families.',
    color: 'from-blue-500/20 to-blue-500/0'
  },
  {
    key: 'crm',
    title: 'CRM Platform',
    headline: 'Your Pre-Need Command Center',
    desc: 'Manage leads, appointments, tasks, and reminders.',
    color: 'from-cyan-500/20 to-cyan-500/0'
  },
  {
    key: 'ai-chat',
    title: 'AI Chat Widget',
    headline: '24/7 Virtual Family Service Counselor',
    desc: 'Engage families even when you’re closed.',
    color: 'from-indigo-500/20 to-indigo-500/0'
  },
  {
    key: 'reviews',
    title: 'Review Manager',
    headline: 'Your Reputation on Autopilot',
    desc: 'Auto-respond to reviews and boost local SEO.',
    color: 'from-emerald-500/20 to-emerald-500/0'
  },
  {
    key: 'social',
    title: 'Social Posting',
    headline: 'Stay Active Online, Effortlessly',
    desc: 'Done-for-you weekly social media content.',
    color: 'from-fuchsia-500/20 to-fuchsia-500/0'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(900px 500px at 15% 10%, rgba(20,108,182,0.12), transparent 60%), radial-gradient(800px 400px at 85% 30%, rgba(20,108,182,0.10), transparent 60%)`
      }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Grow with outcome-driven services</h2>
          <p className="mt-3 text-slate-300">Everything you need to attract, convert, and serve families—purpose-built for the deathcare profession.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur"
            >
              <div className={`pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-gradient-to-br ${s.color} blur-2xl`} />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: brandBlue }} />
                  {s.title}
                </div>
                <h3 className="mt-4 text-white font-semibold">{s.headline}</h3>
                <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
