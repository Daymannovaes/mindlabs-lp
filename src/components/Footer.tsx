import Link from 'next/link';

interface FooterProps {
  /** The current page path to highlight in the Resources section */
  currentPage?: '/concepts/metrics' | '/concepts/testing' | '/concepts/deployments';
}

export function Footer({ currentPage }: FooterProps) {
  return (
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
              <li>
                <Link
                  href="/concepts/metrics"
                  className={`hover:text-emerald-400 transition-colors ${currentPage === '/concepts/metrics' ? 'text-emerald-400' : ''}`}
                >
                  Software Metrics
                </Link>
              </li>
              <li>
                <Link
                  href="/concepts/testing"
                  className={`hover:text-emerald-400 transition-colors ${currentPage === '/concepts/testing' ? 'text-emerald-400' : ''}`}
                >
                  Automated Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/concepts/deployments"
                  className={`hover:text-emerald-400 transition-colors ${currentPage === '/concepts/deployments' ? 'text-emerald-400' : ''}`}
                >
                  Manual Deployments
                </Link>
              </li>
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
  );
}

