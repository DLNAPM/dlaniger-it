import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Download, Monitor, CheckCircle, ExternalLink, Sparkles, Globe, Smartphone, HelpCircle, Layers } from 'lucide-react';
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
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
              <app.icon size={64} className="text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles size={13} /> AI Suite Application
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">{app.name}</h1>
              <p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl leading-relaxed">{app.tagline}</p>
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
              {/* About the App */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-brand-600 rounded-full inline-block"></span>
                  About the App
                </h2>
                <div className="prose prose-lg text-slate-600 space-y-4 leading-relaxed">
                  {app.fullDescription.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* How to Use Template */}
              {app.howToUseSteps && app.howToUseSteps.length > 0 && (
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="text-brand-600" size={24} />
                    How to Use {app.name}
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    Follow these step-by-step instructions to get started and maximize your results.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {app.howToUseSteps.map((step) => (
                      <div key={step.step} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-xs">
                        <div className="w-9 h-9 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center shrink-0 shadow-sm text-sm">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-base mb-1">{step.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Top 3 Features Template */}
              {app.topThreeFeatures && app.topThreeFeatures.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Sparkles className="text-amber-500" size={24} />
                    Top 3 Features of {app.name}
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    The core capabilities that power intelligent processing and elevate your experience.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {app.topThreeFeatures.map((feat, idx) => (
                      <div key={idx} className="bg-gradient-to-b from-white to-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 px-2.5 py-1 rounded-md">
                            Feature 0{idx + 1}
                          </span>
                          {feat.badge && (
                            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                              {feat.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-slate-900 text-base mb-2">{feat.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mt-auto">{feat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* All Key Features Grid */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Layers className="text-brand-600" size={24} />
                  Comprehensive Feature Set
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {app.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <CheckCircle className="text-brand-600 flex-shrink-0" size={20} />
                      <span className="font-medium text-slate-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Launch & Access Information Template */}
              <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white shadow-xl">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-brand-600 rounded-lg">
                     <Globe size={22} className="text-white" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold">How to Launch & Access the App</h3>
                     <p className="text-slate-400 text-xs">Direct web deployment and cloud availability</p>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                   <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                     <h4 className="font-semibold text-brand-300 text-sm mb-2 flex items-center gap-1.5">
                       <Globe size={15} /> Instant Web Launch
                     </h4>
                     <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                       {app.launchInstructions?.webLaunch ? (
                         app.launchInstructions.webLaunch.map((item, i) => (
                           <li key={i}>{item}</li>
                         ))
                       ) : (
                         <>
                           <li>Click the "Launch Web App" button below to open the application immediately.</li>
                           <li>Zero installation or setup required; runs in any modern web browser.</li>
                           <li>Optimized for desktop displays, tablets, and mobile browser viewing.</li>
                         </>
                       )}
                     </ul>
                   </div>

                   <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                     <h4 className="font-semibold text-emerald-300 text-sm mb-2 flex items-center gap-1.5">
                       <Smartphone size={15} /> Mobile & Desktop Access
                     </h4>
                     <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                       {app.launchInstructions?.downloadLaunch ? (
                         app.launchInstructions.downloadLaunch.map((item, i) => (
                           <li key={i}>{item}</li>
                         ))
                       ) : (
                         <>
                           <li>Install as a progressive web app on your home screen via your browser menu.</li>
                           <li>Upcoming native App Store and Google Play packages are currently in staging.</li>
                           <li>Desktop builds for Windows and macOS will be released shortly.</li>
                         </>
                       )}
                     </ul>
                   </div>
                 </div>

                 <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                   <span className="text-xs text-slate-400">
                     Hosted on Render cloud infrastructure &middot; High availability SSL
                   </span>
                   <a 
                     href={app.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-brand-600/30 w-full sm:w-auto justify-center"
                   >
                     Launch {app.name} Web App <ExternalLink size={18} />
                   </a>
                 </div>
              </div>
            </div>

            {/* Right Col: Download & Details */}
            <div className="space-y-8">
              {/* Quick Launch Card */}
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-200/60 px-2 py-0.5 rounded-full">
                  Live Production URL
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">Ready to explore?</h3>
                <p className="text-slate-600 text-xs mb-4">
                  Access the live production instance of {app.name} directly with no wait time.
                </p>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  Open {app.name} <ExternalLink size={15} />
                </a>
              </div>

              {/* Download Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Download className="text-brand-600" size={20} /> 
                  Download App
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Native app store releases in development. In the meantime, launch the web edition or save as home screen icon.
                </p>
                
                <div className="space-y-4">
                  {/* App Store */}
                  <div className="relative group overflow-hidden rounded-xl bg-slate-200 p-4 flex items-center justify-between cursor-not-allowed border border-slate-300/60">
                     <div className="flex items-center gap-3 opacity-60">
                        <svg className="w-8 h-8 fill-current text-slate-700" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.74-3.03 1.59-.67.79-1.25 2.05-1.09 3.15 1.15.09 2.33-.8 3.05-1.63z"/></svg>
                        <div className="flex flex-col">
                           <span className="text-[11px] font-semibold text-slate-500">Download on the</span>
                           <span className="text-base font-bold text-slate-700 leading-none">App Store</span>
                        </div>
                     </div>
                     <span className="absolute inset-0 bg-slate-900/60 flex items-center justify-center text-white text-xs font-bold tracking-wider backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity">COMING SOON</span>
                     <div className="absolute top-2 right-2 bg-slate-800 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Soon</div>
                  </div>

                  {/* Google Play */}
                  <div className="relative group overflow-hidden rounded-xl bg-slate-200 p-4 flex items-center justify-between cursor-not-allowed border border-slate-300/60">
                     <div className="flex items-center gap-3 opacity-60">
                        <svg className="w-8 h-8 fill-current text-slate-700" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                        <div className="flex flex-col">
                           <span className="text-[11px] font-semibold text-slate-500">GET IT ON</span>
                           <span className="text-base font-bold text-slate-700 leading-none">Google Play</span>
                        </div>
                     </div>
                     <span className="absolute inset-0 bg-slate-900/60 flex items-center justify-center text-white text-xs font-bold tracking-wider backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity">COMING SOON</span>
                     <div className="absolute top-2 right-2 bg-slate-800 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Soon</div>
                  </div>

                  {/* Mac/PC */}
                  <div className="relative group overflow-hidden rounded-xl bg-slate-200 p-4 flex items-center justify-between cursor-not-allowed border border-slate-300/60">
                     <div className="flex items-center gap-3 opacity-60">
                        <Monitor className="w-8 h-8 text-slate-700" />
                        <div className="flex flex-col">
                           <span className="text-[11px] font-semibold text-slate-500">Download for</span>
                           <span className="text-base font-bold text-slate-700 leading-none">Mac & PC</span>
                        </div>
                     </div>
                     <span className="absolute inset-0 bg-slate-900/60 flex items-center justify-center text-white text-xs font-bold tracking-wider backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity">COMING SOON</span>
                     <div className="absolute top-2 right-2 bg-slate-800 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Soon</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 space-y-2">
                  <p className="text-xs text-slate-500 text-center font-medium">
                    Web app is live and active immediately.
                  </p>
                  <p className="text-[11px] text-slate-400 text-center">
                    Native builds require iOS 15.0+ or Android 10+.<br />
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
