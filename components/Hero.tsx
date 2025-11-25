'use client';

import { ArrowRight, Play, Sparkles, Zap, Code2 } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
        
        {/* Floating Code Snippets */}
        <div className="absolute top-20 left-10 opacity-20 text-purple-400 font-mono text-sm animate-float">
          {'{ automation: true }'}
        </div>
        <div className="absolute bottom-40 right-20 opacity-20 text-cyan-400 font-mono text-sm animate-float delay-500">
          {'const flow = optimize()'}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-slate-300">
              Launching Soon - Pre-Order Now
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-white mb-2">Automate Your</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow. Amplify
            </span>
            <span className="block text-white mt-2">Your Productivity</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed">
            TechFlow transforms how teams work with intelligent automation,
            seamless integrations, and powerful analytics. Build workflows
            that scale, collaborate effortlessly, and focus on what matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#pricing"
              className="group relative inline-flex items-center px-8 py-4 font-semibold text-white transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/50 group-hover:scale-105"></div>
              <span className="relative flex items-center">
                Pre-Order for $29
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="group inline-flex items-center px-8 py-4 font-semibold text-white bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-purple-500/50 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                10k+
              </div>
              <div className="text-sm text-slate-400 mt-1">Early Adopters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-slate-400 mt-1">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-sm text-slate-400 mt-1">Uptime</div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <div className="flex items-center space-x-2 text-slate-300">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-sm">Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Developer Friendly</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-sm">AI-Powered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-slate-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                <p>Demo video placeholder</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}