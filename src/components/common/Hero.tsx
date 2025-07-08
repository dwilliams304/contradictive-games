import { useState } from 'react';
import './Hero.css';

interface HeroProps {
  backgroundVideo?: string;
  backgroundImage?: string;
  gameTitle?: string;
  gameDescription?: string;
  primaryButton?: string;
  secondaryButton?: string;
}

export default function Hero({ 
  backgroundVideo, 
  backgroundImage, 
  gameTitle = "Our Latest Game",
  gameDescription = "Experience the ultimate gaming adventure",
  primaryButton,
  secondaryButton,
}: HeroProps) {
  const [videoError, setVideoError] = useState(false);

  const handlePlayNow = () => {
    console.log('Play Now clicked');
  };

  const handleWatchTrailer = () => {
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
          {
            primaryButton && (
            <button 
              className="hero-btn primary"
              onClick={handlePlayNow}
            >
              {primaryButton}
            </button>
            )
          }
          {
            secondaryButton &&
            (
            <button 
              className="hero-btn secondary"
              onClick={handleWatchTrailer}
            >
              {secondaryButton}
            </button>
            )
          }
          {
            !primaryButton && !secondaryButton &&
            (
              <p>Stay Tuned...</p>
            )
          }
        </div>
      </div>
    </section>
  );
}