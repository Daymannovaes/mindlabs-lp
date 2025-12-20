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

export default function TestingArticle() {
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
            Growing Without Automated Tests
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 lg:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Opening Diagnosis */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-xl text-slate-200 leading-relaxed mb-6">
              There's a stage of company growth that's easy to recognize from the outside but hard to see when
              you're in it. The product has found its footing. Revenue is climbing. The team has grown from a
              handful of people who could hold the entire system in their heads to twenty, forty, maybe sixty
              engineers spread across multiple squads.

              <br />
              <br />

              At this stage, features that once took days now take weeks. Releases
              that once felt routine now require careful coordination. And bugs keep appearing in parts of the
              codebase that nobody remembers touching.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              If this sounds familiar, you're not alone. It's a pattern we see repeatedly in growing software
              companies—and it rarely has anything to do with the talent on the team.
            </p>
          </div>

          {/* Why This Happens to Smart Teams */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Why This Happens to Smart Teams
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                The path here is almost always rational. In the early days, speed was everything. You were
                validating ideas, iterating on customer feedback, racing to find product-market fit. Writing
                comprehensive automated tests felt like a luxury you couldn't afford. And honestly? It probably was.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                But now the company grew. New engineers joined and features multiplied. The original team members who
                understood the system's quirks moved into leadership roles or left for new opportunities.

                <br />
                <br />
                The
                codebase became too large for anyone to hold in their head. But the habits formed in those early
                days—ship fast, verify manually, fix it if it breaks—those habits persisted.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                This isn't a failure of discipline. It's the natural consequence of prioritizing what mattered
                most at each stage. The problem is that what worked at ten engineers actively works against you
                at fifty.
              </p>
            </div>
          </div>

          {/* The Hidden Costs */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              The Hidden Costs
            </h2>
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-lg text-slate-300 leading-relaxed">
                The obvious cost is bugs in production. But the more damaging effects are the ones that don't
                show up in your error logs. They show up in velocity reports, in team morale, and in the growing
                gap between what your roadmap promises and what your team can actually deliver.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  Engineers stop refactoring
                </h3>
                <p className="text-slate-300 text-sm">
                  When there's no safety net, even experienced developers avoid improving code they don't own.
                  <br />
                  <br />
                  Technical debt compounds silently because touching legacy code feels too risky. The codebase
                  calcifies around its oldest, most problematic patterns.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  Small changes take longer than expected
                </h3>
                <p className="text-slate-300 text-sm">
                  What looks like a two-hour task turns into a two-day task.
                  <br />
                  <br />
                  Engineers spend more time manually
                  verifying that their change didn't break something unrelated than they spend writing the change
                  itself.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  Code review becomes a bottleneck
                </h3>
                <p className="text-slate-300 text-sm">
                  Without automated verification, Senior engineers become gatekeepers rather than force multipliers.
                  <br />
                  <br />
                  The team's
                  throughput becomes limited by the availability of a few key people.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  Releases lose confidence
                </h3>
                <p className="text-slate-300 text-sm">
                  Deployment becomes something the team dreads rather than celebrates.

                  <br />
                  <br />
                  The gap between "code complete" and "in production" increases from
                  hours to days or weeks. <strong>Customers wait longer for the value you've already built.</strong>
                </p>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none mt-8">
              <p className="text-lg text-slate-300 leading-relaxed">
                Each of these effects slows your ability to respond to the market. Features ship later.
                Competitors move faster. The engineering org that was once your competitive advantage starts
                to feel like a constraint on growth.
              </p>
            </div>
          </div>

          {/* Why It Gets Harder Over Time */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Why It Gets Harder Over Time
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                The instinct is to say "we'll fix it later, after this launch." But the economics work against
                you. Every month you wait, the codebase grows. Every new engineer onboarded inherits the existing
                culture. Every feature shipped without coverage makes the next feature harder to verify.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                There's also a knowledge problem. The engineers who understood why certain systems were built the
                way they were, already left the company.
                What remains is code that works for reasons no one fully understands.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Meanwhile, the team's mental model of the system grows increasingly disconnected from reality.
                Everyone thinks they know which parts are stable and which are risky. But without automated
                verification, those assumptions go untested. The bugs that slip through are precisely the ones
                no one expected.
              </p>
            </div>
          </div>

          {/* Stack Confirmation */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 pl-6 py-4">
              <p className="text-lg text-slate-200">
                These patterns appear across technology stacks, but they're especially common in modern JavaScript
                and TypeScript systems. The combination of rapidly evolving dependencies, shared logic between
                frontend and backend, and the sheer speed of iteration creates fertile ground for unverified
                assumptions to compound.
              </p>
            </div>
          </div>

          {/* Soft Consulting CTA */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Building the Safety Net While Shipping
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                The challenge with addressing this internally is that the team is already at capacity. The same
                engineers you'd ask to build testing infrastructure are the ones shipping features, fixing
                production issues, and onboarding new hires. Asking them to also retrofit coverage onto legacy
                systems—while maintaining their current velocity—is asking for something that rarely materializes.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                This is where an external partner can create leverage. Not to replace your team's judgment, but
                to provide dedicated focus on building the infrastructure your team needs to move faster. Someone
                who can work alongside your engineers, establish the patterns that make sense for your codebase,
                and create momentum that outlasts the engagement.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                The goal isn't to achieve some arbitrary coverage target. It's to give your team the confidence
                to refactor, the freedom to ship without fear, and the ability to onboard new engineers who can
                contribute safely from day one. It's to make your engineering organization a growth accelerator
                again, not a bottleneck.
              </p>
            </div>
          </div>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Let's Assess Where You Stand
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            If any of this resonated, we'd welcome a conversation. Not a sales pitch—just an honest
            assessment of where your testing infrastructure stands and what it would take to get it
            where it needs to be. Sometimes that's a quick fix. Sometimes it's a longer road. Either
            way, clarity is the first step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-colors"
              onClick={() => {
                redirect("mailto:contact@solvelabs.dev?subject=Testing%20Infrastructure%20Assessment&utm_source=testing_article");
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
                <li><Link href="/concepts/testing" className="hover:text-emerald-400 transition-colors text-emerald-400">Automated Testing</Link></li>
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

