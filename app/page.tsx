"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

type Certificate = {
  id: string
  title: string
  issuer: string
  image: string
  link: string
}

type Project = {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  tags: string[]
  githubLink: string
  liveLink?: string
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [typedText, setTypedText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  const sections = ["about", "projects", "experience", "volunteering", "contact"]
  const roles = ["AI/ML Explorer", "Data Scientist", "Full-Stack Developer", "Tech Innovator"]

  const projects: Project[] = [
    {
      id: "prodshell",
      title: "ProdShell - Terminal Portfolio",
      description: "Command-line style portfolio with interactive terminal interface and minimalist design",
      fullDescription: "A unique command-line style portfolio website that provides an interactive terminal experience. Features custom commands, real-time responses, and a minimalist design that showcases technical skills in a creative way.",
      image: `${basePath}/certificates/prodshell.png`,
      tags: ["HTML/CSS", "JavaScript", "Creative"],
      githubLink: "https://github.com/PRODHOSH/prodshell",
      liveLink: "https://prodhosh.github.io/prodshell/"
    },
    {
      id: "bb84",
      title: "Quantum Key Distribution Simulation",
      description: "Interactive BB84 QKD protocol simulation demonstrating secure quantum key exchange",
      fullDescription: "Interactive BB84 QKD protocol simulation that demonstrates secure quantum key exchange. Visualizes quantum states, basis selection, and key sifting process with real-time animations and educational explanations.",
      image: `${basePath}/certificates/bb84_photo.png`,
      tags: ["TypeScript", "Quantum", "SupaBase"],
      githubLink: "https://github.com/PRODHOSH/bb84_simulation",
      liveLink: "https://bb84-simulation.vercel.app/"
    },
    {
      id: "cgpa-calc",
      title: "IITM CGPA Calculator",
      description: "Web-based CGPA calculator serving 200+ IITM students with real-time computation",
      fullDescription: "A streamlined web application designed for IIT Madras students to calculate their CGPA efficiently. Features real-time computation, grade management, and serves over 200 active users with an intuitive interface.",
      image: `${basePath}/certificates/cgpa_calc.png`,
      tags: ["HTML/CSS", "JavaScript", "Web"],
      githubLink: "https://github.com/PRODHOSH/iitm-cgpa-calculator",
      liveLink: "https://prodhosh.github.io/iitm-cgpa-calculator/"
    },
    {
      id: "sentiment",
      title: "IMDb Sentiment Analysis Engine",
      description: "Logistic regression classifier processing 50,000 IMDb reviews with 87% accuracy",
      fullDescription: "Machine learning project that analyzes sentiment in IMDb movie reviews using logistic regression. Processes 50,000 reviews with 87% accuracy, implementing natural language processing techniques and data preprocessing pipelines.",
      image: `${basePath}/certificates/ai_ml_output.png`,
      tags: ["Python", "ML", "scikit-learn"],
      githubLink: "https://github.com/PRODHOSH/mic_ai_ml"
    }
  ]

  const certificates: Certificate[] = [
    {
      id: "python-data-science",
      title: "Python for Data Science",
      issuer: "NPTEL • Sep 2025 • With Distinction",
      image: `${basePath}/certificates/nptel_cert.png`,
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS104S433201599",
    },
    {
      id: "supervised-ml",
      title: "Supervised ML: Regression & Classification",
      issuer: "DeepLearning.AI • Sep 2025 • Top 10%",
      image: `${basePath}/certificates/supervised_cert.png`,
      link: "https://coursera.org/verify/HLVKAONEGOFX",
    },
    {
      id: "ai-for-everyone",
      title: "AI For Everyone",
      issuer: "DeepLearning.AI • Jul 2025 • Certificate of Excellence",
      image: `${basePath}/certificates/ai_for_everyone_cert.png`,
      link: "https://coursera.org/verify/Z0TWSPS0B0S",
    },
  ]

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    setIsMenuOpen(false)
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // Typing effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 3000

    if (!isDeleting && typedText === currentRole) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && typedText === "") {
      // Move to next role
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setTypedText(prev => {
        if (isDeleting) {
          return currentRole.substring(0, prev.length - 1)
        } else {
          return currentRole.substring(0, prev.length + 1)
        }
      })
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, roleIndex, roles])

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      
      // Smooth follower with delay
      setTimeout(() => {
        setFollowerPos({ x: e.clientX, y: e.clientY })
      }, 100)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.getAttribute('role') === 'button' ||
        target.closest('a, button')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // Scroll animation hook
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate classes
    const animateClasses = ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale']
    
    animateClasses.forEach(className => {
      const elements = document.querySelectorAll(className)
      elements.forEach(el => observer.observe(el))
    })

    return () => observer.disconnect()
  }, [])

  // Contact form submit handler with celebration
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent default form submission
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      // Submit to Google Forms in the background (no-cors mode)
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // This prevents CORS errors but we can't read the response
      })
      
      // Show celebration
      setShowCelebration(true)
      triggerConfetti()
      
      // Reset form after brief delay
      setTimeout(() => {
        form.reset()
      }, 500)
      
      // Hide celebration after animation
      setTimeout(() => setShowCelebration(false), 5000)
      
    } catch (error) {
      // Even if fetch fails, show celebration (Google Forms was likely submitted)
      console.log('Form submitted')
      setShowCelebration(true)
      triggerConfetti()
      
      setTimeout(() => {
        form.reset()
      }, 500)
      
      setTimeout(() => setShowCelebration(false), 5000)
    }
  }

  // Enhanced professional confetti animation
  const triggerConfetti = () => {
    const colors = [
      '#ff4d6d', '#ffb86b', '#7df9ff', '#7ee787', '#c77bff', '#ffd166',
      '#ff006e', '#00f5ff', '#ffbe0b', '#fb5607', '#8338ec', '#06ffa5'
    ]
    const shapes = ['square', 'circle', 'triangle']
    const count = 150 // More confetti!
    const container = document.createElement('div')
    container.style.position = 'fixed'
    container.style.left = '0'
    container.style.top = '0'
    container.style.width = '100%'
    container.style.height = '0'
    container.style.pointerEvents = 'none'
    container.style.overflow = 'visible'
    container.style.zIndex = '9999'
    document.body.appendChild(container)

    // Create multiple bursts from different positions
    const burstPositions = [
      { x: 50, y: 30 }, // Center
      { x: 30, y: 35 }, // Left
      { x: 70, y: 35 }, // Right
    ]

    burstPositions.forEach((burst, burstIndex) => {
      for (let i = 0; i < count / 3; i++) {
        setTimeout(() => {
          const el = document.createElement('div')
          const size = Math.floor(Math.random() * 12) + 6
          const shape = shapes[Math.floor(Math.random() * shapes.length)]
          
          el.style.position = 'absolute'
          el.style.width = `${size}px`
          el.style.height = `${size}px`
          el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
          el.style.left = `${burst.x + Math.random() * 8 - 4}%`
          el.style.top = `${burst.y + Math.random() * 5}%`
          el.style.opacity = '1'
          el.style.transform = `translateY(0) rotate(${Math.random() * 360}deg) scale(1)`
          
          // Different shapes
          if (shape === 'circle') {
            el.style.borderRadius = '50%'
          } else if (shape === 'triangle') {
            el.style.borderRadius = '20%'
            el.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'
          } else {
            el.style.borderRadius = '2px'
          }
          
          el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)'
          el.style.willChange = 'transform, opacity'
          
          // Varied timing for more natural feel
          const duration = 2.5 + Math.random() * 1.5
          const delay = Math.random() * 0.1
          el.style.transition = `transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, opacity ${duration * 0.8}s linear ${delay + 0.5}s`
          
          container.appendChild(el)

          // Animate confetti with varied physics
          requestAnimationFrame(() => {
            const angle = Math.random() * Math.PI * 2
            const velocity = 800 + Math.random() * 600
            const dx = Math.cos(angle) * velocity
            const dy = Math.sin(angle) * velocity + 500 // Gravity effect
            const rot = 720 + Math.random() * 1080
            const scale = 0.3 + Math.random() * 0.4
            
            el.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(${scale})`
            el.style.opacity = '0'
          })
        }, burstIndex * 50) // Stagger each burst slightly
      }
    })

    // Add some floating particles
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const particle = document.createElement('div')
        const size = Math.floor(Math.random() * 6) + 3
        particle.style.position = 'absolute'
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${20 + Math.random() * 20}%`
        particle.style.borderRadius = '50%'
        particle.style.opacity = '0.8'
        particle.style.boxShadow = `0 0 20px ${colors[Math.floor(Math.random() * colors.length)]}`
        particle.style.filter = 'blur(1px)'
        particle.style.transition = 'all 3s ease-out'
        container.appendChild(particle)
        
        requestAnimationFrame(() => {
          particle.style.transform = `translateY(${600 + Math.random() * 400}px)`
          particle.style.opacity = '0'
        })
      }, i * 20)
    }

    // Cleanup after animation
    setTimeout(() => {
      try { 
        if (container.parentNode) {
          document.body.removeChild(container) 
        }
      } catch (e) {
        console.log('Confetti cleanup complete')
      }
    }, 4500)
  }

  return (
    <div className="min-h-screen bg-background font-mono">
      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div
        className={`custom-cursor-follower ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Animated Galaxy Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#0d0221] to-background" />
        
        {/* Animated stars layers */}
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />
        
        {/* Nebula clouds */}
        <div className="absolute top-10 right-20 w-[800px] h-[800px] bg-gradient-radial from-purple-600/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-float opacity-40" />
        <div
          className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/20 via-primary/15 to-transparent rounded-full blur-3xl animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-indigo-500/15 via-primary/10 to-transparent rounded-full blur-3xl animate-float opacity-30"
          style={{ animationDelay: "2s" }}
        />
        
        {/* Glowing planets/orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-float-slow" 
          style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-purple-500/25 rounded-full blur-2xl animate-float-slow" 
          style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 right-1/3 w-20 h-20 bg-cyan-400/30 rounded-full blur-xl animate-float-slow" 
          style={{ animationDelay: "2s" }} />

        {/* Animated cosmic dust particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Shooting stars */}
        <div className="shooting-star" style={{ top: '20%', left: '10%', animationDelay: '2s' }} />
        <div className="shooting-star" style={{ top: '50%', left: '80%', animationDelay: '5s' }} />
        <div className="shooting-star" style={{ top: '70%', left: '30%', animationDelay: '8s' }} />
        
        {/* Network pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
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
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <Image
                  src={`${basePath}/images/favicon.png`}
                  alt="Prodhosh Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
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
              <div className="relative hero-animate-text">
                <div className="space-y-6 p-8 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg shadow-primary/10">
                  <div className="space-y-3">
                    <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">Prodhosh</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Igniting Innovation</h2>
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed max-w-lg">
                    CS Freshman @ VIT Chennai | Data Science Student @ IIT Madras | AI/ML Member @ Microsoft 
                    Innovations Club | AI/ML Explorer | Technical Member @ Math Club
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
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path d="M5 30 L45 30 M45 30 L35 20 M45 30 L35 40" stroke="oklch(0.6 0.25 200)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" className="animate-pulse" />
                  </svg>
                </div>
              </div>

              {/* RIGHT SIDE - LARGE CYAN CIRCLE WITH PROFILE PHOTO */}
              <div className="relative flex items-center justify-center h-96 hero-animate-photo">
                <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-primary rounded-full" />
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-background/50">
                  <Image
                    src={`${basePath}/images/profile-photo.jpg`}
                    alt="Prodhosh V.S"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover object-top"
                    style={{ objectPosition: '50% 30%' }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-16 mt-12 scroll-animate">
              <h3 className="text-4xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h3>
              <div className="flex flex-wrap items-baseline gap-3 text-lg">
                <span className="text-foreground font-mono">I'm a</span>
                <div className="inline-block min-w-[200px]">
                  <span className="text-primary font-bold text-2xl font-mono">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </div>
              <p className="text-foreground/90 mt-6 leading-relaxed max-w-3xl font-mono text-base">
                Hi, I'm Prodhosh — a first-year CSE student at <span className="text-primary font-semibold">VIT Chennai</span> and BS Data Science student at <span className="text-primary font-semibold">IIT Madras</span>.
              </p>
              <p className="text-foreground/90 mt-4 leading-relaxed max-w-3xl font-mono text-base">
                I'm passionate about AI, ML, and data science, and love building solutions that bridge tech with real-world impact. Curiosity drives me to explore new technologies and constantly level up my problem-solving skills.
              </p>
              <p className="text-foreground/90 mt-4 leading-relaxed max-w-3xl font-mono text-base">
                Currently, I'm an AI/ML Member at the <span className="text-primary font-semibold">Microsoft Innovations Club (VITC)</span> and a Technical Team Member at the <span className="text-primary font-semibold">Mathematics Club (VITC)</span>, collaborating on projects that challenge me to grow as both a learner and teammate.
              </p>
            </div>

            {/* SKILLS SECTION */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors scroll-animate">
                <h3 className="text-primary font-mono font-semibold mb-5 text-sm tracking-widest">LANGUAGES</h3>
                <ul className="space-y-3 text-base text-muted-foreground font-mono">
                  {["Python", "C++", "JavaScript", "HTML5 & CSS3", "SQL"].map((lang) => (
                    <li key={lang} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors scroll-animate">
                <h3 className="text-primary font-mono font-semibold mb-5 text-sm tracking-widest">FRAMEWORKS</h3>
                <ul className="space-y-3 text-base text-muted-foreground font-mono">
                  {["React","NumPy & Pandas","Matplotlib","Seaborn", "Scikit-learn"].map((fw) => (
                    <li key={fw} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {fw}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors scroll-animate">
                <h3 className="text-primary font-mono font-semibold mb-5 text-sm tracking-widest">TOOLS</h3>
                <ul className="space-y-3 text-base text-muted-foreground font-mono">
                  {["Git", "VS Code", "Jupyter", "Figma", "Github"].map((tool) => (
                    <li key={tool} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="mb-32">
            <h2 className="text-4xl font-bold mb-12 scroll-animate">
              Featured <span className="text-primary">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-gradient-to-br from-card/50 to-card border-2 border-primary/30 rounded-xl overflow-hidden hover:border-primary transition-all scroll-animate-scale hover:scale-105 transform duration-300 text-left group backdrop-blur-sm"
                >
                  {/* Image container with proper cover */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 font-mono text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-mono border border-primary/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 flex-wrap items-center">
                      <span className="text-primary text-xs font-semibold font-mono flex items-center gap-2">
                        <Github size={16} /> View Code
                      </span>
                      {project.liveLink && (
                        <span className="text-primary text-xs font-semibold font-mono flex items-center gap-2">
                          <ExternalLink size={16} /> Try Demo
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* EXPERIENCE & EDUCATION SECTION */}
          <section id="experience" className="mb-32">
            <h2 className="text-4xl font-bold mb-12 scroll-animate">
              Experience & <span className="text-primary">Education</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* EXPERIENCE */}
              <div className="space-y-6 scroll-animate-left">
                <h3 className="text-2xl font-bold mb-6 text-primary font-mono">// EXPERIENCE</h3>

                {/* AI/ML Member - Microsoft Club */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={`${basePath}/logos/microsoft-club-logo.jpeg`}
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

                {/* Technical Team Member - Mathematics Club */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={`${basePath}/logos/math-club-logo.jpeg`}
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

                {/* Student House Captain */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={`${basePath}/logos/dav-logo.png`}
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
              </div>

              {/* EDUCATION */}
              <div className="space-y-6 scroll-animate-right">
                <h3 className="text-2xl font-bold mb-6 text-primary font-mono">// EDUCATION</h3>

                {/* VIT Chennai */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={`${basePath}/logos/vit-logo.png`}
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
                        Expected Graduation: Jul 2029 | Chennai, India
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 font-mono">
                  Currently studying Engineering Drawing, Quantum Mechanics, Python Programming, Technical English, and Multivariable Calculus & Differential Equations.
Focused on applying computational and mathematical concepts to real-world engineering and software problems.
                  </p>
                </div>

                {/* IIT Madras */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={`${basePath}/logos/iit-madras-logo.png`}
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
                    Pursuing foundational courses in Statistics, Linear Algebra, and Python Programming with emphasis on building strong analytical and data-driven problem-solving skills.
                  </p>
                </div>
              </div>
            </div>

            {/* VOLUNTEERING SECTION */}
            <div id="volunteering" className="mt-16 scroll-animate">
              <h3 className="text-2xl font-bold mb-6 text-primary font-mono">// VOLUNTEERING</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Student Volunteer */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={`${basePath}/logos/v-volunteers-logo.jpeg`}
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
                        src={`${basePath}/logos/math-club-logo.jpeg`}
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
            <div className="mt-16 scroll-animate">
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
            <h2 className="text-4xl font-bold mb-4 scroll-animate">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl font-mono text-sm">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out or download
              my resume.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form - Google Forms Integration */}
              <div className="scroll-animate-left">
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSfIw_rf9ccNo5kbVgmuBwmmMf1C9y4NwD7_QaR5rM4asRZEdA/formResponse"
                  method="POST"
                  onSubmit={handleContactSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="email" className="text-xs text-primary font-semibold tracking-widest mb-3 font-mono block">
                      EMAIL
                    </label>
                    <input
                      id="email"
                      name="entry.769396245"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-xs text-primary font-semibold tracking-widest mb-3 font-mono block">
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="entry.105259584"
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none font-mono text-sm"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all font-mono text-sm uppercase tracking-wide"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>

              {/* Quick Links */}
              <div className="space-y-4 scroll-animate-right">
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
                  <a href={`${basePath}/resume.pdf`} download="Prodhosh_Resume.pdf" className="flex items-center gap-3 hover:text-primary transition-colors">
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
                React • Next.js • Python • TailwindCSS • Machine Learning • Data Science
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs font-mono">
              © 2025 Prodhosh V.S. Built with React + Next.js • Hosted on Github Pages
            </p>
            <p className="text-muted-foreground text-xs font-mono">
              Crafted with attention to design, performance, and accessibility
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced Celebration Overlay */}
      {showCelebration && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none animate-in fade-in duration-500">
          <div 
            className="bg-gradient-to-br from-card/98 via-card/95 to-card/98 backdrop-blur-xl border-2 border-primary/60 shadow-2xl shadow-primary/40 p-10 rounded-3xl text-center pointer-events-auto animate-in zoom-in-95 duration-700" 
            style={{ 
              maxWidth: '520px',
              animation: 'celebrationPulse 2s ease-in-out infinite'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowCelebration(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="relative">
              {/* Animated emoji */}
              <div className="text-7xl mb-5 animate-bounce" style={{ animationDuration: '0.6s', animationIterationCount: '3' }}>
                🎉
              </div>
              
              {/* Success checkmark with animation */}
              <div className="mx-auto w-20 h-20 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center mb-6 animate-in zoom-in-50 duration-500" style={{ animationDelay: '0.2s' }}>
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" 
                    style={{
                      strokeDasharray: 20,
                      strokeDashoffset: 20,
                      animation: 'drawCheck 0.5s ease-out 0.3s forwards'
                    }}
                  />
                </svg>
              </div>

              <h3 className="text-4xl font-bold text-primary mb-4 font-mono animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '0.4s' }}>
                Message Sent!
              </h3>
              <p className="text-lg text-muted-foreground font-mono leading-relaxed animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '0.5s' }}>
                ✨ Thank you for reaching out!
              </p>
              <p className="text-base text-muted-foreground/80 font-mono mt-2 animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '0.6s' }}>
                I'll get back to you as soon as possible.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes celebrationPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes drawCheck {
          to { strokeDashoffset: 0; }
        }
      `}</style>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card border-2 border-primary/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-in fade-in zoom-in-95 duration-200 shadow-2xl shadow-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-primary/30 flex justify-between items-center bg-gradient-to-r from-primary/10 to-accent/10">
              <h3 className="text-2xl font-bold font-mono text-primary">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              {/* Image */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl overflow-hidden mb-8 p-6 flex items-center justify-center">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={450}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Full Description */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground font-mono mb-2 uppercase tracking-wider">About</p>
                  <p className="text-lg text-foreground leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-sm text-muted-foreground font-mono mb-3 uppercase tracking-wider">Tech Stack</p>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-primary/20 text-primary text-base rounded-full font-mono border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary/20 hover:bg-primary/30 border-2 border-primary text-primary hover:text-accent transition-all py-3 px-6 rounded-lg font-mono text-base font-semibold flex items-center justify-center gap-3"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-accent/20 hover:bg-accent/30 border-2 border-accent text-accent hover:text-primary transition-all py-3 px-6 rounded-lg font-mono text-base font-semibold flex items-center justify-center gap-3"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
