import { FavoriteState, FavoriteAction } from './types'

const initState: FavoriteState = {
    // imdbID: '',
    Title: '',
    Type: '',
    data: []
}

export const favoriteReducer = (state: FavoriteState = initState, action: FavoriteAction): FavoriteState => {
    switch (action.type) {
        case 'SAVE_FAVORITE_CARD':
            return {
                ...state,
                // imdbID: action.imdbID || ''
                Title: action.Title || ''
            }
        case 'SAVE_FAVORITE_DATA':
            const newData = action.data || []
            const uniqueData = newData.filter((newItem) => !state.data.some((existingItem) => existingItem.Title === newItem.Title));
            return {
                ...state,
                data: [...state.data, ...uniqueData],
            }
        case 'REMOVE_FAVORITE_CARD':
            const oldData = action.data || []
            const updatedData = state.data.filter(item => item.Title !== action.Title || item.Type !== action.Type);

            return {
                ...state,
                data: updatedData,
            }
        default:
            return state
    }
} 