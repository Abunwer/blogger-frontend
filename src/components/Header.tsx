'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wide text-black hover:text-burnt-orange transition-colors">
            Desert Adventures
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sand-dark hover:text-burnt-orange transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="text-sand-dark hover:text-burnt-orange transition-colors font-medium"
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="text-sand-dark hover:text-burnt-orange transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sand-dark hover:text-burnt-orange transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 border border-sand rounded px-2 py-1">
            <button className="text-black hover:text-burnt-orange transition-colors text-sm font-medium">
              EN
            </button>
            <span className="text-sand/50">|</span>
            <button className="text-sand-dark hover:text-burnt-orange transition-colors text-sm font-medium">
              AR
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-sand-dark hover:text-burnt-orange">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

