import '../../styles/components.css';
import ArticleCard from '../common/ArticleCard';

export default function Articles(){
    return(
        <div className='articles'>
            <div className='container'>
                <h2 className='section-header'>News & Updates &rarr;</h2>
                <div className='articles-list'>
                    <ArticleCard 
                        card={{
                            imgUrl: "",
                            imgAlt: "alt",
                            title: "Article title",
                            description: "Brief article description",
                            date: new Date()
                        }}
                    />
                </div>
            </div>
        </div>
    )
}