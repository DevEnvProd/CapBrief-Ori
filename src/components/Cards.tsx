import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import { cn, formatDate } from '../lib/utils';
import { NewsArticle } from '../data/mock';

interface NewsCardProps {
  article: NewsArticle;
  variant?: 'large' | 'compact' | 'featured';
}

export function NewsCard({ article, variant = 'large' }: NewsCardProps) {
  if (variant === 'featured') {
    return (
      <Link to={`/news/${article.slug}`} className="group relative block overflow-hidden rounded-lg bg-slate-900 h-full w-full">
        <img 
          src={article.image} 
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 text-white w-full">
          <span className="bg-success text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-4 inline-block rounded-sm">
            {article.category}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight group-hover:text-success transition-colors">
            {article.title}
          </h2>
          <p className="text-slate-300 line-clamp-2 max-w-2xl text-sm hidden md:block">
            {article.excerpt}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bento-card p-4 flex space-x-4 shadow-sm h-full group cursor-pointer">
        <div className="w-24 h-full bg-slate-100 dark:bg-slate-800 rounded-md shrink-0 overflow-hidden">
          <img src={article.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="flex flex-col justify-center">
          <span className={cn("text-[10px] font-bold uppercase tracking-widest", article.isSponsored ? "text-danger" : "text-slate-400")}>
            {article.isSponsored ? "Sponsored" : article.category}
          </span>
          <Link to={`/news/${article.slug}`} className="text-sm font-bold leading-tight mt-1 group-hover:text-success transition-colors line-clamp-2">
            {article.title}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/news/${article.slug}`} className="bento-card group block p-0!">
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={article.image} 
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {article.isSponsored && (
          <span className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 text-[10px] font-bold px-2 py-1 rounded shadow-sm">
            SPONSORED
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-success">
            {article.category}
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-[10px] text-slate-400">{formatDate(article.date)}</span>
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-success transition-colors leading-tight">
          {article.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}

export function MarketWidget({ data }: { data: any[] }) {
  return (
    <div className="bg-slate-100 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 py-2 px-4 flex items-center space-x-8 font-mono text-[10px] overflow-x-auto no-scrollbar">
      {data.map((item) => (
        <div key={item.symbol} className="flex space-x-2 shrink-0">
          <span className="font-bold opacity-70 uppercase">{item.name}</span>
          <span className={cn("font-bold", item.change >= 0 ? "text-emerald-600" : "text-rose-600")}>
            {item.price.toFixed(2)} {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.changePercent).toFixed(1)}%
          </span>
        </div>
      ))}
      <div className="flex-grow"></div>
      <div className="animate-pulse text-rose-600 font-bold shrink-0">● LIVE</div>
    </div>
  );
}
