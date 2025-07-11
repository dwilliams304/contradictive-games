import { IRichContentBlock } from "../data/newsArticles"

export const RenderRichContent = (block: IRichContentBlock, index: number) => {
    switch (block.type) {
        case 'paragraph':
            return <p key={index}> {block.content} </p>;

        case 'heading': {
            const level = block.level || 2;
            switch (level) {
                case 1:
                    return <h1 key={index}> {block.content} </h1>;
                case 2:
                    return <h2 key={index}> {block.content} </h2>;
                case 3:
                    return <h3 key={index}> {block.content} </h3>;
                case 4:
                    return <h4 key={index}> {block.content} </h4>;
                case 5:
                    return <h5 key={index}> {block.content} </h5>;
                case 6:
                    return <h6 key={index}> {block.content} </h6>;
                default:
                    return <h2 key={index}> {block.content} </h2>;
            }
        }

        case 'list':
            return (
                <ul key={index} >
                    {
                        Array.isArray(block.content) && block.content.map((item, itemIndex) => (
                            <li key={itemIndex} > {item} </li>
                        ))
                    }
                </ul>
            );

        case 'quote':
            return (
                <blockquote key={index} className="article-quote" >
                    <p>"{block.content}" </p>
                    {block.author && <cite>— {block.author} </cite>}
                </blockquote>
            );

        case 'image':
            return (
                <div key={index} className="article-inline-image" >
                    <img src={block.content as string} alt={block.imageAlt || ''} />
                    {block.imageAlt && <caption>{block.imageAlt} </caption>}
                </div>
            );

        case 'code':
            return (
                <pre key={index} className="article-code" >
                    <code>{block.content} </code>
                </pre>
            );

        default:
            return null;
    }
}