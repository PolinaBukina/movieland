import { SearchState, SearchAction } from './types'

const initState: SearchState = {
    text: '',
    genre: '',
    data: []
}

export const searchReducer = (state: SearchState = initState, action: SearchAction): SearchState => {
    switch (action.type) {
        case 'SAVE_SEARCH_TEXT':
            return {
                ...state,
                text: action.text || ''
            }
        case 'SAVE_SEARCH_GENRE':
            return {
                ...state,
                genre: action.genre || ''
            }
        case 'SAVE_SEARCH_DATA':
            return {
                ...state,
                data: action.data || []
            }
        default:
            return state
    }
} 