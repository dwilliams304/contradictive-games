import { Dropdown } from "../components";
import "../styles/layouts.css";


export default function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <p>Site Title</p>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="nav-item">
                        <a className="navbar-link">
                            <Dropdown
                                hover={true}
                                title="Games"
                                links={[
                                    {
                                        content: "Link 1",
                                        url: "#"
                                    }
                                ]}
                            />
                        </a>
                    </li>
                    <li className="nav-item"><a className="navbar-link">News</a></li>
                    <li className="nav-item"><a className="navbar-link">Blog</a></li>
                    <li className="nav-item"><a className="navbar-link">Leaderboards</a></li>
                    <li className="nav-item"><a className="navbar-link">About</a></li>
                </ul>
            </div>
        </nav>
    )
}