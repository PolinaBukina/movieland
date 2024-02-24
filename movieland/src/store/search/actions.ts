import { BlogPostType } from "../posts/types"
import { AppThunk } from "../store"
import { SearchAction } from "./types"

export const saveTextAction = (text: string): SearchAction => {
    return {
        type: 'SAVE_SEARCH_TEXT',
        text: text
    }
}

export const saveYearsFromAction = (yearsFrom: string): SearchAction => {
    return {
        type: 'SAVE_SEARCH_YEARS',
        yearsFrom: yearsFrom
    }
}

export const saveYearsToAction = (yearsTo: string): SearchAction => {
    return {
        type: 'SAVE_SEARCH_YEARS',
        yearsTo: yearsTo
    }
}

export const saveRatingsFromAction = (ratingFrom: string): SearchAction => {
    return {
        type: 'SAVE_SEARCH_RATING',
        ratingFrom: ratingFrom
    }
}

export const saveRatingsToAction = (ratingTo: string): SearchAction => {
    return {
        type: 'SAVE_SEARCH_RATING',
        ratingTo: ratingTo
    }
}

export const saveGenreAction = (genre: string): SearchAction => {
    return {
        type: 'SAVE_SEARCH_GENRE',
        genre: genre
    }
}

export const clearTextAction = (text: string, genre: string, yearsFrom: string, yearsTo: string, ratingTo: string, ratingFrom: string): SearchAction => {
    return {
        type: 'CLEAR_SEARCH_TEXT',
        text: '',
        genre: '',
        yearsFrom: '',
        yearsTo: '',
        ratingFrom: '',
        ratingTo: '',
    }
}

export const saveDataAction = (data: BlogPostType[]): SearchAction => {
    return {
        type: 'SAVE_SEARCH_DATA',
        data: data
    }
}

export const startSearchAction = (): AppThunk => {
    return (dispatch, getState) => {
        const search = getState().search.text
        const genre = getState().search.genre
        const offset = 0
        const aplikey = '3a486bd1'
        // const url = `https://studapi.teachmeskills.by/blog/posts/?search=${search}&limit=6&offset=${offset}`
        const url = `https://www.omdbapi.com/?apikey=${aplikey}&s=${search}&type=${genre}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(saveDataAction(data.Search))
            })
    }
}

// export const startSearchGenreAction = (): AppThunk => {
//     return (dispatch, getState) => {
//         const search = getState().search.text
//         const genre = getState().search.genre
//         const offset = 0
//         const aplikey = '3a486bd1'
//         // const url = `https://studapi.teachmeskills.by/blog/posts/?search=${search}&limit=6&offset=${offset}`
//         const url = `http://www.omdbapi.com/?s=${genre}&type=${genre}&apikey=${aplikey}`
//         fetch(url)
//             .then(res => res.json())
//             .then(data => {
//                 dispatch(saveDataAction(data.Search))
//             })
//         console.log(url)
//     }
// }