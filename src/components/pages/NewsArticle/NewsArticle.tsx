import { useParams, Link, Navigate } from 'react-router-dom';
import { NewsArticlesData } from '../../../data/newsArticles';
import { RenderRichContent } from '../../../utils/RenderRichContent';
import './NewsArticle.css';

export default function NewsArticle() {
  const { articleId } = useParams<{ articleId: string }>();
  
  const article = NewsArticlesData.find(article => 
    article.id === parseInt(articleId || '0')
  );

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related articles (same category, excluding current)
  const relatedArticles = NewsArticlesData
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);


  return (
    <div className="news-article-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/news" className="breadcrumb-link">News</Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div className="article-meta">
            <span className="category">{article.category}</span>
            <span className="date">{formatDate(article.publishDate)}</span>
            {article.readTime && <span className="read-time">{article.readTime} min read</span>}
          </div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-excerpt">{article.excerpt}</p>
          <div className="article-author">
            <span>By {article.author}</span>
          </div>
          {article.tags && (
            <div className="article-tags">
              {article.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </header>

        {/* Article Image */}
        <div className="article-hero-image">
          <img src={article.image} alt={article.title} />
        </div>

        {/* Article Content */}
        <div className="article-body">
          <div className="article-content">
            {/* Render rich content if available, fallback to basic content */}
            {article.richContent ? (
              article.richContent.map((block, index) => RenderRichContent(block, index))
            ) : (
              article.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            )}
          </div>

          {/* Article Sidebar */}
          <aside className="article-sidebar">
            <div className="sidebar-section">
              <h3>Share Article</h3>
              <div className="share-buttons">
                <button className="share-btn twitter">Twitter</button>
                <button className="share-btn facebook">Facebook</button>
                <button className="share-btn reddit">Reddit</button>
              </div>
            </div>

            {relatedArticles.length > 0 && (
              <div className="sidebar-section">
                <h3>Related Articles</h3>
                <div className="related-articles">
                  {relatedArticles.map(relatedArticle => (
                    <Link 
                      key={relatedArticle.id} 
                      to={`/news/${relatedArticle.id}`}
                      className="related-article"
                    >
                      <img src={relatedArticle.image} alt={relatedArticle.title} />
                      <div className="related-content">
                        <h4>{relatedArticle.title}</h4>
                        <span className="related-date">{formatDate(relatedArticle.publishDate)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Back to News */}
        <div className="article-footer">
          <Link to="/news" className="back-to-news">
            ← Back to All News
          </Link>
        </div>
      </div>
    </div>
  );
}