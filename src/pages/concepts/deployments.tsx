import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import { redirect } from '@/utils/redirect';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

// Frequency labels mapped to slider positions (0-100)
const frequencySteps = [
  { max: 5, label: '1 deploy per year', level: 0 },
  { max: 12, label: '2 deploys per year', level: 0 },
  { max: 20, label: '1 deploy every 4 months', level: 0 },
  { max: 28, label: '1 deploy every 2 months', level: 1 },
  { max: 38, label: '1 deploy per month', level: 1 },
  { max: 48, label: '2 deploys per month', level: 1 },
  { max: 58, label: '1 deploy per week', level: 2 },
  { max: 70, label: '2 deploys per week', level: 2 },
  { max: 82, label: '1 deploy per day', level: 2 },
  { max: 92, label: 'Multiple deploys per day', level: 3 },
  { max: 100, label: 'On-demand deploys', level: 3 },
];

const getFrequencyFromSlider = (value: number) => {
  for (const step of frequencySteps) {
    if (value <= step.max) {
      return step;
    }
  }
  return frequencySteps[frequencySteps.length - 1];
};

const deploymentLevels = [
  {
    level: 0,
    label: 'Low',
    color: 'text-red-400',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/30',
    description: 'Deployments are rare, high-risk events requiring extensive planning and coordination.',
    characteristics: [
      'Releases require weeks of planning',
      'Large batch sizes with many changes bundled',
      'High failure rate when deploying',
      'Recovery can take days or weeks',
    ],
  },
  {
    level: 1,
    label: 'Medium',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/20',
    borderColor: 'border-amber-500/30',
    description: 'Deployments happen regularly but still feel like significant events.',
    characteristics: [
      'Monthly or quarterly release cycles',
      'Some automation but many manual steps',
      'Moderate failure rate',
      'Recovery takes hours to days',
    ],
  },
  {
    level: 2,
    label: 'High',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    description: 'Deployments are routine but still require some coordination.',
    characteristics: [
      'Weekly or bi-weekly releases',
      'Good automation with CI/CD pipelines',
      'Lower failure rate',
      'Recovery typically within hours',
    ],
  },
  {
    level: 3,
    label: 'Elite',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/20',
    borderColor: 'border-emerald-500/30',
    description: 'Deployments are a non-event. Code flows to production continuously.',
    characteristics: [
      'On-demand deployments, multiple per day',
      'Fully automated with comprehensive testing',
      'Very low failure rate (0-15%)',
      'Recovery in minutes, not hours',
    ],
  },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DeploymentsArticle() {
  const [sliderValue, setSliderValue] = useState(95);

  const currentFrequency = useMemo(() => getFrequencyFromSlider(sliderValue), [sliderValue]);
  const currentLevel = deploymentLevels[currentFrequency.level];

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-slate-950 text-slate-100 antialiased`}>
      <Navbar variant="subpage" />

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

          {/* Why Deployment Frequency Is a Metric for Success */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Why Deployment Frequency Is a Key Metric for Success
            </h2>
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                The intuition that "fewer releases means fewer problems" feels right. If deployments are risky,
                doing them less often should reduce risk. But research tells a different story.

                <br /><br />

                Studies across thousands of organizations have consistently shown that <strong>deployment frequency
                is one of the strongest predictors of overall software delivery performance</strong>. Teams that
                deploy more often—not less—tend to have lower failure rates and faster recovery times.
              </p>
            </div>

            {/* Deployment Frequency Slider */}
            <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                Where Does Your Team Fall?
              </h3>

              {/* Current Frequency Label */}
              <div className="text-center mb-6">
                <span className={`text-2xl font-bold ${currentLevel.color}`}>
                  {currentFrequency.label}
                </span>
              </div>

              {/* Slider */}
              <div className="mb-6">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right,
                      #ef4444 0%,
                      #f59e0b 33%,
                      #3b82f6 66%,
                      #10b981 100%)`
                  }}
                />
                <div className="flex justify-between mt-3 text-xs text-slate-400">
                  <span>1/year</span>
                  <span>1/month</span>
                  <span>1/week</span>
                  <span>Multiple/day</span>
                </div>
              </div>

              {/* Current Level Display */}
              <div className={`rounded-lg border ${currentLevel.borderColor} ${currentLevel.bgColor} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className={`text-sm font-medium ${currentLevel.color}`}>{currentLevel.label} Performer</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4">{currentLevel.description}</p>
                <ul className="space-y-2">
                  {currentLevel.characteristics.map((char, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-300">
                      <span className={`h-1.5 w-1.5 rounded-full ${currentLevel.color.replace('text-', 'bg-')} mt-1.5 mr-2 flex-shrink-0`}></span>
                      {char}
                    </li>
                  ))}
                </ul>
                {currentFrequency.level === 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      redirect("mailto:contact@solvelabs.dev?subject=Help%20Improving%20Deployment%20Frequency&utm_source=deployments_slider");
                    }}
                    className="mt-6 cursor-pointer inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-colors"
                  >
                    Learn how to fix →
                  </button>
                )}
              </div>

              {/* Level Comparison Bar */}
              <div className="mt-6 grid grid-cols-4 gap-2">
                {deploymentLevels.map((level, idx) => {
                  const targetValues = [10, 35, 65, 95];
                  return (
                    <button
                      key={idx}
                      onClick={() => setSliderValue(targetValues[idx])}
                      className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                        currentFrequency.level === idx
                          ? `${level.bgColor} ${level.color} border ${level.borderColor}`
                          : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 border border-transparent'
                      }`}
                    >
                      {level.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-lg text-slate-300 leading-relaxed">
                Elite engineering organizations deploy on-demand, often multiple times per day. Low performers
                deploy less than once per month. The gap between these two groups isn't just about speed—it
                correlates with every measure of engineering effectiveness.
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 pl-6 py-4 mb-8">
              <p className="text-lg text-slate-200">
                The key insight: <strong>speed and stability are not trade-offs</strong>. Elite teams achieve both.
                They deploy more frequently <em>and</em> have fewer failures. The practices that enable frequent
                deployment—automation, small batches, fast feedback—are the same practices that reduce risk.
              </p>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Manual deployments push teams in the opposite direction. Each deployment requires more effort,
                so teams deploy less frequently. Less frequent deployments mean larger releases.

                <br /><br />

                Larger releases are harder to test, harder to debug, and more likely to fail. Failed releases
                reinforce the perception that deployments are risky, which leads to even more caution, even
                more process, even less frequency.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                It's a vicious cycle that moves you further from elite performance with every iteration.
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
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Teams also adapt their behavior in ways that mask the problem. They ship less frequently, so
                the pain of each deployment is felt less often. They schedule deployments for low-traffic
                periods, so the consequences of failures are muted.

                <br /><br />

                They build in buffer time, so the delays are absorbed into project estimates. The problem
                doesn't disappear—it gets normalized.
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
                The goal isn't automation for its own sake. <strong>It's restoring the tight feedback loop you had in
                the early days—but at scale.</strong> It's making deployment a non-event so that shipping becomes the
                default, not the exception.
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
      <section className="py-16 pt-4 lg:pt-4 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
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

      <Footer currentPage="/concepts/deployments" />
    </div>
  );
}

