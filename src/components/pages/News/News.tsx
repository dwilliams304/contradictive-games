import { useState } from 'react';
import './News.css';

import { NewsArticlesData } from '../../../data/newsArticles';


const categories = ["All", "Game Updates", "Development", "Community", "Events"];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredArticles = selectedCategory === "All" 
    ? NewsArticlesData 
    : NewsArticlesData.filter(article => article.category === selectedCategory);

  const featuredArticle = NewsArticlesData.find(article => article.featured);
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
                onClick={() => {
                  setSelectedCategory(category);
                  window.scrollTo(0, 0);
                }}
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