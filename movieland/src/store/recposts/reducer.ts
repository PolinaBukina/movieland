import { RecPostsAction, RecPostsState } from "./types"

const initState: RecPostsState = {
    postlist: [],
    limit: 10,
    // offset: 0,
    page: 1,
    postCount: 0,
    Type: ''
}

export const recPostsReducer = (state = initState, action: RecPostsAction): RecPostsState => { //state i action здесь всегда!! state - предыдущее состояние, или текущее на данный момент
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
        case 'SET_TYPE':
            return {
                ...state,
                Type: action.Type!
            }
        default:
            return state
    }
}