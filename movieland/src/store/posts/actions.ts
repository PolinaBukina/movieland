import { getPageInfo } from "../../helpers/getPageInfo"
import { BlogPostType } from "../../helpers/Types"
import { AppThunk } from "../store"
import { PostsAction } from "./types"

const loadPostsAction = (postList: BlogPostType[], page: number): PostsAction => ({
    type: 'LOAD_POSTS',
    page: page,
    postList: postList
})

const setPageAction = (page: number): PostsAction => ({
    type: 'SET_PAGE',
    page: page
})

export const loadPostsAsyncAction = (page: number = 1): AppThunk => {
    return (dispatch, getState) => {
        // const { limit, offset } = getState().posts
        dispatch(setPageAction(page))
        const { limit, offset } = getPageInfo(page)
        const aplikey = '3a486bd1'
        // const type = 'series'
        const type = page % 2 === 0 ? 'series' : 'movie'
        const s = 'series'

        // fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${limit}&offset=${offset}`)
        fetch(`http://www.omdbapi.com/?s=${s}&type=${type}&apikey=${aplikey}&page=${page}`)
            // fetch(`http://www.omdbapi.com/?s=series&type=series&apikey=3a486bd1&page=${page}`)
            // fetch(`http://www.omdbapi.com/?s=series&type=series&apikey=3a486bd1&page=1`)
            .then(res => res.json())
            .then(res => {
                dispatch(loadPostsAction(res.Search, page))
                // console.log(res.Search)
            })
    }
}