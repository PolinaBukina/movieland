import { BlogPostType } from "../posts/types"

export type FavoriteState = {
    // imdbID: string
    Title: string
    Type: string
    data: BlogPostType[]
}

export type FavoriteAction = {
    type: string
    // imdbID?: string
    Type?: string
    Title?: string
    data?: BlogPostType[]
}