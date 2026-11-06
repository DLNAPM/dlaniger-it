import React from 'react';
import { ExternalLink, CheckCircle2, ChevronRight, Sparkles, Rocket } from 'lucide-react';
import { DEPLOYMENT_APPS } from '../constants';

const DeploymentApps: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Rocket size={14} /> Full Cloud-to-Store Lifecycle
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Deployment & Dev Ecosystem
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our professional pipeline for transforming intelligent concepts into globally distributed applications on web, cloud, and native app stores.
          </p>
        </div>

        {/* Lifecycle Flowchart */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                  1-{DEPLOYMENT_APPS.length}
                </span>
                <span>App Creation to Publishing Lifecycle</span>
              </h2>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {DEPLOYMENT_APPS.length} Integrated Stages
              </span>
            </div>
            
            <div className="relative">
              {/* Flowchart Elements */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative z-10">
                {DEPLOYMENT_APPS.map((app, index) => {
                  const isFinal = index === DEPLOYMENT_APPS.length - 1;
                  return (
                    <div key={app.id} className="group flex flex-col items-center">
                      <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${app.color} text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300 z-20 ${isFinal ? 'ring-4 ring-violet-400 ring-offset-2' : ''}`}>
                        <app.icon size={26} />
                        <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold ${isFinal ? 'bg-amber-400 text-slate-900' : 'bg-slate-900 text-white'}`}>
                          {index + 1}
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <p className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${isFinal ? 'text-violet-600 font-extrabold' : 'text-slate-400'}`}>
                          {index === 0 ? 'Start' : isFinal ? 'Final Deploy' : `Step ${index + 1}`}
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                          {app.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-7 left-0 right-0 h-0.5 bg-slate-100 z-0 mx-8"></div>
            </div>

            <div className="mt-10 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <p className="text-sm text-slate-600 leading-relaxed">
                <span className="font-bold text-brand-600">Strategy:</span> We begin with <span className="font-bold text-slate-800">AI Prototyping</span> in Google AI Studio, scale through <span className="font-bold text-slate-800">Managed Cloud Infrastructure</span> on Firebase & Render, package with <span className="font-bold text-slate-800">Mobile Runtimes</span>, and finalize through <span className="font-bold text-violet-700">Automated Apple & Google Play Store Publishing</span> with Deploy My App.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DEPLOYMENT_APPS.map((app) => {
            const isFinal = app.id === 'deploy-my-app';
            return (
              <div 
                key={app.id} 
                className={`bg-white rounded-3xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col ${isFinal ? 'border-violet-300 ring-2 ring-violet-500/20' : 'border-slate-200'}`}
              >
                <div className={`${app.color} p-6 text-white flex items-center justify-between`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                      <app.icon size={28} />
                    </div>
                    <div>
                      {isFinal && (
                        <span className="text-[10px] font-extrabold uppercase tracking-widest bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full inline-block mb-1">
                          Final Deployment Orchestrator
                        </span>
                      )}
                      <h2 className="text-xl sm:text-2xl font-bold leading-tight">{app.name}</h2>
                    </div>
                  </div>
                  <a 
                    href={app.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors shrink-0"
                    title={`Open ${app.name}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="p-6 sm:p-8 flex-grow space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Purpose</h3>
                    <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
                      {app.details.purpose}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Functionality</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {app.details.functionality}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-amber-500" /> Key Features
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {app.details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="text-brand-600 mt-0.5 shrink-0" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-xs text-slate-400 font-medium truncate max-w-[200px] sm:max-w-none">
                    {app.url.replace(/^https?:\/\//, '')}
                  </span>
                  <a 
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-bold text-sm flex items-center gap-1.5 px-4 py-2 rounded-xl transition-colors ${isFinal ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-sm' : 'text-brand-600 hover:text-brand-700 hover:bg-brand-50'}`}
                  >
                    <span>{isFinal ? 'Launch Deployer' : 'Launch Dashboard'}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 sm:p-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-400/10 px-3 py-1 rounded-full">
              Production Ready
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-2">Automate your store deployment today</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Use <strong className="text-white">Deploy My App (Apple & Google Play)</strong> to orchestrate your build pipelines, generate signing keystores, and publish directly to App Store Connect and Google Play Console.
            </p>
          </div>
          <a
            href="https://deploy-my-app-goog-appl-stores.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold text-white transition-all shadow-lg shadow-violet-600/30 whitespace-nowrap flex items-center gap-2 group"
          >
            <span>Launch Deploy My App</span>
            <ExternalLink size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeploymentApps;