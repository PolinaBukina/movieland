import { AuthState, AuthAction } from './types'

const initState: AuthState = {
    isAuthhorized: false
}

export const authReducer = (state = initState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'AUTH_SUCCES':
            return {
                isAuthhorized: true,
                accessToken: action.token
            }
        case 'AUTH_FAILURE':
            return {
                isAuthhorized: false,
                errors: action.errors
            }
        default:
            return state

    }
} 