import { BlogPostType } from "../posts/types"
import { AppThunk } from "../store"
import { OpenAction } from "./types"

export const saveIdAction = (imdbID: string): OpenAction => {
    return {
        type: 'SAVE_OPEN_CARD',
        imdbID: imdbID
    }
}

export const saveOpenDataAction = (
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
): OpenAction => {
    return {
        type: 'SAVE_OPEN_DATA',
        Title: Title,
        Year: Year,
        Type: Type,
        Poster: Poster,
        Rated: Rated,
        Released: Released,
        Runtime: Runtime,
        Genre: Genre,
        Director: Director,
        Writer: Writer,
        Actors: Actors,
        Plot: Plot,
        Language: Language,
        Country: Country,
        Awards: Awards,
        Ratings: Ratings
        // data: data
    }
}

export const startOpenAction = (): AppThunk => {
    return (dispatch, getState) => {
        const imdbID = getState().opencard.imdbID
        const aplikey = '3a486bd1'

        // const url = `https://www.omdbapi.com/?apikey=${aplikey}&i=${imdbID}`
        const url = `https://www.omdbapi.com/?apikey=${aplikey}&i=${imdbID}&plot=full`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(saveOpenDataAction(
                    data.Title,
                    data.Year,
                    data.Rated,
                    data.Released,
                    data.Runtime,
                    data.Genre,
                    data.Director,
                    data.Writer,
                    data.Actors,
                    data.imdbID,
                    data.Plot,
                    data.Language,
                    data.Country,
                    data.Awards,
                    data.Type,
                    data.Poster,
                    data.Ratings
                ))
                // console.log(data.Title, data.Year, data.Type, data.Poster)
                // console.log(data)
                console.log(imdbID)
            })
    }
}