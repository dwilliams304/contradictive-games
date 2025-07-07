import { useState } from 'react';
import './Hero.css';

interface HeroProps {
  backgroundVideo?: string;
  backgroundImage?: string;
  gameTitle?: string;
  gameDescription?: string;
}

export default function Hero({ 
  backgroundVideo, 
  backgroundImage, 
  gameTitle = "Our Latest Game",
  gameDescription = "Experience the ultimate gaming adventure"
}: HeroProps) {
  const [videoError, setVideoError] = useState(false);

  const handlePlayNow = () => {
    // Add your play now logic here
    console.log('Play Now clicked');
  };

  const handleWatchTrailer = () => {
    // Add your watch trailer logic here
    console.log('Watch Trailer clicked');
  };

  return (
    <section className="hero">
      {/* Background Media */}
      <div className="hero-background">
        {backgroundVideo && !videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
            onError={() => setVideoError(true)}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : backgroundImage ? (
          <img 
            src={backgroundImage} 
            alt="Game background" 
            className="hero-image"
          />
        ) : (
          <div className="hero-placeholder">
            {/* Placeholder gradient background */}
          </div>
        )}
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{gameTitle}</h1>
          <p className="hero-description">{gameDescription}</p>
        </div>
        
        <div className="hero-actions">
          <button 
            className="hero-btn primary"
            onClick={handlePlayNow}
          >
            Play Now
          </button>
          <button 
            className="hero-btn secondary"
            onClick={handleWatchTrailer}
          >
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  );
}