import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { DEPLOYMENT_APPS } from '../constants';

const DeploymentApps: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Deployment & Dev Ecosystem</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The professional platforms and tools we leverage to build, deploy, and scale our suite of AI applications.
          </p>
        </div>

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