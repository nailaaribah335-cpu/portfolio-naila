import React from 'react';
import { Code2, Briefcase, Mail, Heart, ArrowUp, Globe, Share2 } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Footer = ({ animateRef }) => {
  const socialLinks = [
    { icon: <GithubIcon size={18} />, label: 'GitHub', href: 'https://github.com' },
    { icon: <LinkedinIcon size={18} />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <TwitterIcon size={18} />, label: 'Twitter', href: 'https://twitter.com' },
    { icon: <Mail size={18} />, label: 'Email', href: 'mailto:hello@naila.dev' },
  ];

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-100 bg-white/60 backdrop-blur-lg animate-on-scroll relative mt-16" ref={animateRef}>
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <a
            href="#"
            className="font-black text-2xl text-[#1E1B4B] flex items-center gap-1.5 no-underline group"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Naila
            <span className="w-2.5 h-2.5 rounded-full bg-[#B9FF66] border border-[#8B5CF6] group-hover:scale-150 transition-transform duration-300"></span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#64748B] hover:text-[#8B5CF6] no-underline transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5CF6] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl border border-purple-100 bg-[#F8F7FF] flex items-center justify-center text-[#64748B] no-underline transition-all duration-300 hover:bg-[#8B5CF6] hover:text-white hover:border-[#8B5CF6] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#8B5CF6]/30"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#64748B]">
          <p className="flex items-center gap-1">
            &copy; {new Date().getFullYear()} Naila. Designed with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> & built with React + Tailwind.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-[#8B5CF6] bg-[#8B5CF6]/10 px-4 py-2 rounded-full hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 cursor-pointer border-none group"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

