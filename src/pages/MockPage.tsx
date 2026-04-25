import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MockPageProps {
  title: string;
}

export function MockPage({ title }: MockPageProps) {
  return (
    <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-4xl font-black mb-4 dark:text-white uppercase tracking-tight">{title}</h1>
      <p className="text-slate-500 max-w-lg mb-8 leading-relaxed">
        This section is currently under development. Check back later for in-depth market analysis, proprietary tools, and exclusive content.
      </p>
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold bg-primary text-white px-6 py-3 rounded-lg hover:bg-success transition-all uppercase tracking-widest">
        <ArrowLeft size={16} /> Return Home
      </Link>
    </div>
  );
}
