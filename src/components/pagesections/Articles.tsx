import { useState } from 'react';

import '../../styles/components.css';
import ArticleCard from '../common/ArticleCard';
import { dummyArticles } from '../../data/dummyArticles';

export default function Articles(){
    const [articles, setArticles] = useState(dummyArticles); //eslint-disable-line


    return(
        <div className='articles'>
            <div className='container'>
                <h2 className='section-header'>News & Updates &rarr;</h2>
                <div className='articles-list'>
                    {
                        articles.map((article, idx) => {
                            return (
                                <ArticleCard 
                                    key={idx}
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