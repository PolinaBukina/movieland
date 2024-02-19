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
    // imdbID: string,
    Type: string,
    Poster: string
): OpenAction => {
    return {
        type: 'SAVE_OPEN_DATA',
        // text: text,
        // title: title,
        // image: image

        Title: Title,
        Year: Year,
        // imdbID: imdbID,
        Type: Type,
        Poster: Poster
        // data: data
    }
}

export const startOpenAction = (): AppThunk => {
    return (dispatch, getState) => {
        const imdbID = getState().opencard.imdbID
        const aplikey = '3a486bd1'

        // const url = `https://www.omdbapi.com/?apikey=${aplikey}&i=${imdbID}`
        const url = `https://www.omdbapi.com/?apikey=3a486bd1&i=${imdbID}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(saveOpenDataAction(data.Title, data.Year, data.Type, data.Poster))
                // console.log(data.Title, data.Year, data.Type, data.Poster)
                // console.log(data)
                console.log(imdbID)
            })
    }
}