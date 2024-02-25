import { RecPostsAction, RecPostsState } from "./types"

const initState: RecPostsState = {
    recpostlist: [],
    reclimit: 10,
    // offset: 0,
    page: 1,
    postCount: 0,
    // Type: ''
}

export const recPostsReducer = (state = initState, action: RecPostsAction): RecPostsState => { //state i action здесь всегда!! state - предыдущее состояние, или текущее на данный момент
    switch (action.type) {
        case 'LOAD_RECPOSTS':
            return {
                ...state,
                // postlist: action?.postList || []
                recpostlist: action.recpostList!, // ! указывает что postlist всегда будет!!
                postCount: action.postCount!
            }
        case 'SET_RECPAGE':
            return {
                ...state,
                page: action.page!
            }
        // case 'SET_TYPE':
        //     return {
        //         ...state,
        //         Type: action.Type!
        //     }
        default:
            return state
    }
}