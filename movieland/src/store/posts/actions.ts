import { getPageInfo } from "../../helpers/getPageInfo"
import { BlogPostType } from "../../helpers/Types"
import { AppThunk } from "../store"
import { PostsAction } from "./types"

const loadPostsAction = (postList: BlogPostType[], count: number): PostsAction => ({
    type: 'LOAD_POSTS',
    postList: postList,
    postCount: count
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

        fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${limit}&offset=${offset}`)
            .then(res => res.json())
            .then(res => {
                dispatch(loadPostsAction(res.results, res.count))
            })
    }
}