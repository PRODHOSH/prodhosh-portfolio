/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Prodhosh VS | Full Stack Developer & AI Engineer",
  description:
    "Prodhosh VS — Full Stack Developer & AI Enthusiast. CSE at VIT Chennai · Data Science at IIT Madras. Building SaaS platforms, RAG-powered tools, and open-source projects. Active contributor in GSSoC'26, NSoC'26, and SSoC'26.",
  og: {
    title: "Prodhosh VS | Full Stack Developer & AI Engineer",
    type: "website",
    url: "https://prodhosh.me",
  },
};

//Home Page
const greeting = {
  title: "Prodhosh VS",
  logo_name: "Prodhosh VS",
  nickname: "thecodeguy",
  subTitle:
    "A passionate individual who always thrives to work on end-to-end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink: "/resume.pdf",
  portfolio_repository: "https://github.com/PRODHOSH/masterPortfolio",
  githubProfile: "https://github.com/PRODHOSH",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/PRODHOSH",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prodhoshvs/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:prodhosh3@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/itzprodhosh/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/prodhosh3",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Discord",
    link: "https://discord.com/users/itzprodhoshh",
    fontAwesomeIcon: "fa-discord",
    backgroundColor: "#7289DA",
  },
];

const skills = {
  data: [
    {
      title: "Languages & Frontend",
      fileName: "WebDevelopmentImg",
      imagePath: "fullstack.svg",
      imageAlt: "Full stack development illustration",
      skills: [
        "⚡ Building responsive and scalable web applications using modern React and Next.js frameworks",
        "⚡ Proficient in JavaScript/TypeScript for frontend development with focus on user experience",
        "⚡ Creating interactive UIs with HTML5, CSS, and Tailwind CSS for pixel-perfect designs",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
      ],
    },
    {
      title: "Backend & Databases",
      fileName: "BackendImg",
      imagePath: "programmer.svg",
      imageAlt: "Backend and database illustration",
      skills: [
        "⚡ Building scalable backend systems with Python and modern web frameworks",
        "⚡ Database design and optimization with SQL (PostgreSQL, MySQL) and NoSQL solutions",
        "⚡ API development and cloud-based database solutions like Supabase",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3FCF8E",
          },
        },
      ],
    },
    {
      title: "AI & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building ML pipelines and integrating AI systems into real-world applications",
        "⚡ Experience with RAG systems, vector databases, and LLM integration",
        "⚡ Data analysis and visualization with Python scientific stack",
      ],
      softwareSkills: [
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Qiskit",
          fontAwesomeClassname: "simple-icons:qiskit",
          style: {
            color: "#6B3FA0",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying applications on modern cloud platforms like Vercel, Netlify, and Railway",
        "⚡ Containerization with Docker for consistent deployment environments",
        "⚡ CI/CD automation and infrastructure management",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#00C7B7",
          },
        },
        {
          skillName: "Railway",
          fontAwesomeClassname: "simple-icons:railway",
          style: {
            color: "#0B0D0E",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F1502F",
          },
        },
        {
          skillName: "n8n",
          fontAwesomeClassname: "simple-icons:n8n",
          style: {
            color: "#DF0000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/PRODHOSH",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/prodhoshvs/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institute of Technology",
      subtitle: "B.Tech in Computer Science Engineering",
      logo_path: "vit-logo.png",
      alt_name: "VIT Chennai",
      duration: "Jun 2025 - Jul 2029",
      descriptions: [
        "⚡ Core computer science engineering with focus on algorithms, databases, and systems design.",
        "⚡ Building expertise in full-stack development and cloud infrastructure.",
        "⚡ Active member of AWS Cloud Club, ACM Student Chapter, and Microsoft Innovations Club.",
      ],
      website_link: "https://chennai.vit.ac.in/",
    },
    {
      title: "Indian Institute of Technology Madras",
      subtitle: "B.S in Data Science",
      logo_path: "iit-madras-logo.png",
      alt_name: "IIT Madras",
      duration: "May 2025 - May 2029",
      descriptions: [
        "⚡ Specialized degree in Data Science with comprehensive mathematics and statistics foundation.",
        "⚡ Advanced coursework in machine learning, AI, and data-driven problem solving.",
        "⚡ Contributing to multiple projects in web development and AI systems integration.",
      ],
      website_link: "https://study.iitm.ac.in/ds",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Generative AI",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link: require("./assets/certificates/Introduction to Generative AI ~ Google Cloud.png"),
      alt_name: "Google Cloud",
      color_code: "#4285F499",
    },
    {
      title: "AI For Everyone",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: require("./assets/certificates/ai_for_everyone.png"),
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Build Your AI Startup",
      subtitle: "- BYAMN",
      logo_path: "coursera_logo.png",
      certificate_link: require("./assets/certificates/BYAMN-Certificate-Prodhosh-VS.jpg"),
      alt_name: "BYAMN",
      color_code: "#2A73CC",
    },
    {
      title: "AI Tool Workshop",
      subtitle: "- Be10x",
      logo_path: "microsoft_logo.png",
      certificate_link: require("./assets/certificates/be10x.pdf"),
      alt_name: "Be10x",
      color_code: "#D83B0199",
    },
    {
      title: "Claude Code in Action",
      subtitle: "- Workshop",
      logo_path: "ibm_logo.png",
      certificate_link: require("./assets/certificates/claude_code_in_action.pdf"),
      alt_name: "Claude",
      color_code: "#1F70C199",
    },
    {
      title: "Ctrl+ML, Alt+DL",
      subtitle: "- Event",
      logo_path: "stanford_logo.png",
      certificate_link: require("./assets/certificates/ctrlmlaltdl.png"),
      alt_name: "Event",
      color_code: "#8C151599",
    },
    {
      title: "Margazhi Certificate",
      subtitle: "- Hackathon/Event",
      logo_path: "nptel_logo.png",
      certificate_link: require("./assets/certificates/margazhi_certificate.pdf"),
      alt_name: "Margazhi",
      color_code: "#FFBB0099",
    },
  ],
};

const badges = {
  badges: [
    {
      title: "AWS Educate",
      image: "AWSE.webp",
    },
    {
      title: "NSOC 1st Badge",
      image: "NSOC 1st badge.png",
    },
    {
      title: "AI Agent",
      image: "aiagent.png",
    },
    {
      title: "Ambassador",
      image: "ambassador (1).png",
    },
    {
      title: "Cloudinary Creator",
      image: "cloudinary_creator.webp",
    },
    {
      title: "Contributor",
      image: "contributor.png",
    },
    {
      title: "Nexus Contributor",
      image: "nexus-contributor.png",
    },
    {
      title: "Open Source",
      image: "opensource.png",
    },
    {
      title: "SSoC Contributor",
      image: "ssoc-s5-contributor-PRODHOSH.png",
    },
    {
      title: "YSoC Badge",
      image: "ysoc-badge.jpg",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Actively contributing to open source and building SaaS platforms. Working as a Full Stack Developer intern, campus ambassador, and technical member across multiple organizations. Passionate about creating scalable applications and contributing to the developer community.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Freelance & Internships",
      work: true,
      experiences: [
        {
          title: "Product Developer",
          company: "BS Prep",
          company_url: "https://www.bsprep.com",
          logo_path: "iitm-bs.png",
          duration: "Jan 2026 - Present",
          location: "Remote",
          description:
            "Built and maintain a centralized learning platform for IITM BS students providing course access, enrollments, and live class participation through a dashboard-based system. Implemented authentication, payment workflow, and usage analytics while coordinating feature integrations and updates.",
          color: "#2563eb",
        },
        {
          title: "Full Stack Developer Intern",
          company: "Nexus Spring of Code",
          company_url: "https://github.com/nexus-soc",
          logo_path: "nexus_logo.png",
          duration: "May 2026 - Present",
          location: "Remote",
          description:
            "Contributing to full-stack development projects in an open-source spring-of-code program. Building modern web applications using React and Next.js with focus on scalability and user experience.",
          color: "#0077B5",
        },
        {
          title: "Cloudinary Creator",
          company: "Cloudinary",
          company_url: "https://cloudinary.com",
          logo_path: "cloudinary_logo.png",
          duration: "Mar 2026 - Present",
          location: "Remote",
          description:
            "Creating technical content and implementing media management solutions using Cloudinary APIs. Focused on optimizing visual assets and improving web performance through automated media workflows.",
          color: "#3448C5",
        },
      ],
    },
    {
      title: "Clubs & Societies",
      experiences: [
        {
          title: "Website Manager",
          company: "Nallamala House - IIT Madras",
          company_url: "https://nallamala.iitm.ac.in",
          logo_path: "nallamala_house_iit_madras_logo.jpg",
          duration: "Dec 2025 - Present",
          location: "Remote",
          description:
            "Built and managing the official Nallamala House website for IIT Madras. Handled frontend development, WebOps coordination, and feature rollouts. Designing responsive interfaces and optimizing performance.",
          color: "#FF6B35",
        },
        {
          title: "Technical Member",
          company: "ACM Student Chapter VITC",
          company_url: "https://www.acm.org/",
          logo_path: "acm_logo.png",
          duration: "Mar 2026 - Present",
          location: "VIT Chennai",
          description:
            "Active member contributing to technical events, coding competitions, and knowledge-sharing sessions. Helping organize workshops on various programming topics and technologies.",
          color: "#0073E6",
        },
        {
          title: "Web Development Member",
          company: "AWS Cloud Club VIT Chennai",
          company_url: "https://www.aws.amazon.com/",
          logo_path: "aws_logo.png",
          duration: "Mar 2026 - Present",
          location: "VIT Chennai",
          description:
            "Participating in AWS cloud-related technical sessions and workshops. Learning cloud architecture, deployment strategies, and building applications on AWS infrastructure.",
          color: "#FF9900",
        },
        {
          title: "AI/ML Member",
          company: "Microsoft Innovation Club",
          company_url: "https://www.microsoft.com",
          logo_path: "microsoft-club-logo.jpeg",
          duration: "Oct 2025 - Present",
          location: "VIT Chennai",
          description:
            "Engaged in Microsoft-centric innovation projects and workshops. Exploring Azure cloud services, .NET development, and modern productivity tools.",
          color: "#00A4EF",
        },
        {
          title: "Council - WebOps, Coding & Cybersecurity",
          company: "CodeCrafters Society IIT Madras",
          company_url: "https://www.iitm.ac.in",
          logo_path: "codecrafters_logo.jpg",
          duration: "Dec 2025 - Present",
          location: "IIT Madras",
          description:
            "Active participant in the coding society, focusing on algorithmic problem solving, software engineering best practices, and collaborative development projects within the IITM ecosystem.",
          color: "#2563eb",
        },
        {
          title: "Technical Member",
          company: "Mathematics Club VITCC",
          company_url: "https://chennai.vit.ac.in/",
          logo_path: "math-club-logo.jpeg",
          duration: "Sep 2025 - Present",
          location: "VIT Chennai",
          description:
            "Assisted in organizing and coordinating the Chessathlon, a chess event under Technovit 2025, managing logistics and participant engagement.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Open Source Communities",
      experiences: [
        {
          title: "Campus Ambassador",
          company: "GirlScript Summer of Code 2026",
          company_url: "https://www.gssoc.girlscript.tech/",
          logo_path: "gssoc_logo.png",
          duration: "Apr 2026 - Present",
          location: "VIT Chennai",
          description:
            "Promoting open-source culture and development practices on campus. Mentoring students, organizing coding events, and facilitating their contributions to meaningful open-source projects.",
          color: "#FF5B9C",
        },
        {
          title: "Open Source Contributor - AI/Agent Track",
          company: "GirlScript Summer of Code",
          company_url: "https://www.gssoc.girlscript.tech/",
          logo_path: "gssoc_logo.png",
          duration: "Apr 2026 - Present",
          location: "Remote",
          description:
            "Contributing to open-source projects focusing on AI and agent-based systems. Collaborating with global developers on innovative solutions and contributing code, documentation, and feature enhancements.",
          color: "#FF5B9C",
        },
        {
          title: "Open Source Contributor - SSoC Season 5",
          company: "Social Summer of Code",
          company_url: "https://ssoc.dev",
          logo_path: "social_logo.png",
          duration: "Apr 2026 - Present",
          location: "Remote",
          description:
            "Contributing to social-impact projects during SSoC Season 5. Focused on building community-driven software solutions and enhancing user interfaces for non-profit platforms.",
          color: "#E22E42",
        },
        {
          title: "Open Source Contributor - NSoC",
          company: "Nexus Spring of Code",
          company_url: "https://github.com/nexus-soc",
          logo_path: "nexus_logo.png",
          duration: "May 2026 - Present",
          location: "Remote",
          description:
            "Participating in NSoC as a contributor, working on various web and AI projects. Collaborating with maintainers to implement new features and fix critical issues.",
          color: "#0077B5",
        },
      ],
    },
    {
      title: "Volunteers",
      experiences: [
        {
          title: "Technical Team Lead (AI&ML)",
          company: "V-Vortex",
          company_url: "https://www.vit.ac.in",
          logo_path: "v-vortex.jpeg",
          duration: "Jan 2026",
          location: "VIT Chennai",
          description:
            "Led the AI & ML evaluation for the V-Vortex Hackathon, organized with SCOPE (School of Computer Science & Engineering), VIT, involving 300+ participants; handled problem statements, judging criteria, and final shortlisting.",
          color: "#003366",
        },
        {
          title: "Internshala Student Partner — ISP",
          company: "Internshala",
          company_url: "https://internshala.com",
          logo_path: "internshala-logo.jpg",
          duration: "Nov 2025 - Jan 2026",
          location: "Remote",
          description:
            "Helping students learn about Internshala internships and online trainings. Spreading awareness through campus outreach and social media.",
          color: "#1295C9",
        },
        {
          title: "Student House Captain",
          company: "DAV Group of Schools (TNAES), Chennai",
          company_url: "#",
          logo_path: "dav-logo.png",
          duration: "Jun 2023 - Apr 2024",
          location: "Chennai",
          description:
            "Led the Virjanand house, managing over 1000+ students during sports day events, and served as the DAV basketball team captain.",
          color: "#1F70C1",
        },
        {
          title: "Student Volunteer",
          company: "V The Volunteers",
          company_url: "#",
          logo_path: "v-volunteers-logo.jpeg",
          duration: "Feb 2024",
          location: "VIT Chennai",
          description:
            "Assisted in organizing and coordinating activities for senior citizens during Elders Fest. Focused on social services and community engagement.",
          color: "#E22E42",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Building scalable web platforms, AI-powered systems, and innovative solutions. From RAG-powered document intelligence to quantum cryptography simulators, my projects focus on creating meaningful impact through technology.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "flashfetch",
      name: "FlashFetch",
      description:
        "A Retrieval-Augmented Generation (RAG) powered document QA system. Upload PDFs, TXT, or Markdown files and ask questions in natural language. Every answer is grounded in your documents with source citations, quoted passages, and confidence scores. Features multilingual queries, voice input, shareable chat sessions, searchable history, and a Chrome extension.",
      descriptionPoints: [
        "RAG-powered document intelligence with vector similarity search",
        "Chrome extension for querying PDFs directly from browser",
        "Multilingual support and voice input capabilities",
        "Confidence scoring and source citations",
        "Shareable chat sessions and searchable history",
      ],
      tags: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "FAISS",
        "Supabase",
        "Groq LLaMA 3",
      ],
      projectLink: "https://github.com/PRODHOSH/rag-document-qa-bot",
      imgURL: "cine-ai.png",
      websiteLink: "https://flashfetch.app",
    },
    {
      id: "bsprep",
      name: "BS Prep - IITM BS Learning Platform",
      description:
        "A full-stack learning platform designed for the IITM BS student community. Centralized dashboard for accessing courses, live classes, and community resources. Handles authentication, course enrollment, payment workflows, and live session delivery with a modern, responsive UI.",
      descriptionPoints: [
        "Email + Google OAuth secure authentication",
        "Course enrollment system with live class synchronization",
        "Student dashboard with progress tracking",
        "Razorpay payment workflow integration",
        "Cloud storage for profiles and resources",
        "Community support and engagement features",
      ],
      tags: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Razorpay",
        "Google Sheets API",
      ],
      projectLink: "https://github.com/PRODHOSH/bs-prep",
      imgURL: "prodshell.png",
    },
    {
      id: "nallamala-house",
      name: "Nallamala House - IIT Madras Official Website",
      description:
        "Built and maintaining the official website for Nallamala House, IIT Madras. Central hub for house leadership, communities, blogs, updates, and events. Designed for real student engagement with responsive dark-themed UI.",
      descriptionPoints: [
        "Council and team pages across multiple years",
        "Community and regional meetup showcases",
        "Blog and updates management system",
        "Event listings and calendar integration",
        "Upcoming: Resources, GPA utilities, and queries section",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      projectLink: "https://github.com/PRODHOSH/nallamala-website",
      imgURL: "nallamala-house.png",
      websiteLink: "https://nallamala.iitm.ac.in",
    },
    {
      id: "codecrafters",
      name: "CodeCrafters Coding Society - Official Website",
      description:
        "Designed, developed, and deployed the official website for CodeCrafters Coding Society at IIT Madras BS. Central hub for events, council, domains, and community engagement with immersive, highly interactive UI.",
      descriptionPoints: [
        "Interactive 3D particle background animation",
        "Animated hero section with engaging visuals",
        "Searchable event gallery with 13+ events",
        "Filterable council directory (20 members, 4 departments)",
        "Dynamic domains showcase and FAQ system",
        "Rich motion design and responsive dark theme",
      ],
      tags: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Three.js",
      ],
      projectLink: "https://github.com/CodeCrafters-IITMBS/code-crafters",
      imgURL: "code-crafters.png",
      websiteLink: "https://codecrafters.iitmbs.org",
    },
    {
      id: "bb84-simulator",
      name: "BB84 Quantum Key Distribution - 3D Simulator",
      description:
        "An interactive 3D simulator demonstrating the BB84 Quantum Key Distribution protocol. Visualizes photon polarization, key generation, and eavesdropping detection in real-time. Makes quantum cryptography concepts intuitive for learners and researchers.",
      descriptionPoints: [
        "Real-time visualization of quantum mechanics principles",
        "Interactive photon polarization demonstrations",
        "Secure key generation visualization",
        "Eavesdropping detection mechanisms",
        "Educational tool for quantum cryptography",
      ],
      tags: ["Qiskit", "Python", "Three.js", "Quantum Computing"],
      projectLink: "https://github.com/PRODHOSH/bb84-simulator",
      imgURL: "bb84_photo.png",
    },
  ],
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "prodhosh_photo.jpeg",
    description:
      "I'm available on GitHub, LinkedIn, and email. Feel free to reach out for collaborations on exciting web development or AI projects. I'm always open to discussing new technologies, opportunities, and ideas.",
  },
  blogSection: {
    title: "Latest Updates",
    subtitle:
      "Follow my journey in full-stack development and AI engineering through my contributions to open-source projects and community initiatives.",
    link: "https://github.com/PRODHOSH",
    avatar_image_path: "projects_image.svg",
  },
  addressSection: {
    title: "Based In",
    subtitle: "Chennai, Tamil Nadu, India",
    locality: "Chennai",
    country: "India",
    region: "Tamil Nadu",
    postalCode: "600001",
    streetAddress: "VIT Campus, Vellore Institute of Technology",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/KmQqjVpnJ3h7xJ6DA",
  },
  phoneSection: {
    title: "Email",
    subtitle: "prodhosh3@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  contactPageData,
  badges,
};
