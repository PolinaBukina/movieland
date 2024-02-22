// import { BlogPostType } from "../posts/types"

export type OpenState = {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    imdbID: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Type: string,
    Poster: string,
    Ratings: string
}

export type OpenAction = {
    type: string
    Title?: string,
    Year?: string,
    Rated?: string,
    Released?: string,
    Runtime?: string,
    Genre?: string,
    Director?: string,
    Writer?: string,
    Actors?: string,
    imdbID?: string,
    Plot?: string,
    Language?: string,
    Country?: string,
    Awards?: string,
    Type?: string,
    Poster?: string,
    Ratings?: string
}
