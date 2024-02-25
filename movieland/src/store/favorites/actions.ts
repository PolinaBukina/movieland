import { BlogPostType } from "../posts/types"
import { AppThunk } from "../store"
import { FavoriteAction } from "./types"

export const saveFavoriteAction = (Title: string): FavoriteAction => {
    return {
        type: 'SAVE_FAVORITE_CARD',
        Title: Title
    }
}

export const saveFavoriteDataAction = (data: BlogPostType[]): FavoriteAction => {
    return {
        type: 'SAVE_FAVORITE_DATA',
        data: data
    }
}

export const startFavoriteAction = (Title: string): AppThunk => {
    return (dispatch, getState) => {
        // const imdbID = getState().favorite.imdbID
        const aplikey = '3a486bd1'
        // const url = `https://studapi.teachmeskills.by/blog/posts/?search=${search}&limit=6&offset=${offset}`
        const url = `https://www.omdbapi.com/?apikey=${aplikey}&s=${Title}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(saveFavoriteDataAction(data.Search))
                console.log(data.Search)
                console.log(data)
                // console.log(imdbID)
            })
    }
}