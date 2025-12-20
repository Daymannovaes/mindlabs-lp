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

export default function MetricsArticle() {
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
            The Four Metrics That Predict Software Engineering Success
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 lg:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <div className="prose prose-lg prose-invert max-w-none mb-16">
            <p className="text-lg text-slate-300 leading-relaxed">
              Research over thousands of companies and our experience working with dozens of engineering teams shows that you should care about
              these four metrics to achieve sustainable success in software delivery.
              These aren't just vanity metrics, they are <span className="text-white font-medium">predictive indicators</span> of
              organizational performance. Teams that excel in these areas consistently deliver better business outcomes, have happier
              developers, and outperform their competition.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-12 mb-16">
            <h3 className="text-3xl font-semibold mb-4">Throughput Metrics</h3>
            {/* Metric 3: Deployment Frequency */}
            <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Deployment Frequency</h2>
                  <p className="text-emerald-400 text-sm font-medium">How often do you ship to production?</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  Deployment Frequency measures how often your team successfully releases to production. It's a
                  leading indicator of your team's ability to deliver value continuously and respond to market
                  changes.
                </p>
                <p>
                  <span className="text-white font-medium">Why it matters:</span> Frequent deployments mean smaller
                  batches, which are easier to test, easier to debug, and less risky. They also enable faster
                  feedback loops with customers and quicker time-to-market for new features.
                </p>
                <div className="bg-slate-800/50 rounded-lg p-4 mt-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Elite performers target:</h4>
                  <p className="text-emerald-400 font-mono text-lg">Multiple deploys per day</p>
                  <p className="text-sm text-slate-400 mt-1">Low performers may only deploy monthly or quarterly</p>
                </div>
              </div>
            </div>

            {/* Metric 4: Lead Time for Changes */}
            <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Lead Time for Changes</h2>
                  <p className="text-emerald-400 text-sm font-medium">How fast can you go from commit to production?</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  Lead Time for Changes measures the time it takes for a code commit to reach production. This
                  includes code review, testing, staging, and deployment processes—everything between writing
                  code and customers seeing the change.
                </p>
                <p>
                  <span className="text-white font-medium">Why it matters:</span> Short lead times mean your team
                  can respond quickly to bugs, security issues, and customer feedback. Long lead times often
                  indicate bottlenecks in your process—whether manual approvals, slow tests, or deployment friction.
                </p>
                <div className="bg-slate-800/50 rounded-lg p-4 mt-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Elite performers target:</h4>
                  <p className="text-emerald-400 font-mono text-lg">Less than 1 hour</p>
                  <p className="text-sm text-slate-400 mt-1">Low performers may take weeks or months</p>
                </div>
              </div>
            </div>

            {/* Metric 1: Mean Time to Repair */}
            <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Mean Time to Repair (MTTR)</h2>
                  <p className="text-emerald-400 text-sm font-medium">How quickly can you recover from failures?</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  Mean Time to Repair measures the average time it takes to restore service when an incident occurs.
                  This includes the time from when an issue is detected to when it's fully resolved and the system
                  is back to normal operation.
                </p>
                <p>
                  <span className="text-white font-medium">Why it matters:</span> Failures are inevitable in complex
                  systems. What separates high-performing teams isn't the absence of failures—it's their ability to
                  detect and recover from them quickly. A low MTTR means less downtime, less revenue loss, and less
                  stress on your team.
                </p>
                <div className="bg-slate-800/50 rounded-lg p-4 mt-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Elite performers target:</h4>
                  <p className="text-emerald-400 font-mono text-lg">Less than 1 hour</p>
                  <p className="text-sm text-slate-400 mt-1">Low performers can take days or even weeks to recover</p>
                </div>
              </div>
            </div>

            {/* Metric 2: Change Failure Rate */}
            <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Change Failure Rate</h2>
                  <p className="text-emerald-400 text-sm font-medium">How often do deployments cause problems?</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  Change Failure Rate is the percentage of deployments that result in a degraded service or require
                  immediate remediation (rollback, hotfix, or patch). It measures the quality and reliability of
                  your deployment process.
                </p>
                <p>
                  <span className="text-white font-medium">Why it matters:</span> A high failure rate creates a
                  vicious cycle: teams become afraid to deploy, which leads to larger batches, which increases risk,
                  which leads to more failures. Reducing this rate builds confidence and enables faster iteration.
                </p>
                <div className="bg-slate-800/50 rounded-lg p-4 mt-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Elite performers target:</h4>
                  <p className="text-emerald-400 font-mono text-lg">0-15%</p>
                  <p className="text-sm text-slate-400 mt-1">Low performers often see failure rates of 46-60%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why These Metrics Work Together */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Why These Metrics Work Together
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                The power of these four metrics lies in their balance. You might think that deploying faster would
                lead to more failures, but the research shows the opposite: <span className="text-white font-medium">
                speed and stability reinforce each other</span>.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Teams that deploy frequently build the automation, testing, and monitoring infrastructure that also
                reduces failure rates. When failures do occur, the same practices that enable frequent deployment
                also enable rapid recovery.
              </p>
              <div className="bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 pl-6 py-4 my-8">
                <p className="text-lg text-slate-200 italic">
                  "There is no tradeoff between speed and stability. Teams that practice continuous delivery
                  achieve both high throughput and high stability."
                </p>
                <p className="text-sm text-slate-400 mt-2">— Accelerate: The Science of Lean Software and DevOps</p>
              </div>
            </div>
          </div>


          {/* Summary Table */}
          <div className="mb-16">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              The following table offers a comprehensive comparison of all metrics. By analyzing these together, organizations can identify current state and create a plan for improvement to achieve elite status.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-emerald-600 text-white">
                    <th className="text-left py-4 px-4 font-semibold text-sm">Software delivery performance metric</th>
                    <th className="text-left py-4 px-4 font-semibold text-sm">Elite</th>
                    <th className="text-left py-4 px-4 font-semibold text-sm">High</th>
                    <th className="text-left py-4 px-4 font-semibold text-sm">Medium</th>
                    <th className="text-left py-4 px-4 font-semibold text-sm">Low</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700 bg-slate-900/40">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-white mb-1">Deployment frequency</div>
                      <div className="text-sm text-slate-400">How often does your organization deploy code to production?</div>
                    </td>
                    <td className="py-4 px-4 text-sm bg-emerald-500/20 text-emerald-300 font-medium">On-demand (multiple deploys per day)</td>
                    <td className="py-4 px-4 text-sm">Between once per week and once per month</td>
                    <td className="py-4 px-4 text-sm">Between once per month and once every 6 months</td>
                    <td className="py-4 px-4 text-sm">Fewer than once per six months</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-white mb-1">Lead time for changes</div>
                      <div className="text-sm text-slate-400">How long does it take to go from code committed to code running in production?</div>
                    </td>
                    <td className="py-4 px-4 text-sm bg-emerald-500/20 text-emerald-300 font-medium">Less than one hour</td>
                    <td className="py-4 px-4 text-sm">Between one day and one week</td>
                    <td className="py-4 px-4 text-sm">Between one month and six months</td>
                    <td className="py-4 px-4 text-sm">More than six months</td>
                  </tr>
                  <tr className="border-b border-slate-700 bg-slate-900/40">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-white mb-1">Time to restore service</div>
                      <div className="text-sm text-slate-400">How long does it generally take to restore service when an incident occurs?</div>
                    </td>
                    <td className="py-4 px-4 text-sm bg-emerald-500/20 text-emerald-300 font-medium">Less than one hour</td>
                    <td className="py-4 px-4 text-sm">Less than one day</td>
                    <td className="py-4 px-4 text-sm">Between one day and one week</td>
                    <td className="py-4 px-4 text-sm">More than six months</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-white mb-1">Change failure rate</div>
                      <div className="text-sm text-slate-400">What percentage of changes to production result in degraded service?</div>
                    </td>
                    <td className="py-4 px-4 text-sm bg-emerald-500/20 text-emerald-300 font-medium">0%–15%</td>
                    <td className="py-4 px-4 text-sm">16%–30%</td>
                    <td className="py-4 px-4 text-sm">16%–30%</td>
                    <td className="py-4 px-4 text-sm">16%–30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Improve */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              How to Improve Your Metrics
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Invest in Automation
                </h3>
                <p className="text-slate-300 text-sm">
                  CI/CD pipelines, automated testing, and infrastructure as code are foundational. They reduce
                  manual work, catch issues early, and make deployments routine rather than risky events.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Embrace Small Batches
                </h3>
                <p className="text-slate-300 text-sm">
                  Smaller changes are easier to test, review, and debug. Break work into independently deployable
                  pieces and ship them as soon as they're ready.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Build Observability
                </h3>
                <p className="text-slate-300 text-sm">
                  You can't improve what you can't measure. Invest in monitoring, logging, and alerting so you
                  can detect issues quickly and understand their impact.
                </p>
              </div>
              <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Practice Blameless Postmortems
                </h3>
                <p className="text-slate-300 text-sm">
                  When failures happen, focus on learning and improvement rather than blame. This creates
                  psychological safety and encourages teams to take smart risks.
                </p>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Ready to Improve Your Metrics?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            At Solvelabs, we've helped dozens of engineering teams improve their DORA metrics through better
            CI/CD pipelines, testing strategies, and development practices. Let us help you build the
            foundation for sustainable high performance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-colors"
              onClick={() => {
                redirect("mailto:contact@solvelabs.dev?utm_source=metrics_article");
              }}
            >
              Schedule a Consultation
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-8 py-3 text-base font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 transition-colors"
            >
              View Our Services
            </Link>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-2">DevOps Consultation</h3>
              <p className="text-slate-300 text-sm">
                We'll audit your current processes and build a roadmap to improve your deployment pipeline,
                testing infrastructure, and monitoring capabilities.
              </p>
            </div>
            <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Hands-On Implementation</h3>
              <p className="text-slate-300 text-sm">
                Our senior engineers work alongside your team to implement CI/CD pipelines, automated testing,
                and infrastructure improvements.
              </p>
            </div>
            <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Team Training</h3>
              <p className="text-slate-300 text-sm">
                We help your team build the skills and practices needed to maintain and improve your software
                delivery performance over time.
              </p>
            </div>
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
                <li><Link href="/concepts/metrics" className="hover:text-emerald-400 transition-colors text-emerald-400">Software Metrics</Link></li>
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

