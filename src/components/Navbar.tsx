'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  /** Whether this is the home page (uses anchor links) or a subpage (uses full paths) */
  variant?: 'home' | 'subpage';
}

const NAV_ITEMS = [
  { anchor: '#problem', path: '/#problem', label: 'Challenges' },
  { anchor: '#services', path: '/#services', label: 'Services' },
  { anchor: '#experience', path: '/#experience', label: 'Experience' },
  { anchor: '#contact', path: '/#contact', label: 'Contact' },
];

export function Navbar({ variant = 'home' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getHref = (item: typeof NAV_ITEMS[0]) => {
    return variant === 'home' ? item.anchor : item.path;
  };

  const ctaHref = variant === 'home' ? '#contact' : '/#contact';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Gradient line at top */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

        {/* Glass navbar container */}
        <div className="bg-slate-950/70 backdrop-blur-xl border-b border-white/[0.08]">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src="/logo.svg"
                    alt="Solvelabs"
                    width={36}
                    height={36}
                    className="h-9 w-9 relative"
                  />
                </div>
                <span className="text-lg font-semibold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Solvelabs
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center">
                <div className="flex items-center gap-1 bg-white/[0.03] rounded-full px-2 py-1.5 border border-white/[0.05]">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.anchor}
                      href={getHref(item)}
                      className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.05]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="hidden sm:flex items-center gap-4">
                <Link
                  href={ctaHref}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-[1.02]"
                >
                  <span className="relative z-10">Get started</span>
                  <svg
                    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden relative p-2 text-slate-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Open menu</span>
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-slate-950/95 backdrop-blur-xl border-b border-white/[0.08] px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.anchor}
                href={getHref(item)}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href={ctaHref}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg shadow-emerald-500/25"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-[65px]" />
    </>
  );
}

