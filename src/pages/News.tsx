import React, { useState } from 'react';
import { WINBOX_NEWS, WinboxArticle } from '../data/winboxNews';
import { formatDate } from '../lib/utils';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Unique categories for the filter
  const categories = ['All', ...Array.from(new Set(WINBOX_NEWS.map(a => a.category)))];

  // Filter articles based on search and selected category
  const filteredArticles = WINBOX_NEWS.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Most recent article (July 9, 2026) as Featured
  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-4">
      {/* Page Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8 text-center md:text-left">
        <span className="text-xs font-bold text-success uppercase tracking-widest bg-success/10 px-3 py-1.5 rounded-full inline-block mb-3">
          Daily Intelligence Briefing (June 3 – July 9, 2026)
        </span>
        <h1 className="text-3xl lg:text-5xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">
          Malaysia Market &amp; Leisure News
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-3xl text-sm md:text-base leading-relaxed">
          Daily high-quality financial insights, regulatory updates, technological integrations, and specialized analyses of alternative asset performance across Malaysia's modern digital landscape.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 pointer-events-none">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search 37 briefing articles..."
            className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-success transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories Scroller */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Presentation */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16">
          <BookOpen size={48} className="mx-auto text-slate-300 mb-4" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">No briefings found</h3>
          <p className="text-slate-500 max-w-md mx-auto text-sm">
            We couldn't find any news articles matching "{searchQuery}" under the selected category. Try a different term or filter.
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Featured Article Grid */}
          {featuredArticle && !searchQuery && selectedCategory === 'All' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="lg:col-span-7 relative h-64 lg:h-auto min-h-[300px]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-success text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  LATEST BRIEFING
                </span>
              </div>
              <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-success uppercase block mb-2">
                    {featuredArticle.category} • {formatDate(featuredArticle.date)}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-black uppercase text-slate-900 dark:text-white leading-tight mb-4 hover:text-success transition-colors">
                    <Link to={`/news/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-900">
                  <div className="text-xs">
                    <span className="block text-slate-400 uppercase font-bold">Author</span>
                    <span className="font-bold dark:text-white">{featuredArticle.author}</span>
                  </div>
                  <Link
                    to={`/news/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-success transition-colors uppercase tracking-widest"
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Remaining Articles Grid */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
              Daily Publications ({remainingArticles.length + (searchQuery || selectedCategory !== 'All' ? 1 : 0)} Briefings)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(searchQuery || selectedCategory !== 'All' ? filteredArticles : remainingArticles).map(article => (
                <div
                  key={article.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-success transition-all flex flex-col justify-between h-full hover:shadow-sm"
                >
                  <div>
                    <div className="h-44 relative overflow-hidden bg-slate-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-primary/95 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] font-bold text-slate-400 block mb-1">
                        {formatDate(article.date)} • {article.author}
                      </span>
                      <h4 className="font-bold text-base text-slate-900 dark:text-white leading-snug mb-2 hover:text-success transition-colors">
                        <Link to={`/news/${article.slug}`}>{article.title}</Link>
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-success uppercase tracking-widest flex items-center gap-1">
                      <Clock size={12} /> 2 MIN READ
                    </span>
                    <Link
                      to={`/news/${article.slug}`}
                      className="text-xs font-bold text-primary dark:text-success hover:underline flex items-center gap-1 uppercase tracking-wider"
                    >
                      Read Brief <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
