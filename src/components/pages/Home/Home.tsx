import Hero from '../../common/Hero';
import './Home.css';
import { NeonDivide_IMG_1 } from '../../../assets/neondivide';

export default function Home() {
  return (
    <div className="home-page">
      <Hero 
        gameTitle="Neon Divide"
        gameDescription="Become the Resistance"
        backgroundImage={NeonDivide_IMG_1}
        // backgroundVideo="/path/to/your/game-trailer.mp4"
      />
      
      {/* Additional home content can go here */}
      <section className="home-content">
        <div className="container">
          <h2>Welcome to Contradictive Games</h2>
          <p>
            Basic description goes here.
          </p>
        </div>
      </section>
    </div>
  );
}