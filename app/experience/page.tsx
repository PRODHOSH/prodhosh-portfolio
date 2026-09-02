import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WavyUnderline from "@/components/WavyUnderline";

const experienceSections = [
  {
    title: "Freelance & Internships",
    experiences: [
      {
        company: "Annexra",
        role: "Software Engineer Intern",
        date: "Aug 2026 - Present",
        location: "Remote",
        points: [
          "Designed and developed the company's new full-stack website, owning UI/UX, frontend, backend integration, responsive design, and SEO.",
          "Contributing to client projects including a full-stack e-commerce platform, working across frontend and backend development."
        ]
      },
      {
        company: "Sindra",
        role: "Next.js Developer Intern",
        date: "Jul 2026 - Present",
        location: "Remote",
        points: [
          "Developing and optimizing scalable frontend applications using Next.js and TypeScript.",
          "Collaborating with cross-functional teams to implement responsive UI components and enhance overall web performance and user experience."
        ]
      },
      {
        company: "EnlightEd",
        role: "Developer Intern",
        date: "Jun 2026 - Jul 2026",
        location: "Remote",
        points: [
          "Engineering production-ready features for an AI-powered adaptive learning platform.",
          "Building scalable user experiences across student, teacher, and parent ecosystems while optimizing intelligent analytics and automated workflows."
        ]
      },
      {
        company: "Cloudinary",
        role: "Cloudinary Creator",
        date: "Mar 2026 - Present",
        location: "Remote",
        points: [
          "Developed EcoLens, an award-winning full-stack media optimization platform utilizing Next.js, TypeScript, and Cloudinary APIs.",
          "Engineered automated workflows to analyze and optimize web media assets, significantly improving performance metrics."
        ]
      },
      {
        company: "BS Prep",
        role: "Founding Engineer",
        date: "Jan 2026 - Present",
        location: "Remote",
        points: [
          "Leading end-to-end technical development and product strategy for a comprehensive learning platform serving IIT Madras BS students.",
          "Architected scalable core systems, automated student ambassador portals, and optimized SEO performance using Next.js and Supabase."
        ]
      }
    ]
  },
  {
    title: "Clubs & Societies",
    experiences: [
      {
        company: "TechnoVIT Chennai",
        role: "Website Committee Volunteer",
        date: "Aug 2026 - Sep 2026",
        location: "Hybrid",
        points: []
      },
      {
        company: "ACM Student Chapter VITC",
        role: "Technical Member",
        date: "Mar 2026 - Present",
        location: "VIT Chennai",
        points: [
          "Spearheading frontend development for chapter events, including the Server Surfers initiative.",
          "Optimizing digital presence and website performance through advanced CDN integrations and efficient asset delivery mechanisms."
        ]
      },
      {
        company: "AWS Cloud Club VIT Chennai",
        role: "Web Development Member",
        date: "Mar 2026 - Present",
        location: "VIT Chennai",
        points: [
          "Participating in cloud computing initiatives and technical workshops focused on AWS infrastructure.",
          "Developing expertise in cloud architecture, modern deployment strategies, and building highly available applications."
        ]
      },
      {
        company: "Code Crafters - IIT MADRAS BS Degree",
        role: "Council - WebOps, Coding & Cybersecurity",
        date: "Dec 2025 - Present",
        location: "Remote",
        points: [
          "Architected and deployed the official CodeCrafters community platform using Next.js and Tailwind CSS.",
          "Implemented responsive interfaces, optimized SEO, and integrated secure data collection workflows to enhance user engagement."
        ]
      },
      {
        company: "Microsoft Innovations Club VITC",
        role: "AI/ML Member",
        date: "Oct 2025 - Present",
        location: "VIT Chennai",
        points: [
          "Engaging in Microsoft-centric technological projects focusing on artificial intelligence and machine learning applications.",
          "Exploring Azure cloud services and implementing modern intelligent solutions for diverse use cases."
        ]
      },
      {
        company: "Nallamala House - IIT Madras",
        role: "Website Manager",
        date: "Dec 2025 - May 2026",
        location: "Remote",
        points: [
          "Led end-to-end frontend development for the official community platform serving 4,500+ members.",
          "Designed and deployed intuitive, highly responsive user interfaces utilizing Next.js, TypeScript, and modern UI component libraries."
        ]
      },
      {
        company: "Mathematics Club VITCC",
        role: "Technical Member",
        date: "Sep 2025 - Jun 2026",
        location: "VIT Chennai",
        points: [
          "Engineered the official Mathematics Club platform with integrated recruitment portals and Supabase backend architecture.",
          "Coordinated major technical events, managing registration workflows and operations for over 210 participants."
        ]
      }
    ]
  },
  {
    title: "Open Source Communities",
    experiences: [
      {
        company: "EduLinkUp",
        role: "Project Admin",
        date: "May 2026 - Present",
        location: "Remote",
        points: [
          "Serving as Project Admin for the OSSfolio open-source platform, overseeing project workflows, issue management, and contributor mentorship.",
          "Reviewing pull requests and maintaining high-quality code standards while fostering an active global developer community."
        ]
      },
      {
        company: "GirlScript Summer of Code 2026",
        role: "Campus Ambassador",
        date: "Apr 2026 - Present",
        location: "Remote",
        points: [
          "Promoting open-source culture and development practices on campus by organizing coding events and technical workshops.",
          "Mentoring students and facilitating meaningful contributions to various global open-source initiatives."
        ]
      },
      {
        company: "GirlScript Summer of Code",
        role: "Open Source Contributor - AI/Agent Track",
        date: "Apr 2026 - Present",
        location: "Remote",
        points: [
          "Contributing scalable code and documentation to open-source projects focused on artificial intelligence and agent-based systems.",
          "Collaborating with global maintainers to integrate innovative AI solutions and enhance core feature implementations."
        ]
      },
      {
        company: "Social Summer of Code",
        role: "Open Source Contributor - SSoC Season 5",
        date: "Apr 2026 - Present",
        location: "Remote",
        points: [
          "Contributed to community-driven software solutions focused on social impact during SSoC Season 5.",
          "Enhanced application functionality and optimized user interfaces for non-profit digital platforms."
        ]
      },
      {
        company: "Nexus Spring of Code",
        role: "Open Source Contributor - NSoC",
        date: "May 2026 - Present",
        location: "Remote",
        points: [
          "Participated as an active contributor resolving critical issues and implementing new features across web and AI projects.",
          "Collaborated closely with project maintainers to improve system performance and code reliability."
        ]
      }
    ]
  },
  {
    title: "Volunteering",
    experiences: [
      {
        company: "V-Vortex",
        role: "Technical Team Lead (AI&ML)",
        date: "Jan 2026",
        location: "VIT Chennai",
        points: [
          "Directed AI & ML technical evaluations for a large-scale university hackathon featuring over 300 participants.",
          "Formulated complex problem statements and established rigorous judging criteria for project assessments."
        ]
      },
      {
        company: "Internshala",
        role: "Internshala Student Partner — ISP",
        date: "Nov 2025 - Jan 2026",
        location: "Remote",
        points: [
          "Executed comprehensive campus outreach initiatives to increase awareness of technical internships and training programs.",
          "Leveraged digital marketing strategies to drive student engagement and platform adoption."
        ]
      },
      {
        company: "DAV Group of Schools",
        role: "Student House Captain",
        date: "Jun 2023 - Apr 2024",
        location: "Chennai",
        points: [
          "Directed student engagement initiatives and coordinated inter-house activities for a large student body.",
          "Demonstrated strong leadership capabilities through team coordination and athletic team management."
        ]
      },
      {
        company: "V The Volunteers",
        role: "Student Volunteer",
        date: "Feb 2024",
        location: "VIT Chennai",
        points: [
          "Coordinated logistical operations and facilitated engagement activities for community service events.",
          "Demonstrated strong organizational skills while supporting social welfare initiatives."
        ]
      }
    ]
  }
];

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      
      <div className="pt-40 pb-16 px-6 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* unDraw Hero Illustration */}
        <div className="w-full max-w-sm mb-12 relative flex justify-center">
           <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
           <img src="/undraw/career.svg" alt="Experience" className="w-full h-auto opacity-90 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)] relative z-10" />
        </div>
        <div className="text-center space-y-4 max-w-2xl mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white relative inline-block">
            Experience
            <WavyUnderline className="text-emerald-500/70" />
          </h1>
          <p className="text-neutral-400 text-lg">
            Work, Internship and Volunteership across multiple organizations.
          </p>
        </div>

        {/* Timeline Sections */}
        <div className="w-full max-w-4xl space-y-24">
          {experienceSections.map((section, sIdx) => (
            <div key={sIdx} className="w-full">
              <h2 className="text-3xl font-display font-bold text-white mb-12 border-b border-white/10 pb-4 inline-block">
                {section.title}
              </h2>
              <div className="w-full relative border-l border-white/10 ml-4 md:ml-0">
                {section.experiences.map((exp, i) => (
                  <div key={i} className="mb-16 relative pl-10 md:pl-16 last:mb-0">
                    {/* Timeline Dot */}
                    <div className="absolute w-4 h-4 rounded-full bg-black border-2 border-emerald-500 left-[-8.5px] top-2 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-display font-semibold text-white">{exp.role}</h3>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl text-emerald-400 font-display">{exp.company}</h4>
                          <span className="text-neutral-500 text-sm hidden md:inline">•</span>
                          <span className="text-neutral-500 text-sm hidden md:inline">{exp.location}</span>
                        </div>
                      </div>
                      <span className="text-sm font-mono text-neutral-500 mt-2 md:mt-0 px-3 py-1 bg-white/5 rounded-full border border-white/10 inline-block w-fit">
                        {exp.date}
                      </span>
                    </div>
                    
                    {exp.points.length > 0 && (
                      <ul className="space-y-3 mt-6">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="text-neutral-400 text-base flex items-start">
                            <span className="text-emerald-500 mr-3 mt-1.5 opacity-60">▹</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
