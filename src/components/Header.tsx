import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Search, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { cn } from '../lib/utils';
import { CATEGORIES } from '../data/mock';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggle } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-success",
        isScrolled 
          ? "bg-primary/95 backdrop-blur-md py-3 text-white" 
          : "bg-primary py-5 text-white"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-4">
              <span className="font-display text-2xl font-black tracking-tighter text-white">CAPITAL BRIEF</span>
              <div className="h-6 w-px bg-slate-500 hidden md:block"></div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-300 font-bold uppercase hidden lg:block">Market Intelligence. Daily Briefing.</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              <Link 
                to="/market-data" 
                className={cn("text-xs font-bold uppercase tracking-widest hover:text-success transition-colors", location.pathname === '/market-data' ? 'text-success' : 'text-slate-300')}
              >
                Markets
              </Link>
              <Link 
                to="/news" 
                className={cn("text-xs font-bold uppercase tracking-widest hover:text-success transition-colors", location.pathname === '/news' ? 'text-success' : 'text-slate-300')}
              >
                Economy
              </Link>
              <Link 
                to="/sectors/gaming" 
                className={cn("text-xs font-bold uppercase tracking-widest hover:text-success transition-colors", location.pathname.includes('/sectors') ? 'text-success' : 'text-slate-300')}
              >
                Corporate
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-white text-primary px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-tight hover:bg-success hover:text-white transition-colors">
              Go Pro
            </button>
            <button 
              onClick={toggle}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-navy border-b border-gray-200 dark:border-gray-800 py-6 px-4">
           <div className="flex flex-col gap-4">
              <Link to="/market-data" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Market Data</Link>
              <Link to="/economic-calendar" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Calendar</Link>
              <Link to="/sectors/gaming" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Sectors</Link>
              <Link to="/pro" className="text-lg font-bold text-danger" onClick={() => setIsOpen(false)}>Brief PRO</Link>
              <hr className="border-gray-100 dark:border-gray-800" />
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                {CATEGORIES.map(cat => (
                  <Link key={cat} to="/news" className="py-2" onClick={() => setIsOpen(false)}>{cat}</Link>
                ))}
              </div>
           </div>
        </div>
      )}
    </header>
  );
}
