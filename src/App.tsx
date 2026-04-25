import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Sectors } from './pages/Sectors';
import { MarketDataPage } from './pages/MarketData';
import { MockPage } from './pages/MockPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/news/:slug" element={<Article />} />
          <Route path="/sectors/:sector" element={<Sectors />} />
          <Route path="/market-data" element={<MarketDataPage />} />
          <Route path="/economic-calendar" element={<Home />} />
          <Route path="/pro" element={<MockPage title="Capital Brief PRO" />} />
          <Route path="/about" element={<MockPage title="About Capital Brief" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
