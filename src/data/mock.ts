export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  sparkline: number[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  relatedTickers?: string[];
  isSponsored?: boolean;
}

export interface EconomicEvent {
  id: string;
  date: string;
  time: string;
  event: string;
  impact: 'High' | 'Medium' | 'Low';
  actual?: string;
  forecast?: string;
  previous?: string;
}

export const CATEGORIES = [
  'Market Updates',
  'Economy & Policy',
  'Corporate News',
  'Gaming & Hospitality',
  'Technology',
  'Personal Finance',
  'Global Markets'
];

export const MARKET_SUMMARY: MarketData[] = [
  { symbol: 'FBMKLCI', name: 'FBM KLCI', price: 1618.32, change: 5.41, changePercent: 0.34, sparkline: [1610, 1612, 1615, 1613, 1618] },
  { symbol: 'USDMYR', name: 'USD/MYR', price: 4.721, change: -0.012, changePercent: -0.25, sparkline: [4.735, 4.730, 4.725, 4.722, 4.721] },
  { symbol: 'CPO', name: 'Crude Palm Oil', price: 3842.00, change: 54.00, changePercent: 1.42, sparkline: [3780, 3800, 3810, 3830, 3842] },
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: '1',
    slug: 'bursa-malaysia-fbm-klci-rally',
    title: 'Bursa Malaysia ends higher as FBM KLCI rallies past 1,610 mark',
    excerpt: 'Malaysian stocks extended their gain on Wednesday, driven by strong buying interest in banking and utility heavyweights as investor sentiment improves.',
    content: `Bursa Malaysia concluded Wednesday's session on a positive note, with the FBM KLCI rallying past the 1,610 psychological level. The benchmark index gained 0.34%, supported by a rotational play into laggards and positive cues from regional markets.

Banks led the charge, with Maybank and CIMB seeing significant volume. Analysts suggest that the easing of political noise and a stable Ringgit have contributed to the renewed interest from foreign institutional investors.

"We are seeing a genuine shift in fund flows," said an analyst at a leading local brokerage. "The structural reforms mentioned in Budget 2025 are starting to be priced in by the market."`,
    author: 'Ahmad Daniel',
    date: '2024-05-20T10:00:00Z',
    category: 'Market Updates',
    image: 'https://images.unsplash.com/photo-1611974789855-9c8a08ce2355?q=80&w=2070&auto=format&fit=crop',
    relatedTickers: ['MAYBANK', 'CIMB', 'TENAGA']
  },
  {
    id: '2',
    slug: 'genting-resilience-hospitality-recovery',
    title: 'Genting Malaysia\'s recovery path accelerated by regional tourism surge',
    excerpt: 'Analyst reports suggest that Genting Malaysia (GENM) is benefiting significantly from the visa-free entry for Chinese tourists and higher domestic footfall at Resorts World Genting.',
    content: `Genting Malaysia Bhd (GENM) is seeing a faster-than-expected recovery in visitor numbers. The integrated resort operator has reported high occupancy rates across its Genting Highlands properties, bolstered by festive seasons and a surge in regional tourism.

"The gaming sector remains a key contributor to Malaysia's service industry GDP," explains a sector analyst. Beyond traditional gaming, the expansion into diverse hospitality offerings has diversified GENM's revenue streams.

Investors are also looking at Genting's US operations, but the core Malaysian business remains the primary cash cow. The upcoming quarterly results are expected to show a sharp improvement in EBITDA margins.`,
    author: 'Sarah Chen',
    date: '2024-05-19T14:30:00Z',
    category: 'Gaming & Hospitality',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6d3df3991?q=80&w=2070&auto=format&fit=crop',
    relatedTickers: ['GENTING', 'GENM']
  },
  {
    id: '3',
    slug: 'platinum-casino-alternative-asset-investing',
    title: 'Investing in Lifestyle: How Alternative Assets are Outperforming the Market',
    excerpt: 'As traditional equity markets face volatility, high-net-worth investors are looking toward lifestyle assets and regulated entertainment platforms as non-correlated hedges.',
    content: `In an era of high inflation and currency fluctuation, the definition of an 'asset' is expanding. Platinum Entertainment Group highlights how licensed entertainment and premium hospitality assets provide unique risk-adjusted returns during market downturns.

Alternative investments often don't move in lockstep with the FBM KLCI. "When tech stocks tumble, people still seek entertainment and luxury experiences," says a representative from Platinum Casino. 

Through strategic partnerships and premium service models, Platinum has positioned itself as a leader in the luxury entertainment space, offering investors a bridge into high-yield hospitality ventures.`,
    author: 'Marcus Tan',
    date: '2024-05-18T09:15:00Z',
    category: 'Gaming & Hospitality',
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=2073&auto=format&fit=crop',
    isSponsored: true,
    relatedTickers: ['PLATINUM']
  }
];

export const TOP_STOCKS = [
  { symbol: 'MAYBANK', name: 'Malayan Banking Bhd', price: 9.98, change: 0.05, active: true },
  { symbol: 'CIMB', name: 'CIMB Group Holdings', price: 6.82, change: 0.08, active: true },
  { symbol: 'PBBANK', name: 'Public Bank Bhd', price: 4.15, change: -0.01, active: false },
  { symbol: 'TENAGA', name: 'Tenaga Nasional', price: 12.42, change: 0.12, active: true },
  { symbol: 'GENTING', name: 'Genting Bhd', price: 4.65, change: 0.03, active: false },
];

export const CALENDAR_EVENTS: EconomicEvent[] = [
  { id: 'c1', date: '2024-05-22', time: '12:00', event: 'Bank Negara Interest Rate Decision', impact: 'High', forecast: '3.00%', previous: '3.00%' },
  { id: 'c2', date: '2024-05-24', time: '11:00', event: 'MY Inflation Rate (YoY)', impact: 'High', forecast: '1.9%', previous: '1.8%' },
  { id: 'c3', date: '2024-05-26', time: '09:00', event: 'Trade Balance (Apr)', impact: 'Medium', forecast: 'RM12.5B', previous: 'RM12.85B' },
];
