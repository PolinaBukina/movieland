export type PostsState = {
    postlist: BlogPostType[]
    limit: number
    offset: number
    page: number
    postCount: number
    // active например
}

export type PostsAction = {
    type: string //LOAD_POST
    postList?: BlogPostType[]
    page?: number
    postCount?: number
}

export type BlogPostType = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: 0,
    title: string,
    description: string,
    author: number
} 