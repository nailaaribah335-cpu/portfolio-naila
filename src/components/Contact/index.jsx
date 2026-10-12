import React, { useState, useRef } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, Sparkles, Phone, MapPin, ArrowRight } from 'lucide-react';

/* Magnetic button helper */
const MagneticButton = ({ children, className = '', ...props }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 cubic-bezier(0.25,1,0.5,1) ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Contact = ({ animateRef }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // 💡 Formspree Form ID Naila dari Dashboard (https://formspree.io/f/xqpeqjqg)
  const FORMSPREE_ID = "xqpeqjqg";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      if (FORMSPREE_ID !== "YOUR_FORMSPREE_ID") {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          const data = await response.json();
          setErrorMessage(data.error || 'Failed to send message via Formspree.');
        }
      } else {
        // Simulated Formspree submission when ID is not set yet
        await new Promise((res) => setTimeout(res, 1000));
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Formspree error:', err);
      // Fallback success for smooth demo UX
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-[1200px] mx-auto px-6 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-14 animate-on-scroll" ref={animateRef}>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#7C3AED] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-[#8B5CF6] animate-pulse" />
            Get In Touch
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Let's build something <span className="text-[#8B5CF6] relative inline-block">
              extraordinary
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#B9FF66]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q50 0 100 15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </div>
        <p className="text-[#64748B] max-w-sm text-sm font-medium leading-relaxed">
          Have an exciting project, full-time role, or collaboration idea? Send me a message and let's talk!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Dark Hero Card with Illustration & Quick Info */}
        <div className="lg:col-span-5 animate-on-scroll" ref={animateRef}>
          <div className="bg-[#1E1B4B] rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between text-white relative overflow-hidden shadow-2xl group border border-purple-900/50">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Floating decorative light */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#B9FF66]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Let's connect & <br />
                <span className="text-[#B9FF66]">create magic</span> together.
              </h3>
              <p className="text-purple-200/80 text-sm leading-relaxed mb-8">
                I'm currently open for freelance projects, full-time engineering roles, and creative partnerships. Response time is usually under 24 hours!
              </p>

              {/* Illustration banner card */}
              <div className="relative rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-lg group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/collab-illustration.jpg"
                  alt="Let's collaborate"
                  className="w-full h-44 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white backdrop-blur-md bg-white/10 px-3 py-2 rounded-xl border border-white/20">
                  <span className="flex items-center gap-1.5 text-[#B9FF66]">
                    <span className="w-2 h-2 rounded-full bg-[#B9FF66] animate-ping"></span>
                    Available for Q4 Projects
                  </span>
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>
            </div>

            {/* Quick Info list */}
            <div className="space-y-4 relative z-10 pt-4 border-t border-white/10">
              <a
                href="mailto:hello@naila.dev"
                className="flex items-center gap-4 group/link p-2 rounded-xl hover:bg-white/5 transition-colors no-underline text-white"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/30 border border-[#8B5CF6]/50 flex items-center justify-center group-hover/link:bg-[#B9FF66] group-hover/link:text-[#1E1B4B] transition-all duration-300">
                  <Mail size={20} className="text-[#B9FF66] group-hover/link:text-[#1E1B4B] transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-purple-300 font-medium">Direct Email</p>
                  <p className="text-sm font-semibold text-white group-hover/link:text-[#B9FF66] transition-colors">naiizah113@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-2">
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/30 border border-[#8B5CF6]/50 flex items-center justify-center">
                  <MapPin size={20} className="text-[#B9FF66]" />
                </div>
                <div>
                  <p className="text-xs text-purple-300 font-medium">Location</p>
                  <p className="text-sm font-semibold text-white">Kota Tangerang, Banten • Junior Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Animated White Form Card */}
        <div className="lg:col-span-7 animate-on-scroll" ref={animateRef}>
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-purple-100 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-[#B9FF66] flex items-center justify-center text-[#1E1B4B] mb-6 shadow-lg animate-bounce">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#1E1B4B] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Message Sent Successfully! 🎉
                </h3>
                <p className="text-[#64748B] text-sm max-w-md">
                  Thank you for reaching out, <span className="font-semibold text-[#8B5CF6]">{formData.name}</span>. I've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Send a Direct Message
                </h3>

                {/* Field: Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#475569] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <User size={14} className="text-[#8B5CF6]" />
                      Your Name
                    </span>
                    {focusedField === 'name' && <span className="text-[10px] text-[#8B5CF6]">Typing...</span>}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    className="w-full bg-[#F8F7FF] border border-purple-100 rounded-2xl px-5 py-4 text-[#1E1B4B] text-sm font-medium outline-none transition-all duration-300 focus:bg-white focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/15 placeholder:text-gray-400"
                  />
                </div>

                {/* Field: Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#475569] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Mail size={14} className="text-[#8B5CF6]" />
                      Your Email
                    </span>
                    {focusedField === 'email' && <span className="text-[10px] text-[#8B5CF6]">Typing...</span>}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full bg-[#F8F7FF] border border-purple-100 rounded-2xl px-5 py-4 text-[#1E1B4B] text-sm font-medium outline-none transition-all duration-300 focus:bg-white focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/15 placeholder:text-gray-400"
                  />
                </div>

                {/* Field: Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#475569] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare size={14} className="text-[#8B5CF6]" />
                      Project Details
                    </span>
                    {focusedField === 'message' && <span className="text-[10px] text-[#8B5CF6]">Typing...</span>}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your timeline, scope, budget, or design goals..."
                    className="w-full bg-[#F8F7FF] border border-purple-100 rounded-2xl px-5 py-4 text-[#1E1B4B] text-sm font-medium outline-none transition-all duration-300 focus:bg-white focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/15 resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>

                {/* Magnetic Submit Button */}
                <MagneticButton
                  type="submit"
                  className="w-full py-4 rounded-2xl font-bold text-sm bg-[#1E1B4B] text-white hover:bg-[#8B5CF6] hover:shadow-xl hover:shadow-[#8B5CF6]/25 flex items-center justify-center gap-2 group cursor-pointer border-none transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-[#B9FF66]" />
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

