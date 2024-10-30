export type Article = {
    articleId: string;
    imgUrl: string;
    imgAlt: string;
    title: string;
    description: string;
    date: Date;
}

export const dummyArticles: Article[] = [
    {
        articleId: "1efg4g",
        imgUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/976730/ss_62bbd86f4735893ef6cd53206cf8c93f87eb86ec.1920x1080.jpg?t=1670458602",
        imgAlt: "",
        title: "Article Title 1",
        description: "Brief article description describing things about the article.",
        date: new Date()
    },
    {
        articleId: "48g01f",
        imgUrl: "https://i.pcmag.com/imagery/reviews/06leOma1Z9YihyKkJ6u9dkg-6.fit_lim.size_1050x.jpg",
        imgAlt: "",
        title: "Article Title 2",
        description: "Brief article description describing things about the article.",
        date: new Date()
    },
    {
        articleId: "ac7891",
        imgUrl: "https://miro.medium.com/v2/resize:fit:1400/0*pDGA_9RnA1mmZn5W.jpg",
        imgAlt: "",
        title: "Article Title 3",
        description: "Brief article description describing things about the article.",
        date: new Date()
    },
    {
        articleId: "lkll23",
        imgUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1064272/ss_e6ef23c1b1dd34251d5b254667413898b93fd20b.1920x1080.jpg?t=16342312632",
        imgAlt: "",
        title: "Article Title 4",
        description: "Brief article description describing things about the article.",
        date: new Date()
    }
]