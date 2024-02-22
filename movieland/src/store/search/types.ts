import { BlogPostType } from "../posts/types"

export type SearchState = {
    text: string
    data: BlogPostType[]
}

export type SearchAction = {
    type: string
    text?: string
    data?: BlogPostType[]
}