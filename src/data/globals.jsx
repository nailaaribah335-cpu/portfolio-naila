import React from 'react';
import { 
  Globe, 
  Terminal, 
  Database, 
  MonitorSmartphone, 
  Cloud,
  Plug,
  MessageCircle,
  Users,
  Lightbulb,
  Clock,
  RefreshCw,
  Crown
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   PANDUAN MENAMBAHKAN PROJEK BARU:
   - skillType: isi 'hardskill' atau 'softskill'
   - category: 
       * Untuk hardskill: 'Freelance' | 'School' | 'Competition'
       * Untuk softskill: 'P5' | 'Volunteer' | 'Organisasi'
   - image: letakkan file gambar di folder public/ lalu panggil '/nama-gambar.jpg'
   - githubUrl / demoUrl: jika tidak ada link, isi dengan null
   ═══════════════════════════════════════════════════════════ */
export const projectsData = [
  {
    id: 1,
    title: 'Nova AI Workspace',
    tagline: 'Next-gen collaborative workspace with embedded AI assistants and real-time canvas.',
    skillType: 'hardskill',
    category: 'Freelance',
    image: '/project1.jpg',
    year: '2026',
    client: 'Nova Tech Inc.',
    role: 'Lead Frontend Engineer & UI Designer',
    demoUrl: 'https://example.com/nova',
    githubUrl: 'https://github.com/naila/nova-workspace',
    impact: ['+150k Active Users', '99.9% Uptime', '4.9★ User Rating'],
    challenge: 'Managing real-time multiplayer cursor synchronization and heavy rich-text rendering while keeping 60 FPS performance across all devices.',
    solution: 'Engineered a custom WebGL & Canvas rendering pipeline combined with WebSockets for ultra-low latency data syncing and optimistic state updates.',
    keyFeatures: [
      { title: 'Real-time Canvas', desc: 'Infinite multiplayer whiteboard with vector node drawing and AI auto-grouping.' },
      { title: 'Embedded Copilot', desc: 'Context-aware LLM sidebar capable of generating UI code, diagrams, and documentation.' },
      { title: 'Offline First', desc: 'IndexedDB persistent state storage with conflict-free replicated data types (CRDT).' },
      { title: 'Theme Engine', desc: 'Customizable glassmorphism theme system with dynamic accent palettes.' }
    ],
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'WebSockets', 'Canvas API', 'Node.js', 'PostgreSQL']
  },
  {
    id: 2,
    title: 'Zenith FinTech Dashboard',
    tagline: 'High-frequency crypto & stock analytics dashboard with real-time charting.',
    skillType: 'hardskill',
    category: 'School',
    image: '/project2.jpg',
    year: '2025',
    client: 'University Final Capstone',
    role: 'Fullstack Developer',
    demoUrl: 'https://example.com/zenith',
    githubUrl: 'https://github.com/naila/zenith-fintech',
    impact: ['Grade A+ Capstone', 'Sub-50ms Data Feed', 'Tested with 1M rows'],
    challenge: 'Visualizing thousands of ticker updates per second without freezing the DOM or causing layout shifts.',
    solution: 'Implemented virtualized list rendering, offloaded calculations to Web Workers, and utilized SVG chart hardware acceleration.',
    keyFeatures: [
      { title: 'Live Ticker Feed', desc: 'Streaming market rates with instant price flash indicators and custom alert triggers.' },
      { title: 'Portfolio Analytics', desc: 'Automated gain/loss calculation, risk score evaluation, and PDF report export.' },
      { title: 'Secure Authentication', desc: 'OAuth 2.0 + 2FA biometrics integration with JWT token auto-refresh.' },
      { title: 'Dark Mode Glass UI', desc: 'Futuristic OLED-optimized dark theme with subtle neon glowing accents.' }
    ],
    techStack: ['React', 'Vite', 'Recharts', 'Web Workers', 'TailwindCSS', 'Express.js', 'Redis']
  },
  {
    id: 3,
    title: 'HyperPulse Hackathon Platform',
    tagline: 'Interactive virtual hackathon platform with live video stages & judge scoring.',
    skillType: 'hardskill',
    category: 'Competition',
    image: '/project1.jpg',
    year: '2025',
    client: 'National Tech Hackathon 2025',
    role: '1st Place Winner & Lead Developer',
    demoUrl: 'https://example.com/hyperpulse',
    githubUrl: 'https://github.com/naila/hyperpulse',
    impact: ['🏆 1st Place National Winner', '5,000+ Hackers Hosted', '$25k Prize Pool Managed'],
    challenge: 'Building a full hackathon management platform in 48 hours that scales gracefully for thousands of simultaneous submission reviews.',
    solution: 'Leveraged serverless API routes, optimized CDN assets, and created a sleek modular component architecture for rapid deployment.',
    keyFeatures: [
      { title: 'Interactive Stages', desc: 'Live WebRTC streaming channels for keynote speeches, pitch decks, and mentor Q&A.' },
      { title: 'Judge Evaluation Engine', desc: 'Multi-criteria real-time leaderboards with weighted score distribution.' },
      { title: 'Team Matchmaking', desc: 'Skill-based matching algorithm to help solo participants form balanced teams.' },
      { title: 'Project Showcase', desc: 'Interactive project gallery with video embeds and public community voting.' }
    ],
    techStack: ['Next.js', 'React', 'TailwindCSS', 'Supabase', 'WebRTC', 'Framer Motion']
  },
  {
    id: 4,
    title: 'Aether Design System',
    tagline: 'Accessible, multi-brand React component library with tokenized UI builder.',
    skillType: 'hardskill',
    category: 'Freelance',
    image: '/project2.jpg',
    year: '2026',
    client: 'Open Source Community',
    role: 'Creator & Maintainer',
    demoUrl: 'https://example.com/aether',
    githubUrl: 'https://github.com/naila/aether-design-system',
    impact: ['2.4k+ GitHub Stars', '15k Monthly NPM Downloads', '100% WCAG AAA Compliant'],
    challenge: 'Ensuring strict accessibility compliance while offering customizable theme tokens and zero runtime overhead.',
    solution: 'Designed headless primitives paired with TailwindCSS design tokens, thorough keyboard navigation tests, and automated visual regression CI.',
    keyFeatures: [
      { title: '30+ Accessible Components', desc: 'Modals, dropdowns, popovers, and charts fully audited for WCAG AAA accessibility.' },
      { title: 'Token Studio Sync', desc: 'Direct Figma token import tool for automated CSS variable generation.' },
      { title: 'Tree-shakeable', desc: 'Minimal bundle footprint under 8kB gzipped for core component modules.' },
      { title: 'Interactive Storybook', desc: 'Live documentation site with interactive props playground and dark/light preview.' }
    ],
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Storybook', 'Radix UI', 'Rollup']
  },
  {
    id: 5,
    title: 'Gelar Karya P5: Ekshibisi Budaya & Kewirausahaan',
    tagline: 'Pameran karya kewirausahaan inovatif berbasis kearifan lokal & manajemen stan expo pelajar.',
    skillType: 'softskill',
    category: 'P5',
    image: '/p5-showcase.jpg',
    year: '2025',
    client: 'Projek Penguatan Profil Pelajar Pancasila (P5)',
    role: 'Ketua Tim Proyek & Koordinator Kreatif',
    demoUrl: 'https://example.com/p5-showcase',
    githubUrl: null,
    impact: ['🏆 Juara 1 Stan Terfavorit', '1.200+ Pengunjung Expo', 'Omzet Penjualan Rp 4.5jt'],
    challenge: 'Mengkoordinasikan 15 anggota kelompok dengan minat dan karakter berbeda dalam merancang konsep booth interaktif serta produksi tepat waktu.',
    solution: 'Menerapkan kepemimpinan partisipatif, membagi tugas ke sub-divisi kreatif, logistik, dan keuangan, serta evaluasi harian secara suportif.',
    keyFeatures: [
      { title: 'Leadership & Delegasi Peran', desc: 'Memetakan potensi anggota dan mendelegasikan tanggung jawab sesuai bakat masing-masing.' },
      { title: 'Public Pitching & Storytelling', desc: 'Mempresentasikan filosofi produk lokal kepada dewan juri, kepala sekolah, dan tamu undangan.' },
      { title: 'Manajemen Anggaran Transparan', desc: 'Menyusun alokasi modal, pencatatan kas harian, dan pembagian dividen laba secara akuntabel.' },
      { title: 'Musyawarah & Resolusi Konflik', desc: 'Menjembatani perbedaan ide artistik antar anggota melalui diskusi terbuka dan voting mufakat.' }
    ],
    techStack: ['Team Leadership', 'Public Speaking', 'Event Management', 'Financial Planning', 'Negotiation', 'Conflict Resolution']
  },
  {
    id: 6,
    title: 'P5 Eco-Green: Gerakan Peduli Lingkungan Sekolah',
    tagline: 'Kampanye persuasif pemilahan sampah terpadu & lokakarya daur ulang kreatif antar-kelas.',
    skillType: 'softskill',
    category: 'P5',
    image: '/collab-illustration.jpg',
    year: '2025',
    client: 'Program P5 Tema Gaya Hidup Berkelanjutan',
    role: 'Koordinator Riset & Edukasi Lingkungan',
    demoUrl: 'https://example.com/p5-ecogreen',
    githubUrl: null,
    impact: ['🌿 Reduksi 40% Sampah Plastik', 'Edukasi 600+ Siswa', 'Adopsi di 12 Kelas'],
    challenge: 'Membangun kebiasaan disiplin memilah sampah di kalangan siswa yang sebelumnya terbiasa acuh terhadap kebersihan lingkungan.',
    solution: 'Merancang presentasi kelas interaktif yang menyenangkan, membuat poster infografis persuasif, dan mendampingi workshop daur ulang.',
    keyFeatures: [
      { title: 'Komunikasi Persuasif', desc: 'Menyampaikan pentingnya aksi iklim dengan bahasa santai yang menginspirasi empati teman sebaya.' },
      { title: 'Fasilitasi Workshop Interaktif', desc: 'Memandu sesi praktik mengolah limbah anorganik menjadi produk multifungsi.' },
      { title: 'Kolaborasi Lintas Organisasi', desc: 'Bekerja sama erat dengan staf kebersihan dan pengurus OSIS untuk pengawasan fasilitas sampah.' },
      { title: 'Analisis & Pelaporan Proyek', desc: 'Menyajikan data penurunan timbulan sampah sekolah secara visual dan mudah dipahami.' }
    ],
    techStack: ['Persuasive Communication', 'Facilitation', 'Active Listening', 'Environmental Advocacy', 'Problem Solving']
  },
  {
    id: 7,
    title: 'Volunteer Mengajar: Akademi Literasi Digital',
    tagline: 'Aksi kesukarelawanan mengajar dasar logika komputasi & internet sehat untuk anak muda.',
    skillType: 'softskill',
    category: 'Volunteer',
    image: '/volunteer-showcase.jpg',
    year: '2025',
    client: 'Komunitas Relawan Pendidikan Digital',
    role: 'Lead Volunteer Instructor & Mentor',
    demoUrl: 'https://example.com/volunteer-literasi',
    githubUrl: null,
    impact: ['🎓 120+ Siswa Terbimbing', '4 Sesi Workshop Interaktif', '98% Respon Positif'],
    challenge: 'Menyampaikan konsep berpikir komputasional yang abstrak kepada peserta pemula dengan rentang usia dan kemampuan yang beragam.',
    solution: 'Menggunakan analogi permainan visual dan dongeng sehari-hari, serta mendampingi siswa dengan kesabaran tinggi secara personal.',
    keyFeatures: [
      { title: 'Mentoring Berbasis Empati', desc: 'Mendengarkan kesulitan belajar peserta dengan sabar dan menyemangati mereka agar percaya diri.' },
      { title: 'Adaptabilitas Pembelajaran', desc: 'Cepat menyesuaikan modul saat fasilitas praktik di lokasi terbatas menjadi sistem kolaborasi tim.' },
      { title: 'Manajemen Kelas Inklusif', desc: 'Menciptakan ruang belajar yang aman, ramah, dan interaktif tanpa rasa takut melakukan kesalahan.' },
      { title: 'Public Speaking Ramah Anak', desc: 'Menyampaikan materi teknis dengan bahasa yang ceria, lugas, dan energik.' }
    ],
    techStack: ['Mentoring & Teaching', 'Empathy', 'Adaptability', 'Classroom Facilitation', 'Public Speaking', 'Patience']
  },
  {
    id: 8,
    title: 'Volunteer Tanggap Bencana & Logistik Kemanusiaan',
    tagline: 'Aksi relawan kemanusiaan distribusi bantuan darurat & pendampingan psikososial ceria.',
    skillType: 'softskill',
    category: 'Volunteer',
    image: '/hero-illustration.jpg',
    year: '2024',
    client: 'Posko Relawan Kemanusiaan Pemuda',
    role: 'Koordinator Alur Logistik & Tim Lapangan',
    demoUrl: 'https://example.com/volunteer-peduli',
    githubUrl: null,
    impact: ['📦 2.000+ Paket Terdistribusi', 'Respon Tanggap 24 Jam', 'Sinergi 6 Lembaga Relawan'],
    challenge: 'Mengatur alur penyaluran barang bantuan agar cepat dan tepat sasaran di tengah kondisi lapangan dinamis dan cuaca tak menentu.',
    solution: 'Menyusun alur registrasi logistik rapi, menjaga koordinasi komunikasi radio darurat, serta membagi regu relawan ke titik-titik krusial.',
    keyFeatures: [
      { title: 'Manajemen Krisis & Ketenangan', desc: 'Mengambil keputusan prioritas cepat di bawah tekanan situasi darurat dengan kepala dingin.' },
      { title: 'Dukungan Psikososial Anak', desc: 'Menghadirkan sesi menggambar dan mendongeng ceria untuk meredakan kecemasan anak-anak.' },
      { title: 'Kerjasama Lintas Sektoral', desc: 'Berkoordinasi efektif dengan petugas medis, tokoh masyarakat, dan relawan lintas komunitas.' },
      { title: 'Resiliensi & Ketahanan Mental', desc: 'Menjaga semangat moril tim di tengah tantangan fisik dan lingkungan penugasan.' }
    ],
    techStack: ['Crisis Management', 'Emotional Resilience', 'Logistics Planning', 'Cross-team Collaboration', 'Empathy']
  },
  {
    id: 9,
    title: 'Ketua Panitia Festival Seni & Teknologi Pelajar',
    tagline: 'Memimpin kepanitiaan festival tahunan kolaborasi pameran karya seni grafis & teknologi.',
    skillType: 'softskill',
    category: 'Organisasi',
    image: '/collab-illustration.jpg',
    year: '2025',
    client: 'OSIS & Komite Kreatif Pelajar',
    role: 'Ketua Pelaksana Acara (Event Chairperson)',
    demoUrl: 'https://example.com/festival-event',
    githubUrl: null,
    impact: ['🎉 1.500+ Pengunjung Acara', '16 Mitra Sponsor Resmi', '99% Keberhasilan Run-Down'],
    challenge: 'Mengkoordinasikan 45 anggota panitia dari berbagai divisi serta mengelola alokasi anggaran puluhan juta dalam persiapan 2 bulan.',
    solution: 'Menerapkan alur SOP kerja transparan, briefing terstruktur berkala, negosiasi sponsor profesional, dan contingency plan matang.',
    keyFeatures: [
      { title: 'Kepemimpinan Strategis', desc: 'Menetapkan visi acara, memotivasi seluruh koordinator divisi, dan menjaga ritme kerja panitia.' },
      { title: 'Negosiasi Sponsor & Mitra', desc: 'Mempresentasikan pitch proposal kerja sama kepada instansi pendidikan dan korporasi sponsor.' },
      { title: 'Mitigasi Risiko & Plan B', desc: 'Menyusun rencana penanganan kendala teknis cuaca dan peralatan panggung saat hari-H.' },
      { title: 'Public Relations & Diplomasi', desc: 'Menjadi representasi komunikasi utama kepada kepala sekolah, pembina OSIS, dan tamu VIP.' }
    ],
    techStack: ['Strategic Leadership', 'Negotiation', 'Event Management', 'Risk Management', 'Public Relations']
  }
];

export const hardSkills = [
  { title: 'Frontend Development', icon: <Globe size={24} /> },
  { title: 'Backend Architecture', icon: <Terminal size={24} /> },
  { title: 'Database Design', icon: <Database size={24} /> },
  { title: 'Responsive UI/UX', icon: <MonitorSmartphone size={24} /> },
  { title: 'Cloud Services (AWS)', icon: <Cloud size={24} /> },
  { title: 'API Integration', icon: <Plug size={24} /> },
];

export const softSkills = [
  { title: 'Communication', icon: <MessageCircle size={20} /> },
  { title: 'Team Collaboration', icon: <Users size={20} /> },
  { title: 'Problem Solving', icon: <Lightbulb size={20} /> },
  { title: 'Time Management', icon: <Clock size={20} /> },
  { title: 'Adaptability', icon: <RefreshCw size={20} /> },
  { title: 'Leadership', icon: <Crown size={20} /> },
];
