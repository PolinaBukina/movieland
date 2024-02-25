import { FavoriteState, FavoriteAction } from './types'

const initState: FavoriteState = {
    // imdbID: '',
    Title: '',
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
            // return {
            //     ...state,
            // data: [...state.data, ...action.data!] || []
            const newData = action.data || [];
            const uniqueData = newData.filter((newItem) => !state.data.some((existingItem) => existingItem.Title === newItem.Title));
            return {
                ...state,
                data: [...state.data, ...uniqueData],
            }
        // }
        default:
            return state
    }
} 