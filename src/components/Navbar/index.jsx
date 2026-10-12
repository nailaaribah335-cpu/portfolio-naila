import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

/* Magnetic button component */
const MagneticButton = ({ children, className = '', ...props }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <div
      ref={btnRef}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-[1200px] transition-all duration-500 rounded-2xl border ${
        isDark
          ? scrolled
            ? 'bg-[#18181B]/95 backdrop-blur-xl border-zinc-800 shadow-2xl text-white'
            : 'bg-[#18181B] border-zinc-800 shadow-2xl text-white'
          : scrolled
            ? 'bg-white/95 backdrop-blur-xl border-purple-100/80 shadow-lg text-[#1E1B4B]'
            : 'bg-white border-purple-100 shadow-xl text-[#1E1B4B]'
      }`}
    >
      <div className="flex items-center justify-between h-14 px-6">
        {/* Logo */}
        <MagneticButton>
          <a
            href="#"
            className={`font-bold text-lg flex items-center gap-1 no-underline ${
              isDark ? 'text-white' : 'text-[#191A23]'
            }`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Naila
            <span className="inline-block w-2 h-2 rounded-full bg-[#B9FF66] ml-0.5 animate-pulse"></span>
          </a>
        </MagneticButton>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <MagneticButton key={link.label}>
              <a
                href={link.href}
                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 no-underline hover:bg-[#8B5CF6]/10 ${
                  isDark
                    ? 'text-zinc-300 hover:text-white'
                    : 'text-[#64748B] hover:text-[#191A23]'
                }`}
              >
                {link.label}
              </a>
            </MagneticButton>
          ))}
        </nav>

        {/* Actions: Theme Toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <MagneticButton>
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer ${
                isDark
                  ? 'bg-zinc-800 border-zinc-700 text-[#B9FF66]'
                  : 'bg-purple-50 border-purple-100 text-[#7C3AED]'
              }`}
              title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={18} className="animate-spin-slow" />
              ) : (
                <Moon size={18} className="transition-transform hover:-rotate-12" />
              )}
            </button>
          </MagneticButton>

          {/* CTA */}
          <MagneticButton>
            <a
              href="#contact"
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white no-underline transition-all duration-300 hover:shadow-[0_8px_30px_rgba(139,92,246,0.4)] ${
                isDark
                  ? 'bg-[#8B5CF6] hover:bg-[#7C3AED]'
                  : 'bg-[#191A23] hover:bg-[#8B5CF6]'
              }`}
            >
              Let's Talk
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </MagneticButton>

          {/* Mobile toggle */}
          <button
            className={`md:hidden bg-transparent border-none p-2 ${
              isDark ? 'text-white' : 'text-[#191A23]'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? 'max-h-[320px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-6 py-4 flex flex-col gap-1 border-t ${
          isDark ? 'border-zinc-800' : 'border-purple-100'
        }`}>
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-base font-medium py-3 px-4 rounded-xl no-underline transition-all duration-300 hover:bg-[#8B5CF6]/10 ${
                isDark ? 'text-zinc-300 hover:text-white' : 'text-[#64748B] hover:text-[#191A23]'
              }`}
              onClick={() => setMobileOpen(false)}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`mt-2 text-center px-5 py-3 rounded-full text-sm font-semibold text-white no-underline ${
              isDark ? 'bg-[#8B5CF6]' : 'bg-[#191A23]'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Let's Talk ↗
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

