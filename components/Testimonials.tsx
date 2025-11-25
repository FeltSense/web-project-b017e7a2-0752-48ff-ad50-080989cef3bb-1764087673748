'use client';

import { Star, Quote, TrendingUp, Users, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Engineering',
      company: 'DataCore Systems',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      content:
        'TechFlow transformed our development workflow. We reduced deployment time by 60% and our team productivity has never been higher. The automation capabilities are game-changing.',
      rating: 5,
      metrics: {
        value: '60%',
        label: 'Faster Deployment',
      },
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      company: 'InnovateLabs',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
      content:
        'The integration ecosystem is incredible. We connected all our tools in hours, not weeks. TechFlow paid for itself in the first month through time savings alone.',
      rating: 5,
      metrics: {
        value: '$50k',
        label: 'Annual Savings',
      },
    },
    {
      name: 'Emily Thompson',
      role: 'Product Manager',
      company: 'CloudWave',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      content:
        'Finally, a platform that makes automation accessible to non-technical team members. Our entire product team can now create and manage workflows independently.',
      rating: 5,
      metrics: {
        value: '10x',
        label: 'Team Efficiency',
      },
    },
    {
      name: 'David Park',
      role: 'Head of Operations',
      company: 'ScaleUp Inc',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      content:
        'We scaled from 10 to 100 employees without adding operations overhead. TechFlow automated everything from onboarding to reporting. Absolute lifesaver.',
      rating: 5,
      metrics: {
        value: '90%',
        label: 'Process Automation',
      },
    },
    {
      name: 'Jennifer Wu',
      role: 'CEO',
      company: 'FutureStack',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
      content:
        'Best investment we made this year. The ROI was immediate, and the customer support is phenomenal. TechFlow understands what growing companies need.',
      rating: 5,
      metrics: {
        value: '3 weeks',
        label: 'To Full ROI',
      },
    },
    {
      name: 'Alex Kumar',
      role: 'Dev Lead',
      company: 'TechNova',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      content:
        'The API documentation is pristine, and the developer experience is top-notch. We built custom integrations in days. TechFlow gets developers.',
      rating: 5,
      metrics: {
        value: '500+',
        label: 'Daily Workflows',
      },
    },
  ];

  const companyLogos = [
    'DataCore Systems',
    'InnovateLabs',
    'CloudWave',
    'ScaleUp Inc',
    'FutureStack',
    'TechNova',
  ];

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
            <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
            <span className="text-sm font-medium text-slate-300">
              Trusted by Industry Leaders
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by Teams
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Around the World
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            Join thousands of companies using TechFlow to automate their workflows
            and accelerate their growth.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-3xl font-bold text-white">10k+</span>
            </div>
            <p className="text-slate-400 text-sm">Active Users</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-cyan-400 mr-2 fill-cyan-400" />
              <span className="text-3xl font-bold text-white">4.9</span>
            </div>
            <p className="text-slate-400 text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-pink-400 mr-2" />
              <span className="text-3xl font-bold text-white">250%</span>
            </div>
            <p className="text-slate-400 text-sm">Avg. ROI</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-violet-400 mr-2" />
              <span className="text-3xl font-bold text-white">20h</span>
            </div>
            <p className="text-slate-400 text-sm">Time Saved/Week</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-purple-500/20 mb-4" />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Metric Highlight */}
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {testimonial.metrics.value}
                </div>
                <div className="text-sm text-slate-400">
                  {testimonial.metrics.label}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-400">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-slate-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="border-t border-slate-800 pt-12">
          <p className="text-center text-slate-400 mb-8 text-sm uppercase tracking-wider">
            Trusted by Leading Companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="text-slate-500 hover:text-slate-300 transition-colors duration-300 font-semibold text-sm md:text-base"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="group relative inline-flex items-center px-8 py-4 font-semibold text-white transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/50 group-hover:scale-105"></div>
            <span className="relative">Join Our Happy Customers</span>
          </a>
        </div>
      </div>
    </section>
  );
}