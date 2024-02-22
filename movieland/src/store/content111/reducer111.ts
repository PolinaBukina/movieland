import { OpenState, OpenAction } from './types111'

// const initState: OpenState = {
//     // id: '',
//     // text: '',
//     // title: '',
//     // image: ''
//     // data: []
//     Title: '',
//     Year: '',
//     imdbID: '',
//     Type: '',
//     Poster: ''
// }

// export const openCardReducer = (state: OpenState = initState, action: OpenAction): OpenState => {
//     switch (action.type) {
//         case 'SAVE_OPEN_CARD':
//             return {
//                 ...state,
//                 imdbID: action.imdbID || ''
//             }
//         case 'SAVE_OPEN_DATA':
//             return {
//                 ...state,
//                 Title: action.Title!,
//                 Year: action.Year!,
//                 imdbID: action.imdbID!,
//                 Type: action.Type!,
//                 Poster: action.Poster!
//             }
//         default:
//             return state
//     }
// } 