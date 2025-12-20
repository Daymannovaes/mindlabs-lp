import Image from 'next/image';
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import { redirect } from '@/utils/redirect';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DeploymentsArticle() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-slate-950 text-slate-100 antialiased`}>
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50" style={{ backgroundColor: '#172021' }}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Solvelabs"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white">Solvelabs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <Link href="/#problem" className="hover:text-emerald-400 transition-colors">Challenges</Link>
            <Link href="/#services" className="hover:text-emerald-400 transition-colors">Services</Link>
            <Link href="/#experience" className="hover:text-emerald-400 transition-colors">Experience</Link>
            <Link href="/#contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
          </div>
          <div className="hidden sm:flex">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full border border-emerald-500/60 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:bg-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition"
            >
              Get started
            </Link>
          </div>
        </nav>
      </header>

      {/* Article Hero */}
      <section className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="mb-6">
            <Link href="/" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
              ← Back to Home
            </Link>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Engineering Concepts</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Challenges of Growing With Manual Deployments
          </h1>
          <p className="text-xl text-slate-400">
            When shipping becomes the company's bottleneck
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 lg:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Opening Diagnosis - Shipping Anxiety */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-xl text-slate-200 leading-relaxed mb-6">
              There's a particular kind of tension that builds in engineering teams as they grow. It's not
              visible in the code or the architecture diagrams.

              <br /><br />

              It shows up in the calendar—in the meetings scheduled around "deploy windows," in the Slack
              messages asking "is it safe to release today?", in the unspoken rule that Fridays are off-limits
              for production changes.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              For startups at the high growth stage, is not rare for releases to be tense events. Someone needs to be available to
              watch the logs, there's a checklist, maybe in a wiki somewhere, though it's probably outdated, etc.

              <br /><br />

              Another common challenge around this topic is that one or two people on the team hold most of the knowledge—everyone else defers to them
              when it's time to ship.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              If your team has started treating deployments with caution rather than confidence, you're
              experiencing a pattern that affects nearly every scaling software company.
            </p>
          </div>

          {/* Why Manual Deployment Worked Early On */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Why Manual Deployment Worked Early On
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                In the early days, deploying manually wasn't just acceptable—it was often the right choice.
                The team was small. Everyone knew the system. There was one environment that mattered, maybe two.

                <br /><br />

                The person deploying was usually the same person who wrote the code, so the context was
                fresh. If something went wrong, fixing it was fast because the blast radius was limited.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Formalizing the deployment process at that stage would have felt like premature optimization.
                When you're racing to find product-market fit, every hour spent on infrastructure is an hour
                not spent on the product.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                This was a reasonable trade-off. The problem is that trade-offs made for a five-person team
                don't scale to a thirty-person team.
              </p>
            </div>
          </div>

          {/* When Delivery Stops Scaling With the Product */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              When Delivery Stops Scaling With the Product
            </h2>
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Growth changes everything about deployment. The application that was once a single service
                becomes a collection of interdependent systems. Each system might have its own build process,
                its own configuration, its own quirks.

                <br /><br />

                Staging environments multiply. The differences between environments—subtle at first—become
                sources of unexpected failures. What works locally doesn't work in staging. What works in
                staging breaks in production.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Teams grow, and with them, the coordination overhead. Multiple squads now ship to the same
                systems. Someone needs to decide the order. Someone needs to verify nothing conflicts.

                <br /><br />

                The informal knowledge that used to live in one person's head is now scattered across the
                organization—or worse, has left with engineers who moved on.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Manual steps multiply quietly. Each new edge case gets a new workaround. Each workaround adds
                a step to the checklist. The time between "code is ready" and "code is live" stretches from
                hours to days.

                <br /><br />

                And when something does go wrong—when a deployment introduces a bug that slipped through—rolling
                back becomes its own manual process, fraught with the same risks as the original release.
              </p>
            </div>
            <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">The compounding effect</h3>
              <p className="text-slate-300 text-sm mb-4">
                Each of these friction points alone seems manageable. But they compound. The team deploys less
                frequently because each deployment requires more effort. Less frequent deployments mean larger
                releases. Larger releases are harder to test, harder to debug, and more likely to fail. Failed
                releases reinforce the perception that deployments are risky, which leads to even more caution,
                even more process, even less frequency.
              </p>
              <p className="text-slate-300 text-sm">
                Research across thousands of organizations has consistently shown that deployment frequency is
                one of the strongest predictors of overall software delivery performance. Teams that deploy
                more often—not less—tend to have lower failure rates and faster recovery times. The intuition
                that "fewer releases means fewer problems" is almost always wrong.
              </p>
            </div>
          </div>

          {/* The Hidden Cost of Human-Centered Deployments */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              The Hidden Cost of Human-Centered Deployments
            </h2>
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-lg text-slate-300 leading-relaxed">
                The most visible cost of manual deployments is time—the hours spent coordinating, verifying,
                and watching. But the deeper costs are the ones that don't show up in any dashboard. They
                show up in team behavior, in product velocity, and in the gap between what you planned to
                ship and what actually reached customers.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  Release anxiety shapes decisions
                </h3>
                <p className="text-slate-300 text-sm">
                  When deployments feel risky, teams start making product decisions based on deployment
                  constraints rather than customer value. Features get bundled together not because they
                  belong together, but because "we're already deploying, so let's include this too."
                  Urgent fixes wait for the next scheduled window. The release calendar starts driving
                  the product calendar.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  Iteration slows invisibly
                </h3>
                <p className="text-slate-300 text-sm">
                  The fear of rolling back keeps teams from shipping experiments. A/B tests become
                  logistically complex. Quick iterations on user feedback turn into multi-week cycles.
                  The fast feedback loop that made your early product successful gets replaced by careful,
                  batched releases that lag behind what customers actually want.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  Knowledge silos create fragility
                </h3>
                <p className="text-slate-300 text-sm">
                  When deployment knowledge lives in people rather than systems, those people become
                  bottlenecks. They can't take vacation without creating risk. They can't focus on other
                  work during release periods. And when they eventually leave—whether for a new role or
                  a new company—they take irreplaceable context with them. The "deployment hero" who saves
                  every release is also a single point of failure.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  Near-misses become normalized
                </h3>
                <p className="text-slate-300 text-sm">
                  In teams with manual deployments, close calls are common. A step was almost forgotten.
                  A configuration was almost wrong. Someone caught it at the last minute. These near-misses
                  get celebrated as saves rather than investigated as warnings. Each one is a signal that
                  the process is fragile, but the pattern becomes invisible through repetition.
                </p>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none mt-8">
              <p className="text-lg text-slate-300 leading-relaxed">
                All of these effects translate directly to business outcomes. Slower iteration means slower
                response to market changes. Knowledge silos mean higher risk when key people are unavailable.
                Release anxiety means features sit finished but unshipped, delivering no value to customers.
                The engineering organization that should be accelerating growth becomes a constraint on it.
              </p>
            </div>
          </div>

          {/* Why "We'll Automate It Later" Rarely Happens */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Why "We'll Automate It Later" Rarely Happens
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Every team with a painful deployment process has said the same thing: "We know we need to fix
                this, we just need to get through this quarter first." The intention is genuine. The execution
                almost never follows.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                The reason isn't laziness or lack of priority. It's that manual processes become institutionalized
                faster than anyone expects. The workarounds become procedures. The procedures become checklists.

                <br /><br />

                Each layer of process makes automation harder because there's now more to automate, more edge
                cases to handle, more stakeholders who have adapted their workflows around the current system.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Teams also adapt their behavior in ways that mask the problem. They ship less frequently, so
                the pain of each deployment is felt less often. They schedule deployments for low-traffic
                periods, so the consequences of failures are muted.

                <br /><br />

                They build in buffer time, so the delays are absorbed into project estimates. The problem
                doesn't disappear—it gets normalized.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Meanwhile, the engineers who might fix the problem are fully occupied with feature work.
                And every quarter, the features win, because their value is visible and immediate in a way
                that infrastructure improvements are not.
              </p>
            </div>
          </div>

          {/* What Predictable Delivery Feels Like */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              What Predictable Delivery Feels Like
            </h2>
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                There's a different way to operate. In teams with mature delivery systems, deployments are
                routine—almost boring. No one schedules meetings around them. No one asks permission.

                <br /><br />

                Code that passes verification gets deployed, often multiple times a day, without drama or
                coordination.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Releases are small because there's no cost to shipping frequently. Small releases are easier
                to verify, easier to debug, and easier to roll back if something does go wrong.

                <br /><br />

                When failures happen—and they still happen, because no system is perfect—recovery is fast
                because the change set is limited and the rollback path is well-worn.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                The emotional relief is as significant as the operational efficiency. Engineers ship with
                confidence rather than anxiety. Product managers see their features reach customers within
                hours of completion rather than waiting for the next release window.
              </p>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 pl-6 py-4">
              <p className="text-lg text-slate-200">
                The goal isn't automation for its own sake. It's restoring the tight feedback loop you had in
                the early days—but at scale. It's making deployment a non-event so that shipping becomes the
                default, not the exception.
              </p>
            </div>
          </div>

          {/* Stack Confirmation */}
          <div className="mb-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed">
                These patterns appear across every technology stack, but they're particularly acute in modern
                JavaScript and TypeScript systems. The complexity of build outputs, the tight coupling between
                frontend and backend releases, and the speed at which dependencies evolve all create additional
                surface area for manual processes to accumulate.
              </p>
            </div>
          </div>

          {/* Soft Consulting CTA */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Regaining Delivery Confidence
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                The challenge with fixing delivery infrastructure is that the team best positioned to fix it
                is the same team that's under pressure to ship features.

                <br /><br />

                Every sprint, the urgent wins over the important. Asking them to also rebuild the delivery
                system—while maintaining their current velocity—rarely produces results.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                <strong>This is where an external partner can create leverage.</strong>
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Dedicated focus, no trade-offs
                </h3>
                <p className="text-slate-300 text-sm">
                  Your team stays on the product roadmap while specialists build the delivery infrastructure
                  in parallel. No context switching, no competing priorities—just steady progress on both fronts.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Proven patterns from day one
                </h3>
                <p className="text-slate-300 text-sm">
                  We've seen hundreds of delivery systems. We know which automation strategies work for your
                  scale, which shortcuts are safe, and which investments pay off fastest.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Remove human bottlenecks
                </h3>
                <p className="text-slate-300 text-sm">
                  The "deployment hero" shouldn't be a single point of failure. We establish systems where
                  anyone can ship safely, reducing risk and freeing up your senior engineers.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Foundation that scales
                </h3>
                <p className="text-slate-300 text-sm">
                  The goal isn't to create dependency—it's to leave you with delivery pipelines that grow
                  with your team. Patterns and tooling get embedded in your infrastructure and your culture.
                </p>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed">
                The goal is to transform deployment from something that requires coordination into something
                that just happens. To give your engineers the freedom to ship whenever they're ready, not
                whenever the calendar allows.
              </p>
            </div>
          </div>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Let's Talk About Your Delivery Pipeline
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            If deployments have started feeling like a constraint rather than a capability, we'd welcome a
            conversation. We'll assess where your delivery process stands, identify the friction points
            that matter most, and outline what it would take to make shipping feel routine again.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-colors"
              onClick={() => {
                redirect("mailto:contact@solvelabs.dev?subject=Delivery%20Pipeline%20Assessment&utm_source=deployments_article");
              }}
            >
              Request an Assessment
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-8 py-3 text-base font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Solvelabs</h3>
              <p className="text-sm text-slate-400">
                JavaScript and TypeScript consultancy for engineering teams.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/#services" className="hover:text-emerald-400 transition-colors">Architecture & Design</Link></li>
                <li><Link href="/#services" className="hover:text-emerald-400 transition-colors">Code Quality</Link></li>
                <li><Link href="/#services" className="hover:text-emerald-400 transition-colors">Custom Development</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/concepts/metrics" className="hover:text-emerald-400 transition-colors">Software Metrics</Link></li>
                <li><Link href="/concepts/testing" className="hover:text-emerald-400 transition-colors">Automated Testing</Link></li>
                <li><Link href="/concepts/deployments" className="hover:text-emerald-400 transition-colors text-emerald-400">Manual Deployments</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="mailto:contact@solvelabs.dev" className="hover:text-emerald-400 transition-colors">contact@solvelabs.dev</a></li>
                <li><Link href="/#contact" className="hover:text-emerald-400 transition-colors">Get Assessment</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-xs text-slate-500 text-center">
              © {new Date().getFullYear()} Solvelabs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

