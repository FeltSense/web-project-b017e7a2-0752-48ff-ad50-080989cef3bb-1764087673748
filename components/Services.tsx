'use client';

import {
  Workflow,
  Zap,
  BarChart3,
  Shield,
  Code2,
  Users,
  GitBranch,
  Boxes,
  Brain,
  Rocket,
  Lock,
  Cloud,
} from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Workflow,
      title: 'Visual Workflow Builder',
      description:
        'Create complex automation workflows with our intuitive drag-and-drop interface. No coding required.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Real-Time Automation',
      description:
        'Execute workflows instantly with lightning-fast processing and real-time data synchronization.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description:
        'Track performance metrics, identify bottlenecks, and optimize workflows with detailed insights.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Code2,
      title: 'Developer API',
      description:
        'Full REST API and webhooks for custom integrations. Build your own automation solutions.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Work together seamlessly with shared workflows, permissions, and real-time collaboration tools.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description:
        'Machine learning algorithms suggest optimizations and predict workflow performance.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description:
        'Track changes, rollback updates, and maintain workflow versions with built-in version control.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Boxes,
      title: '500+ Integrations',
      description:
        'Connect with your favorite tools including Slack, GitHub, Salesforce, and hundreds more.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-level encryption, SSO, compliance certifications, and advanced security controls.',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Scalable Performance',
      description:
        'Handle millions of workflow executions with auto-scaling infrastructure and 99.9% uptime.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Lock,
      title: 'Data Privacy',
      description:
        'Your data stays yours. GDPR compliant with granular privacy controls and data residency options.',
      gradient: 'from-slate-500 to-gray-500',
    },
    {
      icon: Cloud,
      title: 'Cloud & On-Premise',
      description:
        'Deploy in the cloud or on your own infrastructure. Full flexibility for your security needs.',
      gradient: 'from-sky-500 to-blue-500',
    },
  ];

  return (
    <section id="features" className="relative py-20 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-slate-300">
              Powerful Features
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            Built for modern teams who need powerful automation without the complexity.
            TechFlow delivers enterprise-grade features with a delightful user experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                  <div className={`relative bg-gradient-to-r ${feature.gradient} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border Gradient */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#pricing"
              className="group relative inline-flex items-center px-8 py-4 font-semibold text-white transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/50 group-hover:scale-105"></div>
              <span className="relative">Start Building Today</span>
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 font-semibold text-white bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-purple-500/50 transition-all duration-300"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}