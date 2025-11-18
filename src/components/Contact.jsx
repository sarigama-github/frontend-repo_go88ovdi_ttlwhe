const brandBlue = '#146cb6'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr,1.2fr]">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h2 className="text-3xl font-semibold text-white">Schedule a Demo</h2>
            <p className="mt-2 text-slate-300">Quick intro form, then pick a time that works for you.</p>
            <form className="mt-6 grid grid-cols-1 gap-3">
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2" placeholder="Full name" />
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2" placeholder="Work email" />
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2" placeholder="Phone" />
              <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2" placeholder="Funeral home name" />
            </form>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-3">
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                title="Calendar"
                src="https://calendly.com/" 
                className="h-full w-full"
                frameBorder="0"
              />
            </div>
            <p className="mt-3 text-xs text-slate-400">Replace the calendar embed URL with your GoHighLevel scheduling link.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
