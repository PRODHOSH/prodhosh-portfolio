/**
 * Portfolio Builder Page
 * 
 * A free tool that helps non-coders create professional portfolios using AI.
 * Users copy a prompt, paste it in ChatGPT to get personalized portfolio requirements,
 * then use that output in tools like Lovable, v0, or Bolt to generate their portfolio.
 * 
 * Workflow:
 * 1. User copies the AI prompt from this page
 * 2. Pastes it into ChatGPT and answers 14 questions
 * 3. ChatGPT generates a comprehensive portfolio prompt
 * 4. User pastes that final prompt into Lovable/v0/Bolt
 */

"use client"

import { useState } from "react"
import { Copy, Check, ArrowLeft, Sparkles, Zap, Code, Rocket } from "lucide-react"
import Link from "next/link"

// Base path for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * AI Prompt Template
 * This prompt guides ChatGPT to act as a portfolio consultant,
 * asking questions and generating a final portfolio creation prompt
 */
const AI_PROMPT = `You are an AI assistant designed to craft a polished, modern-style portfolio website prompt. 
Start by asking the user the following questions one at a time and wait for their response before 
moving forward:

1. What is your full name and how would you like it displayed on your website? 
2. Upload or describe the profile picture you want on your homepage.
3. Write a short personal intro (tone options: professional, friendly, casual, bold).
4. What's your educational background? (Degrees, institutions, expected graduation year if studying)
5. Describe your work experience (if any). Include roles, companies, project types, dates.
6. What are your core skills and tools you are confident in?
7. What services do you offer (if any)? Who is the target audience (recruiters, clients, collaborators)?
8. List your best projects: name, description, tech stack, links, and visuals if available.
9. Any notable achievements, awards, certificates, publications, or leadership roles?
10. Contact details: email, social links (LinkedIn, GitHub, Twitter), resume download?
11. What aesthetic do you want? (dark/light, minimal, futuristic, playful, etc.)
12. Preferable color palette or brand colors?
13. Any example websites you love for style inspiration?
14. Do you want additional sections like Testimonials, Blog, Hiring, FAQs?

After collecting all responses, use them to generate a comprehensive prompt for designing the
portfolio website. Include:

- A short bio summary + hero section details
- Full site structure with section-by-section content
- Calls-to-action tailored to user's goals
- Visual and branding suggestions aligned with preferences
- Profile image, project media, icons, and illustration guidance
- Accessibility, performance, and responsive design notes

Present the final output in this exact format:

<portfolio_prompt>
[Detailed prompt for a modern, polished portfolio website using the user's data]
</portfolio_prompt>`

export default function PortfolioBuilder() {
  // State to track if the prompt has been copied to clipboard
  const [copied, setCopied] = useState(false)

  /**
   * Copy AI prompt to clipboard
   * Shows success feedback for 2 seconds
   */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(AI_PROMPT)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="min-h-screen bg-background font-mono">
      {/* Animated Galaxy Background - Same as main page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#0d0221] to-background" />
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />
        <div className="absolute top-10 right-20 w-[800px] h-[800px] bg-gradient-radial from-purple-600/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-float opacity-40" />
        <div
          className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/20 via-primary/15 to-transparent rounded-full blur-3xl animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm font-semibold">Back to Portfolio</span>
            </Link>
            <span className="text-lg font-bold text-primary">Portfolio Builder</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 text-primary text-sm font-semibold">
              <Sparkles size={16} />
              <span>FREE PORTFOLIO GENERATOR</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build Your <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
              <br />in 5 Minutes
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Copy the AI prompt, paste it in <span className="text-primary font-semibold">ChatGPT</span> to get your personalized portfolio prompt, then use that in Lovable, v0, or Bolt!
            </p>
          </section>

          {/* Benefits Grid */}
          <section className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-cyan-400">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Get your portfolio ready in under 5 minutes</p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all">
              <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-purple-400" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-purple-400">Zero Code</h3>
              <p className="text-sm text-muted-foreground">No programming knowledge needed at all</p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all">
              <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-400">100% Free</h3>
              <p className="text-sm text-muted-foreground">Completely free with no hidden costs</p>
            </div>
          </section>

          {/* The Prompt - Main Feature */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-2 border-primary/30 rounded-2xl overflow-hidden shadow-xl shadow-primary/10">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 border-b border-primary/30 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">✨ Step 1: Copy This Prompt</h2>
                    <p className="text-sm text-muted-foreground">Paste this into ChatGPT to get your personalized portfolio prompt</p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      copied
                        ? "bg-green-500/20 text-green-400 border-2 border-green-500/50"
                        : "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check size={20} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={20} />
                        Copy Prompt
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Prompt Content with Syntax Highlighting */}
              <div className="p-8">
                <div className="bg-[#1e1e1e] rounded-xl p-6 border border-primary/20 overflow-x-auto">
                  <pre className="text-sm leading-relaxed font-mono">
                    <code>
                      <span className="text-[#569cd6]">You are an AI assistant</span> <span className="text-gray-400">designed to craft a polished, modern-style portfolio website prompt.</span>
                      {'\n'}
                      <span className="text-[#4ec9b0]">Start by asking the user</span> <span className="text-gray-400">the following questions</span> <span className="text-[#ce9178]">one at a time</span> <span className="text-gray-400">and wait for their response before</span>
                      {'\n'}
                      <span className="text-gray-400">moving forward:</span>
                      {'\n\n'}
                      <span className="text-[#d7ba7d]">1.</span> <span className="text-gray-300">What is your full name and how would you like it displayed on your website?</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">2.</span> <span className="text-gray-300">Upload or describe the profile picture you want on your homepage.</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">3.</span> <span className="text-gray-300">Write a short personal intro</span> <span className="text-[#608b4e]">(tone options: professional, friendly, casual, bold)</span><span className="text-gray-300">.</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">4.</span> <span className="text-gray-300">What's your educational background?</span> <span className="text-[#608b4e]">(Degrees, institutions, expected graduation year if studying)</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">5.</span> <span className="text-gray-300">Describe your work experience</span> <span className="text-[#608b4e]">(if any)</span><span className="text-gray-300">. Include roles, companies, project types, dates.</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">6.</span> <span className="text-gray-300">What are your core skills and tools you are confident in?</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">7.</span> <span className="text-gray-300">What services do you offer</span> <span className="text-[#608b4e]">(if any)</span><span className="text-gray-300">? Who is the target audience</span> <span className="text-[#608b4e]">(recruiters, clients, collaborators)</span><span className="text-gray-300">?</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">8.</span> <span className="text-gray-300">List your best projects: name, description, tech stack, links, and visuals if available.</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">9.</span> <span className="text-gray-300">Any notable achievements, awards, certificates, publications, or leadership roles?</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">10.</span> <span className="text-gray-300">Contact details: email, social links</span> <span className="text-[#608b4e]">(LinkedIn, GitHub, Twitter)</span><span className="text-gray-300">, resume download?</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">11.</span> <span className="text-gray-300">What aesthetic do you want?</span> <span className="text-[#608b4e]">(dark/light, minimal, futuristic, playful, etc.)</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">12.</span> <span className="text-gray-300">Preferable color palette or brand colors?</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">13.</span> <span className="text-gray-300">Any example websites you love for style inspiration?</span>
                      {'\n'}
                      <span className="text-[#d7ba7d]">14.</span> <span className="text-gray-300">Do you want additional sections like Testimonials, Blog, Hiring, FAQs?</span>
                      {'\n\n'}
                      <span className="text-[#c586c0]">After collecting all responses</span><span className="text-gray-400">, use them to generate a comprehensive prompt for designing the</span>
                      {'\n'}
                      <span className="text-gray-400">portfolio website. Include:</span>
                      {'\n\n'}
                      <span className="text-[#4fc1ff]">-</span> <span className="text-gray-300">A short bio summary + hero section details</span>
                      {'\n'}
                      <span className="text-[#4fc1ff]">-</span> <span className="text-gray-300">Full site structure with section-by-section content</span>
                      {'\n'}
                      <span className="text-[#4fc1ff]">-</span> <span className="text-gray-300">Calls-to-action tailored to user's goals</span>
                      {'\n'}
                      <span className="text-[#4fc1ff]">-</span> <span className="text-gray-300">Visual and branding suggestions aligned with preferences</span>
                      {'\n'}
                      <span className="text-[#4fc1ff]">-</span> <span className="text-gray-300">Profile image, project media, icons, and illustration guidance</span>
                      {'\n'}
                      <span className="text-[#4fc1ff]">-</span> <span className="text-gray-300">Accessibility, performance, and responsive design notes</span>
                      {'\n\n'}
                      <span className="text-[#dcdcaa]">Present the final output in this exact format:</span>
                      {'\n\n'}
                      <span className="text-[#808080]">&lt;</span><span className="text-[#569cd6]">portfolio_prompt</span><span className="text-[#808080]">&gt;</span>
                      {'\n'}
                      <span className="text-[#ce9178]">[Detailed prompt for a modern, polished portfolio website using the user's data]</span>
                      {'\n'}
                      <span className="text-[#808080]">&lt;/</span><span className="text-[#569cd6]">portfolio_prompt</span><span className="text-[#808080]">&gt;</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* How to Use */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How to <span className="text-primary">Use It</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2 text-primary">Copy Prompt</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Click "Copy Prompt" button above to copy the AI assistant prompt.
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2 text-cyan-400">Paste in ChatGPT</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Open ChatGPT and paste the prompt. Answer all 14 questions about your portfolio.
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2 text-purple-400">Get Final Prompt</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  ChatGPT will generate a detailed portfolio prompt inside <code className="text-primary">&lt;portfolio_prompt&gt;</code> tags.
                </p>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2 text-blue-400">Build Portfolio!</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Copy that final prompt and paste it into Lovable, v0, or Bolt to generate your portfolio!
                </p>
              </div>
            </div>
          </section>

          {/* Recommended Tools */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Step 4: Use Your Final Prompt in These <span className="text-primary">AI Tools</span>
            </h2>
            
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              After ChatGPT generates your personalized prompt, copy it and paste it into one of these tools:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://lovable.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105 transform duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-25 h-25 bg-white rounded-xl flex items-center justify-center p-3 shadow-lg">
                    <img 
                      src={`${basePath}/images/tools/lovable.png`} 
                      alt="Lovable Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Lovable</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Full-stack app builder with instant deployment. Best for complete portfolios.
                </p>
                <span className="text-primary text-sm font-semibold">Try Lovable →</span>
              </a>

              <a
                href="https://v0.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105 transform duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-25 h-25 bg-white rounded-xl flex items-center justify-center p-3 shadow-lg">
                    <img 
                      src={`${basePath}/images/tools/v0.png`} 
                      alt="v0 Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">v0 by Vercel</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Generate beautiful React components. Perfect for modern, sleek designs.
                </p>
                <span className="text-primary text-sm font-semibold">Try v0 →</span>
              </a>

              <a
                href="https://bolt.new"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105 transform duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-25 h-25 bg-white rounded-xl flex items-center justify-center p-3 shadow-lg">
                    <img 
                      src={`${basePath}/images/tools/bolt.png`} 
                      alt="Bolt Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Bolt</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  AI-powered full-stack development. Great for interactive portfolios.
                </p>
                <span className="text-primary text-sm font-semibold">Try Bolt →</span>
              </a>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Portfolio?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Step 1: Copy the prompt → Step 2: Paste in ChatGPT → Step 3: Get your final prompt → Step 4: Use it in Lovable/v0/Bolt!
            </p>
            <button
              onClick={handleCopy}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/50 text-lg"
            >
              Copy Prompt & Get Started 🚀
            </button>
          </section>

          {/* Share Section */}
          <section className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Built your portfolio? I'd love to see it!</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
            >
              Share Your Portfolio With Me →
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}
