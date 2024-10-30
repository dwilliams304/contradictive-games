import { Article } from "../../data/dummyArticles";
import "../../styles/components.css";
export type ArticleCardProps = {
    article: Article
}

export default function ArticleCard(props: ArticleCardProps){
    const {imgUrl, imgAlt, title, description, date} = props.article;
    return(
        <div className="article-card">
            <div className="card-top">
                <img src={imgUrl} alt={imgAlt} />
            </div>
            <div className="card-bottom">
                <div>
                    <h3>{title}</h3>
                    <p className="card-date">
                        { date.toDateString() }
                    </p>
                </div>
                
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}