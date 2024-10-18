import '../../styles/components.css';
import ArticleCard from '../common/ArticleCard';

export default function Articles(){
    return(
        <div className='articles'>
            <div className='container'>
                <h2 className='section-header'>News & Updates &rarr;</h2>
                <div className='articles-list'>
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </div>
        </div>
    )
}