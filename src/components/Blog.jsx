const posts = [
  {
    title: '5 Ways to Get More Leads From Your Funeral Home Website',
    excerpt: 'Practical, proven website tweaks that convert condolences into conversations.',
  },
  {
    title: 'What Is the Signature Guestbook & Why It Matters',
    excerpt: 'How the modern guestbook strengthens relationships and follow-up.',
  },
  {
    title: 'AI Tools Every Pre-Need Professional Should Be Using in 2025',
    excerpt: 'From chat assistants to predictive outreach — what moves the needle.',
  },
]

export default function Blog() {
  return (
    <section id="academy" className="relative py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Pre-Need Growth Academy</h2>
          <p className="mt-3 text-slate-300">Actionable guides and insights for owners and counselors.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <div className="h-36 w-full rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
              <h3 className="mt-4 text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.excerpt}</p>
              <a href="#" className="mt-3 inline-block text-sm text-sky-400 hover:text-sky-300">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
