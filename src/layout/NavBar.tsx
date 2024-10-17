import { Dropdown } from '../components';
import '../styles/layouts.css';


export default function NavBar(){
    return(
        <nav className="main-nav">
            <h1 className="nav-title">Contradictive Games</h1>

            <ul className="nav-links">
                <li className="nav-item">
                    <Dropdown
                        hover={true}
                        title="Games"
                        links={[
                            {
                                content: "Link 1",
                                url: "#"
                            },
                            {
                                content: "Link 2",
                                url: "#"
                            },
                            {
                                content: "Link 3",
                                url: "#"
                            }
                        ]}
                    />
                </li>
                <li className="nav-item"><a>News</a></li>
                <li className="nav-item"><a>Blog</a></li>
                <li className="nav-item"><a>Leaderboards</a></li>
                <li className="nav-item"><a>About</a></li>
            </ul>
        </nav>
    )
}