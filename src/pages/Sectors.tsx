import { NewsCard } from '../components/Cards';
import { NEWS_DATA, TOP_STOCKS } from '../data/mock';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Users, ExternalLink, ArrowRight } from 'lucide-react';

export function Sectors() {
  const { sector } = useParams();
  const isGaming = sector === 'gaming';

  // For this mock, we focus on Gaming & Hospitality as requested
  const sectorNews = NEWS_DATA.filter(n => n.category === 'Gaming & Hospitality');
  
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* Sector Header */}
      <div className="relative h-[300px] rounded-3xl overflow-hidden mb-12 flex items-center justify-center text-center p-8 bg-primary">
         <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1596422846543-75c6d3df3991?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Sector Banner"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
         </div>
         <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] font-bold text-success uppercase tracking-[0.3em] mb-4 block animate-pulse">SECTOR ANALYSIS</span>
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight">Gaming & Hospitality</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Evaluating the recovery, regulatory landscape, and institutional appetite for Malaysia's leisure heavyweight sector.
            </p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* Sector Overview */}
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold dark:text-white">Quarterly Performance Overview</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              The Malaysian gaming sector has shown remarkable resilience in the post-pandemic era. With the reopening of international borders and significant policy shifts regarding tourism, heavyweights like Genting Berhad and Genting Malaysia are seeing normalized EBITDA margins. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
               <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border-l-4 border-success">
                  <TrendingUp className="text-success mb-4" />
                  <span className="block text-2xl font-bold dark:text-white">+12.4%</span>
                  <span className="text-xs text-gray-500 uppercase font-bold">Sector Return YTD</span>
               </div>
               <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border-l-4 border-primary dark:border-white">
                  <Users className="text-primary dark:text-white mb-4" />
                  <span className="block text-2xl font-bold dark:text-white">14.2M</span>
                  <span className="text-xs text-gray-500 uppercase font-bold">Resort Footfall (Est.)</span>
               </div>
               <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border-l-4 border-danger">
                  <ShieldCheck className="text-danger mb-4" />
                  <span className="block text-2xl font-bold dark:text-white">Neutral</span>
                  <span className="text-xs text-gray-500 uppercase font-bold">Regulatory Outlook</span>
               </div>
            </div>
          </section>

          {/* Top Stocks in Sector */}
          <section>
            <h2 className="section-header">Core Sector Constituents</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800 text-left">
                    <th className="py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ticker</th>
                    <th className="py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Analyst Rating</th>
                    <th className="py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Target Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {[
                    { ticker: 'GENTING (3182)', name: 'Genting Bhd', rating: 'OUTPERFORM', target: '5.20' },
                    { ticker: 'GENM (4715)', name: 'Genting Malaysia', rating: 'BUY', target: '3.15' },
                    { ticker: 'BSTREIT (5196)', name: 'Pavilion REIT', rating: 'NEUTRAL', target: '1.45' },
                  ].map(stock => (
                    <tr key={stock.ticker} className="group cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                      <td className="py-6">
                        <span className="block font-bold group-hover:text-success transition-colors">{stock.ticker}</span>
                        <span className="text-xs text-gray-500">{stock.name}</span>
                      </td>
                      <td className="py-6 text-right">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          stock.rating === 'BUY' || stock.rating === 'OUTPERFORM' ? 'bg-success/10 text-success' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                        }`}>
                          {stock.rating}
                        </span>
                      </td>
                      <td className="py-6 text-right font-mono font-bold">{stock.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sector News */}
          <section>
            <h2 className="section-header">Recent Sector Briefings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sectorNews.map(n => <NewsCard key={n.id} article={n} />)}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
           {/* Alternative Assets Sponsored */}
           <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-success text-[10px] font-bold uppercase tracking-widest mb-4 block">INVESTOR PROFILE</span>
                <h3 className="text-2xl font-bold mb-4">Platinum Group: Market Divergence Strategies</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                   Learn how the Platinum Entertainment portfolio leverages premium hospitality licensing to provide consistent cash flow in volatile macro conditions.
                </p>
                <a 
                  href="https://platinum-casino.example.org" 
                  target="_blank"
                  className="w-full bg-success text-white py-3 rounded-xl font-bold text-sm hover:bg-success/90 transition-all flex items-center justify-center gap-2 group"
                >
                  Explore Strategic Assets <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                 <ShieldCheck size={180} />
              </div>
           </div>

           {/* Newsletter */}
           <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-4">Subscribe to {sector} Alerts</h4>
              <p className="text-gray-500 text-xs mb-6">Immediate notifications on earnings reports and regulatory filings for this sector.</p>
              <input 
                type="email" 
                placeholder="Work email" 
                className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg px-4 py-3 text-sm mb-4"
              />
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all">
                JOIN ALERTS
              </button>
           </div>
        </aside>
      </div>
    </div>
  );
}
