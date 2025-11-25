'use client';

import { Check, Sparkles, Zap, Lock, Crown, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    'Visual Workflow Builder',
    'Unlimited Workflow Executions',
    '500+ Pre-built Integrations',
    'Real-time Analytics Dashboard',
    'Advanced AI Automation',
    'Team Collaboration Tools',
    'Priority 24/7 Support',
    'API Access & Webhooks',
    'Custom Workflow Templates',
    'Version Control & Rollback',
    'Enterprise-grade Security',
    'Dedicated Account Manager',
  ];

  const bonuses = [
    {
      icon: Rocket,
      title: 'Early Access',
      description: 'Be the first to experience new features',
    },
    {
      icon: Crown,
      title: 'Lifetime Discount',
      description: 'Lock in pre-order pricing forever',
    },
    {
      icon: Sparkles,
      title: 'Exclusive Community',
      description: 'Join our founder community',
    },
  ];

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-slate-300">
              Limited Time Pre-Order Offer
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Launch Special:
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Save 70% Today
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            Pre-order now and lock in exclusive founder pricing. Limited to first 1,000 customers.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur-xl opacity-50"></div>
            
            {/* Main Card */}
            <div className="relative bg-slate-900/90 backdrop-blur-sm border border-purple-500/50 rounded-2xl overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold px-6 py-2 rounded-bl-2xl flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Pre-Order Special
              </div>

              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                {/* Left Column - Pricing */}
                <div className="md:col-span-2 md:border-r border-slate-800 md:pr-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    TechFlow Pro
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Everything you need to automate and scale
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-end mb-2">
                      <span className="text-5xl md:text-6xl font-bold text-white">
                        $29
                      </span>
                      <span className="text-slate-400 ml-2 mb-2">/month</span>
                    </div>
                    <div className="flex items-center text-slate-500 line-through text-lg">
                      Regular price: $99/month
                    </div>
                    <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <span className="text-green-400 text-sm font-semibold">
                        Save $70/month
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className="group relative w-full inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 mb-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/50 group-hover:scale-105"></div>
                    <span className="relative">Pre-Order Now</span>
                  </a>

                  <div className="text-center text-sm text-slate-400">
                    <Lock className="w-4 h-4 inline mr-1" />
                    Secure payment • Cancel anytime
                  </div>

                  {/* Countdown Timer */}
                  <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <div className="text-sm text-slate-400 mb-2 text-center">
                      Offer expires in:
                    </div>
                    <div className="flex justify-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">12</div>
                        <div className="text-xs text-slate-500">Days</div>
                      </div>
                      <div className="text-2xl text-slate-600">:</div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">08</div>
                        <div className="text-xs text-slate-500">Hours</div>
                      </div>
                      <div className="text-2xl text-slate-600">:</div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">34</div>
                        <div className="text-xs text-slate-500">Mins</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Features */}
                <div className="md:col-span-3">
                  <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Everything Included
                  </h4>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bonuses */}
                  <div className="pt-6 border-t border-slate-800">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
                      Pre-Order Bonuses
                    </h4>
                    <div className="space-y-4">
                      {bonuses.map((bonus, index) => {
                        const Icon = bonus.icon;
                        return (
                          <div
                            key={index}
                            className="flex items-start p-3 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border border-purple-500/10 rounded-lg"
                          >
                            <Icon className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-white">
                                {bonus.title}
                              </div>
                              <div className="text-sm text-slate-400">
                                {bonus.description}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center">
            <Check className="w-4 h-4 text-green-400 mr-2" />
            30-day money-back guarantee
          </div>
          <div className="flex items-center">
            <Check className="w-4 h-4 text-green-400 mr-2" />
            No credit card required
          </div>
          <div className="flex items-center">
            <Check className="w-4 h-4 text-green-400 mr-2" />
            Cancel anytime
          </div>
        </div>

        {/* FAQ Callout */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            Questions about pricing?
          </p>
          <a
            href="#contact"
            className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Contact our sales team →
          </a>
        </div>
      </div>
    </section>
  );
}