import { useState } from 'react';
import './News.css';

// Mock news data - replace with your actual news/blog data
const newsArticles = [
  {
    id: 1,
    title: "Mystic Realms: The Shadow Update Now Live",
    excerpt: "Experience new dungeons, powerful spells, and challenging bosses in our biggest content update yet.",
    content: "The Shadow Update brings over 20 hours of new content to Mystic Realms...",
    author: "Development Team",
    publishDate: "2025-07-01",
    category: "Game Updates",
    image: "/path/to/shadow-update-image.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Behind the Scenes: Creating Space Odyssey",
    excerpt: "Take a deep dive into our development process and see how we're crafting the ultimate space adventure.",
    content: "Development of Space Odyssey began three years ago with a simple question...",
    author: "Lead Designer",
    publishDate: "2025-06-28",
    category: "Development",
    image: "/path/to/space-odyssey-dev.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Community Spotlight: Amazing Player Creations",
    excerpt: "Check out the incredible mods, artwork, and videos created by our talented community.",
    content: "Our community continues to amaze us with their creativity...",
    author: "Community Manager",
    publishDate: "2025-06-25",
    category: "Community",
    image: "/path/to/community-spotlight.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Upcoming Gaming Convention Appearances",
    excerpt: "Meet the team and play our latest demos at these upcoming gaming events.",
    content: "We're excited to announce our presence at several gaming conventions...",
    author: "Marketing Team",
    publishDate: "2025-06-20",
    category: "Events",
    image: "/path/to/convention-image.jpg",
    featured: false
  }
];

const categories = ["All", "Game Updates", "Development", "Community", "Events"];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="news-page">
      <div className="container">
        <header className="news-header">
          <h1>Latest News</h1>
          <p>Stay up to date with the latest developments, updates, and community highlights.</p>
        </header>

        {featuredArticle && selectedCategory === "All" && (
          <div className="featured-article">
            <div className="featured-image">
              <img src={featuredArticle.image} alt={featuredArticle.title} />
            </div>
            <div className="featured-content">
              <div className="article-meta">
                <span className="category">{featuredArticle.category}</span>
                <span className="date">{formatDate(featuredArticle.publishDate)}</span>
              </div>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>
              <div className="article-footer">
                <span className="author">By {featuredArticle.author}</span>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        )}

        <div className="news-filters">
          <h3>Filter by Category:</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="articles-grid">
          {regularArticles.map(article => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
                <div className="article-category">
                  <span>{article.category}</span>
                </div>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span className="date">{formatDate(article.publishDate)}</span>
                  <span className="author">By {article.author}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="no-articles">
            <p>No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}