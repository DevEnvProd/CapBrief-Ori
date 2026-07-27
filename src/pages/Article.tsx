import { useParams, Link, Navigate } from 'react-router-dom';
import { NEWS_DATA, CATEGORIES } from '../data/mock';
import { WINBOX_NEWS } from '../data/winboxNews';
import { formatDate } from '../lib/utils';
import { ArrowLeft, ArrowRight, Clock, Share2, Bookmark, MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function Article() {
  const { slug } = useParams();
  
  // Combine all articles for searching
  const allArticles = [...NEWS_DATA, ...WINBOX_NEWS];
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/" />;

  // Get trending articles from same category
  const trendingArticles = allArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  // Fallback trending if not enough in same category
  const fallbackTrending = trendingArticles.length > 0 
    ? trendingArticles 
    : allArticles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Article Content */}
        <div className="lg:col-span-8">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-success mb-8 uppercase tracking-widest transition-colors">
            <ArrowLeft size={14} /> Back to Newsroom
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-success text-[10px] font-bold text-white uppercase tracking-widest px-2 py-1 rounded">
                {article.category}
              </span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Clock size={14} /> 4 min read
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight dark:text-white">
              {article.title}
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed italic border-l-4 border-success pl-6">
              {article.excerpt}
            </p>
          </header>

          <div className="flex items-center justify-between py-6 border-y border-slate-100 dark:border-slate-800 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-primary dark:text-white font-bold">
                {article.author.charAt(0)}
              </div>
              <div>
                <span className="block text-sm font-bold dark:text-white">{article.author}</span>
                <span className="block text-xs text-slate-500 uppercase tracking-wider">{formatDate(article.date)}</span>
              </div>
            </div>
            <div className="flex gap-4 text-slate-400">
              <button className="hover:text-success transition-colors"><Share2 size={20} /></button>
              <button className="hover:text-success transition-colors"><Bookmark size={20} /></button>
              <button className="hover:text-success transition-colors"><MessageSquare size={20} /></button>
            </div>
          </div>

          <figure className="mb-10 overflow-hidden rounded-2xl">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full aspect-video object-cover"
            />
            <figcaption className="text-xs text-gray-500 mt-3 italic">
              Source: Capital Brief Media Library / {article.category}
            </figcaption>
          </figure>

          <article className="markdown-body text-lg text-gray-700 dark:text-gray-300 space-y-6">
            {article.content.split('\n\n').map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </article>

          {article.isSponsored && (
            <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] font-bold text-success uppercase tracking-widest block mb-2">Partner Perspective</span>
              <h4 className="text-xl font-bold mb-4">Invest in the Future of Entertainment</h4>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Platinum Entertainment Group is committed to sustainable growth in the alternative asset sector. Join us as we redefine high-yield hospitality in the ASEAN region.
              </p>
              <Link 
                to="/pro"
                className="bg-primary text-white px-6 py-2 rounded font-bold text-sm hover:bg-success transition-all inline-flex items-center gap-2"
              >
                Visit Platinum Group <ArrowRight size={14} />
              </Link>
            </div>
          )}

          {/* Related Tickes */}
          {article.relatedTickers && (
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
              <h4 className="section-header">Related Counters</h4>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {article.relatedTickers.map(ticker => (
                  <Link key={ticker} to="/market-data" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm font-bold hover:border-success transition-colors whitespace-nowrap">
                    {ticker} <span className="text-[10px] text-success ml-2 font-mono">+0.5%</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-10">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
            <h4 className="section-header mb-6">Trending Stories</h4>
            <div className="space-y-6">
              {fallbackTrending.map(a => (
                <Link key={a.id} to={`/news/${a.slug}`} className="group block">
                  <span className="text-[10px] font-bold text-success uppercase block mb-1">{a.category}</span>
                  <h5 className="font-bold text-sm leading-tight group-hover:text-success transition-colors">{a.title}</h5>
                </Link>
              ))}
            </div>
          </div>

          <section className="bg-primary text-white rounded-2xl p-8 relative overflow-hidden">
             <div className="relative z-10">
                <h4 className="text-lg font-bold mb-2">Capital Brief PRO</h4>
                <p className="text-white/60 text-xs mb-4">Unlock analyst models, proprietary stock screeners, and deeper legal analysis.</p>
                <button className="text-xs font-bold bg-white text-primary px-4 py-2 rounded hover:bg-success hover:text-white transition-all">
                  UPGRADE NOW
                </button>
             </div>
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Bookmark size={120} />
             </div>
          </section>

          <div className="p-6 border border-gray-100 dark:border-gray-800 rounded-2xl">
            <h4 className="section-header">Categories</h4>
             <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <Link key={cat} to="/news" className="text-[11px] font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full hover:bg-success hover:text-white transition-all uppercase tracking-wider">
                    {cat}
                  </Link>
                ))}
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
