import { BlogPostType } from "../posts/types"
import { AppThunk } from "../store"
import { FavoriteAction } from "./types"

export const saveFavoriteAction = (imdbID: string): FavoriteAction => {
    return {
        type: 'SAVE_FAVORITE_CARD',
        imdbID: imdbID
    }
}

export const saveFavoriteDataAction = (data: BlogPostType[]): FavoriteAction => {
    return {
        type: 'SAVE_FAVORITE_DATA',
        data: data
    }
}

export const startFavoriteAction = (): AppThunk => {
    return (dispatch, getState) => {
        const imdbID = getState().favorite.imdbID
        const aplikey = '3a486bd1'
        // const url = `https://studapi.teachmeskills.by/blog/posts/?search=${search}&limit=6&offset=${offset}`
        const url = `https://www.omdbapi.com/?apikey=${aplikey}&i=${imdbID}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(saveFavoriteDataAction(data.Search))
            })
    }
}