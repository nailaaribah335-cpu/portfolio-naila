import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Sparkles, Star, Zap } from 'lucide-react';

/* ═══════════════════════════════════════════
   COUNTER ANIMATION
   ═══════════════════════════════════════════ */
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ═══════════════════════════════════════════
   DECORATIVE SVG ELEMENTS
   ═══════════════════════════════════════════ */
const DecoStar = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const DecoCross = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className}>
    <rect x="8" y="0" width="4" height="20" rx="2" />
    <rect x="0" y="8" width="20" height="4" rx="2" />
  </svg>
);

const DecoCircle = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
    <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const DecoWave = ({ className = '' }) => (
  <svg width="120" height="20" viewBox="0 0 120 20" fill="none" className={className}>
    <path d="M0 10C10 0 20 20 30 10C40 0 50 20 60 10C70 0 80 20 90 10C100 0 110 20 120 10"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/* ═══════════════════════════════════════════
   HERO COMPONENT
   ═══════════════════════════════════════════ */
const Hero = ({ animateRef }) => {
  return (
    <section id="about" className="pt-28 pb-8">
      {/* Hero Main Card */}
      <div className="section-card relative overflow-visible">
        {/* Floating decorative elements */}
        <DecoStar size={20} className="absolute top-8 right-12 text-[#8B5CF6] float-slow opacity-60" />
        <DecoStar size={14} className="absolute top-20 right-32 text-[#B9FF66] float-medium opacity-80" />
        <DecoCross size={16} className="absolute bottom-12 left-8 text-[#8B5CF6]/40 spin-slow" />
        <DecoCircle size={12} className="absolute top-16 left-[30%] text-[#B9FF66] float-fast" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          {/* Left content */}
          <div className="flex-1 min-w-0">
            {/* Badge */}
            <div className="anim-fade-up mb-6" ref={animateRef}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 text-sm font-medium text-[#8B5CF6] border border-[#8B5CF6]/20">
                <Sparkles size={14} />
                Welcome to my Portfolio
              </span>
            </div>

            {/* Main heading with text reveal */}
            <div className="mb-6">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#191A23]"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <div className="text-reveal-line anim-fade-up" ref={animateRef}>
                  <span>Helping brands grow</span>
                </div>
                <div className="text-reveal-line anim-fade-up delay-1" ref={animateRef}>
                  <span>& shine in the</span>
                </div>
                <div className="text-reveal-line anim-fade-up delay-2" ref={animateRef}>
                  <span><em className="highlight">digital world</em></span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base text-[#6B7280] leading-relaxed mb-8 max-w-lg anim-fade-up delay-3" ref={animateRef}>
              I'm an Informatics Management student passionate about UI/UX and Web Development.
              I love combining creative design with clean, efficient code to build interactive web experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 anim-fade-up delay-4" ref={animateRef}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#191A23] text-white no-underline transition-all duration-300 hover:bg-[#8B5CF6] hover:shadow-[0_10px_30px_rgba(139,92,246,0.4)] hover:-translate-y-0.5"
              >
                View Projects
                <ChevronRight size={16} />
              </a>
              <a
                href="/assets/CV - Naila.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-[#191A23] border border-[#E5E7EB] no-underline transition-all duration-300 hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/5 hover:-translate-y-0.5"
              >
                Download CV ↓
              </a>
            </div>
          </div>

          {/* Right illustration */}
          <div className="flex-1 min-w-0 flex justify-center anim-scale-in delay-2" ref={animateRef}>
            <div className="relative">
              <img
                src="/hero-illustration.jpg"
                alt="Developer illustration"
                className="w-full max-w-[420px] rounded-3xl"
                loading="eager"
              />
              {/* Floating badge over image */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 float-medium border border-purple-100">
                <div className="w-8 h-8 rounded-full bg-[#B9FF66] flex items-center justify-center">
                  <Zap size={14} className="text-[#191A23]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#191A23]">Available Now</p>
                  <p className="text-[10px] text-[#9CA3AF]">For freelance work</p>
                </div>
              </div>

              {/* Another floating element */}
              <div className="absolute -top-3 -right-3 bg-[#8B5CF6] rounded-xl shadow-lg px-3 py-2 float-slow">
                <p className="text-xs font-bold text-white">⭐ UI/UX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats cards row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        {/* Stat 1 */}
        <div className="section-card !p-6 anim-fade-up delay-1 card-3d" ref={animateRef}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl font-bold text-[#191A23]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <AnimatedCounter target={150} suffix="+" />
            </span>
            <div className="w-10 h-10 rounded-full bg-[#B9FF66] flex items-center justify-center wiggle">
              <Star size={18} className="text-[#191A23]" />
            </div>
          </div>
          <p className="text-sm text-[#6B7280]">Hours of coding</p>
        </div>

        {/* Stat 2 (Dark) */}
        <div className="bg-[#191A23] rounded-[32px] p-6 anim-fade-up delay-2 card-3d" ref={animateRef}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <AnimatedCounter target={300} suffix="+" />
            </span>
            <div className="w-10 h-10 rounded-full bg-[#B9FF66] flex items-center justify-center wiggle"
              style={{ animationDelay: '0.5s' }}
            >
              <Sparkles size={18} className="text-[#191A23]" />
            </div>
          </div>
          <p className="text-sm text-[#9CA3AF]">Cups of coffee ☕</p>
        </div>

        {/* Stat 3 */}
        <div className="section-card !p-6 anim-fade-up delay-3 card-3d" ref={animateRef}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl font-bold text-[#191A23]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <AnimatedCounter target={7} suffix=" yrs" />
            </span>
            <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center wiggle"
              style={{ animationDelay: '1s' }}
            >
              <Zap size={18} className="text-white" />
            </div>
          </div>
          <p className="text-sm text-[#6B7280]">Years of learning</p>
        </div>
      </div>

      {/* Profile row */}
      <div className="section-card mt-4 anim-fade-up" ref={animateRef}>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <img
              src="/avatar.jpg"
              alt="Naila's photo"
              className="w-20 h-20 rounded-full object-cover border-4 border-[#B9FF66] shadow-lg"
              loading="lazy"
            />
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#22C55E] border-2 border-white flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            </span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg font-bold text-[#191A23]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Hi, I'm Naila Aribah Zahra 👋
            </p>
            <p className="text-sm text-[#6B7280]">
             Saya adalah siswi Rekayasa Perangkat Lunak (RPL) dengan fokus pada perancangan website dan aplikasi. Saya berpengalaman membangun sistem menggunakan Laravel, React JS, Kotlin, hingga MySQL. Selain keahlian teknis, saya aktif dalam manajemen organisasi (Sekretaris & Bendahara P5) serta kegiatan volunteer. Berbekal hard skill dan soft skill tersebut, saya bersemangat melanjutkan pendidikan IT untuk menciptakan solusi digital yang inovatif.
            </p>
          </div>
          <DecoWave className="hidden md:block text-[#8B5CF6]/30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
