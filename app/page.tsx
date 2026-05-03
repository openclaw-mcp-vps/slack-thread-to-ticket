export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          Slack + Linear / Jira / GitHub
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn Slack chaos into{' '}
          <span className="text-[#58a6ff]">structured tickets</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          SlackTicket watches your channels, detects support requests with AI, and automatically creates formatted tickets — so nothing falls through the cracks.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $29 / month
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['AI-powered detection', 'Linear integration', 'Jira integration', 'GitHub Issues', 'Real-time webhooks', 'Dashboard & logs'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited Slack channels monitored',
              'AI ticket detection & extraction',
              'Linear, Jira & GitHub integrations',
              'Background job queue for reliability',
              'Dashboard with ticket history & logs',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does SlackTicket detect support requests?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">SlackTicket listens to your chosen Slack channels via webhooks. Each message is analyzed by an AI model that classifies whether it contains a support request, extracts the relevant context, and formats it into a structured ticket before sending it to your chosen tracker.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">Which ticket trackers are supported?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">Currently Linear, Jira, and GitHub Issues are supported. You can configure which tracker to use per channel from the dashboard, and more integrations are on the roadmap.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">What happens if ticket creation fails?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">SlackTicket uses a background job queue with automatic retries. If a ticket fails to create, the job is retried up to three times with exponential backoff. All failures are visible in your dashboard so nothing is silently lost.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} SlackTicket. All rights reserved.
      </footer>
    </main>
  )
}
