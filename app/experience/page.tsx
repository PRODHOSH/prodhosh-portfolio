import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WavyUnderline from "@/components/WavyUnderline";

const experiences = [
  {
    company: "Annexra",
    role: "Software Engineer Intern",
    date: "Aug 2026 - Present",
    points: [
      "Designed and developed the company's new full-stack website, owning UI/UX, frontend, backend integration, responsive design, and SEO.",
      "Contributing to client projects including a full-stack e-commerce platform, working across frontend and backend development."
    ]
  },
  {
    company: "Sindra",
    role: "Next.js Developer Intern",
    date: "Jul 2026 - Present",
    points: [
      "Developing an internal team workspace platform using Next.js, TypeScript, and Tailwind CSS, centralizing tasks, sprints, CRM, and knowledge management.",
      "Building admin controls, team management, email workflows, document management, and PDF generation for business documents."
    ]
  },
  {
    company: "BS Prep",
    role: "Founding Engineer",
    date: "Jan 2026 - Present",
    points: [
      "Designed, developed, and launched the core BSPrep platform, serving as the primary learning hub for students.",
      "Built and deployed the official BSPrep Blogs platform to improve SEO, increase organic traffic, and strengthen community engagement.",
      "Engineered the complete Student Ambassador Portal.",
      "Led business development for the ambassador program by pitching to companies and securing 4 corporate sponsorships.",
      "Owned the complete product lifecycle, from planning and UI/UX design to development, deployment, and maintenance using Next.js, TypeScript, Tailwind CSS, and Supabase."
    ]
  },
  {
    company: "EnlightEd",
    role: "Developer Intern",
    date: "Jun 2026 - Jul 2026",
    points: []
  },
  {
    company: "Cloudinary",
    role: "Cloudinary Creator - May Mini Hack Winner",
    date: "May 2026",
    points: [
      "Selected as a Cloudinary Creator and won the May Mini Hack with EcoLens, a full-stack media optimization platform."
    ]
  },
  {
    company: "IIT Madras",
    role: "3rd Prize – Gadget Expo Paradox '26",
    date: "Jan 2026",
    points: [
      "Awarded for the BB84 Quantum Key Distribution Simulation at a national-level innovation showcase."
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
            My professional journey building products, scaling platforms, and learning along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="w-full max-w-3xl relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, i) => (
            <div key={i} className="mb-16 relative pl-10 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 rounded-full bg-black border-2 border-emerald-500 left-[-8.5px] top-2 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-white">{exp.role}</h3>
                  <h4 className="text-xl text-emerald-400 font-display">{exp.company}</h4>
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

      <Footer />
    </main>
  );
}
