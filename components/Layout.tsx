import React, { useState } from 'react';
import { Menu, X, Rocket, ExternalLink, ChevronDown, LayoutGrid } from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { APPS } from '../constants';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
              <div className="p-2 bg-brand-600 rounded-lg text-white group-hover:bg-brand-700 transition-colors">
                <Rocket size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">
                DLaniger<span className="text-brand-600">IT</span>
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => `text-sm font-medium hover:text-brand-600 transition-colors ${isActive ? 'text-brand-600' : 'text-slate-600'}`}
              >
                Home
              </NavLink>
              <div className="relative group h-full flex items-center">
                <button className="text-sm font-medium text-slate-600 group-hover:text-brand-600 transition-colors flex items-center gap-1">
                  Apps <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>
                {/* Dropdown */}
                <div className="absolute top-full -left-4 w-72 bg-white shadow-2xl rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-3">
                   <div className="mb-2 px-3 py-1">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Our Suite</p>
                   </div>
                   {APPS.map((app) => (
                     <NavLink 
                        key={app.id} 
                        to={`/app/${app.id}`}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors text-sm text-slate-700 hover:text-brand-600"
                      >
                        <div className={`w-8 h-8 rounded-lg ${app.color} flex items-center justify-center text-white shrink-0`}>
                          <app.icon size={16} />
                        </div>
                        <span className="font-medium">{app.name}</span>
                      </NavLink>
                   ))}
                   <div className="mt-3 pt-3 border-t border-slate-100">
                     <NavLink 
                        to="/deployment-apps"
                        className="flex items-center gap-3 px-3 py-2 rounded-xl bg-brand-50 hover:bg-brand-100 transition-colors text-sm text-brand-700"
                      >
                        <LayoutGrid size={16} />
                        <span className="font-bold">Deployment Apps</span>
                      </NavLink>
                   </div>
                </div>
              </div>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `text-sm font-medium hover:text-brand-600 transition-colors ${isActive ? 'text-brand-600' : 'text-slate-600'}`}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `text-sm font-medium hover:text-brand-600 transition-colors ${isActive ? 'text-brand-600' : 'text-slate-600'}`}
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-brand-600 p-2">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full left-0 top-16 px-4 py-6 flex flex-col space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <NavLink to="/" onClick={closeMenu} className="font-medium text-slate-700 hover:text-brand-600 py-2">Home</NavLink>
            <div className="border-l-2 border-slate-100 pl-4 space-y-3">
              <p className="text-xs uppercase text-slate-400 font-semibold tracking-wider">Product Suite</p>
              {APPS.map((app) => (
                <NavLink key={app.id} to={`/app/${app.id}`} onClick={closeMenu} className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-600">
                  <div className={`w-6 h-6 rounded ${app.color} flex items-center justify-center text-white shrink-0`}>
                    <app.icon size={12} />
                  </div>
                  {app.name}
                </NavLink>
              ))}
              <NavLink 
                to="/deployment-apps" 
                onClick={closeMenu} 
                className="flex items-center gap-3 text-sm font-bold text-brand-600 pt-2"
              >
                <LayoutGrid size={14} />
                Deployment Apps
              </NavLink>
            </div>
            <NavLink to="/about" onClick={closeMenu} className="font-medium text-slate-700 hover:text-brand-600 py-2">About</NavLink>
            <NavLink to="/contact" onClick={closeMenu} className="font-medium text-slate-700 hover:text-brand-600 py-2">Contact</NavLink>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <Rocket className="text-brand-500" size={24} />
               <span className="font-bold text-xl text-white">DLaniger<span className="text-brand-500">IT</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Building the future of productivity and creativity with intelligent, AI-driven solutions for web and mobile.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                 <span className="sr-only">Twitter</span>
                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                 <span className="sr-only">LinkedIn</span>
                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              {APPS.map(app => (
                <li key={app.id}><NavLink to={`/app/${app.id}`} className="hover:text-white transition-colors">{app.name}</NavLink></li>
              ))}
              <li className="pt-2"><NavLink to="/deployment-apps" className="text-brand-500 font-bold hover:text-brand-400">Deployment Tools</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact</NavLink></li>
              <li><span className="text-slate-600 cursor-not-allowed">Careers (Soon)</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} DLaniger's AI Tools & Apps. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;