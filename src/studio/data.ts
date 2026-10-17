// All portfolio content lives here. Sources: prodhosh.me, the final-portfolio repo and the project links.

export const me = {
  name: "Prodhosh V S",
  handle: "thecodeguy",
  email: "hello@prodhosh.me",
  location: "Chennai, India",
  call: "https://cal.com/itzprodhosh/15min",
  resume: "/prodhosh-resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/prodhosh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/prodhoshvs" },
    { label: "X", href: "https://x.com/prodhosh3" },
    { label: "Links", href: "https://links.prodhosh.me" },
    { label: "Discord", href: "https://discordapp.com/users/itzprodhoshh" },
  ],
};

export const stats = [
  { value: 15, suffix: "+", label: "Projects shipped", note: "From AI systems to full-stack platforms" },
  { value: 50, suffix: "+", label: "Open-source contributions", note: "Merged PRs across global OSS programs" },
  { value: 4500, suffix: "+", label: "Members on a platform I led", note: "Nallamala House, IIT Madras" },
];

export type Service = { n: string; title: string; words: [string, string]; icon: string; body: string; tags: string[] };

export const services: Service[] = [
  { n: "01", title: "Web design & development", words: ["WEB", "DESIGN"], icon: "web", body: "Scalable, sharp-looking websites and landing pages. Obsessed with micro-animations and perfect responsive layouts.", tags: ["Next.js", "React", "Tailwind", "Framer Motion", "UI/UX"] },
  { n: "02", title: "Web apps & SaaS", words: ["WEB APPS", "& SAAS"], icon: "apps", body: "Complete SaaS platforms with auth, payments and dashboards, tailored to your business logic.", tags: ["Full-stack", "Node.js", "PostgreSQL", "Supabase", "APIs"] },
  { n: "03", title: "Mobile apps", words: ["MOBILE", "APPS"], icon: "mobile", body: "Cross-platform iOS and Android apps that feel native and ship from one codebase.", tags: ["React Native", "Expo", "iOS", "Android"] },
  { n: "04", title: "Software solutions", words: ["SOFTWARE", "SOLUTIONS"], icon: "software", body: "Bespoke tools, desktop apps and internal software built around how your team actually works.", tags: ["Custom software", "Desktop", "Integrations"] },
  { n: "05", title: "AI & data science", words: ["AI &", "DATA"], icon: "ai", body: "LLM features, RAG pipelines and vector search wired into real products, plus data analysis that finds the signal.", tags: ["LLaMA", "RAG", "Python", "FastAPI", "Pandas"] },
  { n: "06", title: "Logo & brand design", words: ["LOGO &", "BRANDING"], icon: "logo", body: "Memorable identities: custom logos, typography and visual guidelines that hold up everywhere.", tags: ["Figma", "Illustrator", "Identity", "Typography"] },
  { n: "07", title: "Automations & SEO", words: ["AUTOMATIONS", "& SEO"], icon: "auto", body: "Workflow automations that remove manual work, and sites built to rank.", tags: ["n8n", "Webhooks", "SEO", "Analytics"] },
  { n: "08", title: "Cloud & DevOps", words: ["CLOUD &", "DEVOPS"], icon: "cloud", body: "Reliable deployments, CI/CD and serverless setups on modern cloud infrastructure.", tags: ["AWS", "Google Cloud", "Docker", "Vercel"] },
];

export type Project = {
  name: string;
  cat: string;
  group: "Websites" | "Web apps" | "AI" | "Open source" | "Software";
  desc: string;
  stack: string[];
  live?: string;
  code?: string;
  shot: string; // tall laptop-width screenshot; the hover blob reveals a lower section of it
  tint: string;
};

export const projects: Project[] = [
  { name: "BS Prep", cat: "Learning platform", group: "Web apps", tint: "#ffd2b8",
    desc: "Learning platform for the IIT Madras BS community: auth, enrollment, payments and live sessions. I'm the founding engineer.",
    stack: ["Next.js", "Supabase", "TypeScript"], live: "https://bsprep.in", code: "https://github.com/PRODHOSH/bs-prep", shot: "/shots/bsprep.webp" },
  { name: "BS Prep Ambassador", cat: "Ambassador portal", group: "Web apps", tint: "#f9e2e1",
    desc: "The student ambassador portal for BS Prep, automating onboarding and tracking for campus ambassadors.",
    stack: ["Next.js", "Supabase", "Automation"], live: "https://ambassador.bsprep.in", shot: "/shots/ambassador-t.webp" },
  { name: "Banya", cat: "E-commerce website", group: "Websites", tint: "#ece3d8",
    desc: "Storefront website for Banya India with a bold product-first design, shop, community and newsletter.",
    stack: ["Web design", "Frontend", "E-commerce"], live: "https://banyaindia.com", shot: "/shots/banya-t.webp" },
  { name: "Annexra", cat: "Web agency", group: "Websites", tint: "#ffc9b0",
    desc: "Full company website for Annexra. UI/UX, frontend, backend integration, responsive design and SEO, owned end to end.",
    stack: ["Next.js", "Tailwind", "SEO"], live: "https://annexra.com", code: "https://github.com/PRODHOSH/annexra", shot: "/work/annexra.webp" },
  { name: "FlashFetch", cat: "AI SaaS", group: "AI", tint: "#f9e2e1",
    desc: "RAG document Q&A. Upload PDFs, ask in plain language, get answers grounded with source citations.",
    stack: ["Next.js", "FastAPI", "FAISS", "Groq LLaMA 3"], live: "http://flashfetch.vercel.app", code: "https://github.com/PRODHOSH/rag-document-qa-bot", shot: "/shots/flashfetch-t.webp" },
  { name: "Kivo", cat: "Desktop AI assistant", group: "Software", tint: "#e7e0f7",
    desc: "Privacy-first desktop voice assistant that automates OS workflows with local LLMs and Whisper.net.",
    stack: ["Whisper.net", "Local LLM", "Desktop"], live: "https://kivo.prodhosh.me", code: "https://github.com/PRODHOSH/kivo", shot: "/shots/kivo-t.webp" },
  { name: "Vector", cat: "Task OS", group: "Software", tint: "#ece3d8",
    desc: "Kanban-driven task operating system for students, with calendar sync and smart integrations.",
    stack: ["React", "Kanban", "Calendar sync"], live: "https://vector.prodhosh.me", code: "https://github.com/PRODHOSH/vector", shot: "/shots/vector-t.webp" },
  { name: "Relay", cat: "Productivity", group: "Software", tint: "#ffd2b8",
    desc: "Local-first document and email engine. Generate LaTeX PDFs and send bulk mail straight from your machine.",
    stack: ["LaTeX", "Node", "Local-first"], live: "https://relay.prodhosh.me", code: "https://github.com/PRODHOSH/relay", shot: "/shots/relay-t.webp" },
  { name: "OSS Connect", cat: "Open source", group: "Open source", tint: "#f9e2e1",
    desc: "Your open-source identity beyond GitHub: a public profile of merged PRs, issues, orgs and programs.",
    stack: ["Next.js", "Supabase", "Cloudflare"], live: "https://oss-website-navy.vercel.app", code: "https://github.com/PRODHOSH/ossconnect", shot: "/shots/ossconnect-t.webp" },
  { name: "GSSoC Tracker", cat: "Contributor tool", group: "Open source", tint: "#ffc9b0",
    desc: "A fast personal tracker for GSSoC contributors and mentors: PRs, labels and scores using the official formulas.",
    stack: ["Next.js 15", "TypeScript", "Recharts"], live: "https://gssoc-tracker.vercel.app", shot: "/shots/gssoc-t.webp" },
  { name: "EcoLens", cat: "AI platform", group: "AI", tint: "#ece3d8",
    desc: "Award-winning media optimisation platform built for Cloudinary, with automated workflows that analyse and speed up web assets.",
    stack: ["Next.js", "TypeScript", "Cloudinary"], live: "http://ecolens-cloudinary.vercel.app", code: "https://github.com/PRODHOSH/ecolens", shot: "/shots/ecolens-t.webp" },
  { name: "Nallamala House", cat: "Community platform", group: "Websites", tint: "#f9e2e1",
    desc: "Community platform for Nallamala House, IIT Madras, serving 4,500+ members. I led the frontend.",
    stack: ["Next.js", "Tailwind", "Community"], live: "https://nallamala.iitbs.org", shot: "/work/nallamala.webp" },
  { name: "CodeCrafters", cat: "Community website", group: "Websites", tint: "#ffd2b8",
    desc: "Official CodeCrafters platform for IITM BS: responsive interfaces, SEO and secure data collection workflows.",
    stack: ["Next.js", "Tailwind", "SEO"], live: "http://codecrafters.iitmbs.org", shot: "/shots/codecrafters-t.webp" },
  { name: "Mathematics Club", cat: "Club website", group: "Websites", tint: "#ece3d8",
    desc: "Website for the Mathematics Club at VIT Chennai: events, tutorials, council and team.",
    stack: ["Web design", "Frontend", "Vercel"], live: "http://mathematicsclubvitc.vercel.app", shot: "/shots/mathclub-t.webp" },
  { name: "FlickMood", cat: "Semantic search", group: "AI", tint: "#f9e2e1",
    desc: "Describe your mood in plain words; vector embeddings find the movie to match.",
    stack: ["Embeddings", "Next.js", "Vector DB"], code: "https://github.com/PRODHOSH/flickmood", shot: "/work/flickmood.webp" },
];

export const filters = ["All", "Websites", "Web apps", "AI", "Software", "Open source"] as const;

export type Role = { title: string; org: string; when: string; where: string; body: string; logo: string };
export type RoleGroup = { id: string; label: string; roles: Role[] };

export const experience: RoleGroup[] = [
  {
    id: "work", label: "Freelance & internships",
    roles: [
      { title: "Full Stack Developer Intern", org: "Midgreen", when: "Sep 2026 — Now", where: "Remote", logo: "midgreen.png",
        body: "Built across the full stack for Midgreen, a platform that helps businesses find the right sustainable packaging material: the public site, the admin panel and a search-and-matching engine that turns a plain sentence into ranked, explainable results." },
      { title: "Software Engineer Intern", org: "Annexra", when: "Aug 2026 — Now", where: "Remote", logo: "annexra.png",
        body: "Build production software for Annexra and its clients: the company website, a full D2C e-commerce platform with Razorpay checkout and an admin panel, and an internal client ERP workspace." },
      { title: "Next.js Developer Intern", org: "Sindra", when: "Jul — Sep 2026", where: "Remote", logo: "sindra.png",
        body: "Built Sindra Internal OS: one workspace for project management, CRM, internal chat, email and documents, with Supabase auth, role-based access and automated workflows." },
      { title: "Developer Intern", org: "EnlightEd", when: "Jun — Jul 2026", where: "Remote", logo: "enlighted.webp",
        body: "Engineered production features for an AI-powered adaptive learning platform across student, teacher and parent apps." },
      { title: "Cloudinary Creator", org: "Cloudinary", when: "Mar 2026 — Now", where: "Remote", logo: "cloudinary_logo.png",
        body: "Built EcoLens, an award-winning media optimisation platform on Next.js, TypeScript and Cloudinary APIs, with automated workflows that analyse and speed up web assets." },
      { title: "Founding Engineer", org: "BS Prep", when: "Jan 2026 — Now", where: "Remote", logo: "iitm-bs.png",
        body: "Lead the technical side of BSPrep, a student-built platform for IIT Madras BS students. Shipped four products on one stack: the learning platform, an SEO blog, the ambassador portal and an internal workspace, plus 5 corporate sponsorships." },
    ],
  },
  {
    id: "clubs", label: "Clubs & societies",
    roles: [
      { title: "Development Member", org: "Microsoft Innovations Club", when: "Aug 2026 — Now", where: "VIT Chennai", logo: "microsoft-club-logo.jpeg", body: "Contributing to the club's development initiatives and exploring Azure cloud services." },
      { title: "Website Committee Volunteer", org: "TechnoVIT Chennai", when: "Aug — Sep 2026", where: "Hybrid", logo: "technovit.png", body: "Contributed to the development and maintenance of the official TechnoVIT'26 website." },
      { title: "Technical Member", org: "ACM Student Chapter VITC", when: "Mar 2026 — Now", where: "VIT Chennai", logo: "acm_logo.png", body: "Leading frontend for chapter events including Server Surfers, with CDN and asset-delivery optimisation." },
      { title: "Web Development Member", org: "AWS Cloud Club VIT Chennai", when: "Mar 2026 — Now", where: "VIT Chennai", logo: "aws_logo.png", body: "Cloud workshops and projects around AWS infrastructure and highly available deployments." },
      { title: "Council · WebOps & Cybersec", org: "Code Crafters, IITM BS", when: "Dec 2025 — Now", where: "Remote", logo: "codecrafters_logo.jpg", body: "Built and deployed the official CodeCrafters community platform with Next.js and Tailwind, SEO and secure data collection." },
      { title: "AI/ML Member", org: "Microsoft Innovations Club", when: "Oct 2025 — Now", where: "VIT Chennai", logo: "microsoft-club-logo.jpeg", body: "Microsoft-centric AI and ML projects using Azure AI services." },
    ],
  },
  {
    id: "oss", label: "Open source",
    roles: [
      { title: "Project Admin", org: "EduLinkUp · OSSfolio", when: "May — Aug 2026", where: "Remote", logo: "elusoc.png", body: "Ran workflows, issues and contributor mentorship for OSSfolio. Placed 2nd in the EduLinkUp Summer of Code." },
      { title: "Open Source Contributor", org: "Nexus Spring of Code", when: "May — Jul 2026", where: "Remote", logo: "nexus_logo.png", body: "Resolved critical issues and shipped features across web and AI projects with maintainers." },
      { title: "Campus Ambassador", org: "GirlScript Summer of Code 2026", when: "Apr — Aug 2026", where: "Remote", logo: "gssoc_logo.png", body: "Organised coding events and workshops, and mentored students into open-source contribution." },
      { title: "Contributor · AI/Agent track", org: "GirlScript Summer of Code", when: "Apr — Aug 2026", where: "Remote", logo: "gssoc_logo.png", body: "Contributed code and docs to AI and agent-based open-source projects." },
    ],
  },
  {
    id: "vol", label: "Volunteering",
    roles: [
      { title: "Technical Team Lead (AI & ML)", org: "V-Vortex", when: "Jan 2026", where: "VIT Chennai", logo: "v-vortex.jpeg", body: "Led AI and ML evaluation for a 300+ participant hackathon: problem statements and judging criteria." },
      { title: "Internshala Student Partner", org: "Internshala", when: "Nov 2025 — Jan 2026", where: "Remote", logo: "internshala-logo.jpg", body: "Campus outreach for technical internships and training programs." },
      { title: "Student Volunteer", org: "V The Volunteers", when: "Feb 2024", where: "VIT Chennai", logo: "v-volunteers-logo.jpeg", body: "Coordinated logistics and engagement for community service events." },
      { title: "Student House Captain", org: "DAV Group of Schools", when: "Jun 2023 — Apr 2024", where: "Chennai", logo: "dav-logo.png", body: "Led inter-house activities and team coordination for a large student body." },
    ],
  },
];

export const education = [
  { school: "VIT Chennai", deg: "B.Tech, Computer Science Engineering", when: "2025 — 2029", logo: "vit-logo.png" },
  { school: "IIT Madras", deg: "B.S, Data Science", when: "2025 — 2029", logo: "iit-madras-logo.png" },
];

export const certs = [
  { title: "Claude Code 101", org: "Anthropic · Claude Academy", when: "Oct 2026", logo: "claude.svg", tone: "o" },
  { title: "Certified Cloudinary Media Developer Master", org: "Cloudinary", when: "Oct 2026", logo: "cloudinary_logo.png", tone: "w" },
  { title: "AWS Cloud Practitioner", org: "Amazon Web Services", when: "Aug 2026", logo: "aws.svg", tone: "w", wide: true },
  { title: "Python for Data Science", org: "NPTEL", when: "Sep 2025", logo: "nptel_logo.png", tone: "w" },
  { title: "Supervised Machine Learning: Regression and Classification", org: "DeepLearning.AI", when: "Sep 2025", logo: "deeplearning_ai_logo.png", tone: "w" },
  { title: "AI For Everyone", org: "DeepLearning.AI", when: "Jul 2025", logo: "deeplearning_ai_logo.png", tone: "w" },
];

export const skills = [
  "Next.js", "React", "TypeScript", "Tailwind", "React Native", "Expo", "Framer Motion", "GSAP", "Three.js", "Figma",
  "Node.js", "Python", "FastAPI", "PostgreSQL", "Supabase", "MySQL", "LLMs", "RAG", "FAISS", "Scikit-Learn",
  "Docker", "AWS", "Vercel", "n8n", "SEO", "Illustrator", "DSA", "System Design",
];

export const process = [
  { n: "01", title: "Brief", body: "We chat about what you need, who it's for and when. A free 15-minute call or a short email is enough." },
  { n: "02", title: "Plan", body: "I send a clear scope, timeline and price, with no surprises and no jargon." },
  { n: "03", title: "Build", body: "I design and build in the open, sharing progress often so you can steer early." },
  { n: "04", title: "Launch", body: "I deploy, hand over everything and stay around for fixes and the next iteration." },
];

export const faq = [
  { q: "What can I hire you for?", a: "Websites, web apps and SaaS, mobile apps, custom software, AI features, automations, SEO and logo design. If it needs a database, a UI and a bit of taste, it's my kind of project." },
  { q: "How does a freelance project start?", a: "Book a free 15-minute call or email me a short brief. I'll reply with questions and a rough plan, then a scope and quote you can say yes or no to." },
  { q: "Can you work with an existing codebase or design?", a: "Yes. I'm happy to extend, refactor or rescue an existing Next.js, React or Node project, or build from your Figma." },
  { q: "Do you also design?", a: "I design and build together, so what ships looks like the design. I also do logos and brand identity as a standalone service." },
  { q: "How much does a project cost?", a: "It depends on scope, so there is no one-size price. Send me a short brief and I'll come back with a clear fixed quote or an estimate, never a surprise bill." },
  { q: "Are you open to full-time roles?", a: "I'm an SDE aspirant, so yes. Have a look at my resume and drop me a line." },
];
