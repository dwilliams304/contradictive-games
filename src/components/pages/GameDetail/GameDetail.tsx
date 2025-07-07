import { useParams } from 'react-router-dom';
import './GameDetail.css';

import neondivide1 from '../../../assets/neondivide-1.png';
import neondivide2 from '../../../assets/neondivide-2.png';
import neondivide3 from '../../../assets/neondivide-3.png';
import neondivide4 from '../../../assets/neondivide-4.png';

// Types for game data
interface GameData {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  releaseDate: string;
  platforms: string[];
  status: string;
  price: string;
  rating: string;
  trailerUrl: string;
  screenshots: string[];
  features: string[];
  systemRequirements: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
  };
}

// Mock game data - replace with your actual game data
const gameData: { [key: string]: GameData } = {
  'neon-divide': {
    title: 'Neon Divide',
    subtitle: 'Become the Resistance',
    description: '',
    longDescription: `There will be a long description that eventually goes here`,
    releaseDate: '12/31/2333',
    platforms: ['Steam'],
    status: 'Ongoing',
    price: 'N/A',
    rating: 'N/A',
    trailerUrl: neondivide1,
    screenshots: [
      neondivide1,
      neondivide2,
      neondivide3,
      neondivide4
    ],
    features: [
      'Leaderboards',
      'Roguelike',
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel i5-4590 / AMD FX 8350',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GTX 970 / AMD R9 290',
        storage: '2 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel i7-8700K / AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 3060 / AMD RX 6600',
        storage: '2 GB available space'
      }
    }
  },
};

export default function GameDetail() {
  const { gameId } = useParams<{ gameId: string }>();
  const game = gameId ? gameData[gameId] : null;

  if (!game) {
    return (
      <div className="game-detail-page">
        <div className="container">
          <div className="game-not-found">
            <h1>Game Not Found</h1>
            <p>The game you're looking for doesn't exist or has been moved.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="game-detail-page">
      {/* Hero Section */}
      <section className="game-hero">
        <div className="hero-background">
          {/* {
            game.trailerUrl && (
            <video autoPlay muted loop className="hero-video">
              <source src={game.trailerUrl} type="video/mp4" />
            </video>
          )} */}
          {
            game.trailerUrl && (
              <img src={game.trailerUrl} className='hero-video'/>
            )
          }
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <h1>{game.title}</h1>
            <p className="game-subtitle">{game.subtitle}</p>
            <p className="game-description">{game.description}</p>
            <div className="hero-actions">
              {game.status === 'Released' ? (
                <a href="#" className="btn btn-primary">Play Now - {game.price}</a>
              ) : (
                <a href="#" className="btn btn-primary">Wishlist on Steam</a>
              )}
              <button className="btn btn-secondary">Watch Trailer</button>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Game Info */}
        <section className="game-info">
          <div className="info-grid">
            <div className="info-item">
              <h3>Release Date</h3>
              <p>{new Date(game.releaseDate).toLocaleDateString()}</p>
            </div>
            <div className="info-item">
              <h3>Platforms</h3>
              <div className="platforms">
                {game.platforms.map((platform) => (
                  <span key={platform} className="platform-tag">{platform}</span>
                ))}
              </div>
            </div>
            <div className="info-item">
              <h3>Status</h3>
              <span className={`status-badge ${game.status.toLowerCase().replace(' ', '-')}`}>
                {game.status}
              </span>
            </div>
            <div className="info-item">
              <h3>Rating</h3>
              <p>{game.rating}</p>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="screenshots-section">
          <h2>Screenshots</h2>
          <div className="screenshots-grid">
            {game.screenshots.map((screenshot, index) => (
              <div key={index} className="screenshot">
                <img src={screenshot} alt={`${game.title} screenshot ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* About & Features */}
        <section className="about-features">
          <div className="about-game">
            <h2>About {game.title}</h2>
            <div className="game-long-description">
              {game.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>
          
          <div className="game-features">
            <h2>Key Features</h2>
            <ul className="features-list">
              {game.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* System Requirements */}
        <section className="system-requirements">
          <h2>System Requirements</h2>
          <div className="requirements-grid">
            <div className="requirements-column">
              <h3>Minimum</h3>
              <ul>
                <li><strong>OS:</strong> {game.systemRequirements.minimum.os}</li>
                <li><strong>Processor:</strong> {game.systemRequirements.minimum.processor}</li>
                <li><strong>Memory:</strong> {game.systemRequirements.minimum.memory}</li>
                <li><strong>Graphics:</strong> {game.systemRequirements.minimum.graphics}</li>
                <li><strong>Storage:</strong> {game.systemRequirements.minimum.storage}</li>
              </ul>
            </div>
            <div className="requirements-column">
              <h3>Recommended</h3>
              <ul>
                <li><strong>OS:</strong> {game.systemRequirements.recommended.os}</li>
                <li><strong>Processor:</strong> {game.systemRequirements.recommended.processor}</li>
                <li><strong>Memory:</strong> {game.systemRequirements.recommended.memory}</li>
                <li><strong>Graphics:</strong> {game.systemRequirements.recommended.graphics}</li>
                <li><strong>Storage:</strong> {game.systemRequirements.recommended.storage}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}