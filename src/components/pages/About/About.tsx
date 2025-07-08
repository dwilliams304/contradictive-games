import './About.css';
import { NeonDivide_IMG_1 } from '../../../assets/neondivide';

const teamMembers = [
  {
    name: "Davis",
    role: "Lead Developer / Founder",
    bio: "Basic biography would go here :)",
    image: NeonDivide_IMG_1
  }
];

// const milestones = [
//   { year: "2020", event: "Contradictive Games Founded", description: "Started with a vision to create games that challenge conventional thinking." },
//   { year: "2022", event: "First Game Release", description: "Launched our debut title to critical acclaim and positive player reception." },
//   { year: "2023", event: "Team Expansion", description: "Grew our team to include specialized roles in art, design, and community management." },
//   { year: "2024", event: "Multiple Platforms", description: "Expanded to multiple gaming platforms and reached 100K+ players worldwide." },
//   { year: "2025", event: "Next Generation", description: "Working on our most ambitious project yet with cutting-edge technology." }
// ];

export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About Contradictive Games</h1>
          <p className="hero-subtitle">
            We're a passionate indie game studio dedicated to creating unique gaming experiences 
            that challenge players' expectations and push the boundaries of interactive storytelling.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Contradictive Games, we believe that the best games are those that surprise, 
              challenge, and inspire players. We strive to create experiences that go beyond 
              entertainment – games that make players think, feel, and see the world from 
              new perspectives.
            </p>
            <p>
              Our commitment to innovation drives us to experiment with unconventional gameplay 
              mechanics, narrative structures, and artistic styles. We're not afraid to take 
              risks if it means delivering something truly memorable to our players.
            </p>
          </div>
          <div className="mission-image">
            <img src="/path/to/studio-image.jpg" alt="Our game development studio" />
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎮</div>
              <h3>Player-First</h3>
              <p>Every decision we make is guided by what will create the best experience for our players.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We constantly push boundaries and explore new possibilities in game design and technology.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We build our games with and for our community, valuing feedback and fostering connection.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Quality</h3>
              <p>We never compromise on quality, taking the time needed to polish every aspect of our games.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>The Developers</h2>
          <p>Here's all the people that have helped and contributed greatly to one or more projects.</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section
        <section className="timeline-section">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.event}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Contact Section */}
        {/* <section className="contact-section">
          <h2>Get In Touch</h2>
          <p>
            We love hearing from our community! Whether you have feedback, questions, 
            or just want to say hello, don't hesitate to reach out.
          </p>
          <div className="contact-methods">
            <a href="mailto:hello@contradictivegames.com" className="contact-btn">
              📧 Email Us
            </a>
            <a href="#" className="contact-btn">
              💬 Join Discord
            </a>
            <a href="#" className="contact-btn">
              🐦 Follow on Twitter
            </a>
          </div>
        </section> */}
      </div>
    </div>
  );
}