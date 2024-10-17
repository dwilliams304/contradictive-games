import '../styles/components.css';

type HeroProps = {
    title: string
    description: string
    mediaUrl: string
}

export default function Hero(props: HeroProps){
    return(
        <div className="hero">
            <div className="hero-details">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className="buttons-sbs">
                    <button className="btn-main">Play Now</button>
                    <button className="btn-secondary">Developer Logs</button>
                </div>
            </div>
            <div className="hero-media">
                <video className="" muted={true} loop={true} autoPlay={true} playsInline={true}>
                    <source src={props.mediaUrl} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}