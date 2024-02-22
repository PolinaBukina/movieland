import { OpenState, OpenAction } from './types'

const initState: OpenState = {
    // id: '',
    // text: '',
    // title: '',
    // image: ''
    // data: []
    // Title: '',
    // Year: '',
    // imdbID: '',
    // Type: '',
    // Poster: ''
    imdbID: '',
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Type: '',
    Poster: '',
    Ratings: ''
}

export const openCardReducer = (state: OpenState = initState, action: OpenAction): OpenState => {
    switch (action.type) {
        case 'SAVE_OPEN_CARD':
            return {
                ...state,
                imdbID: action.imdbID || ''
            }
        case 'SAVE_OPEN_DATA':
            return {
                ...state,
                Title: action.Title!,
                Year: action.Year!,
                Rated: action.Rated!,
                Released: action.Released!,
                Runtime: action.Runtime!,
                Genre: action.Genre!,
                Director: action.Director!,
                Writer: action.Writer!,
                Actors: action.Actors!,
                imdbID: action.imdbID!,
                Plot: action.Plot!,
                Language: action.Language!,
                Country: action.Country!,
                Awards: action.Awards!,
                Type: action.Type!,
                Poster: action.Poster!,
                // Ratings: action.Ratings!
            }
        default:
            return state
    }
} 