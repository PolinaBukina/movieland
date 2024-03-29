import { getPageInfo } from "../../helpers/getPageInfo"
import { BlogPostType } from "../../helpers/Types"
import { AppThunk } from "../store"
import { RecPostsAction } from "./types"

const loadRecPostsAction = (recpostList: BlogPostType[]): RecPostsAction => ({
    type: 'LOAD_RECPOSTS',
    recpostList: recpostList
})

const setPageRecAction = (page: number): RecPostsAction => ({
    type: 'SET_RECPAGE',
    page: page
})

// const setTypeRecAction = (Type: string): RecPostsAction => ({
//     type: 'SET_TYPE',
//     Type: Type
// })

export const loadRecPostsAsyncAction = (): AppThunk => {
    return (dispatch, getState) => {
        // const { limit, offset } = getState().posts
        // dispatch(setPageRecAction(page))
        // const { limit, offset } = getPageInfo(page)
        const aplikey = '3a486bd1'
        // dispatch(setTypeRecAction(Type))
        // const type = getState().recposts.Type
        const type = 'series'

        // fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${limit}&offset=${offset}`)
        // fetch(`http://www.omdbapi.com/?s=${type}&type=${type}&apikey=${aplikey}&page=6`)
        fetch(`http://www.omdbapi.com/?s=${type}&type=${type}&apikey=${aplikey}&page=5`)
            .then(res => res.json())
            .then(res => {
                dispatch(loadRecPostsAction(res.Search.slice(0, 5)))
                console.log(res.Search)
                console.log(type)
            })
    }
}