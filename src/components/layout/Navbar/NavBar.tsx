import { Link } from 'react-router-dom';
import { DropdownMenu } from '../../common';
import './Navbar.css';

// Mock games data - you can replace this with your actual data
const gamesList = [
  { id: 'game1', name: 'Neon Divide', path: '/games/neon-divide' }
];

export default function Navbar() {
  const gameOptions = gamesList.map(game => ({
    content: game.name,
    action: () => window.location.href = game.path
  }));

  return (
    <nav className="main-nav">
      {/* Left Side */}
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <h1>Contradictive Games</h1>
        </Link>
      </div>
      
      {/* Right Side */}
      <div className="nav-right">
        <DropdownMenu
          title="Games"
          options={gameOptions}
        />
        <Link to="/news" className="nav-link">News</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/leaderboards" className="nav-link">Stats</Link>
      </div>
    </nav>
  );
}