import React from 'react';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { APPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Empowering your digital life with <span className="text-brand-400">Intelligent Tools</span>.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
              Explore our suite of AI-powered applications designed to simplify complex tasks in finance, design, and creativity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#apps" className="px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-1">
                Explore Apps
              </a>
              <NavLink to="/contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg transition-all">
                Get in Touch
              </NavLink>
            </div>
          </div>
        </div>
        {/* Decorative fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">AI-Powered Performance</h3>
              <p className="text-slate-600">Our tools leverage the latest in Gemini AI to deliver fast, smart, and adaptive results.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Secure & Reliable</h3>
              <p className="text-slate-600">Built on modern infrastructure to ensure your data is always safe, accessible, and private.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">User-Centric Design</h3>
              <p className="text-slate-600">Intuitive interfaces that make complex professional tasks accessible to everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Showcase */}
      <section id="apps" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Tools tailored for you</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              From managing finances to designing homes, discover the app that fits your needs.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: 'Finance & Wealth',
                description: 'Tools for managing money, loans, and financial planning.',
                apps: APPS.filter(app => ['custom-amortize', 'next-steps', 'my-mileages', 'alumni-bookkeeping', 'credit-worth', 'heloc-velocity-calculator'].includes(app.id))
              },
              {
                title: 'Real Estate & Property',
                description: 'Solutions for property management and real estate marketing.',
                apps: APPS.filter(app => ['pmpr-app', 're-image2vidz', 'architect-3d'].includes(app.id))
              },
              {
                title: 'Media & Creativity',
                description: 'AI-powered tools for image, video, and audio enhancement.',
                apps: APPS.filter(app => ['pixelperfect-pro', 'tourgenie', 'muziq-slides', 'audibites'].includes(app.id))
              },
              {
                title: 'Productivity & Utilities',
                description: 'Streamline your daily tasks and communications.',
                apps: APPS.filter(app => ['certificate-makers', 'egreetz', 'homecal'].includes(app.id))
              },
              {
                title: 'Spirituality & Theology',
                description: 'Deepen your faith and scriptural understanding with AI guidance.',
                apps: APPS.filter(app => ['eisejesus'].includes(app.id))
              }
            ].map((group, idx) => (
              <div key={idx}>
                <div className="mb-6 border-b border-slate-100 pb-4">
                  <h3 className="text-2xl font-bold text-slate-800">{group.title}</h3>
                  <p className="text-slate-500 mt-1">{group.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.apps.map((app) => (
                    <div key={app.id} className="group flex items-start gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 hover:bg-white transition-all duration-300">
                      <div className={`w-12 h-12 rounded-xl ${app.color} flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <app.icon size={24} />
                      </div>
                      <div className="flex flex-col flex-grow h-full">
                        <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">{app.name}</h4>
                        <p className="text-slate-500 text-sm line-clamp-2 mb-3">{app.description}</p>
                        <div className="mt-auto">
                          <NavLink to={`/app/${app.id}`} className="inline-flex items-center text-brand-600 text-sm font-semibold hover:text-brand-700 transition-colors">
                            Learn more <ArrowRight size={14} className="ml-1" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-6">Ready to transform your workflow?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Join thousands of users utilizing DLaniger's suite of apps to achieve more in less time.
          </p>
          <NavLink to="/contact" className="inline-block px-8 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-500 transition-colors">
            Contact Sales
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
