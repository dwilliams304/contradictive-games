import { useState, useEffect } from "react";

import "../../styles/components.css";
import ArticleCard from "../common/ArticleCard";
import { dummyArticles, Article } from "../../data/dummyArticles";

export default function Articles(){
    const [articles, setArticles] = useState<Article[] | null>(dummyArticles);

    useEffect(() => {
        setArticles(dummyArticles);
    }, [])



    return(
        <div className="articles">
            <div className="container">
                <div className="section-header">
                    <h2>News & Updates &rarr;</h2>
                    <p>View all news</p>
                </div>
                <div className="articles-list">
                    {
                        articles && articles.map(article => {
                            return (
                                <ArticleCard 
                                    key={article.articleId}
                                    article={article}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}