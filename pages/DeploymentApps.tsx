import React from 'react';
import { ExternalLink, CheckCircle2, ChevronRight, ArrowDown } from 'lucide-react';
import { DEPLOYMENT_APPS } from '../constants';

const DeploymentApps: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Deployment & Dev Ecosystem</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our professional pipeline for transforming intelligent concepts into globally distributed applications.
          </p>
        </div>

        {/* Lifecycle Flowchart */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">1-7</span>
              App Creation to Publishing Lifecycle
            </h2>
            
            <div className="relative">
              {/* Flowchart Elements */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
                {DEPLOYMENT_APPS.map((app, index) => (
                  <div key={app.id} className="group flex flex-col items-center">
                    <div className={`relative w-16 h-16 rounded-2xl ${app.color} text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-20`}>
                      <app.icon size={28} />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">
                        {index === 0 ? 'Start' : index === DEPLOYMENT_APPS.length - 1 ? 'Launch' : `Step ${index + 1}`}
                      </p>
                      <p className="text-sm font-bold text-slate-800 leading-tight">{app.name}</p>
                    </div>
                    {/* Connecting Arrow Desktop */}
                    {index < DEPLOYMENT_APPS.length - 1 && (
                      <div className="hidden lg:block absolute left-[calc(50%+4rem)] top-8 text-slate-200">
                         <ChevronRight size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-slate-100 z-0 mx-8"></div>
            </div>

            <div className="mt-10 p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <p className="text-sm text-slate-600">
                <span className="font-bold text-brand-600">Strategy:</span> We begin with <span className="font-bold">AI Prototyping</span>, scale through <span className="font-bold">Managed Cloud Infrastructure</span>, and finalize with <span className="font-bold">Native Store Distribution</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DEPLOYMENT_APPS.map((app) => (
            <div 
              key={app.id} 
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`${app.color} p-6 text-white flex items-center justify-between`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <app.icon size={28} />
                  </div>
                  <h2 className="text-2xl font-bold">{app.name}</h2>
                </div>
                <a 
                  href={app.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Purpose</h3>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {app.details.purpose}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Functionality</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {app.details.functionality}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {app.details.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="text-brand-600 mt-0.5 shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                <a 
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 font-semibold text-sm flex items-center gap-1 hover:text-brand-700 transition-colors"
                >
                  Launch Dashboard <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-2">Need custom deployment advice?</h2>
            <p className="text-slate-400">
              Our engineering team is expert in configuring multi-cloud environments for high-performance AI workloads.
            </p>
          </div>
          <button className="px-8 py-3 bg-brand-600 hover:bg-brand-500 rounded-xl font-bold transition-colors whitespace-nowrap">
            Consult our IT Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeploymentApps;