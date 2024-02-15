import { ThemeAction, ThemeState } from "./types"

export const themeInitState: ThemeState = {
    theme: 'light'
}

export const themeReducer = (state = themeInitState, action: ThemeAction): ThemeState => { //state i action здесь всегда!! state - предыдущее состояние, или текущее на данный момент
    switch (action.type) {
        case 'light':
            return {
                theme: 'light'
            }
        case 'dark':
            return {
                theme: 'dark'
            }
        default:
            return state
    }
}