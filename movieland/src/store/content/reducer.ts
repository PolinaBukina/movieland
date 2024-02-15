import { OpenState, OpenAction } from './types'

const initState: OpenState = {
    id: '',
    text: '',
    title: '',
    image: ''
    // data: []
}

export const openCardReducer = (state: OpenState = initState, action: OpenAction): OpenState => {
    switch (action.type) {
        case 'SAVE_OPEN_CARD':
            return {
                ...state,
                id: action.id || ''
            }
        case 'SAVE_OPEN_DATA':
            return {
                ...state,
                text: action.text!,
                title: action.title!,
                image: action.image!
                // data: action.data || []
            }
        default:
            return state
    }
} 