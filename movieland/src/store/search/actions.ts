import { BlogPostType } from "../posts/types"
import { AppThunk } from "../store"
import { SearchAction } from "./types"

export const saveTextAction = (text: string): SearchAction => {
    return {
        type: 'SAVE_SEARCH_TEXT',
        text: text
    }
}

export const clearTextAction = (text: string): SearchAction => {
    return {
        type: 'CLEAR_SEARCH_TEXT',
        text: ''
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
        const offset = 0
        const aplikey = '3a486bd1'
        // const url = `https://studapi.teachmeskills.by/blog/posts/?search=${search}&limit=6&offset=${offset}`
        const url = `https://www.omdbapi.com/?apikey=${aplikey}&s=${search}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(saveDataAction(data.Search))
            })
    }
}