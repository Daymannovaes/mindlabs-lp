const LegacyJSLandingPage = () => {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-700 flex items-center justify-center text-xs font-semibold">
              JS
            </div>
            <span className="text-sm sm:text-base font-semibold tracking-tight">LegacyJS Studio</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#problem" className="hover:text-white transition-colors">Problems we solve</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
            <a href="#use-cases" className="hover:text-white transition-colors">Who it's for</a>
          </div>
          <div className="hidden sm:flex">
            <a
              href="#final-cta"
              className="inline-flex items-center rounded-full border border-indigo-500/60 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-100 hover:bg-indigo-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition"
            >
              Get a free code review
            </a>
          </div>
        </nav>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Make legacy JavaScript an asset, not a liability</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
                Turn your legacy JavaScript into a codebase your team actually likes to ship from.
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                We help engineering teams refactor, modernize, and maintain large JavaScript/TypeScript codebases with opinionated
                processes, battle-tested tooling, and hands-on expert guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="#final-cta"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition"
                >
                  Get a free legacy code review
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition"
                >
                  See how it works
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-400">
                Trusted by JavaScript teams dealing with 5+ year old codebases, thousands of modules, and "nobody touch that file" warnings.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6 shadow-xl shadow-black/40">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-emerald-100">Refactor roadmap</span>
                  </div>
                  <span className="text-[11px] text-slate-400">LegacyJS Studio</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Critical hotspots identified</span>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300 border border-emerald-500/30">
                      24 modules
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Refactor risk reduced</span>
                    <span className="text-emerald-400 font-semibold">-63%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Average PR cycle time</span>
                    <span className="text-emerald-300">3.1 → 1.4 days</span>
                  </div>
                </div>
                <div className="mt-4 border-t border-slate-800 pt-4">
                  <p className="text-[11px] text-slate-400 mb-2">
                    "Before this, touching anything under"
                    <code className="px-1 py-0.5 rounded bg-slate-800 text-[10px]">/legacy</code>"felt like defusing a bomb. Now it's just another
                    feature."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center text-[10px]">EM</div>
                      <div>
                        <p className="text-xs font-medium text-slate-200">Engineering Manager</p>
                        <p className="text-[11px] text-slate-400">Mid-size SaaS company</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-500">Sample result, not a promise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        {/* Problem section */}
        <section id="problem" className="border-t border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
                Your legacy JavaScript isn't just "messy" — it's slowing the entire team down.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-6">
                Most teams don't need a full rewrite. They need a safe, predictable way to work with the code they already have — without
                breaking production or burning out senior devs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-300">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-100">Common symptoms you're probably seeing:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Delivery slows to a crawl whenever a feature touches "that" part of the codebase.</li>
                  <li>Developers are afraid to change fragile modules with zero tests and mysterious side effects.</li>
                  <li>Onboarding new devs takes months because "how this actually works" is tribal knowledge.</li>
                  <li>PRs balloon in size as developers try to "clean things up" without a shared approach.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-100">And the cost compounds over time:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Technical debt quietly turns into outage risk and late-night incidents.</li>
                  <li>Modernization efforts stall because rewrites feel too risky (and never fit a sprint).</li>
                  <li>Your most senior JavaScript devs spend their time firefighting instead of leading.</li>
                  <li>Every roadmap discussion includes the phrase "we should really fix the legacy stuff."</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How it works / Solution section */}
        <section id="how-it-works" className="border-t border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
                  A concrete path from "don't touch it" to "ship with confidence."
                </h2>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                  We combine deep JavaScript/TypeScript expertise with an opinionated modernization playbook — so your team gets a clear plan,
                  not another PDF audit collecting dust.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col">
                <div className="text-xs font-semibold text-indigo-200 mb-2">Step 1</div>
                <h3 className="text-sm font-semibold text-white mb-2">Codebase X-ray</h3>
                <p className="text-xs sm:text-sm text-slate-300 flex-1">
                  We run a focused assessment of your JavaScript/TypeScript repos to map hotspots: fragile modules, complexity spikes, dead
                  code, and risky dependencies.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col">
                <div className="text-xs font-semibold text-indigo-200 mb-2">Step 2</div>
                <h3 className="text-sm font-semibold text-white mb-2">Prioritized refactor plan</h3>
                <p className="text-xs sm:text-sm text-slate-300 flex-1">
                  Together we define a modernization roadmap tied to business goals — with small, mergeable steps your team can execute
                  without pausing feature work.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col">
                <div className="text-xs font-semibold text-indigo-200 mb-2">Step 3</div>
                <h3 className="text-sm font-semibold text-white mb-2">Tooling &amp; guardrails</h3>
                <p className="text-xs sm:text-sm text-slate-300 flex-1">
                  We introduce opinionated tooling and patterns — linters, codemods, test harnesses, review checklists — so refactors are
                  consistent and safe.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col">
                <div className="text-xs font-semibold text-indigo-200 mb-2">Step 4</div>
                <h3 className="text-sm font-semibold text-white mb-2">On-going guidance</h3>
                <p className="text-xs sm:text-sm text-slate-300 flex-1">
                  We pair with your senior devs, review critical PRs, and tune the process — until your team can confidently own and evolve
                  the codebase on their own.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section id="benefits" className="border-t border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
                  Outcomes your roadmap — and your developers — can feel.
                </h2>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                  The goal isn't "clean code" in isolation. It's faster, safer delivery from the codebase you already have.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-white mb-2">Ship features faster</h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-3">
                  Reduce time spent tip-toeing around fragile modules. Smaller, safer changes mean more predictable delivery and fewer "this
                  sprint slipped" conversations.
                </p>
                <p className="text-[11px] text-emerald-300">Typical teams see PR cycle time drop as refactor standards take hold.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-white mb-2">Lower incident and outage risk</h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-3">
                  Targeted tests, guardrails, and incremental refactors shrink the blast radius of every change — without locking the
                  codebase in a museum.
                </p>
                <p className="text-[11px] text-emerald-300">Fewer "we deployed and everything broke" surprises.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-white mb-2">Happier, less burned-out devs</h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-3">
                  Give senior engineers a clear, agreed-upon way to improve the code instead of arguing in PR comments or carrying the whole
                  system in their heads.
                </p>
                <p className="text-[11px] text-emerald-300">Better developer experience = easier hiring and retention.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-white mb-2">Predictable modernization roadmap</h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-3">
                  Move from "we should refactor someday" to a concrete, sequenced plan you can communicate to leadership and track like any
                  other initiative.
                </p>
                <p className="text-[11px] text-emerald-300">Modernization becomes part of the roadmap, not a side project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof section */}
        <section className="border-t border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
                  Used by JS teams who outgrew "just ship it and hope."
                </h2>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                  From product-led SaaS to internal platforms, we work with teams that live and breathe JavaScript — and can't afford to
                  stall on modernization.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-xs text-slate-400 mb-1">Testimonial</p>
                  <p className="text-sm text-slate-100">
                    "They didn't just hand us a report — they sat with our leads, defined patterns, and made legacy code feel boring again.
                    That's a compliment."
                  </p>
                </div>
                <div className="text-[11px] text-slate-400">VP of Engineering, B2B SaaS (100+ engineers)</div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-xs text-slate-400 mb-1">Testimonial</p>
                  <p className="text-sm text-slate-100">
                    "Our TypeScript migration had been 'in progress' for over a year. With their plan and tooling, we finally had a path the
                    team could follow."
                  </p>
                </div>
                <div className="text-[11px] text-slate-400">Staff Engineer, product-led platform company</div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col justify-between">
                <div className="mb-3">
                  <p className="text-xs text-slate-400 mb-1">Testimonial</p>
                  <p className="text-sm text-slate-100">
                    "The biggest win was confidence. We know where the real risk is, and how to chip away at it without pausing the
                    roadmap."
                  </p>
                </div>
                <div className="text-[11px] text-slate-400">Engineering Manager, consumer web app</div>
              </div>
            </div>

            <div className="border border-dashed border-slate-800 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-slate-400">
                Logo strip placeholder: <span className="text-slate-300">Logo 1</span> · <span className="text-slate-300">Logo 2</span> ·{' '}
                <span className="text-slate-300">Logo 3</span> · <span className="text-slate-300">Logo 4</span>
              </p>
              <p className="text-[11px] text-slate-500">Add your customers here once you're live.</p>
            </div>
          </div>
        </section>

        {/* Use cases / Who it's for section */}
        <section id="use-cases" className="border-t border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
                Built for JavaScript teams under real-world pressure.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Whether you're responsible for the roadmap or the pull requests, our approach is designed to plug into how your team already
                works.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-sm font-semibold text-white mb-2">Engineering managers &amp; CTOs</h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-4">
                  You're accountable for delivery, reliability, and keeping your engineers engaged. Legacy code shouldn't be the silent
                  anchor on all three.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                  <li>Turn "refactor" from a vague cost center into a measurable initiative.</li>
                  <li>Get a realistic modernization roadmap you can communicate to leadership.</li>
                  <li>Reduce dependency on a handful of "legacy experts" who can't take real vacations.</li>
                  <li>Improve developer experience in the parts of the code that hurt the most.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-sm font-semibold text-white mb-2">Senior developers &amp; tech leads</h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-4">
                  You know exactly where the dragons live in the codebase. We help you slay them systematically instead of one emergency at
                  a time.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                  <li>Get opinionated patterns, codemods, and checklists tailored to your stack.</li>
                  <li>Introduce tests and type safety where they create the most leverage.</li>
                  <li>Align the team on what "good" looks like in legacy modules and reviews.</li>
                  <li>Spend more time on architecture and less on repetitive firefighting.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA section */}
        <section id="final-cta" className="border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
                Ready to make your legacy JavaScript boring in all the right ways?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-6">
                Request a free legacy JS code review. We'll identify your top 2–3 high-leverage opportunities and outline a realistic
                modernization path — customized to your team and codebase.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition"
                >
                  Request a legacy JS code review
                </a>
                <a
                  href="https://cal.example.com/legacy-js-consult"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-slate-700 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition"
                >
                  Book a 30-minute consultation
                </a>
              </div>

              <p className="text-[11px] text-slate-400">
                No obligation, no hard sales pitch — just a practical conversation about your legacy JavaScript and what it would take to
                make it an asset again.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-100">LegacyJS Studio</span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="hidden sm:inline text-slate-500">Modernization for serious JavaScript teams.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              Terms
            </a>
            <a href="mailto:hello@example.com" className="hover:text-slate-200 transition-colors">
              Contact
            </a>
          </div>
          <div className="text-[11px] text-slate-500 md:text-right w-full md:w-auto">
            © {year} LegacyJS Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegacyJSLandingPage;
