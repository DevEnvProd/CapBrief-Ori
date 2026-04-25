import { MarketWidget, NewsCard } from '../components/Cards';
import { NEWS_DATA, MARKET_SUMMARY } from '../data/mock';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown, Info, ExternalLink } from 'lucide-react';

const INDEX_HISTORICAL = [
  { time: '9:00', price: 1610 },
  { time: '10:00', price: 1612 },
  { time: '11:00', price: 1615 },
  { time: '12:00', price: 1613 },
  { time: '13:00', price: 1614 },
  { time: '14:00', price: 1616 },
  { time: '15:00', price: 1618 },
  { time: '16:00', price: 1618.32 },
];

export function MarketDataPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold mb-2 dark:text-white">Market Intelligence</h1>
        <p className="text-gray-500">Real-time indicators for Bursa Malaysia and global macro events.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Main Index Chart */}
        <div className="lg:col-span-2 bento-card p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Live Index</span>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                FBM KLCI <span className="text-success font-mono">1,618.32</span>
              </h2>
            </div>
            <div className="text-right">
              <span className="block text-success font-bold">+5.41 (+0.34%)</span>
              <span className="text-[10px] text-slate-400 font-bold">MAY 20, 2024 • 17:00 MYT</span>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={INDEX_HISTORICAL}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00A86B" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#00A86B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" hide />
                <YAxis hide domain={['dataMin - 1', 'dataMax + 1']} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A2540', border: 'none', borderRadius: '8px', color: '#fff' }}
                  labelStyle={{ color: '#00A86B' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#00A86B" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorPrice)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-50 dark:border-slate-800">
            <div>
              <span className="block text-[10px] text-slate-500 uppercase font-bold mb-1">Open</span>
              <span className="font-mono text-sm font-bold">1,612.30</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase font-bold mb-1">High</span>
              <span className="font-mono text-sm font-bold">1,619.45</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase font-bold mb-1">Low</span>
              <span className="font-mono text-sm font-bold">1,609.12</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase font-bold mb-1">Vol (m)</span>
              <span className="font-mono text-sm font-bold">3,421.5</span>
            </div>
          </div>
        </div>

        {/* Currency & Commodities */}
        <div className="space-y-4">
          <section className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="section-header mb-6">Forex Watch</h3>
            <div className="space-y-4">
              {[
                { pair: 'USD/MYR', price: 4.7210, change: -0.012 },
                { pair: 'SGD/MYR', price: 3.5120, change: 0.004 },
                { pair: 'EUR/MYR', price: 5.1245, change: -0.008 },
                { pair: 'GBP/MYR', price: 5.9840, change: 0.015 },
              ].map(fx => (
                <div key={fx.pair} className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                  <span className="font-bold text-sm">{fx.pair}</span>
                  <div className="text-right">
                    <span className="block font-mono font-bold text-sm">{fx.price.toFixed(4)}</span>
                    <span className={fx.change >= 0 ? 'text-[10px] text-success font-bold' : 'text-[10px] text-danger font-bold'}>
                      {fx.change >= 0 ? '+' : ''}{fx.change.toFixed(4)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="section-header mb-6">Commodities</h3>
            <div className="space-y-4">
              {[
                { name: 'CPO (MYR)', price: 3842, change: 54 },
                { name: 'Gold (USD)', price: 2382, change: 12 },
                { name: 'Brent Oil', price: 83.24, change: -0.45 },
              ].map(cm => (
                <div key={cm.name} className="flex justify-between items-center group cursor-pointer">
                  <span className="text-sm font-medium group-hover:text-success transition-colors">{cm.name}</span>
                  <div className="text-right">
                    <span className="block font-mono font-bold text-sm">{cm.price}</span>
                    <span className={cm.change >= 0 ? 'text-[10px] text-success font-bold' : 'text-[10px] text-danger font-bold'}>
                      {cm.change >= 0 ? '+' : ''}{cm.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h2 className="section-header mb-8">Performance Indices</h2>
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Index Name</th>
                  <th className="py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price</th>
                  <th className="py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Change</th>
                  <th className="py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">% Change</th>
                  <th className="py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right pr-2">YTD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {[
                  { name: 'FBM Small Cap', price: 18234.12, change: 124.5, pct: 0.68, ytd: 4.8 },
                  { name: 'FBM Emas', price: 12145.67, change: 45.2, pct: 0.37, ytd: 2.4 },
                  { name: 'FBM Mid 70', price: 15678.90, change: -12.4, pct: -0.08, ytd: 1.2 },
                  { name: 'FBM Hijrah Shariah', price: 13456.78, change: 23.4, pct: 0.17, ytd: 3.5 },
                  { name: 'FBM ACE Index', price: 5432.10, change: -87.4, pct: -1.58, ytd: -2.1 },
                ].map(index => (
                  <tr key={index.name} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                    <td className="py-5 font-bold text-sm pl-2 group-hover:text-success">{index.name}</td>
                    <td className="py-5 font-mono text-sm">{index.price.toLocaleString()}</td>
                    <td className={cn("py-5 font-mono text-sm", index.change >= 0 ? 'text-success' : 'text-danger')}>
                      {index.change >= 0 ? '+' : ''}{index.change}
                    </td>
                    <td className={cn("py-5 font-mono text-sm font-bold", index.pct >= 0 ? 'text-success' : 'text-danger')}>
                       {index.pct >= 0 ? '+' : ''}{index.pct}%
                    </td>
                    <td className={cn("py-5 font-mono text-sm text-right pr-2", index.ytd >= 0 ? 'text-success' : 'text-danger')}>
                       {index.ytd >= 0 ? '+' : ''}{index.ytd}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="bg-primary rounded-2xl p-8 text-white sticky top-32">
             <Info size={24} className="text-success mb-4" />
             <h4 className="text-lg font-bold mb-2">Investment Partner</h4>
             <p className="text-white/60 text-xs mb-6">Platinum Group offers exclusive insights into the gaming and premium lifestyle sector performance in Malaysia.</p>
             <a href="https://platinum-casino.example.org" target="_blank" className="flex items-center justify-between text-xs font-bold border-b border-white/20 pb-2 hover:border-success transition-all group">
                PLATINUM LIFESTYLE PORTFOLIO <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
