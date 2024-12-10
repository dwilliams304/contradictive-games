// Hooks/etc.

// Styles
import "./home.css";

// Components
import Hero from "./Hero";
import { HeroProps } from "./Hero";

const heroProps:HeroProps = {
    hero: {
        header: "Hero Header",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        mediaUrl: "https://cms-assets.unrealengine.com/d66nnRxEQpatoaaSG3ww",
        mediaAlt: "Space Picture",
        mediaType: "vid",
        mediaTitle: "Hero Title 1"
    }

}

export default function HomePage(){
    return(
        <div>
            <Hero 
                hero={heroProps.hero}
            />
        </div>
    )
}