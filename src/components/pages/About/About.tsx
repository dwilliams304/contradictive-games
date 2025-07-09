import './About.css';
import { NeonDivide_IMG_1, NeonDivide_IMG_2, NeonDivide_IMG_3, NeonDivide_IMG_4 } from '../../../assets/neondivide';

const teamMembers = [
  {
    name: "Davis",
    role: "Lead Developer / Founder",
    bio: "Basic biography would go here :)",
    image: NeonDivide_IMG_1 //Placeholder
  },
  {
    name: "Placeholder",
    role: "Placeholder",
    bio: "Placeholder",
    image: NeonDivide_IMG_2 //Placeholder
  },
  {
    name: "The Community",
    role: "Legends",
    bio: "To all the people that have played, tested, complained, or has any way been involved in any of these games - thank you!",
    image: NeonDivide_IMG_3 //Placeholder
  },

];

const supporters = [
  { name: "No One Yet :)" },
];

const testers = [
  { name: "No One Yet :)" },
];

const contributors = [
  { name: "No One Yet :)" },
];

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
            <img src={NeonDivide_IMG_4} alt="Placeholder picture" />
          </div>
        </section>


        {/* Team Section */}
        <section className="team-section">
          <h2>The Developers</h2>
          <p className="text-center py-4">Here's all the people that have helped and contributed greatly to one or more projects.</p>
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

          <h2>Thank you to the following:</h2>

          {/* Contributor Tables */}
          <div className="contributor-tables">
            <div className="contributor-table">
              <h3>Supporters</h3>
              <div className="table-content">
                {supporters.map((supporter, index) => (
                  <div key={index} className="table-row">
                    <span>{supporter.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="contributor-table">
              <h3>Testers</h3>
              <div className="table-content">
                {testers.map((tester, index) => (
                  <div key={index} className="table-row">
                    <span>{tester.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="contributor-table">
              <h3>Contributors</h3>
              <div className="table-content">
                {contributors.map((contributor, index) => (
                  <div key={index} className="table-row">
                    <span>{contributor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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