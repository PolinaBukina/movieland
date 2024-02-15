import { PostsAction, PostsState } from "./types"

const initState: PostsState = {
    postlist: [],
    limit: 11,
    offset: 0,
    page: 1,
    postCount: 0
}

export const postsReducer = (state = initState, action: PostsAction): PostsState => { //state i action здесь всегда!! state - предыдущее состояние, или текущее на данный момент
    switch (action.type) {
        case 'LOAD_POSTS':
            return {
                ...state,
                // postlist: action?.postList || []
                postlist: action.postList!, // ! указывает что postlist всегда будет!!
                postCount: action.postCount!
            }
        case 'SET_PAGE':
            return {
                ...state,
                page: action.page!
            }
        default:
            return state
    }
}