// import { BlogPostType } from "../posts/types"

export type OpenState = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
    // data: BlogPostType[]
}

export type OpenAction = {
    type: string
    Title?: string,
    Year?: string,
    imdbID?: string,
    Type?: string,
    Poster?: string
    // data?: BlogPostType[]
    // text?: string
}
