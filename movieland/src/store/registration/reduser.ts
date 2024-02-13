import { RegistrationType, RegAction, RegErrors } from "./types"

const initState: RegistrationType = {
    isSuccecRegistration: null
}

export const registrationReducer = (state = initState, action: RegAction): RegistrationType => { //state i action здесь всегда!! state - предыдущее состояние, или текущее на данный момент
    switch (action.type) {
        case 'SET_REG_EMAIL':
            return {
                ...state,
                email: action.payload as string
            }
        case 'SET_REG_USERNAME':
            return {
                ...state,
                username: action.payload as string
            }
        case 'SET_REG_PASSWORD':
            return {
                ...state,
                password: action.payload as string
            }

        case 'REG_SUCCES':
            return {
                ...state,
                isSuccecRegistration: true
            }
        case 'REG_FAILURE':
            return {
                ...state,
                isSuccecRegistration: false,
                errors: action.payload as RegErrors
            }
        default:
            return state
    }
}