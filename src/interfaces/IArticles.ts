export interface IArticles {
    id: number,
    title: string,
    url:string,
    image_url: string,
    news_site: string,
    summary: string,
    published_at: number | string,
    updated_at: number | string,
    featured: boolean,
    launches: [],
    events: []
}