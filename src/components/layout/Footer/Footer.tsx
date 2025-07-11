import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contradictive Games</h3>
          <p>PLACE.HOLDER.TEXT.WOW!</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/leaderboards">Stats</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <ul className="footer-links">
            <li><a href="https://store.steampowered.com/search/?developer=Contradictive%20Games" target="_blank" rel="noopener noreferrer">Steam</a></li>
            <li><a href="https://discord.gg/hBbcyYd5my" target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href="https://www.youtube.com/@ContradictiveGames" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><a href="#" target="_blank" rel="noopener noreferrer">Help Center</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Bug Reports</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Contradictive Games. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}