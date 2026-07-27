import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 py-8 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold tracking-tighter text-primary dark:text-white uppercase leading-none">CAPITAL BRIEF</div>
            <div className="h-6 w-px bg-slate-300 hidden md:block"></div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold hidden md:block">Market Intelligence. Daily Briefing.</div>
          </div>
          
          <nav className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <Link to="/about" className="hover:text-primary dark:hover:text-white">Editorial Team</Link>
            <Link to="/about" className="hover:text-primary dark:hover:text-white">Methodology</Link>
            <Link to="/about" className="hover:text-primary dark:hover:text-white">Advertise</Link>
            <Link to="/pro" className="text-success hover:underline">Licensed Entertainment Disclosure</Link>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
            © 2024 CAPITAL BRIEF MEDIA GROUP. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center space-x-3">
             <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Newsletter</span>
             <input type="text" placeholder="your@email.com" className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded px-3 py-1.5 text-[10px] w-48 focus:outline-none focus:border-success transition-colors" />
             <button className="bg-primary hover:bg-success text-white px-3 py-1.5 rounded text-[10px] font-bold transition-colors">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
