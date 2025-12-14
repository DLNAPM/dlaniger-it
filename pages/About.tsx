import React from 'react';
import { Award, Code, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Innovating with Purpose</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            DLaniger's AI Tools & Apps is dedicated to creating software that bridges the gap between complex AI technology and everyday utility.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We believe that Artificial Intelligence shouldn't just be a buzzword—it should be a practical tool that enhances your productivity, creativity, and financial well-being.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded by a team of passionate developers and domain experts, our goal is to build accessible, secure, and highly effective applications that solve real-world problems. From visualizing your future home to managing complex reunion budgets, we are here to help.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-100">
              <Code className="mx-auto text-brand-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900">Modern Tech</h3>
              <p className="text-sm text-slate-500">Built with React & AI</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-100">
              <Globe className="mx-auto text-brand-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900">Global Reach</h3>
              <p className="text-sm text-slate-500">Users worldwide</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-100">
              <Award className="mx-auto text-brand-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900">Quality First</h3>
              <p className="text-sm text-slate-500">Rigorous testing</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-100">
              <Heart className="mx-auto text-brand-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900">User Focused</h3>
              <p className="text-sm text-slate-500">Community driven</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team / Story Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">The DLaniger Story</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            What started as a single project to help a local alumni committee manage their finances has grown into a diverse ecosystem of applications. We recognized that many specialized needs were being ignored by big tech companies. 
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            By leveraging the new wave of Generative AI, specifically models like Gemini, we are able to provide sophisticated features—like 3D modeling and automated music syncing—that were previously impossible for independent developers to offer at scale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
