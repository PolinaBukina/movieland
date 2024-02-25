import { BlogPostType } from "../posts/types"

export type FavoriteState = {
    // imdbID: string
    Title: string
    data: BlogPostType[]
}

export type FavoriteAction = {
    type: string
    // imdbID?: string
    Title?: string
    data?: BlogPostType[]
}