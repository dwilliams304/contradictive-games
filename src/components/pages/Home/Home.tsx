import Hero from '../../common/Hero';
import './Home.css';
import neondivide1 from "../../../assets/neondivide-1.png";

export default function Home() {
  return (
    <div className="home-page">
      <Hero 
        gameTitle="Neon Divide"
        gameDescription="Become the Resistance"
        backgroundImage={neondivide1}
        // backgroundVideo="/path/to/your/game-trailer.mp4"
      />
      
      {/* Additional home content can go here */}
      <section className="home-content">
        <div className="container">
          <h2>Welcome to Contradictive Games</h2>
          <p>
            We create immersive gaming experiences that push the boundaries of storytelling and gameplay. 
            Explore our collection of games and dive into worlds where every decision matters.
          </p>
        </div>
      </section>
    </div>
  );
}