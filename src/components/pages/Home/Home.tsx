import { Link } from 'react-router-dom';
import Hero from '../../common/Hero';
import './Home.css';
import { NeonDivide_IMG_1, NeonDivide_IMG_2, NeonDivide_IMG_3, NeonDivide_IMG_4 } from '../../../assets/neondivide';
import { NewsArticlesData } from '../../../data/newsArticles';
import { GameStats } from '../../../data/GameStats';

export default function Home() {
  // Get featured news articles (limit to 3)
  const featuredNews = NewsArticlesData
    .filter(article => article.featured || NewsArticlesData.indexOf(article) < 3)
    .slice(0, 3);

  // Get some interesting stats
  const topPlayerScore = GameStats[0]?.leaderboards[0]?.entries[0]?.score || 0;
  const totalPlayers = 15420; // This could come from your API
  const activeGames = 3; // Number of games you have

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="home-page">
      <Hero 
        gameTitle="Neon Divide"
        gameDescription="Become the Resistance"
        backgroundImage={NeonDivide_IMG_1}
        primaryButton="Play Now"
        secondaryButton="Watch Trailer"
      />
      
      {/* About Studio Section */}
      <section className="studio-intro">
        <div className="container">
          <div className="studio-content">
            <div className="studio-text">
              <h2>Welcome to Contradictive Games</h2>
              <p>
                We're an independent game studio passionate about creating immersive experiences 
                that challenge players and push the boundaries of interactive entertainment. 
                From cyberpunk adventures to mystical realms, our games offer unique worlds 
                waiting to be explored.
              </p>
              <div className="studio-stats">
                <div className="stat-item">
                  <span className="stat-number">{activeGames}</span>
                  <span className="stat-label">Games Released</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{totalPlayers.toLocaleString()}</span>
                  <span className="stat-label">Players Worldwide</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{topPlayerScore.toLocaleString()}</span>
                  <span className="stat-label">Highest Score</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="studio-image">
              <img src={NeonDivide_IMG_2} alt="Game development" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="featured-games">
        <div className="container">
          <div className="section-header">
            <h2>Latest Games</h2>
            <Link to="/games" className="view-all-link">View All Games →</Link>
          </div>
          <div className="games-grid">
            <div className="game-card featured">
              <div className="game-image">
                <img src={NeonDivide_IMG_1} alt="Neon Divide" />
                <div className="game-status">Now Available</div>
              </div>
              <div className="game-info">
                <h3>Neon Divide</h3>
                <p>A cyberpunk action-adventure where you lead the resistance against corporate tyranny.</p>
                <div className="game-tags">
                  <span className="tag">Cyberpunk</span>
                  <span className="tag">Action</span>
                  <span className="tag">RPG</span>
                </div>
                <Link to="/games/neon-divide" className="btn btn-secondary">Learn More</Link>
              </div>
            </div>
            
            <div className="game-card">
              <div className="game-image">
                <img src={NeonDivide_IMG_3} alt="Mystic Realms" />
                <div className="game-status coming-soon">Coming Soon</div>
              </div>
              <div className="game-info">
                <h3>Mystic Realms</h3>
                <p>Explore magical worlds filled with ancient mysteries and powerful spells.</p>
                <div className="game-tags">
                  <span className="tag">Fantasy</span>
                  <span className="tag">Magic</span>
                  <span className="tag">Adventure</span>
                </div>
                <button className="btn btn-secondary" disabled>Coming 2026</button>
              </div>
            </div>
            
            <div className="game-card">
              <div className="game-image">
                <img src={NeonDivide_IMG_4} alt="Space Odyssey" />
                <div className="game-status in-development">In Development</div>
              </div>
              <div className="game-info">
                <h3>Space Odyssey</h3>
                <p>Chart your course through the cosmos in this epic space exploration adventure.</p>
                <div className="game-tags">
                  <span className="tag">Sci-Fi</span>
                  <span className="tag">Exploration</span>
                  <span className="tag">Strategy</span>
                </div>
                <button className="btn btn-secondary" disabled>In Development</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="latest-news">
        <div className="container">
          <div className="section-header">
            <h2>Latest News</h2>
            <Link to="/news" className="view-all-link">View All News →</Link>
          </div>
          <div className="news-grid">
            {featuredNews.map(article => (
              <article key={article.id} className="news-card">
                <div className="news-image">
                  <img src={article.image} alt={article.title} />
                  <div className="news-category">{article.category}</div>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">{formatDate(article.publishDate)}</span>
                    <span className="news-author">By {article.author}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link to={`/news/${article.id}`} className="read-more">Read More →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="community-section">
        <div className="container">
          <h2>Join Our Community</h2>
          <div className="community-content">
            <div className="community-stats">
              <div className="community-card">
                <div className="community-icon">🎮</div>
                <h3>Active Players</h3>
                <p>Join thousands of players in our growing community</p>
                <Link to="/leaderboards" className="btn btn-primary">View Leaderboards</Link>
              </div>
              <div className="community-card">
                <div className="community-icon">📰</div>
                <h3>Latest Updates</h3>
                <p>Stay informed with development news and game updates</p>
                <Link to="/news" className="btn btn-primary">Read News</Link>
              </div>
              <div className="community-card">
                <div className="community-icon">🏆</div>
                <h3>Compete & Win</h3>
                <p>Climb the rankings and showcase your skills</p>
                <Link to="/leaderboards" className="btn btn-primary">Compete Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay in the Loop</h2>
            <p>Get the latest news, updates, and exclusive content delivered straight to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Newsletter signup functionality would be implemented here!');
            }}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            <p className="newsletter-disclaimer">
              No spam, unsubscribe at any time. Privacy policy applies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}