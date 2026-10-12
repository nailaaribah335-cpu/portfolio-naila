import React, { useEffect, useRef, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* ═══════════════════════════════════════════
   CUSTOM CURSOR (Lusion-inspired)
   ═══════════════════════════════════════════ */
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const dotTarget = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      dotTarget.current = { x: e.clientX, y: e.clientY };
    };

    const handleHoverIn = () => setHovering(true);
    const handleHoverOut = () => setHovering(false);

    window.addEventListener('mousemove', handleMove);

    // Add hover detection for interactive elements
    const interactives = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    // Animate cursor with lerp (smooth follow)
    let rafId;
    const animate = () => {
      const ease = 0.15;
      const dotEase = 0.5;

      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x - (hovering ? 25 : 10)}px, ${pos.current.y - (hovering ? 25 : 10)}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotTarget.current.x - 3}px, ${dotTarget.current.y - 3}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
      cancelAnimationFrame(rafId);
    };
  }, [hovering]);

  // Re-bind hover events when DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const handleHoverIn = () => setHovering(true);
      const handleHoverOut = () => setHovering(false);
      document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`custom-cursor hidden md:block ${hovering ? 'hovering' : ''}`} />
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
    </>
  );
};

/* ═══════════════════════════════════════════
   LOADING SCREEN
   ═══════════════════════════════════════════ */
const LoadingScreen = ({ onDone }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      setTimeout(onDone, 800);
    }, 1500);
    return () => clearTimeout(timer);
  }, [onDone]);

  const letters = 'Naila.'.split('');

  return (
    <div className={`loader-screen ${done ? 'done' : ''}`}>
      <div className="flex gap-1">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="loader-letter"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   DECORATIVE FLOATING SHAPES
   ═══════════════════════════════════════════ */
const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large blobs */}
      <div className="deco-blob w-[400px] h-[400px] -top-[200px] -right-[100px] opacity-30 float-slow" />
      <div className="deco-blob w-[300px] h-[300px] top-[40%] -left-[150px] opacity-20 float-medium"
        style={{ animationDelay: '2s' }}
      />
      <div className="deco-blob w-[250px] h-[250px] bottom-[10%] right-[5%] opacity-20 float-slow"
        style={{ animationDelay: '4s' }}
      />

      {/* Small decorative dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-purple-400/20"
          style={{
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            animation: `float-slow ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════
   SCROLL ANIMATION HOOK (Enhanced)
   ═══════════════════════════════════════════ */
const useScrollAnimation = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return useCallback((el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  }, []);
};

/* ═══════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════ */
const App = () => {
  const animateRef = useScrollAnimation();
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <CustomCursor />
      <FloatingShapes />

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6">
        <Hero animateRef={animateRef} />
        <Projects animateRef={animateRef} />
        <Skills animateRef={animateRef} />
        <Contact animateRef={animateRef} />
      </main>
      <Footer animateRef={animateRef} />
    </>
  );
};

export default App;

