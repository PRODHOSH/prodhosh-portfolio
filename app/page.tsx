"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"

type Certificate = {
  id: string
  title: string
  issuer: string
  image: string
  link: string
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  const sections = ["about", "projects", "experience", "volunteering", "contact"]

  const certificates: Certificate[] = [
    {
      id: "python-data-science",
      title: "Python for Data Science",
      issuer: "NPTEL • Sep 2025 • With Distinction",
      image: "/certificates/nptel_cert.png",
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS104S433201599",
    },
    {
      id: "supervised-ml",
      title: "Supervised ML: Regression & Classification",
      issuer: "DeepLearning.AI • Sep 2025 • Top 10%",
      image: "/certificates/supervised_cert.png",
      link: "https://coursera.org/verify/HLVKAONEGOFX",
    },
    {
      id: "ai-for-everyone",
      title: "AI For Everyone",
      issuer: "DeepLearning.AI • Jul 2025 • Certificate of Excellence",
      image: "/certificates/ai_for_everyone_cert.png",
      link: "https://coursera.org/verify/Z0TWSPS0B0S",
    },
  ]

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    setIsMenuOpen(false)
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background font-mono">
      {/* Animated background elements with network pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Network pattern SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="network" x="100" y="100" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="currentColor" className="text-primary" />
              <circle cx="150" cy="150" r="1.5" fill="currentColor" className="text-primary" />
              <line
                x1="50"
                y1="50"
                x2="150"
                y2="150"
                stroke="currentColor"
                className="text-primary"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>

        {/* Animated dots */}
        <div className="absolute top-10 left-20 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
        <div
          className="absolute top-1/3 right-40 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-primary/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PV</span>
              </div>
              <span className="text-lg font-bold text-primary font-mono">Prodhosh</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all capitalize text-sm ${
                    activeSection === section
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 rounded-lg capitalize text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all text-sm"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HERO SECTION - EXACT REFERENCE DESIGN */}
          <section id="about" className="mb-32 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* LEFT SIDE - TEXT BOX */}
              <div className="relative">
                <div className="space-y-6 p-8 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg shadow-primary/10">
                  <div className="space-y-3">
                    <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">Prodhosh</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Igniting Innovation</h2>
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed max-w-lg">
                    CS Sophomore @ VIT Chennai | Data Science Student @ IIT Madras | Full-Stack Developer @ Microsoft
                    Innovations Club | AI/ML Explorer | Design Lead @ OSPC
                  </p>

                  <p className="text-lg text-primary font-semibold">Shaping the Future of Tech</p>

                  <p className="text-xs text-muted-foreground">Explore more on my LinkedIn</p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <a
                      href="https://linkedin.com/in/prodhoshvs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all text-sm uppercase tracking-wide"
                    >
                      Explore My Work
                    </a>
                  </div>
                </div>
                
                {/* Pointer/Arrow to the circle */}
                <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 30 L45 30 M45 30 L35 20 M45 30 L35 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-pulse" />
                  </svg>
                </div>
              </div>

              {/* RIGHT SIDE - LARGE CYAN CIRCLE WITH PROFILE PHOTO */}
              <div className="relative flex items-center justify-center h-96">
                <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-primary rounded-full" />
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-background/50">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Prodhosh V.S"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover object-top"
                    style={{ objectPosition: '50% 20%' }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-16 mt-12">
              <h3 className="text-4xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h3>
              <div className="flex flex-wrap items-baseline gap-3 text-lg">
                <span className="text-foreground font-mono">I'm a</span>
                <div className="inline-block min-w-[200px]">
                  <span className="text-primary font-bold text-2xl font-mono">
                    {["AI/ML Explorer", "Data Scientist", "Full-Stack Developer", "Tech Innovator"][
                      Math.floor(Date.now() / 3000) % 4
                    ] || "AI/ML Explorer"}
                  </span>
                </div>
              </div>
              <p className="text-foreground/70 mt-6 leading-relaxed max-w-3xl font-mono text-sm">
                Passionate about building elegant solutions that combine design and functionality. Currently exploring
                AI/ML applications while leading design initiatives at OSPC and developing at Microsoft Innovations
                Club. Committed to open source and continuously pushing the boundaries of web development.
              </p>
            </div>

            {/* SKILLS SECTION */}
            <div className="grid md:grid-cols-3 gap-6 mt-20">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-primary font-mono font-semibold mb-4 text-xs tracking-widest">LANGUAGES</h3>
                <ul className="space-y-2 text-xs text-muted-foreground font-mono">
                  {["Python", "C++", "JavaScript", "TypeScript", "HTML5 & CSS3", "SQL"].map((lang) => (
                    <li key={lang} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-primary font-mono font-semibold mb-4 text-xs tracking-widest">FRAMEWORKS</h3>
                <ul className="space-y-2 text-xs text-muted-foreground font-mono">
                  {["React", "Next.js", "FastAPI", "TailwindCSS", "NumPy & Pandas", "Scikit-learn"].map((fw) => (
                    <li key={fw} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {fw}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-primary font-mono font-semibold mb-4 text-xs tracking-widest">TOOLS</h3>
                <ul className="space-y-2 text-xs text-muted-foreground font-mono">
                  {["Git", "VS Code", "Jupyter", "Figma", "Docker", "Github"].map((tool) => (
                    <li key={tool} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="mb-32">
            <h2 className="text-4xl font-bold mb-12">
              Featured <span className="text-primary">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/certificates/ai_ml_output.png"
                    alt="IMDb Sentiment Analysis"
                    width={400}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-mono">IMDb Sentiment Analysis Engine</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Logistic regression classifier processing 50,000 IMDb reviews with 87% accuracy
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">Python</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">ML</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                      scikit-learn
                    </span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="https://github.com/PRODHOSH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors flex items-center gap-2 text-xs font-semibold font-mono"
                    >
                      GitHub <ExternalLink size={12} />
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-accent transition-colors flex items-center gap-2 text-xs font-semibold font-mono"
                    >
                      Live Demo <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/certificates/cgpa_calc.png"
                    alt="IITM CGPA Calculator"
                    width={400}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-mono">IITM CGPA Calculator</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Web-based CGPA calculator serving 200+ IITM students with real-time computation
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                      HTML/CSS
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">Web</span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="https://github.com/PRODHOSH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors flex items-center gap-2 text-xs font-semibold font-mono"
                    >
                      GitHub <ExternalLink size={12} />
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-accent transition-colors flex items-center gap-2 text-xs font-semibold font-mono"
                    >
                      Live Demo <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/certificates/bb84_photo.png"
                    alt="Quantum Key Distribution"
                    width={400}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-mono">Quantum Key Distribution Simulation</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Interactive BB84 QKD protocol simulation demonstrating secure quantum key exchange
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">Quantum</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                      Security
                    </span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="https://github.com/PRODHOSH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors flex items-center gap-2 text-xs font-semibold font-mono"
                    >
                      GitHub <ExternalLink size={12} />
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-accent transition-colors flex items-center gap-2 text-xs font-semibold font-mono"
                    >
                      Live Demo <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/certificates/prodshell.png"
                    alt="ProdShell Portfolio"
                    width={400}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-mono">ProdShell - Terminal Portfolio</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Command-line style portfolio with interactive terminal interface and minimalist design
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                      HTML/CSS
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                      Creative
                    </span>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="https://github.com/PRODHOSH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors flex items-center gap-2 text-xs font-semibold font-mono"
                    >
                      GitHub <ExternalLink size={12} />
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-accent transition-colors flex items-center gap-2 text-xs font-semibold font-mono"
                    >
                      Live Demo <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE & EDUCATION SECTION */}
          <section id="experience" className="mb-32">
            <h2 className="text-4xl font-bold mb-12">
              Experience & <span className="text-primary">Education</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* EXPERIENCE */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-primary font-mono">// EXPERIENCE</h3>

                {/* Student House Captain */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/logos/dav-logo.png"
                        alt="DAV Group of Schools"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base font-mono">Student House Captain</h4>
                      <p className="text-primary text-sm font-mono">DAV Group of Schools (TNAES), Chennai</p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">Jun 2023 - Apr 2024 · 11 mos</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 font-mono">
                    Managed and coordinated House Virajanand activities with responsibility for organizing and
                    overseeing sports events, managing team activities, and fostering collaboration among house members
                    during intramural competitions.
                  </p>
                </div>

                {/* Technical Team Member */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/logos/math-club-logo.jpeg"
                        alt="Mathematics Club"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base font-mono">Technical Team Member</h4>
                      <p className="text-primary text-sm font-mono">Mathematics Club, VIT Chennai</p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">Sept 2025 - Present</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 font-mono">
                    Built and managed the club's technical infrastructure, including website and online resources, to
                    support events and activities.
                  </p>
                </div>

                {/* AI/ML Member */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/logos/microsoft-club-logo.jpeg"
                        alt="Microsoft Innovations Club"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base font-mono">AI/ML Member</h4>
                      <p className="text-primary text-sm font-mono">Microsoft Innovations Club, VIT Chennai</p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">Oct 2025 - Present</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 font-mono">
                    Contributed to AI/ML projects and workshops, collaborating with peers to explore cutting-edge
                    technologies in artificial intelligence and machine learning.
                  </p>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-primary font-mono">// EDUCATION</h3>

                {/* VIT Chennai */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/logos/vit-logo.png"
                        alt="VIT Chennai"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base font-mono">Vellore Institute of Technology</h4>
                      <p className="text-primary text-sm font-mono">B.Tech, Computer Science & Engineering</p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">
                        Jun 2022 - Jul 2028 | Chennai, India
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 font-mono">
                    First-year student focusing on full-stack development, AI applications, and software engineering.
                  </p>
                </div>

                {/* IIT Madras */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/logos/iit-madras-logo.png"
                        alt="IIT Madras"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base font-mono">Indian Institute of Technology, Madras</h4>
                      <p className="text-primary text-sm font-mono">BS in Data Science & Applications</p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">
                        Expected Graduation: May 2029 | CGPA: 9.0/10
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 font-mono">
                    Specializing in machine learning, data analysis, and statistical foundations with strong focus on
                    real-world applications.
                  </p>
                </div>
              </div>
            </div>

            {/* VOLUNTEERING SECTION */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-primary font-mono">// VOLUNTEERING</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Student Volunteer */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/logos/v-volunteers-logo.jpeg"
                        alt="V The Volunteers"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base font-mono">Student Volunteer</h4>
                      <p className="text-primary text-sm font-mono">V The Volunteers</p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">Feb 2024 · 1 mo</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 font-mono">
                    Assisted in organizing and coordinating activities for senior citizens during Elders Fest, fostering
                    community engagement and social services.
                  </p>
                </div>

                {/* Event Coordinator */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/logos/math-club-logo.jpeg"
                        alt="Mathematics Club"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base font-mono">Event Coordinator</h4>
                      <p className="text-primary text-sm font-mono">Mathematics Club VITCC</p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">Nov 2025 · 1 mo</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 font-mono">
                    Assisted in organizing and coordinating the Chessathlon, a chess event under Technovit 2025,
                    managing logistics and participant engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* CERTIFICATIONS WITH MODAL */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-primary font-mono">// ACHIEVEMENTS & CERTIFICATIONS</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {certificates.map((cert) => (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all text-left group hover:scale-105 transform duration-300"
                  >
                    <p className="font-semibold text-sm font-mono group-hover:text-primary transition-colors">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono mt-2">{cert.issuer}</p>
                    <p className="text-xs text-primary font-mono mt-2 group-hover:translate-x-1 transition-transform">
                      Click to view certificate →
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="mb-32">
            <h2 className="text-4xl font-bold mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl font-mono text-sm">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out or download
              my resume.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-primary font-semibold tracking-widest mb-3 font-mono">EMAIL</p>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                  />
                </div>
                <div>
                  <p className="text-xs text-primary font-semibold tracking-widest mb-3 font-mono">MESSAGE</p>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none font-mono text-sm"
                  />
                </div>
                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all font-mono text-sm uppercase tracking-wide">
                  SEND MESSAGE
                </button>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:bg-card/80">
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">EMAIL</p>
                      <a
                        href="mailto:prodhosh3@gmail.com"
                        className="font-semibold text-sm hover:text-primary transition-colors font-mono"
                      >
                        prodhosh3@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:bg-card/80">
                  <a
                    href="https://linkedin.com/in/prodhoshvs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">LINKEDIN</p>
                      <p className="font-semibold text-sm font-mono">Connect with me</p>
                    </div>
                  </a>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:bg-card/80">
                  <a
                    href="https://github.com/PRODHOSH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Github size={20} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">GITHUB</p>
                      <p className="font-semibold text-sm font-mono">View my projects</p>
                    </div>
                  </a>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:bg-card/80">
                  <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Download size={20} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">RESUME</p>
                      <p className="font-semibold text-sm font-mono">Download PDF</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-primary font-semibold mb-3 text-xs tracking-widest font-mono">ABOUT</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-mono">
                Computer Science and Data Science student with passion for building elegant solutions that combine
                design, functionality, and innovation.
              </p>
            </div>

            <div>
              <h3 className="text-primary font-semibold mb-3 text-xs tracking-widest font-mono">LINKS</h3>
              <div className="space-y-2 text-sm font-mono">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors block">
                  About
                </a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors block">
                  Projects
                </a>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors block">
                  Experience
                </a>
                <a href="#volunteering" className="text-muted-foreground hover:text-primary transition-colors block">
                  Volunteering
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors block">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-primary font-semibold mb-3 text-xs tracking-widest font-mono">TECH STACK</h3>
              <p className="text-muted-foreground text-sm font-mono">
                React • Next.js • TypeScript • Python • TailwindCSS • Machine Learning • Data Science
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs font-mono">
              © 2025 Prodhosh V.S. Built with React + Next.js • Hosted on Vercel
            </p>
            <p className="text-muted-foreground text-xs font-mono">
              Crafted with attention to design, performance, and accessibility
            </p>
          </div>
        </div>
      </footer>

      {/* CERTIFICATE MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-border flex justify-between items-center">
              <h3 className="text-lg font-bold font-mono">{selectedCert.title}</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="relative w-full aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden mb-6">
                <Image
                  src={selectedCert.image || "/placeholder.svg"}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-1">CERTIFICATE</p>
                  <p className="font-bold font-mono">{selectedCert.title}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-1">ISSUER</p>
                  <p className="font-mono text-sm">{selectedCert.issuer}</p>
                </div>
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-mono text-sm mt-4"
                >
                  Verify Certificate <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
