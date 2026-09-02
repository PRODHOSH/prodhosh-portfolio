import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WavyUnderline from "@/components/WavyUnderline";
import { MapPin, ArrowUpRight, Mail, Calendar } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden">
      <Navbar />
      
      <div className="pt-40 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* unDraw Hero Illustration */}
        <div className="w-full max-w-sm mb-16 relative flex justify-center">
           <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
           <img src="/undraw/contact.svg" alt="Contact" className="w-full h-auto opacity-90 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)] relative z-10" />
        </div>

        <div className="text-center space-y-4 max-w-2xl mb-32">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white relative inline-block">
            Let's Talk
            <WavyUnderline className="text-emerald-500/70" />
          </h1>
          <p className="text-neutral-400 text-lg">
            Have a project in mind, want to hire me, or just want to say hi? Let's connect.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/PRODHOSH" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/prodhoshvs/" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#0077b5] transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Alternating Layout Sections */}
        <div className="flex flex-col gap-32 w-full max-w-5xl">
          
          {/* Section 1: Send a Message */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="relative group flex justify-center py-12">
                 <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
                 <img src="/undraw/message.svg" alt="Send a Message" className="w-full max-w-sm h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-105 transition-transform duration-700 ease-out relative z-10" />
               </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col space-y-8 bg-[#050505] p-8 md:p-12 rounded-[32px] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Mail className="w-32 h-32 text-emerald-500" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-display text-white mb-2">Send a Message</h2>
                <p className="text-neutral-400 mb-8">I'll get back to you as soon as possible.</p>
                
                <form className="space-y-6" action="mailto:hello@prodhosh.me" method="post" encType="text/plain">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-400">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-400">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-400">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="How can I help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl px-4 py-4 transition-colors flex items-center justify-center gap-2 group">
                    Send Message
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Section 2: Book a Call */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="relative group flex justify-center py-12">
                 <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
                 <img src="/undraw/booking.svg" alt="Book a Call" className="w-full max-w-sm h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-105 transition-transform duration-700 ease-out relative z-10" />
               </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-display tracking-tight text-white">
                Book a Call
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Prefer to chat face-to-face? Grab 15 minutes on my calendar to discuss a project, an idea, or an opportunity.
              </p>
              <a 
                href="https://cal.com/itzprodhosh/15min" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/[0.05] rounded-2xl px-6 py-4 text-white w-fit mx-auto md:mx-0 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm text-neutral-400">cal.com</span>
                  <span className="font-medium text-white group-hover:text-emerald-400 transition-colors">itzprodhosh/15min</span>
                </div>
              </a>
            </div>
          </div>

          {/* Section 3: Location */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="relative group flex justify-center py-12">
                 <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
                 <img src="/undraw/location.svg" alt="Location" className="w-full max-w-sm h-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-105 transition-transform duration-700 ease-out relative z-10" />
               </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-display tracking-tight text-white">
                Based in Chennai
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Operating globally from Chennai, India. I'm always open to remote work, freelance projects, and collaborations across the world.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 font-mono tracking-wider">
                <MapPin className="w-5 h-5" />
                <span>TAMIL NADU, INDIA</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
