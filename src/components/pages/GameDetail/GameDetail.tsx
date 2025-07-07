import { useParams } from 'react-router-dom';
import './GameDetail.css';

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
  'adventure-quest': {
    title: 'Adventure Quest',
    subtitle: 'An Epic Journey Awaits',
    description: 'Embark on an epic journey through mystical lands filled with danger, wonder, and ancient secrets waiting to be discovered.',
    longDescription: `Adventure Quest is our flagship RPG that combines classic adventure gameplay with modern mechanics. Players will explore vast open worlds, engage in strategic combat, and uncover a deep narrative that spans multiple kingdoms.

    The game features a unique magic system where players can combine elements to create custom spells, a branching storyline with meaningful choices, and beautifully hand-crafted environments that tell their own stories.`,
    releaseDate: '2024-03-15',
    platforms: ['Steam', 'Epic Games', 'PlayStation', 'Xbox'],
    status: 'Released',
    price: '$29.99',
    rating: '9.2/10',
    trailerUrl: '/path/to/adventure-quest-trailer.mp4',
    screenshots: [
      '/path/to/screenshot1.jpg',
      '/path/to/screenshot2.jpg',
      '/path/to/screenshot3.jpg',
      '/path/to/screenshot4.jpg'
    ],
    features: [
      'Open World Exploration',
      'Custom Spell Crafting',
      'Branching Storylines',
      '50+ Hours of Content',
      'Multiplayer Co-op',
      'Achievement System'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel i5-4590 / AMD FX 8350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 970 / AMD R9 290',
        storage: '25 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel i7-8700K / AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 3060 / AMD RX 6600',
        storage: '25 GB available space (SSD recommended)'
      }
    }
  },
  'space-odyssey': {
    title: 'Space Odyssey',
    subtitle: 'Explore the Infinite Cosmos',
    description: 'A space exploration game that takes you on a journey through the vast cosmos to uncover the secrets of ancient civilizations.',
    longDescription: `Space Odyssey is an ambitious space exploration and survival game set in a procedurally generated universe. Players captain their own spacecraft, explore unknown systems, and piece together the mystery of a long-lost galactic civilization.

    With realistic physics, resource management, and a deep crafting system, every journey into the unknown is both thrilling and challenging. Discover alien worlds, ancient artifacts, and forge your own path among the stars.`,
    releaseDate: '2025-09-20',
    platforms: ['Steam', 'GOG', 'Epic Games'],
    status: 'Coming Soon',
    price: 'TBA',
    rating: 'Preview Build: 8.5/10',
    trailerUrl: '/path/to/space-odyssey-trailer.mp4',
    screenshots: [
      '/path/to/space-screenshot1.jpg',
      '/path/to/space-screenshot2.jpg',
      '/path/to/space-screenshot3.jpg'
    ],
    features: [
      'Procedural Universe Generation',
      'Realistic Space Physics',
      'Ship Customization',
      'Alien World Exploration',
      'Resource Management',
      'Mystery Storyline'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel i5-8400 / AMD Ryzen 5 2600',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GTX 1060 / AMD RX 580',
        storage: '35 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel i7-10700K / AMD Ryzen 7 3700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 3070 / AMD RX 6700 XT',
        storage: '35 GB available space (SSD required)'
      }
    }
  }
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
          {game.trailerUrl && (
            <video autoPlay muted loop className="hero-video">
              <source src={game.trailerUrl} type="video/mp4" />
            </video>
          )}
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