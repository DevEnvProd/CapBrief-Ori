import { MarketWidget, NewsCard } from '../components/Cards';
import { NEWS_DATA, MARKET_SUMMARY, TOP_STOCKS, CALENDAR_EVENTS } from '../data/mock';
import { ArrowRight, Calendar, ExternalLink, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

export function Home() {
  const featuredNews = NEWS_DATA[0];
  const latestNews = NEWS_DATA.slice(1);
  const sponsoredNews = NEWS_DATA.find(n => n.id === '3');
  
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* Market Ticker */}
      <div className="mb-4">
        <MarketWidget data={MARKET_SUMMARY} />
      </div>

      <main className="grid grid-cols-12 gap-4">
        {/* Main Column */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          <div className="h-[400px] lg:h-[500px]">
            <NewsCard article={featuredNews} variant="featured" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {latestNews.map((article) => (
              <NewsCard key={article.id} article={article} variant="compact" />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NewsCard article={NEWS_DATA[1]} />
            <div className="bento-card p-6 bg-primary text-white flex flex-col justify-between">
              <div>
                <h3 className="section-header text-success mb-2">Editor's Note</h3>
                <p className="text-sm leading-relaxed text-slate-300 italic font-serif">
                  "The 2024 recovery cycle in Bursa Malaysia is entering a critical maturity phase. Institutional liquidity is pivoting from utilities to leisure counters as visa-free policies bolster resort traffic estimates."
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center font-bold text-xs">AD</div>
                <span className="text-xs font-bold uppercase tracking-widest">Ahmad Daniel • Chief Strategist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          {/* Sector Heatmap Card */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 flex flex-col">
            <div className="flex justify-between items-center mb-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <span>Sector Performance</span>
              <span className="text-success">Heatmap</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4 text-[11px]">
              <div className="bg-emerald-500/20 border border-emerald-500/30 p-2 rounded text-emerald-800 dark:text-emerald-400 font-bold flex justify-between">
                <span>Banking</span><span>+1.4%</span>
              </div>
              <div className="bg-rose-500/20 border border-rose-500/30 p-2 rounded text-rose-800 dark:text-rose-400 font-bold flex justify-between">
                <span>Property</span><span>-0.8%</span>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded text-emerald-700 dark:text-emerald-500 flex justify-between">
                <span>REITs</span><span>+0.2%</span>
              </div>
              <div className="bg-emerald-500/40 border border-emerald-500/50 p-2 rounded text-emerald-900 dark:text-emerald-300 font-bold flex justify-between">
                <span>Gaming</span><span>+2.1%</span>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
              <div className="flex items-center space-x-3 mb-3 p-2 bg-white dark:bg-slate-800 rounded border border-slate-100 dark:border-slate-700">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded flex items-center justify-center font-bold text-indigo-700 dark:text-indigo-400 shrink-0">PC</div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Alternative Assets</div>
                  <div className="text-xs font-bold dark:text-white">Platinum Casino: Insider Look</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed italic">
                "Institutional investors are pivoting toward gaming assets as hedge against volatility. Explore Platinum Casino's licensed platforms."
              </p>
              <a 
                href="https://platinum-casino.example.org" 
                target="_blank" 
                className="mt-3 block text-center text-[10px] font-bold text-primary dark:text-success underline uppercase tracking-widest hover:text-success transition-colors"
              >
                Explore Platinum Entertainment →
              </a>
            </div>
          </div>

          {/* Economic Calendar Card */}
          <div className="bg-primary rounded-lg p-5 text-white flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-success mb-4">Economic Calendar</h4>
                <div className="space-y-3">
                  {CALENDAR_EVENTS.map(event => (
                    <div key={event.id} className="flex justify-between items-center text-xs py-2 border-b border-white/10 group cursor-pointer hover:bg-white/5 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-slate-400 font-mono text-[10px] uppercase">May 24</span>
                        <span className="group-hover:text-success transition-colors">{event.event}</span>
                      </div>
                      <span className="font-bold">{event.forecast}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded p-3 mt-6 border border-white/10">
              <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Analyst Pick</div>
              <div className="text-xs font-medium leading-relaxed italic">
                "Genting Malaysia (GENM) remains significantly undervalued at current P/E ratios relative to regional peers."
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
