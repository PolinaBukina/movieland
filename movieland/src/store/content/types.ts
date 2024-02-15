// import { BlogPostType } from "../posts/types"

export type OpenState = {
    id: string
    text: string
    title: string
    image: string
    // data: BlogPostType[]
}

export type OpenAction = {
    type: string
    id?: string
    text?: string
    title?: string
    image?: string
    // data?: BlogPostType[]
    // text?: string
}

