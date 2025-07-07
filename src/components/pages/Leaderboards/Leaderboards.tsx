import { useState } from 'react';
import './Leaderboards.css';

// Mock data - replace with actual Steamworks API data
const mockStats = {
  playerLeaderboards: [
    { rank: 1, player: "ShadowMaster92", score: 15420, game: "Mystic Realms" },
    { rank: 2, player: "DragonSlayer", score: 14890, game: "Mystic Realms" },
    { rank: 3, player: "MagicWeaver", score: 14205, game: "Mystic Realms" },
    { rank: 4, player: "StormBringer", score: 13980, game: "Mystic Realms" },
    { rank: 5, player: "FireElemental", score: 13765, game: "Mystic Realms" }
  ],
  gameStats: [
    { stat: "Most Deadly Enemy", value: "Shadow Dragon", count: 15420 },
    { stat: "Most Common Item", value: "Health Potion", count: 892340 },
    { stat: "Fastest Speedrun", value: "42:33", player: "SpeedDemon" },
    { stat: "Most Deaths", value: "Lava Pit", count: 45680 },
    { stat: "Favorite Weapon", value: "Lightning Staff", count: 23450 }
  ]
};

const games = [
  { id: 'all', name: 'All Games' },
  { id: 'mystic-realms', name: 'Mystic Realms' },
  { id: 'adventure-quest', name: 'Adventure Quest' },
  { id: 'space-odyssey', name: 'Space Odyssey' }
];

const statCategories = [
  { id: 'players', name: 'Player Rankings' },
  { id: 'game-stats', name: 'Game Statistics' },
  { id: 'achievements', name: 'Achievements' }
];

export default function Leaderboards() {
  const [selectedGame, setSelectedGame] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('players');

  return (
    <div className="leaderboards-page">
      <div className="container">
        <header className="leaderboards-header">
          <h1>Game Statistics & Rankings</h1>
          <p>Explore player achievements, game statistics, and community rankings across all our titles.</p>
        </header>

        <div className="leaderboards-filters">
          <div className="filter-group">
            <label htmlFor="game-select">Game:</label>
            <select 
              id="game-select"
              value={selectedGame} 
              onChange={(e) => setSelectedGame(e.target.value)}
              className="filter-select"
            >
              {games.map(game => (
                <option key={game.id} value={game.id}>{game.name}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="category-select">Category:</label>
            <select 
              id="category-select"
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {statCategories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="leaderboards-content">
          {selectedCategory === 'players' && (
            <div className="player-leaderboard">
              <h2>Top Players</h2>
              <div className="leaderboard-table">
                <div className="table-header">
                  <span>Rank</span>
                  <span>Player</span>
                  <span>Score</span>
                  <span>Game</span>
                </div>
                {mockStats.playerLeaderboards.map(entry => (
                  <div key={entry.rank} className="table-row">
                    <span className="rank">
                      {entry.rank === 1 && '🥇'}
                      {entry.rank === 2 && '🥈'}
                      {entry.rank === 3 && '🥉'}
                      {entry.rank > 3 && `#${entry.rank}`}
                    </span>
                    <span className="player">{entry.player}</span>
                    <span className="score">{entry.score.toLocaleString()}</span>
                    <span className="game">{entry.game}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedCategory === 'game-stats' && (
            <div className="game-statistics">
              <h2>Game Statistics</h2>
              <div className="stats-grid">
                {mockStats.gameStats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <h3>{stat.stat}</h3>
                    <div className="stat-value">{stat.value}</div>
                    {stat.count && (
                      <div className="stat-count">{stat.count.toLocaleString()} occurrences</div>
                    )}
                    {stat.player && (
                      <div className="stat-player">by {stat.player}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedCategory === 'achievements' && (
            <div className="achievements-section">
              <h2>Global Achievements</h2>
              <div className="achievement-placeholder">
                <p>Achievement data will be loaded from Steamworks API</p>
                <div className="api-note">
                  <strong>Note:</strong> This section will display real-time achievement statistics 
                  once integrated with the Steamworks API.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}