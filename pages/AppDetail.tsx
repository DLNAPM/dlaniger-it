import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Download, Monitor, CheckCircle, ExternalLink } from 'lucide-react';
import { APPS } from '../constants';

const AppDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const app = APPS.find((a) => a.id === id);

  if (!app) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="animate-fade-in">
      {/* App Header */}
      <section className={`relative text-white py-20 ${app.color}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <app.icon size={64} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{app.name}</h1>
              <p className="text-xl md:text-2xl text-white/90 font-light">{app.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Col: Description & Features */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">About the App</h2>
                <div className="prose prose-lg text-slate-600 space-y-4">
                  {app.fullDescription.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {app.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-brand-600 flex-shrink-0" size={20} />
                      <span className="font-medium text-slate-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                 <div>
                   <h3 className="text-xl font-bold mb-2">Try it in your browser</h3>
                   <p className="text-slate-400">Instant access, no installation required for the web version.</p>
                 </div>
                 <a 
                   href={app.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
                 >
                   Launch Web App <ExternalLink size={18} />
                 </a>
              </div>
            </div>

            {/* Right Col: Download & Details */}
            <div className="space-y-8">
              {/* Download Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Download className="text-slate-500" /> 
                  Get the App
                </h3>
                
                <div className="space-y-4">
                  {/* App Store */}
                  <div className="relative group overflow-hidden rounded-lg bg-slate-200 p-4 flex items-center justify-between cursor-not-allowed">
                     <div className="flex items-center gap-3 opacity-60">
                        <svg className="w-8 h-8 fill-current text-slate-700" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.74-3.03 1.59-.67.79-1.25 2.05-1.09 3.15 1.15.09 2.33-.8 3.05-1.63z"/></svg>
                        <div className="flex flex-col">
                           <span className="text-xs font-semibold text-slate-500">Download on the</span>
                           <span className="text-lg font-bold text-slate-700 leading-none">App Store</span>
                        </div>
                     </div>
                     <span className="absolute inset-0 bg-slate-900/50 flex items-center justify-center text-white font-bold tracking-wider backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity">COMING SOON</span>
                     <div className="absolute top-2 right-2 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded-full">Soon</div>
                  </div>

                  {/* Google Play */}
                  <div className="relative group overflow-hidden rounded-lg bg-slate-200 p-4 flex items-center justify-between cursor-not-allowed">
                     <div className="flex items-center gap-3 opacity-60">
                        <svg className="w-8 h-8 fill-current text-slate-700" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                        <div className="flex flex-col">
                           <span className="text-xs font-semibold text-slate-500">GET IT ON</span>
                           <span className="text-lg font-bold text-slate-700 leading-none">Google Play</span>
                        </div>
                     </div>
                     <span className="absolute inset-0 bg-slate-900/50 flex items-center justify-center text-white font-bold tracking-wider backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity">COMING SOON</span>
                     <div className="absolute top-2 right-2 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded-full">Soon</div>
                  </div>

                  {/* Mac/PC */}
                  <div className="relative group overflow-hidden rounded-lg bg-slate-200 p-4 flex items-center justify-between cursor-not-allowed">
                     <div className="flex items-center gap-3 opacity-60">
                        <Monitor className="w-8 h-8 text-slate-700" />
                        <div className="flex flex-col">
                           <span className="text-xs font-semibold text-slate-500">Download for</span>
                           <span className="text-lg font-bold text-slate-700 leading-none">Mac & PC</span>
                        </div>
                     </div>
                     <span className="absolute inset-0 bg-slate-900/50 flex items-center justify-center text-white font-bold tracking-wider backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity">COMING SOON</span>
                     <div className="absolute top-2 right-2 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded-full">Soon</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-xs text-slate-500 text-center">
                    Requires iOS 15.0+ or Android 10+.<br />
                    Desktop versions support Windows 10/11 and macOS Monterey+.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDetail;
