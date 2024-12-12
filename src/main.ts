import "./styles/index.css";
import "./styles/reset.css";

document.querySelector<HTMLDivElement>("#main-nav")!.innerHTML = `
  <div>
    <h1>Contradictive Games</h1>
  </div>

  <div class="nav-links">
    <a>Home</a>
    <a>News</a>
    <a>Leaderboards</a>
    <a>About</a>
  </div>
`;