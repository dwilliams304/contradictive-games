import {
    Button
} from "../../common/";

export type HeroProps = {
    hero: {
        header: string;
        description: string;
        mediaUrl: string;
        mediaType: "img" | "vid";
        mediaAlt: string;
        mediaTitle?: string;
    }
}

export default function Hero({hero}: HeroProps){
    return(
        <section className="hero">
            <div className="content">
                <h2>{hero.header}</h2>
                <p>
                    {hero.description}
                </p>
                <div>
                    <Button 
                        styleType="primary"
                        text="Button 1"
                        tooltip="Button 1"
                        type="button"
                        disabled={false}
                        fn={() => {}}
                    />

                    <Button 
                        styleType="secondary"
                        text="Button 2"
                        tooltip="Button 2"
                        type="button"
                        disabled={false}
                        fn={() => {}}
                    />
                </div>
            </div>
            <div className="media">
                <div className="overlay">
                    {
                        hero.mediaType === "img" ?
                        <img 
                            src={hero.mediaUrl} 
                            alt={hero.mediaAlt}
                        />
                        :
                        <video title="" muted={true} autoPlay={true} loop={true}>
                            <source src={hero.mediaUrl} type="video/mp4" />
                        </video>
                    }
                    <p>
                        {hero.mediaTitle}
                    </p>
                </div>
            </div>
        </section>
    )
}