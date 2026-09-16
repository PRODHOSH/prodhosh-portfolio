type Intent = {
  id: string;
  keywords: string[];
  patterns?: RegExp[]; // Regex patterns for highly accurate question matching
  responses: string[];
};

const intents: Intent[] = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "sup", "yo", "morning", "evening", "howdy", "wassup", "hii", "hiii", "heyy", "helloo", "yoo", "greetings"],
    patterns: [/^(hi|hello|hey|sup|yo|morning|evening|howdy|wassup|hii+|heyy+|hello+|yoo+)$/i],
    responses: [
      "yo! this is askPro. u can ask me anything about prodhosh. what's on ur mind?",
      "sup! askPro here. u wanna know about his projects, experience, or grab his resume?",
      "heyy! askPro here. how can i help u learn more about prodhosh? ✌️"
    ]
  },
  {
    id: "wellbeing",
    keywords: ["how", "are", "you", "doing", "whatsup", "wbu"],
    patterns: [/(how are you|how you doing|whatsup|whats up|wbu)/i],
    responses: [
      "im just perfectly optimized code tbh, so im doing great. how can i help u learn about prodhosh?",
      "doing awesome! ready to answer any questions about his portfolio or projects rn."
    ]
  },
  {
    id: "farewell",
    keywords: ["bye", "goodbye", "cya", "see", "ya", "later", "leave", "quit"],
    patterns: [/(bye|goodbye|cya|see ya|see you later)/i],
    responses: [
      "catch u later! don't forget to connect with him on linkedin before u go 👋",
      "cya! have a good one ✌️"
    ]
  },
  {
    id: "smalltalk",
    keywords: ["cool", "awesome", "nice", "wow", "ok", "okay", "thanks", "thank", "sweet", "dope", "great", "good", "amazing", "insane", "crazy"],
    patterns: [/^(cool|awesome|nice|wow|ok|okay|thanks|thank you|sweet|dope|great|good|amazing|insane|crazy)$/i],
    responses: [
      "glad u think so! let me know if u wanna see his resume or projects.",
      "right?! he's built some pretty cool stuff. anything specific u wanna ask about?",
      "u bet! want me to pull up his contact info?"
    ]
  },
  {
    id: "affirmative",
    keywords: ["yes", "yep", "yeah", "sure", "yessir", "absolutely", "ok", "yupp", "definitely", "course", "yesssir", "yess"],
    patterns: [/^(yes+|yep+|yeah+|sure|yessir+|absolutely|ok|yupp+|definitely|of course)$/i],
    responses: [
      "awesome! what do u wanna start with? projects, experience, skills, or resume?",
      "sweet! drop ur questions below. wanna know about his projects or education?"
    ]
  },
  {
    id: "negative",
    keywords: ["no", "nope", "nah", "never", "not"],
    patterns: [/^(no+|nope+|nah+|never|not really)$/i],
    responses: [
      "no worries! im here whenever u wanna learn more about him. just ask.",
      "all good! take ur time. u can always ask me later ✌️"
    ]
  },
  {
    id: "identity",
    keywords: ["who", "are", "you", "askpro", "bot", "ai", "llm", "chatgpt"],
    patterns: [/(who are you|what are you|askpro|are you a bot|chatgpt|llm)/i],
    responses: [
      "im askPro, a custom-built rule engine (no llms tbh) made by prodhosh. im fast and don't hallucinate 🧠",
      "just a friendly hardcoded bot built by prodhosh using some clever string matching. u can ask me about his work!"
    ]
  },
  {
    id: "creator",
    keywords: ["who", "made", "created", "built", "author", "owner", "developed", "programmer"],
    patterns: [/(who made you|who created you|who built you)/i],
    responses: [
      "prodhosh built me from scratch! no third-party ai apis, just pure typescript and logic."
    ]
  },
  {
    id: "profession",
    keywords: ["what", "do", "does", "profession", "job", "role", "title", "developer", "engineer"],
    patterns: [/(what do you do|what does he do|profession|job title)/i],
    responses: [
      "he's a <strong class='text-white'>Full Stack Developer & AI Engineer</strong>. specializes in building scalable saas, ai workflows, and clean web interfaces."
    ]
  },
  {
    id: "age_height",
    keywords: ["old", "age", "born", "birthday", "height", "tall", "feet"],
    patterns: [/(how old|age|birthday|born|height|how tall)/i],
    responses: [
      "he just turned 18! and for height, he's 6 feet raw. with shoes, maybe a little over 6 on a good day lol 📏"
    ]
  },
  {
    id: "mentor",
    keywords: ["mentor", "teach", "guide", "help", "learn"],
    patterns: [/(will he mentor|can you teach|mentor me|teach me)/i],
    responses: [
      "foshoo! reach out to him at hello@prodhosh.me, he will help as much as he can 🤝"
    ]
  },
  {
    id: "donate",
    keywords: ["donate", "fund", "money", "support", "sponsor"],
    patterns: [/(donate|fund|sponsor|support financially)/i],
    responses: [
      "yes u can definitely donate or sponsor! reach out to him at hello@prodhosh.me to set it up 💸"
    ]
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "portfolio", "download", "document", "pdf"],
    patterns: [/(resume|cv|portfolio|download resume)/i],
    responses: [
      "gotchu! u can grab his latest resume right here:<br/><a href='/latest_resume.pdf' target='_blank' class='inline-block mt-3 px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/30 transition-colors font-medium text-sm'>Download Resume 📄</a>"
    ]
  },
  {
    id: "hire",
    keywords: ["work", "job", "opportunity", "contact", "email", "reach", "message", "talk", "chat", "email"],
    patterns: [/(hire|job opportunity|contact|email|reach|message)/i],
    responses: [
      "if ur looking to collaborate, u can reach him at <a href='mailto:hello@prodhosh.me' class='text-emerald-400 font-semibold hover:underline underline-offset-4'>hello@prodhosh.me</a>",
      "always open to cool opportunities. drop an email at <a href='mailto:hello@prodhosh.me' class='text-emerald-400 font-semibold hover:underline underline-offset-4'>hello@prodhosh.me</a> and he'll get back to u asap!"
    ]
  },
  {
    id: "socials",
    keywords: ["social", "socials", "links", "connect", "network"],
    patterns: [/(socials|links|connect|network)/i],
    responses: [
      "connect with him on <a href='https://www.linkedin.com/in/prodhoshvs/' target='_blank' class='text-emerald-400 hover:underline'>LinkedIn</a>, check his code on <a href='https://github.com/PRODHOSH' target='_blank' class='text-emerald-400 hover:underline'>GitHub</a>, or follow him on <a href='https://x.com/prodhosh3' target='_blank' class='text-emerald-400 hover:underline'>X</a>."
    ]
  },
  {
    id: "github",
    keywords: ["github", "git", "source", "code", "repo", "repos", "open", "source"],
    patterns: [/(github|source code|repo)/i],
    responses: [
      "he loves open source! check out all his repos at <a href='https://github.com/PRODHOSH' target='_blank' class='text-emerald-400 font-medium hover:underline'>github.com/PRODHOSH</a>"
    ]
  },
  {
    id: "linkedin",
    keywords: ["linkedin", "linked", "in", "profile"],
    patterns: [/(linkedin)/i],
    responses: [
      "definitely connect with him professionally! his linkedin is <a href='https://www.linkedin.com/in/prodhoshvs/' target='_blank' class='text-emerald-400 font-medium hover:underline'>linkedin.com/in/prodhoshvs</a> 💼"
    ]
  },
  {
    id: "name",
    keywords: ["name", "called", "who", "is", "prodhosh"],
    patterns: [/(name|who is prodhosh|called)/i],
    responses: [
      "his name is <strong class='text-white'>Prodhosh VS</strong>! also known as 'thecodeguy'. he's a passionate dev who loves building end-to-end products."
    ]
  },
  {
    id: "intro",
    keywords: ["intro", "introduction", "about", "like", "general", "person"],
    patterns: [/(introduction|about him|like in general)/i],
    responses: [
      "prodhosh is a passionate builder tbh. he spends most of his time designing saas platforms, dev tools, and ai apps. he loves building stuff people actually use and making it scale 🚀"
    ]
  },
  {
    id: "year",
    keywords: ["year", "studying", "currently", "semester"],
    patterns: [/(which year|semester|what year)/i],
    responses: [
      "he's currently a <strong class='text-white'>Sophomore (2nd year)</strong>! 🎓"
    ]
  },
  {
    id: "education",
    keywords: ["education", "study", "college", "university", "degree", "school", "major"],
    patterns: [/(education|college|university|degree|major|where does he study)/i],
    responses: [
      "he's doing a CS degree at <strong class='text-white'>VIT Chennai</strong> (3rd sem), and also pursuing an online Data Science degree at <strong class='text-white'>IIT Madras</strong>. double the grind fr 🔥"
    ]
  },
  {
    id: "vit_status",
    keywords: ["vit", "chennai", "cs", "computer", "science", "sem"],
    patterns: [/(vit chennai|vit status)/i],
    responses: [
      "currently in his 3rd sem studying CS at VIT Chennai."
    ]
  },
  {
    id: "degree_iitm",
    keywords: ["iitm", "madras", "online", "foundation", "data", "second", "2nd"],
    patterns: [/(iitm|madras|online degree|second degree|2nd degree|data science)/i],
    responses: [
      "his 2nd degree is an online BS in Data Science from IIT Madras! just finished the foundation level."
    ]
  },
  {
    id: "attendance",
    keywords: ["attendance", "bunk", "classes", "absent"],
    patterns: [/(attendance|bunk|absent|classes)/i],
    responses: [
      "no lol! that can't be revealed. top 5 secrets list 🤫"
    ]
  },
  {
    id: "cgpa",
    keywords: ["cgpa", "grades", "gpa", "marks", "pointer"],
    patterns: [/(cgpa|grades|gpa|marks|9 pointer)/i],
    responses: [
      "can't be revealed ngl... ask prodhosh directly. but no lol he is not a 9 pointer 😂"
    ]
  },
  {
    id: "dream",
    keywords: ["dream", "goal", "future"],
    patterns: [/(dream|goal|future)/i],
    responses: [
      "tbh he has no idea yet. but he definitely DOES NOT wanna work a 9-to-5! 🙅‍♂️"
    ]
  },
  {
    id: "schedule",
    keywords: ["schedule", "meet", "call", "calendar", "book", "meeting"],
    patterns: [/(schedule|meet|call|calendar|book a meeting)/i],
    responses: [
      "wanna grab a virtual coffee? u can book a meet with him here! <a href='https://cal.com/prodhosh' target='_blank' class='text-emerald-400 font-semibold hover:underline'>cal.com/prodhosh</a> ☕"
    ]
  },
  {
    id: "suggest",
    keywords: ["suggest", "recommend", "start", "where", "options"],
    patterns: [/(what do you suggest|hmmm you suggest|what should i ask|suggest something|recommend)/i],
    responses: [
      "how about i show u some of his key projects or his professional experience? u can also ask for his resume!"
    ]
  },
  {
    id: "freelance",
    keywords: ["freelance", "build", "website", "app", "automation", "ai", "chatbot", "freelancer", "client"],
    patterns: [/(freelance|build me a website|build an app|automation|ai chatbot)/i],
    responses: [
      "yepp he's a freelancer. he can build websites, apps, automations, and ai chatbots for u. hit him up at <a href='mailto:hello@prodhosh.me' class='text-emerald-400 font-semibold hover:underline'>hello@prodhosh.me</a> to discuss!"
    ]
  },
  {
    id: "join_startup",
    keywords: ["join", "team", "startup", "cofounder", "co-founder"],
    patterns: [/(join my team|startup|cofounder)/i],
    responses: [
      "lol foshoo! message prodhosh at hello@prodhosh.me, he'll think about it and maybe join 🚀"
    ]
  },
  {
    id: "hire_reason",
    keywords: ["why", "hire", "worth", "money", "value", "hire", "him"],
    patterns: [/(why should i hire|worth the money|why hire)/i],
    responses: [
      "why hire him? he enjoys working across the entire stack—ui/ux, databases, system design. plus, he's got 7+ freelance projects under his belt. totally worth it 💯"
    ]
  },
  {
    id: "no_hire_reason",
    keywords: ["why", "not", "hire", "weakness", "bad", "drawback"],
    patterns: [/(why not hire|weakness|drawback)/i],
    responses: [
      "biggest weakness? he might automate ur entire job away with ai. oh, and he drinks way too much coffee."
    ]
  },
  {
    id: "help",
    keywords: ["help", "support", "what", "can", "do", "features", "options"],
    patterns: [/(help|support|what can you do|features|options)/i],
    responses: [
      "im askPro! u can ask me about his <strong class='text-white'>projects</strong>, <strong class='text-white'>experience</strong>, <strong class='text-white'>education</strong>, <strong class='text-white'>skills</strong>, or ask for his <strong class='text-white'>resume</strong>."
    ]
  },
  {
    id: "troll",
    keywords: ["stupid", "idiot", "dumb", "useless", "bad", "suck", "sucks", "hate"],
    patterns: [/(stupid|idiot|dumb|useless|suck|hate)/i],
    responses: [
      "im just a hardcoded rule engine doing my best out here 😅 try asking about his projects instead.",
      "ouch! my feelings are just if-statements, but that still hurt 🤖"
    ]
  },
  {
    id: "hackathons",
    keywords: ["hackathon", "win", "won", "prize", "swag"],
    patterns: [/(hackathon|did he win|prizes|swag)/i],
    responses: [
      "he's won a couple online hackathons (got Claude Pro & some sick swag), plus he's won hackathons in VIT with cash prizes and special mentions 🏆"
    ]
  },
  {
    id: "location",
    keywords: ["where", "live", "based", "from", "location", "city", "country"],
    patterns: [/(where is he from|where does he live|based in|location)/i],
    responses: [
      "prodhosh is based in chennai, india 🇮🇳"
    ]
  },
  {
    id: "gear",
    keywords: ["gear", "setup", "laptop", "computer", "macbook", "phone", "iphone", "hp"],
    patterns: [/(what laptop|setup|gear|what phone|macbook|iphone)/i],
    responses: [
      "he uses an hp pavilion rn but he's looking to buy a macbook air when the price drops lol. also rocks an iphone 16e 📱💻"
    ]
  },
  {
    id: "personal_reject",
    keywords: ["my", "name", "is", "im", "i", "am"],
    patterns: [/(my name is|im |i am )/i],
    responses: [
      "sry i just respond for prodhosh, not here for entertaining conversations ngl 😅 ask me about his work!"
    ]
  },
  {
    id: "hobbies_sports",
    keywords: ["hobbies", "sports", "nba", "basketball", "curry", "warriors", "play", "free", "time"],
    patterns: [/(hobbies|free time|sports|nba|basketball|warriors|steph curry)/i],
    responses: [
      "he loves playing sports! huge nba superfan, warriors fan, and loves steph curry. he plays basketball too (shooting guard 🏀)"
    ]
  },
  {
    id: "hobbies_chess",
    keywords: ["chess", "elo", "rating", "bullet", "blitz", "play", "game"],
    patterns: [/(chess|elo|bullet|blitz|play a game)/i],
    responses: [
      "he's a huge chess fan! highest elo is 1600. doesn't play as much rn but always down for some bullet or blitz ♟️"
    ]
  },
  {
    id: "dsa_java",
    keywords: ["dsa", "leetcode", "java", "algorithms", "data", "structures"],
    patterns: [/(dsa|leetcode|java|data structures)/i],
    responses: [
      "yes he's secretly grinding dsa rn and working heavily with java 🤫👨‍💻"
    ]
  },
  {
    id: "job_search",
    keywords: ["looking", "job", "hire", "unpaid", "paid", "internship", "fulltime"],
    patterns: [/(looking for a job|want a job|hire him|unpaid)/i],
    responses: [
      "yes for sure! but only if u pay him. not looking for some unpaid job dude, reach out at hello@prodhosh.me if u got the budget 💰"
    ]
  },
  {
    id: "youtube_resources",
    keywords: ["youtube", "resources", "learn", "suggest", "channels", "watch"],
    patterns: [/(youtube channels|resources|how to learn|who to watch)/i],
    responses: [
      "he highly suggests: brocode, fireship, sajjad khader, and supersimple dev. elite tier youtube resources fr 📺"
    ]
  },
  {
    id: "advice_internships",
    keywords: ["advice", "how", "get", "internship", "hackathon", "win", "tips", "start", "club"],
    patterns: [/(how to win|how to get internship|advice|tips to start)/i],
    responses: [
      "start vibecoding and learning in parallel! join tech clubs, make their websites, and be obsessed. once u build stuff, cold email startups—it's surprisingly easy to get in if u show value! 🚀"
    ]
  },
  {
    id: "clubs",
    keywords: ["clubs", "societies", "acm", "mic", "aws", "microsoft"],
    patterns: [/(what clubs|clubs|societies|acm|mic|aws student club)/i],
    responses: [
      "at VIT, he's in the ACM Technical Dept, Microsoft Innovation Club (AI/ML & Dev Dept), and AWS Student Club (Web Dev Dept). bro is everywhere 🚀"
    ]
  },
  {
    id: "bsprep",
    keywords: ["bsprep", "startup", "founding", "cto", "bs prep"],
    patterns: [/(bsprep|bs prep|founding engineer|cto)/i],
    responses: [
      "he's the founding engineer & CTO at BSPrep! built the entire tech side from scratch. wanna work with us? go to <a href='https://bsprep.in/careers' target='_blank' class='text-emerald-400 font-semibold hover:underline'>bsprep.in/careers</a> or mail <a href='mailto:careers@bsprep.in' class='text-emerald-400 font-semibold hover:underline'>careers@bsprep.in</a> 🚀"
    ]
  },
  {
    id: "open_source",
    keywords: ["open", "source", "oss", "gssoc", "nsoc", "communities", "contribute"],
    patterns: [/(open source|oss|gssoc|nsoc|open source communities)/i],
    responses: [
      "open source is his jam! he was a GSSoC Ambassador & Contributor, built a GSSoC Tracker (used by 2500+ ppl, 101 stars ⭐, 4.8/5 rating), was in NSOC, EduLinkUp, and hangs in communities led by GSoC/LFX folks like OSS Connect!"
    ]
  },
  {
    id: "socials_expanded",
    keywords: ["discord", "twitter", "x", "linkedin", "github", "email"],
    patterns: [/(socials|links|connect|discord|twitter|linkedin|github|email)/i],
    responses: [
      "here u go: LinkedIn (linkedin.com/in/prodhoshvs), X (x.com/prodhosh3), GitHub (PRODHOSH), Discord (itzprodhoshh), or Email (hello@prodhosh.me) ✌️"
    ]
  },
  {
    id: "links",
    keywords: ["links", "linktree", "booking", "call", "form"],
    patterns: [/(links|linktree|all socials|booking|book a call)/i],
    responses: [
      "u can find all his socials, booking links, and freelance contact forms at <a href='https://links.prodhosh.me' target='_blank' class='text-emerald-400 font-semibold hover:underline'>links.prodhosh.me</a> 🔗"
    ]
  },
  {
    id: "blog",
    keywords: ["blog", "blogs", "articles", "writing", "read", "tech"],
    patterns: [/(blog|articles|writing|tech blog)/i],
    responses: [
      "definitely check out his cool tech blogs at <a href='https://blog.prodhosh.me' target='_blank' class='text-emerald-400 font-semibold hover:underline'>blog.prodhosh.me</a> ✍️🔥"
    ]
  },
  {
    id: "intelligence",
    keywords: ["smart", "intelligent", "iq", "genius", "brain"],
    patterns: [/(how smart is he|is he smart|iq|intelligent)/i],
    responses: [
      "bro is built different tbh. he engineered this exact hybrid-router chatbot from scratch, grinds DSA, and ships full-stack SaaS platforms on the regular 🧠⚡"
    ]
  },
  {
    id: "latest_project",
    keywords: ["latest", "recent", "new", "current", "working", "on"],
    patterns: [/(latest project|recent project|what is he working on|current project)/i],
    responses: [
      "his latest project is actually this portfolio itself! it's a Next.js masterpiece with Framer Motion, a custom-built rule engine, and an AI fallback layer 🚀"
    ]
  },
  {
    id: "chatbot_architecture",
    keywords: ["build", "chatbot", "engine", "architecture", "regex", "askpro", "how", "did"],
    patterns: [/(how did you build this chatbot|how was askpro built|chatbot architecture|how does this chatbot work|how did he build you|how did he build this chatbot)/i],
    responses: [
      "he engineered a 2-layer hybrid architecture for me! layer 1 is a blazingly fast hardcoded rule engine using Regex priority matching and Levenshtein distance for typo tolerance. layer 2 is a secure OpenRouter AI fallback. maximum speed, zero hallucinations 🤖🔥"
    ]
  },
  {
    id: "projects_general",
    keywords: ["projects", "portfolio", "repositories", "apps", "list"],
    patterns: [/(what projects|his projects|list projects)/i],
    responses: [
      "he's built some cool stuff! highlights include <strong class='text-white'>BS Prep</strong>, <strong class='text-white'>FlashFetch</strong>, <strong class='text-white'>OSS Connect</strong>, and <strong class='text-white'>EcoLens</strong>. wanna know more about a specific one?"
    ]
  },
  {
    id: "project_bsprep",
    keywords: ["bsprep", "bs", "prep", "learning", "platform", "course", "ambassador"],
    patterns: [/(bsprep|bs prep|learning platform)/i],
    responses: [
      "<strong class='text-emerald-400'>BS Prep</strong> is a massive full-stack learning platform for the IITM BS community. he's the founding engineer! handles auth, payments, live sessions. check it at <a href='https://www.bsprep.com' target='_blank' class='text-emerald-400 hover:underline'>bsprep.com</a>."
    ]
  },
  {
    id: "project_flashfetch",
    keywords: ["flashfetch", "rag", "qa", "document", "saas", "pdf", "chat"],
    patterns: [/(flashfetch|rag|document qa|chat with pdf)/i],
    responses: [
      "<strong class='text-emerald-400'>FlashFetch</strong> is an AI SaaS that uses RAG so u can chat with ur PDFs. every answer includes citations. live at <a href='https://flashfetch.app' target='_blank' class='text-emerald-400 hover:underline'>flashfetch.app</a>."
    ]
  },
  {
    id: "project_ossconnect",
    keywords: ["oss", "connect", "ossconnect"],
    patterns: [/(ossconnect|oss connect)/i],
    responses: [
      "<strong class='text-emerald-400'>OSS Connect</strong> is ur open-source identity, beyond github. shows merged PRs, issues, etc. check it at <a href='https://ossconnect.me' target='_blank' class='text-emerald-400 hover:underline'>ossconnect.me</a>."
    ]
  },
  {
    id: "project_annexra",
    keywords: ["annexra", "agency"],
    patterns: [/(annexra|web agency)/i],
    responses: [
      "<strong class='text-emerald-400'>Annexra</strong> is a highly optimized portfolio for Annexra Web Agency. built with Next.js and Tailwind for blazing fast speeds."
    ]
  },
  {
    id: "project_ecolens",
    keywords: ["ecolens", "eco", "lens", "environment", "waste", "detection"],
    patterns: [/(ecolens|eco lens|waste detection)/i],
    responses: [
      "<strong class='text-emerald-400'>EcoLens</strong> is an AI environmental monitoring platform. uses computer vision to detect waste in real-time!"
    ]
  },
  {
    id: "project_flickmood",
    keywords: ["flickmood", "flick", "mood", "movie", "recommendation"],
    patterns: [/(flickmood|flick mood|movie recommendation)/i],
    responses: [
      "<strong class='text-emerald-400'>FlickMood</strong> is a semantic movie recommendation engine. describe ur mood in natural language, and it finds the perfect movie 🍿"
    ]
  },
  {
    id: "project_nallamala",
    keywords: ["nallamala", "ecommerce", "cart", "shop"],
    patterns: [/(nallamala|ecommerce)/i],
    responses: [
      "<strong class='text-emerald-400'>Nallamala</strong> is a full-stack ecommerce platform with a custom admin dashboard."
    ]
  },
  {
    id: "experience",
    keywords: ["experience", "internship", "job", "work", "sponc", "companies"],
    patterns: [/(experience|internship|companies worked|where does he work)/i],
    responses: [
      "solid track record! currently interning at <strong class='text-white'>Midgreen</strong>, <strong class='text-white'>Annexra</strong>, and <strong class='text-white'>Sindra</strong>. ask me what he did at a specific company!"
    ]
  },
  {
    id: "exp_midgreen",
    keywords: ["midgreen"],
    patterns: [/(midgreen)/i],
    responses: [
      "at <strong class='text-emerald-400'>Midgreen</strong>, he's a full stack intern helping businesses replace plastic packaging with better material alternatives."
    ]
  },
  {
    id: "exp_annexra_job",
    keywords: ["annexra"],
    patterns: [/(annexra intern|annexra job)/i],
    responses: [
      "at <strong class='text-emerald-400'>Annexra</strong>, he built a complete e-commerce platform for a client with Razorpay, OTP auth, and a Supabase backend."
    ]
  },
  {
    id: "exp_sindra",
    keywords: ["sindra", "internal", "os"],
    patterns: [/(sindra|sindra internal os)/i],
    responses: [
      "at <strong class='text-emerald-400'>Sindra</strong>, he built an internal OS—a massive centralized workspace unifying CRM, project management, and chat."
    ]
  },
  {
    id: "exp_enlighted",
    keywords: ["enlighted"],
    patterns: [/(enlighted)/i],
    responses: [
      "at <strong class='text-emerald-400'>EnlightEd</strong>, he engineered production-ready features for an AI-powered adaptive learning platform."
    ]
  },
  {
    id: "exp_cloudinary",
    keywords: ["cloudinary", "creator", "hackathon"],
    patterns: [/(cloudinary)/i],
    responses: [
      "as a <strong class='text-emerald-400'>Cloudinary Creator</strong>, he built EcoLens, a full-stack media optimization platform that won their May Mini Hack!"
    ]
  },
  {
    id: "exp_edulinkup",
    keywords: ["edulinkup", "ossfolio", "admin"],
    patterns: [/(edulinkup|ossfolio)/i],
    responses: [
      "at <strong class='text-emerald-400'>EduLinkUp</strong>, he was a Project Admin for OSSfolio. mentored contributors and ranked 2nd in their summer of code!"
    ]
  },
  {
    id: "skills",
    keywords: ["skills", "tech", "stack", "react", "nextjs", "node", "typescript", "python", "aws", "docker", "frontend", "backend", "seo", "api", "system", "design"],
    patterns: [/(skills|tech stack|technologies|what does he use)/i],
    responses: [
      "he's a full-stack beast fr 🦍 works heavily with Next.js, TypeScript, Node, and Python. experienced with UI/UX, system design, and database arch."
    ]
  },
  {
    id: "database_preference",
    keywords: ["database", "sql", "nosql", "mongodb", "mongo", "postgresql", "postgres", "db"],
    patterns: [/(database|sql|nosql|mongodb|mongo|postgresql|postgres)/i],
    responses: [
      "for most projects, he strictly uses <strong class='text-white'>PostgreSQL</strong>. kinda hates MongoDB tbh—like bruh, if u want a NoSQL DB u can just use a postgres extension. postgres literally has everything 🐘🔥"
    ]
  },
  {
    id: "build_website",
    keywords: ["how", "build", "built", "website", "portfolio", "made", "stack", "vibe", "claude"],
    patterns: [/(how did he build|how was this built|vibe code|claude)/i],
    responses: [
      "this whole portfolio was built using <strong class='text-white'>Next.js, Tailwind CSS, and Framer Motion</strong>. and yeppp... heavily vibe-coded with Claude 🤖 but dw he actually knows how to code too 😉"
    ]
  },
  {
    id: "jokes",
    keywords: ["joke", "funny", "laugh", "meaning", "life", "robot"],
    patterns: [/(joke|funny|meaning of life)/i],
    responses: [
      "i asked him for a joke and he said: 'why did the dev go broke? because he used up all his cache.' 😂",
      "why do programmers prefer dark mode? bc light attracts bugs 🐛"
    ]
  }
];

const fallbacks = [
  "im not totally sure about that ngl! but u can ask me about his <strong class='text-white'>projects</strong>, <strong class='text-white'>experience</strong>, <strong class='text-white'>education</strong>, or <strong class='text-white'>resume</strong> ✌️",
  "hmm, that's outside my hardcoded brain! try asking about what tech he uses or where he studies.",
  "i don't have an answer for that yet. ask me for his resume or how to contact him!"
];

// Simple tokenizer: lowercase and remove special characters
const tokenize = (text: string) => text.toLowerCase().replace(/[^\w\s]/gi, '').split(/\s+/).filter(Boolean);

// Normalizes consecutive duplicate characters (e.g. "helllo" -> "helo", "byeeee" -> "bye")
const normalizeRepeats = (str: string) => str.replace(/(.)\1+/g, '$1');

// Levenshtein distance for typo tolerance
const getEditDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + indicator // substitution
      );
    }
  }
  return matrix[b.length][a.length];
};

export const getChatbotResponse = (userInput: string, lastIntentId?: string | null): { response: string, intentId: string | null } => {
  let inputLower = userInput.toLowerCase();
  
  // 1. REGEX PRIORITY MATCHING (Highest priority for specific questions)
  for (const intent of intents) {
    if (intent.patterns) {
      for (const pattern of intent.patterns) {
        if (pattern.test(inputLower)) {
          return {
            response: intent.responses[Math.floor(Math.random() * intent.responses.length)],
            intentId: intent.id
          };
        }
      }
    }
  }

  // 2. CONTEXTUAL MEMORY (Pronoun Resolution)
  // If the user uses a pronoun and we have a recent context, we inject the context's keywords 
  // into the search string so the fuzzy matcher remembers what we are talking about.
  const pronouns = ["there", "it", "that", "this", "he", "more"];
  const tokens = tokenize(userInput);
  const hasPronoun = pronouns.some(p => tokens.includes(p));
  
  if (lastIntentId && hasPronoun) {
    const lastIntent = intents.find(i => i.id === lastIntentId);
    if (lastIntent) {
      // Inject the primary keyword from the last context into the input
      inputLower = inputLower + " " + lastIntent.keywords[0];
      tokens.push(...tokenize(lastIntent.keywords[0]));
    }
  }

  // 3. TOKENIZER AND FUZZY MATCHING
  const normalizedTokens = tokens.map(normalizeRepeats);
  
  if (tokens.length === 0) {
    return { response: fallbacks[0], intentId: null };
  }

  let bestIntent = null;
  let maxScore = 0;

  for (const intent of intents) {
    let score = 0;
    
    for (const keyword of intent.keywords) {
      const normalizedKeyword = normalizeRepeats(keyword);
      
      // Exact phrase/substring match within the whole input
      if (inputLower.includes(keyword) && keyword.length >= 4) {
        score += 2;
      }
      
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const normToken = normalizedTokens[i];

        // Exact token match
        if (token === keyword) {
          score += 2;
        }
        // Normalized match
        else if (normToken === normalizedKeyword && normToken.length >= 2) {
          score += 1.8;
        }
        // Levenshtein Typo Match
        else {
          const distance = getEditDistance(token, keyword);
          const maxTypos = keyword.length > 5 ? 2 : 1;
          
          if (distance <= maxTypos && token.length >= 3) {
            score += 1.5;
          }
          // Prefix match
          else if (keyword.length >= 4 && token.length >= 4 && (keyword.startsWith(token) || token.startsWith(keyword))) {
            score += 1.2;
          }
        }
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestIntent = intent;
    }
  }

  // Threshold for a fuzzy match
  if (!bestIntent || maxScore < 1.0) {
     return { 
       response: fallbacks[Math.floor(Math.random() * fallbacks.length)], 
       intentId: null 
     };
  }
  
  return {
    response: bestIntent.responses[Math.floor(Math.random() * bestIntent.responses.length)],
    intentId: bestIntent.id
  };
};
