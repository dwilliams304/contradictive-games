import "../styles/layouts.css";

export default function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <h1>Contradictive Games</h1>
                </div>

                <div className="navbar-right">
                    <a className="link">Button</a>
                    <a className="link">Button</a>
                    <a className="link">Button</a>
                    <a className="link">Button</a>
                    <a className="link">Button</a>
                </div>
            </div>
        </nav>
    )
}