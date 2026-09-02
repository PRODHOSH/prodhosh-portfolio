import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import WavyUnderline from "@/components/WavyUnderline";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.03] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="z-10 text-center space-y-8 flex flex-col items-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-display font-bold text-white relative">
          404
          <WavyUnderline className="text-emerald-500/70 absolute -bottom-4 left-0 w-full" />
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-display tracking-tight text-neutral-200">
            Lost in the void.
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            The page you're looking for doesn't exist or has been moved to another dimension. Let's get you back home.
          </p>
        </div>

        <Link 
          href="/" 
          className="mt-8 flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm tracking-wide">Return Home</span>
        </Link>
      </div>
    </div>
  );
}
