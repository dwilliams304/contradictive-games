import { DropdownMenu } from "../common"

export default function NavigationBar(){
    return(
        <nav className="main-nav">
            {/* Left Side */}
            <div>
                <h1>Contradictive Games</h1>
            </div>

            {/* Right Side */}
            <div>
                <DropdownMenu
                    title="Games"
                    options={[
                    {
                        content: "Option 1",
                        action: ()=>null
                    },
                    {
                        content: "Option 2",
                        action: ()=>null
                    }
                ]}
                />
                <a>News</a>
                <a>About</a>
                <a>Leaderboard</a>
            </div>
        </nav>
    )
}