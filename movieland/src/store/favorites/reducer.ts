import { FavoriteState, FavoriteAction } from './types'

const initState: FavoriteState = {
    imdbID: '',
    data: []
}

export const favoriteReducer = (state: FavoriteState = initState, action: FavoriteAction): FavoriteState => {
    switch (action.type) {
        case 'SAVE_FAVORITE_CARD':
            return {
                ...state,
                imdbID: action.imdbID || ''
            }
        case 'SAVE_FAVORITE_DATA':
            return {
                ...state,
                data: action.data || []
            }
        default:
            return state
    }
} 