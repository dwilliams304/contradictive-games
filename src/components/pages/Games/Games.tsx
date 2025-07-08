import { Link } from 'react-router-dom';
import './Games.css';

import { GamesBasicData } from '../../../data/GamesBasicData';


export default function Games() {
  return (
    <div className="games-page">
      <div className="container">
        <header className="games-header">
          <h1>Our Games</h1>
          <p>Discover the worlds we've created and the adventures that await you.</p>
        </header>
        
        <div className="games-grid">
          {GamesBasicData.map(game => (
            <div key={game.id} className="game-card">
              <div className="game-image">
                <img src={game.image} alt={game.title} />
                <div className="game-status">
                  <span className={`status-badge ${game.status.toLowerCase().replace(' ', '-')}`}>
                    {game.status}
                  </span>
                </div>
              </div>
              
              <div className="game-content">
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                
                <div className="game-meta">
                  <div className="release-date">
                    <strong>Release:</strong> {new Date(game.releaseDate).toLocaleDateString()}
                  </div>
                  <div className="platforms">
                    <strong>Platforms:</strong>
                    <div className="platform-tags">
                      {game.platforms.map(platform => (
                        <span key={platform} className="platform-tag">{platform}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="game-actions">
                  <Link to={`/games/${game.id}`} className="btn btn-primary">
                    Learn More
                  </Link>
                  {game.status === 'Released' && (
                    <a href="#" className="btn btn-secondary">Play Now</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}