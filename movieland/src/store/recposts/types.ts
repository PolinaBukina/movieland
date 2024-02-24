export type RecPostsState = {
    postlist: BlogPostType[]
    limit: number
    // offset: number
    page: number
    postCount: number
    Type: string
    // active например
}

export type RecPostsAction = {
    type: string //LOAD_POST
    postList?: BlogPostType[]
    page?: number
    postCount?: number
    Type?: string
}

export type BlogPostType = {
    // id: number,
    // image: string,
    // text: string,
    // date: string,
    // lesson_num: 0,
    // title: string,
    // description: string,
    // author: number

    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
} 