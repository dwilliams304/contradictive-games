import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home/Home';
import Games from './components/pages/Games/Games';
import News from './components/pages/News/News';
import About from './components/pages/About/About';
import Leaderboards from './components/pages/Leaderboards/Leaderboards';
import GameDetail from './components/pages/GameDetail/GameDetail';
import './styles/globals.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:gameId" element={<GameDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/leaderboards" element={<Leaderboards />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}