import Hero from "./sections/Hero";
import Articles from "./sections/Articles";
import "../../components.css";


export default function Landing(){
    return(
        <>
            <Hero 
                title="Game Title"
                description="Play this game, as it is really really fun. Did you know that playing this game makes you better at playing this game? Come check it out and maybe you will be the best at playing this game."
                mediaUrl="https://cms-assets.unrealengine.com/d66nnRxEQpatoaaSG3ww"
            />
            <Articles />
        </>
    )
}