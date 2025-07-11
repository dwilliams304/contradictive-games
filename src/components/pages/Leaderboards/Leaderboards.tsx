import { useState } from "react";
import { GamesList as games } from "../../../data/Games";
import { GameStats, INumberStat, IPlayerStat } from "../../../data/GameStats";
import './Leaderboards.css';

import { FormatTime } from "../../../utils/NumberFormatters";


const statCategories = [
  { id: 'players', name: 'Player Rankings' },
  { id: 'game-stats', name: 'Game Statistics' },
  { id: 'achievements', name: 'Achievements' }
];

// Type guard functions
function isNumberStat(stat: INumberStat | IPlayerStat): stat is INumberStat {
  return 'count' in stat;
}

function isPlayerStat(stat: INumberStat | IPlayerStat): stat is IPlayerStat {
  return 'playerName' in stat;
}

// Function to determine if a leaderboard should show time format
function isTimeBasedLeaderboard(leaderboardId: string): boolean {
  return leaderboardId === 'survival' || leaderboardId.includes('time');
}

export default function Leaderboards() {
  const [selectedGame, setSelectedGame] = useState(games[0].id);
  const [selectedCategory, setSelectedCategory] = useState('players');
  const [selectedLeaderboardIndex, setSelectedLeaderboardIndex] = useState(0);

  // Get current game data
  const currentGameData = GameStats.find(game => game.gameId === selectedGame);


  // Get current stats and leaderboards
  const currentStats = currentGameData?.stats || [];
  const currentLeaderboards = currentGameData?.leaderboards || [];
  const currentLeaderboard = currentLeaderboards[selectedLeaderboardIndex];

  // Navigation functions
  const goToPreviousLeaderboard = () => {
    setSelectedLeaderboardIndex(prev => 
      prev === 0 ? currentLeaderboards.length - 1 : prev - 1
    );
  };

  const goToNextLeaderboard = () => {
    setSelectedLeaderboardIndex(prev => 
      prev === currentLeaderboards.length - 1 ? 0 : prev + 1
    );
  };

  // Reset leaderboard index when game changes
  const handleGameChange = (gameId: string) => {
    setSelectedGame(gameId);
    setSelectedLeaderboardIndex(0);
  };

  return (
    <div className="leaderboards-page">
      <div className="container">
        <header className="leaderboards-header">
          <h1>Game Statistics & Rankings</h1>
          <p>Explore player achievements, game statistics, and community rankings across all games.</p>
        </header>

        <div className="leaderboards-filters">
          <div className="filter-group">
            <label htmlFor="game-select">Game:</label>
            <select 
              id="game-select"
              value={selectedGame} 
              onChange={(e) => handleGameChange(e.target.value)}
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
              <div className="leaderboard-header">
                <button 
                  className="nav-arrow nav-arrow-left"
                  onClick={goToPreviousLeaderboard}
                  disabled={currentLeaderboards.length <= 1}
                >
                  ←
                </button>
                <h2>{currentLeaderboard?.title || 'No Leaderboards'}</h2>
                <button 
                  className="nav-arrow nav-arrow-right"
                  onClick={goToNextLeaderboard}
                  disabled={currentLeaderboards.length <= 1}
                >
                  →
                </button>
              </div>
              
              {currentLeaderboard && currentLeaderboard.entries.length > 0 ? (
                <div className="leaderboard-table">
                  <div className="table-header">
                    <span>Rank</span>
                    <span>Player</span>
                    <span>Score</span>
                  </div>
                  {currentLeaderboard.entries.map(entry => (
                    <div key={entry.rank} className="table-row">
                      <span className="rank">
                        {entry.rank === 1 && '🥇'}
                        {entry.rank === 2 && '🥈'}
                        {entry.rank === 3 && '🥉'}
                        {entry.rank > 3 && `#${entry.rank}`}
                      </span>
                      <span className="player">{entry.player}</span>
                      <span className="score">
                        {isTimeBasedLeaderboard(currentLeaderboard.id) 
                          ? FormatTime(entry.score) 
                          : entry.score.toLocaleString()
                        }
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No leaderboard data available for this game.</p>
              )}
            </div>
          )}

          {selectedCategory === 'game-stats' && (
            <div className="game-statistics">
              <h2>Game Statistics</h2>
              {currentStats.length > 0 ? (
                <div className="stats-grid">
                  {currentStats.map((stat, index) => (
                    <div key={index} className="stat-card">
                      <h3>{stat.statName}</h3>
                      <div className="stat-value">{stat.value}</div>
                      {isNumberStat(stat) && (
                        <div className="stat-count">
                          {stat.count.toLocaleString()} {stat.statType.toLowerCase()}
                        </div>
                      )}
                      {isPlayerStat(stat) && (
                        <div className="stat-player">
                          {stat.statType === "PlayerNameStat" ? "by" : stat.statType} {stat.playerName}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>No statistics available for this game.</p>
              )}
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