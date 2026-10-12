import React, { useState } from 'react';
import { projectsData } from '../../data/globals';
import { ArrowUpRight, ExternalLink, Sparkles, Layers, Terminal, Users, Filter } from 'lucide-react';
import ProjectModal from '../ProjectModal';

/* ═══════════════════════════════════════════════════════════
   KOMPONEN PORTFOLIO SHOWCASE
   Dibuat bersih (clean code) dan ringan agar cepat di HP & mudah dipahami.
   ═══════════════════════════════════════════════════════════ */
const Projects = ({ animateRef }) => {
  // State 1: Tab Utama ('hardskill' atau 'softskill')
  const [activeTab, setActiveTab] = useState('hardskill');
  
  // State 2: Sub-filter kategori ('All', 'P5', 'Freelance', dll)
  const [activeCategory, setActiveCategory] = useState('All');
  
  // State 3: Modal detail proyek yang sedang dibuka
  const [selectedProject, setSelectedProject] = useState(null);

  // Daftar sub-filter untuk masing-masing tab
  const hardSkillCategories = ['All', 'Freelance', 'School', 'Competition'];
  const softSkillCategories = ['All', 'P5', 'Volunteer', 'Organisasi'];

  const currentCategories = activeTab === 'hardskill' ? hardSkillCategories : softSkillCategories;

  // 1. Ambil proyek sesuai tab aktif (Hard Skill atau Soft Skill)
  const projectsByTab = projectsData.filter((p) => p.skillType === activeTab);

  // 2. Filter lebih lanjut berdasarkan sub-kategori
  const filteredProjects =
    activeCategory === 'All'
      ? projectsByTab
      : projectsByTab.filter((p) => p.category === activeCategory);

  // Fungsi ganti tab (otomatis reset sub-kategori ke 'All')
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveCategory('All');
  };

  // Jumlah proyek di masing-masing tab
  const totalHardSkills = projectsData.filter((p) => p.skillType === 'hardskill').length;
  const totalSoftSkills = projectsData.filter((p) => p.skillType === 'softskill').length;

  return (
    <section id="projects" className="py-8">
      {/* Kartu Wadah Showcase */}
      <div className="section-card relative">
        
        {/* Header Bagian Showcase */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#7C3AED] dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers size={14} className="text-[#8B5CF6]" />
              Portfolio Showcase
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1E1B4B] dark:text-white"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Featured <span className="highlight">Projects & Experience</span>
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-purple-100 dark:bg-zinc-800"></div>
          <p className="text-sm text-[#64748B] dark:text-zinc-400 md:max-w-[320px] font-medium leading-relaxed">
            Pilih antara <strong>Hard Skill</strong> (proyek teknis & koding) atau <strong>Soft Skill</strong> (kegiatan P5, relawan, & organisasi).
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            AREA FILTER TINGKAT 1 & 2 (LIGHT & DARK MODE COMPATIBLE)
           ═══════════════════════════════════════════ */}
        <div className="space-y-5 mb-8">
          
          {/* TINGKAT 1: Tab Switcher (Hard Skill vs Soft Skill) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-purple-100 dark:border-zinc-800">
            <div className="inline-flex items-center p-1.5 bg-purple-50/80 dark:bg-zinc-800/90 rounded-2xl border border-purple-200/70 dark:border-zinc-700 shadow-xs">
              
              {/* Tombol Hard Skill */}
              <button
                type="button"
                onClick={() => handleTabChange('hardskill')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === 'hardskill'
                    ? 'bg-[#7C3AED] text-white shadow-md shadow-purple-500/25 scale-[1.02]'
                    : 'text-[#64748B] dark:text-zinc-300 hover:text-[#7C3AED] dark:hover:text-white hover:bg-white/80 dark:hover:bg-zinc-700/60'
                }`}
              >
                <Terminal size={16} className={activeTab === 'hardskill' ? 'text-[#B9FF66]' : 'text-purple-400'} />
                <span>Hard Skill</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === 'hardskill'
                    ? 'bg-[#B9FF66] text-[#1E1B4B]'
                    : 'bg-white dark:bg-zinc-700 text-[#7C3AED] dark:text-purple-300 border border-purple-200/50 dark:border-zinc-600'
                }`}>
                  {totalHardSkills}
                </span>
              </button>

              {/* Tombol Soft Skill */}
              <button
                type="button"
                onClick={() => handleTabChange('softskill')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === 'softskill'
                    ? 'bg-[#7C3AED] text-white shadow-md shadow-purple-500/25 scale-[1.02]'
                    : 'text-[#64748B] dark:text-zinc-300 hover:text-[#7C3AED] dark:hover:text-white hover:bg-white/80 dark:hover:bg-zinc-700/60'
                }`}
              >
                <Users size={16} className={activeTab === 'softskill' ? 'text-[#B9FF66]' : 'text-purple-400'} />
                <span>Soft Skill</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === 'softskill'
                    ? 'bg-[#B9FF66] text-[#1E1B4B]'
                    : 'bg-white dark:bg-zinc-700 text-[#7C3AED] dark:text-purple-300 border border-purple-200/50 dark:border-zinc-600'
                }`}>
                  {totalSoftSkills}
                </span>
              </button>
            </div>

            {/* Label Deskripsi Singkat */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B] dark:text-zinc-400">
              <span className={`w-2 h-2 rounded-full ${activeTab === 'hardskill' ? 'bg-[#7C3AED]' : 'bg-[#10B981]'} animate-pulse`}></span>
              <span>
                {activeTab === 'hardskill' 
                  ? 'Karya teknis, frontend, fullstack & capstone' 
                  : 'Projek P5, aktivitas kerelawanan & kepanitiaan'}
              </span>
            </div>
          </div>

          {/* TINGKAT 2: Sub-filter Pills (All, P5, Volunteer, dll) */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-zinc-400 mr-2 uppercase tracking-wider">
              <Filter size={13} className="text-[#8B5CF6]" />
              <span>Kategori:</span>
            </div>

            {currentCategories.map((cat) => {
              const isSelected = activeCategory === cat;
              const count = cat === 'All'
                ? projectsByTab.length
                : projectsByTab.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#8B5CF6] text-white border-[#8B5CF6] shadow-sm shadow-[#8B5CF6]/30 scale-105'
                      : 'bg-white dark:bg-zinc-800 text-[#64748B] dark:text-zinc-300 border-purple-200/80 dark:border-zinc-700 hover:border-[#8B5CF6] hover:text-[#8B5CF6] hover:bg-purple-50/50'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isSelected
                      ? 'bg-white/25 text-white'
                      : 'bg-purple-50 dark:bg-zinc-700 text-[#7C3AED] dark:text-zinc-300'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            GRID DAFTAR PROYEK (Ringan, Cepat di HP & Selalu Muncul)
           ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white dark:bg-zinc-900 rounded-3xl border border-purple-100/90 dark:border-zinc-800 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-purple-900/5 dark:hover:shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
            >
              {/* Gambar Proyek dengan Overlay */}
              <div className="relative overflow-hidden aspect-[16/10] bg-purple-50 dark:bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* Gradient gelap halus di bawah gambar untuk teks */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Tombol view badge di pojok kanan atas */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#B9FF66] transition-all duration-300">
                  <ArrowUpRight size={17} className="text-[#1E1B4B] dark:text-white group-hover:text-[#1E1B4B]" />
                </div>

                {/* Badge Kategori & Skill Type di pojok kiri bawah gambar */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-bold text-white px-3 py-1 rounded-full shadow-md backdrop-blur-md ${
                    project.skillType === 'softskill'
                      ? 'bg-emerald-600'
                      : 'bg-[#8B5CF6]'
                  }`}>
                    {project.category}
                  </span>
                  <span className="text-xs font-bold text-white/95 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {project.year}
                  </span>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider ${
                    project.skillType === 'softskill'
                      ? 'bg-[#B9FF66] text-[#1E1B4B]'
                      : 'bg-white text-[#7C3AED]'
                  }`}>
                    {project.skillType === 'softskill' ? 'Soft Skill' : 'Hard Skill'}
                  </span>
                </div>
              </div>

              {/* Konten Keterangan Proyek */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-xl font-bold text-[#1E1B4B] dark:text-white group-hover:text-[#8B5CF6] transition-colors duration-200 mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-[#64748B] dark:text-zinc-400 line-clamp-2 leading-relaxed font-medium">
                    {project.tagline}
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  {/* Highlight Dampak / Prestasi */}
                  {project.impact && project.impact[0] && (
                    <div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#7C3AED] dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-1 rounded-lg border border-purple-100 dark:border-purple-800/40">
                        <Sparkles size={11} className="text-[#8B5CF6]" />
                        {project.impact[0]}
                      </span>
                    </div>
                  )}

                  {/* Preview Tag Keahlian */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-gray-50 dark:bg-zinc-800 text-[#475569] dark:text-zinc-300 border border-gray-200/60 dark:border-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded-md bg-gray-50 dark:bg-zinc-800 text-gray-400">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Tombol Aksi Bawah */}
                  <div className="pt-2 flex items-center justify-between border-t border-purple-50 dark:border-zinc-800/80">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B5CF6] group-hover:text-[#7C3AED] transition-colors">
                      Lihat Detail Lengkap
                      <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="text-[11px] text-gray-400 dark:text-zinc-500 font-medium">Klik untuk inspect →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* State Kosong (Jika Tidak Ada Proyek di Filter Tersebut) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-zinc-800/50 rounded-3xl border border-dashed border-purple-200 dark:border-zinc-700 p-8 space-y-3">
            <p className="text-base font-semibold text-gray-600 dark:text-gray-300">Belum ada item untuk kategori ini.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="px-4 py-2 rounded-xl bg-[#8B5CF6] text-white text-xs font-bold cursor-pointer hover:bg-[#7C3AED] transition-colors"
            >
              Reset ke All
            </button>
          </div>
        )}
      </div>

      {/* Modal Detail Proyek Pop-up */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          allProjects={filteredProjects}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      )}
    </section>
  );
};

export default Projects;


