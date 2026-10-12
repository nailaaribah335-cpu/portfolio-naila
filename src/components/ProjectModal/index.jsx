import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  UserCheck, 
  Award,
  Zap,
  Target
} from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ProjectModal = ({ project, allProjects = [], onClose, onSelectProject }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#1E1B4B]/60 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden z-10 my-auto animate-scale-up max-h-[85vh] flex flex-col">
        {/* Sticky Header with Close Button & Navigation */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-purple-100 sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              project.skillType === 'softskill' 
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' 
                : 'bg-[#8B5CF6]/10 text-[#7C3AED]'
            }`}>
              {project.skillType === 'softskill' ? 'Soft Skill' : 'Hard Skill'} • {project.category}
            </span>
            <span className="text-xs text-gray-500 font-semibold hidden sm:inline">• {project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Switchers */}
            <button
              onClick={() => onSelectProject(prevProject)}
              className="p-2 rounded-xl text-gray-500 hover:text-[#8B5CF6] hover:bg-purple-50 transition-colors border-none cursor-pointer"
              title={`Previous: ${prevProject.title}`}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="p-2 rounded-xl text-gray-500 hover:text-[#8B5CF6] hover:bg-purple-50 transition-colors border-none cursor-pointer"
              title={`Next: ${nextProject.title}`}
            >
              <ArrowRight size={18} />
            </button>
            <div className="w-px h-5 bg-gray-200 mx-1"></div>
            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500 transition-colors border-none cursor-pointer"
              title="Close modal (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar">
          {/* Hero Banner Section */}
          <div className="relative rounded-2xl overflow-hidden group shadow-lg border border-purple-100">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B] via-[#1E1B4B]/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {project.title}
              </h1>
              <p className="text-purple-200 text-sm sm:text-base max-w-2xl font-medium">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Quick Details & Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#F8F7FF] p-4 rounded-2xl border border-purple-100/60">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B5CF6] mb-1">
                <UserCheck size={14} /> Client
              </div>
              <p className="text-sm font-semibold text-[#1E1B4B]">{project.client}</p>
            </div>

            <div className="bg-[#F8F7FF] p-4 rounded-2xl border border-purple-100/60">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B5CF6] mb-1">
                <Layers size={14} /> Role
              </div>
              <p className="text-sm font-semibold text-[#1E1B4B]">{project.role}</p>
            </div>

            <div className="bg-[#F8F7FF] p-4 rounded-2xl border border-purple-100/60">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B5CF6] mb-1">
                <Calendar size={14} /> Year
              </div>
              <p className="text-sm font-semibold text-[#1E1B4B]">{project.year}</p>
            </div>

            <div className="bg-[#B9FF66]/20 p-4 rounded-2xl border border-[#B9FF66]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E1B4B] mb-1">
                <Award size={14} className="text-[#8B5CF6]" /> Key Impact
              </div>
              <p className="text-sm font-bold text-[#1E1B4B]">{project.impact?.[0] || 'High Scalability'}</p>
            </div>
          </div>

          {/* Impact Badges */}
          {project.impact && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.impact.map((metric, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E1B4B] text-white text-xs font-semibold shadow-sm">
                  <Sparkles size={12} className="text-[#B9FF66]" />
                  {metric}
                </span>
              ))}
            </div>
          )}

          {/* Breakdown: Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100 space-y-2">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <Target size={18} />
                The Challenge
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>

            <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <Zap size={18} />
                The Solution
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1E1B4B] flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <Sparkles size={18} className="text-[#8B5CF6]" />
              Key Features & Innovations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures?.map((feature, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#F8F7FF] border border-purple-100 flex gap-3 items-start group hover:border-[#8B5CF6]/40 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-[#8B5CF6]/10 text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1E1B4B] mb-0.5">{feature.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
              {project.skillType === 'softskill' ? 'Kompetensi & Soft Skills' : 'Technologies & Tools Used'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech, i) => (
                <span key={i} className="px-4 py-2 rounded-xl bg-white border border-purple-100 text-[#1E1B4B] text-xs font-semibold shadow-sm hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs Footer */}
          <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial px-6 py-3.5 rounded-2xl bg-[#1E1B4B] text-white hover:bg-[#8B5CF6] font-bold text-xs flex items-center justify-center gap-2 no-underline transition-all duration-300 shadow-lg hover:shadow-[#8B5CF6]/25"
                >
                  <span>{project.skillType === 'softskill' ? 'Dokumentasi / Detail Proyek' : 'Live Preview'}</span>
                  <ExternalLink size={14} className="text-[#B9FF66]" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial px-6 py-3.5 rounded-2xl bg-gray-100 text-[#1E1B4B] hover:bg-gray-200 font-bold text-xs flex items-center justify-center gap-2 no-underline transition-colors"
                >
                  <GithubIcon size={14} />
                  <span>View Code</span>
                </a>
              )}
            </div>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="text-xs font-bold text-[#8B5CF6] hover:text-[#7C3AED] flex items-center gap-1 cursor-pointer border-none bg-transparent group"
            >
              <span>Next project: {nextProject.title}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
