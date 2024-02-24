import { BlogPostType } from "../posts/types"

export type SearchState = {
    text?: string
    genre?: string
    yearsFrom?: string
    yearsTo?: string
    ratingFrom?: string
    ratingTo?: string
    country?: string
    data: BlogPostType[]
}

export type SearchAction = {
    type: string
    text?: string
    genre?: string
    yearsFrom?: string
    yearsTo?: string
    ratingFrom?: string
    ratingTo?: string
    country?: string
    data?: BlogPostType[]
}