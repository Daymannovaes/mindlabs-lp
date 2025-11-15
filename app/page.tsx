export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
              JavaScript and TypeScript expertise for engineering teams
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              We help engineering teams build better JavaScript and TypeScript applications. From architecture and code quality
              to tooling and best practices—we bring deep expertise to your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors"
              >
                Start a conversation
              </a>
              <a
                href="#approach"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors"
              >
                See how we work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              Common challenges engineering teams face
            </h2>
            <p className="text-lg text-gray-600">
              Many JavaScript and TypeScript teams struggle with the same fundamental issues that slow down delivery,
              increase risk, and make development frustrating.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Deployment & Infrastructure</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Hard to deploy or no CI/CD pipeline in place</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Build processes are slow, unreliable, or break frequently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>No automated testing in the deployment pipeline</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Code Quality & Bugs</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Too many bugs and mounting technical debt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Developers can't fix a bug without creating more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Low or no test coverage makes changes risky</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Inconsistent code patterns across the codebase</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Maintainability & Knowledge</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Legacy code that no one knows how to maintain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Hard to onboard new developers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Outdated dependencies with security vulnerabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>Performance issues that are hard to diagnose and fix</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">The real cost</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">On your team</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>Deployments become risky, manual processes that take hours or days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>Production incidents and bug reports pile up faster than they can be fixed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>Team velocity slows as developers spend more time fixing bugs than building features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>Critical parts of the codebase become "no-touch zones" that block new development</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">On your business</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>Feature delivery slows down, missing market opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>Customer-facing bugs and performance issues damage reputation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>Hiring becomes harder as developers avoid working with legacy codebases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>Technical debt compounds, making future improvements exponentially more expensive</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              Services we offer
            </h2>
            <p className="text-lg text-gray-600">
              From architecture reviews to hands-on development, we provide JavaScript and TypeScript expertise
              tailored to your team's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">DevOps Consultation</h3>
              <ul className="space-y-2 text-gray-600 text-sm flex-1 mb-4">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>CI/CD pipelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Infrastructure as Code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Process automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Team training</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Learn more
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Increasing Code Coverage</h3>
              <ul className="space-y-2 text-gray-600 text-sm flex-1 mb-4">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Set up testing frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Write tests for critical paths</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Establish quality gates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Identify untested code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Create strategy to systematically increase coverage</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Learn more
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Refactor Legacy Code</h3>
              <ul className="space-y-2 text-gray-600 text-sm flex-1 mb-4">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Modernize legacy JavaScript/TypeScript codebases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Incremental refactoring approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Introduce tests for legacy code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Establish maintainable patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Reduce technical debt without disrupting development</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Learn more
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Code Quality & Standards</h3>
              <ul className="space-y-2 text-gray-600 text-sm flex-1 mb-4">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Establish coding standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Implement linting and formatting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Improve code consistency across codebase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Reduce bugs and accelerate development</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Learn more
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Consulting & Mentoring</h3>
              <ul className="space-y-2 text-gray-600 text-sm flex-1 mb-4">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Review pull requests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Provide technical guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Mentor team on JavaScript/TypeScript best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Level up your entire engineering team</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Learn more
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Development</h3>
              <ul className="space-y-2 text-gray-600 text-sm flex-1 mb-4">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span><span className="font-medium">+15 years of experienced senior developers</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Hands-on with your team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Build features, refactor code, implement complex functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>Production-ready code your team can maintain</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              Our experience
            </h2>
            <p className="text-lg text-gray-600">
              We've worked with engineering teams across industries, from startups to enterprise companies,
              helping them build better JavaScript and TypeScript applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">10+</div>
              <div className="text-sm text-gray-600">Years of experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">Projects delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">200+</div>
              <div className="text-sm text-gray-600">Developers mentored</div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Technologies we work with</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">JavaScript</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">TypeScript</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">React</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Node.js</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Webpack</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Next.js</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Vue.js</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Angular</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Vite</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Jest</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Vitest</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">CI/CD</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Docker</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Kubernetes</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">GitHub Actions</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Capacitor</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Playwright</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Cypress</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Let's work together
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether you need a one-time audit, ongoing guidance, or hands-on development work, we're here to help.
            Let's discuss how we can support your JavaScript and TypeScript projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@solvelabs.com"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="mailto:hello@solvelabs.com?subject=Consultation Request"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-900 px-8 py-3 text-base font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
            >
              Schedule a call
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            No obligation—just a conversation about how we can help your team build better JavaScript and TypeScript applications.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Solvelabs</h3>
              <p className="text-sm text-gray-600">
                JavaScript and TypeScript consultancy for engineering teams.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#services" className="hover:text-gray-900">Architecture & Design</a></li>
                <li><a href="#services" className="hover:text-gray-900">Code Quality</a></li>
                <li><a href="#services" className="hover:text-gray-900">Custom Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#approach" className="hover:text-gray-900">Our Approach</a></li>
                <li><a href="#problem" className="hover:text-gray-900">The Problem</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="mailto:hello@solvelabs.com" className="hover:text-gray-900">hello@solvelabs.com</a></li>
                <li><a href="#contact" className="hover:text-gray-900">Get Assessment</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} Solvelabs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
