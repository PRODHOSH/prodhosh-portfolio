"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experienceSections = [
  {
    title: "Freelance & Internships",
    experiences: [
      {
        title: "Full Stack Developer Intern",
        company: "Midgreen",
        duration: "Sep 2026 - Present",
        location: "Remote",
        description: "Midgreen is a sustainability solutions company helping businesses replace plastic packaging with better material alternatives. We partner with sustainable material manufacturers and plastic‑consuming businesses to identify viable applications, build packaging solutions, and enable their adoption. By connecting material innovation with real‑world demand, we help manufacturers reach new customers, expand material use cases, and overcome regional supply barriers. At the same time, we help businesses navigate material selection, packaging development, and implementation to make the transition away from plastic more practical and scalable.",
        color: "#34D399",
        logo_path: "midgreen.png"
      },
      {
        title: "Software Engineer Intern",
        company: "Annexra",
        duration: "Aug 2026 - Present",
        location: "Remote",
        description: "Worked on their core SaaS website and currently engineering scalable solutions for various client projects in the B2B space.",
        color: "#F59E0B",
        logo_path: "annexra.png"
      },
      {
        title: "Next.js Developer Intern",
        company: "Sindra",
        duration: "Jul 2026 - Present",
        location: "Remote",
        description: "Developing and optimizing scalable frontend applications using Next.js and TypeScript. Collaborating with cross-functional teams to implement responsive UI components and enhance overall web performance and user experience.",
        color: "#9333EA",
        logo_path: "sindra.png"
      },
      {
        title: "Developer Intern",
        company: "EnlightEd",
        duration: "Jun 2026 - Jul 2026",
        location: "Remote",
        description: "Engineering production-ready features for an AI-powered adaptive learning platform. Building scalable user experiences across student, teacher, and parent ecosystems while optimizing intelligent analytics and automated workflows.",
        color: "#0077B5",
        logo_path: "enlighted.webp"
      },
      {
        title: "Cloudinary Creator",
        company: "Cloudinary",
        duration: "Mar 2026 - Present",
        location: "Remote",
        description: "Developed EcoLens, an award-winning full-stack media optimization platform utilizing Next.js, TypeScript, and Cloudinary APIs. Engineered automated workflows to analyze and optimize web media assets, significantly improving performance metrics.",
        color: "#3448C5",
        logo_path: "cloudinary_logo.png"
      },
      {
        title: "Founding Engineer",
        company: "BS Prep",
        duration: "Jan 2026 - Present",
        location: "Remote",
        description: "Leading end-to-end technical development and product strategy for a comprehensive learning platform serving IIT Madras BS students. Architected scalable core systems, automated student ambassador portals, and optimized SEO performance using Next.js and Supabase.",
        color: "#2563eb",
        logo_path: "iitm-bs.png"
      }
    ]
  },
  {
    title: "Clubs & Societies",
    experiences: [
      {
        title: "Technical Member",
        company: "ACM Student Chapter VITC",
        duration: "Mar 2026 - Present",
        location: "VIT Chennai",
        description: "Spearheading frontend development for chapter events, including the Server Surfers initiative. Optimizing digital presence and website performance through advanced CDN integrations and efficient asset delivery mechanisms.",
        color: "#0073E6",
        logo_path: "acm_logo.png"
      },
      {
        title: "Web Development Member",
        company: "AWS Cloud Club VIT Chennai",
        duration: "Mar 2026 - Present",
        location: "VIT Chennai",
        description: "Participating in cloud computing initiatives and technical workshops focused on AWS infrastructure. Developing expertise in cloud architecture, modern deployment strategies, and building highly available applications.",
        color: "#FF9900",
        logo_path: "aws_logo.png"
      },
      {
        title: "Council - WebOps & Cybersec",
        company: "Code Crafters - IITM BS",
        duration: "Dec 2025 - Present",
        location: "Remote",
        description: "Architected and deployed the official CodeCrafters community platform using Next.js and Tailwind CSS. Implemented responsive interfaces, optimized SEO, and integrated secure data collection workflows to enhance user engagement.",
        color: "#2563eb",
        logo_path: "codecrafters_logo.jpg"
      },
      {
        title: "Development Member",
        company: "Microsoft Innovations Club",
        duration: "Sep 2026 - Present",
        location: "VIT Chennai",
        description: "Contributing to the club's development initiatives, exploring Azure cloud services, and implementing modern engineering solutions.",
        color: "#00A4EF",
        logo_path: "microsoft-club-logo.jpeg"
      },
      {
        title: "AI/ML Member",
        company: "Microsoft Innovations Club",
        duration: "Oct 2025 - Present",
        location: "VIT Chennai",
        description: "Engaging in Microsoft-centric projects focused on artificial intelligence and machine learning, building intelligent solutions using Azure AI services.",
        color: "#00A4EF",
        logo_path: "microsoft-club-logo.jpeg"
      }
    ]
  },
  {
    title: "Open Source Communities",
    experiences: [
      {
        title: "Project Admin",
        company: "EduLinkUp",
        duration: "May 2026 - Present",
        location: "Remote",
        description: "Serving as Project Admin for the OSSfolio open-source platform, overseeing project workflows, issue management, and contributor mentorship. Reviewing pull requests and maintaining high-quality code standards while fostering an active global developer community.",
        color: "#1C7ED6",
        logo_path: "elusoc.png"
      },
      {
        title: "Campus Ambassador",
        company: "GirlScript Summer of Code 2026",
        duration: "Apr 2026 - Present",
        location: "Remote",
        description: "Promoting open-source culture and development practices on campus by organizing coding events and technical workshops. Mentoring students and facilitating meaningful contributions to various global open-source initiatives.",
        color: "#FF5B9C",
        logo_path: "gssoc_logo.png"
      },
      {
        title: "Open Source Contributor - AI/Agent Track",
        company: "GirlScript Summer of Code",
        duration: "Apr 2026 - Present",
        location: "Remote",
        description: "Contributing scalable code and documentation to open-source projects focused on artificial intelligence and agent-based systems. Collaborating with global maintainers to integrate innovative AI solutions and enhance core feature implementations.",
        color: "#FF5B9C",
        logo_path: "gssoc_logo.png"
      },
      {
        title: "Open Source Contributor",
        company: "Nexus Spring of Code",
        duration: "May 2026 - Present",
        location: "Remote",
        description: "Participated as an active contributor resolving critical issues and implementing new features across web and AI projects. Collaborated closely with project maintainers to improve system performance and code reliability.",
        color: "#0077B5",
        logo_path: "nexus_logo.png"
      }
    ]
  },
  {
    title: "Volunteers",
    experiences: [
      {
        title: "Technical Team Lead (AI&ML)",
        company: "V-Vortex",
        duration: "Jan 2026",
        location: "VIT Chennai",
        description: "Directed AI & ML technical evaluations for a large-scale university hackathon featuring over 300 participants. Formulated complex problem statements and established rigorous judging criteria for project assessments.",
        color: "#003366",
        logo_path: "v-vortex.jpeg"
      },
      {
        title: "Internshala Student Partner",
        company: "Internshala",
        duration: "Nov 2025 - Jan 2026",
        location: "Remote",
        description: "Executed comprehensive campus outreach initiatives to increase awareness of technical internships and training programs. Leveraged digital marketing strategies to drive student engagement and platform adoption.",
        color: "#1295C9",
        logo_path: "internshala-logo.jpg"
      },
      {
        title: "Student House Captain",
        company: "DAV Group of Schools, Chennai",
        duration: "Jun 2023 - Apr 2024",
        location: "Chennai",
        description: "Directed student engagement initiatives and coordinated inter-house activities for a large student body. Demonstrated strong leadership capabilities through team coordination and athletic team management.",
        color: "#1F70C1",
        logo_path: "dav-logo.png"
      },
      {
        title: "Student Volunteer",
        company: "V The Volunteers",
        duration: "Feb 2024",
        location: "VIT Chennai",
        description: "Coordinated logistical operations and facilitated engagement activities for community service events. Demonstrated strong organizational skills while supporting social welfare initiatives.",
        color: "#E22E42",
        logo_path: "v-volunteers-logo.jpeg"
      }
    ]
  }
];

function ExperienceItem({ exp }: { exp: any }) {
  return (
    <div className="relative border-b border-white/10 cursor-pointer overflow-hidden group">
      {/* Scroll Sweep Background */}
      <div
        className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] z-0 -translate-y-full group-hover:translate-y-0"
        style={{ backgroundColor: exp.color }}
      />

      <div className="relative z-10 p-6 md:p-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 w-full">
          <div className="flex items-center gap-6 flex-1">
            <div className="w-16 h-16 shrink-0 relative bg-transparent flex items-center justify-center transition-colors duration-300">
              <Image
                src={`/assets/images/${exp.logo_path}`}
                alt={exp.company}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-display font-bold transition-colors duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-neutral-200 group-hover:text-black">
                {exp.title}
              </h4>
              <div className="font-mono uppercase tracking-widest text-xs font-semibold mt-2 transition-colors duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-emerald-500 group-hover:text-black/70">
                {exp.company}
              </div>
            </div>
          </div>

          <div className="font-mono text-xs font-semibold flex flex-row md:flex-col gap-3 md:gap-1 text-left md:text-right shrink-0 transition-colors duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-neutral-500 group-hover:text-black/60">
            <span>{exp.duration}</span>
            <span>{exp.location}</span>
          </div>
        </div>

        {/* Expandable Description using grid-rows trick */}
        <div className="grid transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <p className="pt-6 text-base md:text-lg transition-colors duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] leading-relaxed max-w-3xl text-neutral-400 group-hover:text-black/90">
              {exp.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 flex flex-col gap-24 lg:gap-32">
      {experienceSections.map((section, idx) => (
        <div key={idx} className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start w-full relative">

          {/* Sticky Left Title */}
          <div className="lg:w-[30%] lg:sticky lg:top-32 shrink-0 relative z-10">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white/20 capitalize"
            >
              {section.title}
            </motion.h3>
          </div>

          {/* Right Scrolling List */}
          <div className="lg:w-[70%] flex flex-col border-t border-white/10 w-full relative z-0">
            {section.experiences.map((exp, expIdx) => (
              <motion.div
                key={expIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: expIdx * 0.1 }}
              >
                <ExperienceItem exp={exp} />
              </motion.div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
