export default function Footer() {
  return (
    <footer className="w-full bg-transparent pt-32 pb-8 px-6 border-t border-white/5 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="Logo" className="w-8 h-8 object-cover rounded-md" />
            <p className="text-white font-display text-xl tracking-tight">Prodhosh VS</p>
          </div>
          <p className="text-neutral-500 max-w-xs">
            Full Stack Developer & AI Engineer.
            Building scalable social and technical systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-12 lg:gap-24 text-sm text-neutral-400">
          <div className="flex flex-col gap-3">
            <span className="text-white font-medium mb-1">Sections</span>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#what-i-do" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-medium mb-1">Socials</span>
            <a href="https://github.com/PRODHOSH" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/prodhoshvs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://x.com/prodhosh3" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
            <a href="mailto:hello@prodhosh.me" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </div>

      <div className="w-full text-center">
        <h1 className="text-[12vw] font-display tracking-tighter text-white/5 leading-none select-none">
          prodhosh
        </h1>
      </div>

      <div className="w-full max-w-7xl mx-auto flex justify-between items-center pt-8 border-t border-white/5 mt-8 text-xs text-neutral-600">
        <span>© 2026 Prodhosh VS</span>
        <span>Made with Next.js & Tailwind</span>
      </div>
    </footer>
  );
}
