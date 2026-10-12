import React from 'react';
import { hardSkills, softSkills } from '../../data/globals';
import { Sparkles } from 'lucide-react';

/* ═══════════════════════════════════════════
   DECORATIVE ELEMENTS
   ═══════════════════════════════════════════ */
const DecoStar = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const DecoZigzag = ({ className = '' }) => (
  <svg width="80" height="16" viewBox="0 0 80 16" fill="none" className={className}>
    <path d="M0 8L10 2L20 14L30 2L40 14L50 2L60 14L70 2L80 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ═══════════════════════════════════════════
   BENTO GRID SKILL CARD
   ═══════════════════════════════════════════ */
const SkillCard = ({ skill, index, animateRef, variant = 'default' }) => {
  const variants = {
    default: 'bg-white',
    purple: 'bg-[#8B5CF6] text-white',
    accent: 'bg-[#B9FF66]',
    dark: 'bg-[#191A23] text-white',
  };

  const iconBgVariants = {
    default: 'bg-[#F3F4F6] text-[#191A23] group-hover:bg-[#8B5CF6] group-hover:text-white',
    purple: 'bg-white/20 text-white',
    accent: 'bg-[#191A23]/10 text-[#191A23]',
    dark: 'bg-white/10 text-[#B9FF66]',
  };

  const textVariants = {
    default: 'text-[#191A23]',
    purple: 'text-white',
    accent: 'text-[#191A23]',
    dark: 'text-white',
  };

  const subtextVariants = {
    default: 'text-[#9CA3AF]',
    purple: 'text-white/70',
    accent: 'text-[#191A23]/60',
    dark: 'text-white/50',
  };

  return (
    <div
      className={`group ${variants[variant]} rounded-2xl border border-[#E5E7EB]/50 p-6 card-3d anim-fade-up delay-${(index % 6) + 1} ${
        index === 0 ? 'md:col-span-2' : ''
      }`}
      ref={animateRef}
    >
      <div className={`w-12 h-12 rounded-xl ${iconBgVariants[variant]} flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
        {skill.icon}
      </div>
      <h3 className={`text-base font-bold ${textVariants[variant]} mb-1`}>{skill.title}</h3>
      <p className={`text-xs ${subtextVariants[variant]}`}>Professional level</p>
    </div>
  );
};

/* ═══════════════════════════════════════════
   SKILLS COMPONENT
   ═══════════════════════════════════════════ */
const Skills = ({ animateRef }) => {
  // Assign varied styles to bento cards
  const cardVariants = ['default', 'purple', 'default', 'accent', 'dark', 'default'];

  return (
    <section id="skills" className="py-8">
      {/* Main skills card */}
      <div className="section-card relative">
        {/* Decorations */}
        <DecoStar size={18} className="absolute top-8 right-10 text-[#B9FF66] float-slow" />
        <DecoStar size={12} className="absolute top-16 right-24 text-[#8B5CF6]/40 float-medium" />
        <DecoZigzag className="absolute bottom-8 right-12 text-[#8B5CF6]/20" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
          <div className="anim-fade-left" ref={animateRef}>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#191A23]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Technical <span className="highlight-purple">Arsenal</span>
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-[#E5E7EB] anim-fade-right" ref={animateRef}></div>
          <p className="text-sm text-[#6B7280] md:max-w-[280px] anim-fade-right" ref={animateRef}>
            If something seems familiar, a strategic session might be exactly what you need.
          </p>
        </div>

        {/* Hard Skills Label */}
        <div className="flex items-center gap-3 mb-6 anim-fade-up" ref={animateRef}>
          <span className="px-4 py-1.5 rounded-full bg-[#191A23] text-white text-xs font-semibold tracking-wide uppercase flex items-center gap-2">
            <Sparkles size={12} />
            Hard Skills
          </span>
          <p className="text-sm text-[#6B7280]">Technical expertise & tools</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {hardSkills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              index={index}
              animateRef={animateRef}
              variant={cardVariants[index]}
            />
          ))}
        </div>

        {/* Soft Skills Label */}
        <div className="flex items-center gap-3 mb-6 anim-fade-up" ref={animateRef}>
          <span className="px-4 py-1.5 rounded-full bg-[#B9FF66] text-[#191A23] text-xs font-semibold tracking-wide uppercase flex items-center gap-2">
            <Sparkles size={12} />
            Soft Skills
          </span>
          <p className="text-sm text-[#6B7280]">Interpersonal & leadership</p>
        </div>

        {/* Soft Skills Marquee */}
        <div className="overflow-hidden rounded-2xl anim-fade-up" ref={animateRef}>
          <div className="flex marquee-track" style={{ width: 'max-content' }}>
            {[...softSkills, ...softSkills, ...softSkills].map((skill, index) => (
              <div
                key={`${skill.title}-${index}`}
                className="flex-shrink-0 mx-2 px-5 py-3 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] flex items-center gap-3 transition-all duration-300 hover:border-[#8B5CF6] hover:shadow-[0_4px_20px_rgba(139,92,246,0.15)] hover:bg-white"
              >
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6]">
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-[#191A23] whitespace-nowrap">{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote banner */}
      <div className="bg-[#191A23] rounded-[32px] p-8 md:p-12 mt-4 relative overflow-hidden anim-scale-in" ref={animateRef}>
        {/* Background decorations */}
        <DecoStar size={40} className="absolute top-6 left-8 text-white/5 spin-slow" />
        <DecoStar size={60} className="absolute bottom-4 right-10 text-[#B9FF66]/10 spin-reverse" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#8B5CF6]/20 rounded-full blur-[80px]"></div>

        <div className="relative z-10 text-center">
          <DecoStar size={24} className="text-[#B9FF66] mx-auto mb-4 wiggle" />
          <p className="text-xl md:text-2xl text-white font-bold leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            KEEP <span className="highlight text-[#191A23]">CREATING</span> UNTIL YOU
            <br />
            FIND YOUR OWN <span className="font-extrabold underline decoration-[#8B5CF6] decoration-4 underline-offset-4">AUDIENCE.</span>
          </p>
          <p className="text-sm text-[#9CA3AF] mt-6">— Continuous Learning Mindset</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
