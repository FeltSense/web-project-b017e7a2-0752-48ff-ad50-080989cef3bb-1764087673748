'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-purple-500/10 border-b border-purple-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-cyan-500 p-2 rounded-lg">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              TechFlow
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#pricing"
              className="relative inline-flex items-center px-6 py-2.5 font-semibold text-white transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50"></div>
              <span className="relative">Get Started</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 bg-slate-900/95 backdrop-blur-lg border-b border-purple-500/20">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white transition-colors duration-200 font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}