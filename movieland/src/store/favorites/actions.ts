import { BlogPostType } from "../posts/types"
import { AppThunk } from "../store"
import { FavoriteAction } from "./types"

const favoritesData = 'FAVORITES_DATA'

export const saveFavoriteAction = (Title: string, Type: string): FavoriteAction => {
    return {
        type: 'SAVE_FAVORITE_CARD',
        Title: Title,
        Type: Type
    }
}

export const removeFavoriteAction = (Title: string, Type: string): FavoriteAction => {
    return {
        type: 'REMOVE_FAVORITE_CARD',
        Title: Title,
        Type: Type
    }
}

export const saveFavoriteDataAction = (data: BlogPostType[]): FavoriteAction => {
    return {
        type: 'SAVE_FAVORITE_DATA',
        data: data
    }
}

export const startFavoriteAction = (Title: string, Type: string): AppThunk => {
    return (dispatch, getState) => {
        // const imdbID = getState().favorite.imdbID
        const aplikey = '3a486bd1'
        // const url = `https://studapi.teachmeskills.by/blog/posts/?search=${search}&limit=6&offset=${offset}`
        const url = `https://www.omdbapi.com/?type=${Type}&apikey=${aplikey}&s=${Title}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(saveFavoriteDataAction(data.Search))
                console.log(data.Search)
                console.log(data)
                console.log(Type)
                // console.log(imdbID)
            })

        // const request = new Request(
        //     `https://www.omdbapi.com/?type=${Type}&apikey=${aplikey}&s=${Title}`,
        //         {
        //         method: 'GET',
        //         headers: {
        //             'Content-type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             "favorites": localStorage.getItem(favoritesData)
        //         })
        //     }
        // )
        // fetch(request)
        //     .then(res => res.json())
        //     .then(data => {
        //         dispatch(saveFavoriteDataAction(data.Search))
        //         console.log(data.Search)
        //         console.log(data)
        //         console.log(Type)
        //         // console.log(imdbID)
        //     })
    }
}