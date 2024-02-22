import { BlogPostType } from "../posts/types"

export type FavoriteState = {
    imdbID: string
    data: BlogPostType[]
}

export type FavoriteAction = {
    type: string
    imdbID?: string
    data?: BlogPostType[]
}