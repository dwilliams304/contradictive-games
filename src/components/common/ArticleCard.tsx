import "../../styles/components.css";
type ArticleCardProps = {
    card: {
        imgUrl: string
        imgAlt: string
        title: string
        description: string
        date: Date
    }
}

export default function ArticleCard(props: ArticleCardProps){
    const {imgUrl, imgAlt, title, description, date} = props.card;
    return(
        <div className="article-card">
            <div className="card-top">
                <img src={imgUrl} alt={imgAlt} />
            </div>
            <div className="card-bottom">
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <p className="card-date">{date.toDateString()}</p>
            </div>
        </div>
    )
}