import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import { Navbar, Footer } from './components/layout';
import { HomePage, 
  GamesListPage, 
  GameDetailPage,
  NewsListPage,
  NewsArticlePage,
  AboutPage,
  LeaderboardsPage 
} from './components/pages';

import './styles/globals.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesListPage />} />
            <Route path="/games/:gameId" element={<GameDetailPage />} />
            <Route path="/news" element={<NewsListPage />} />
            <Route path="/news/:articleId" element={<NewsArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}