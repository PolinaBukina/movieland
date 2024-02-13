import { createContext, ReactNode, useContext, useReducer } from 'react'

//ctrl + h - глобальная замена

type AuthState = {
    isLogined: boolean
    username?: string
    initials?: string
}

type AuthAction = {
    type: string
    username?: string
    initials?: string
}

type AuthContextType = {
    state: AuthState
    login: (username: string, initals: string) => void
    logout: () => void
}

const authInitState: AuthState = {
    isLogined: false
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType) //создание контекста

type ProviderProps = {
    children: ReactNode
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => { //state i action здесь всегда!! state - предыдущее состояние, или текущее на данный момент
    switch (action.type) {
        case 'login':
            return {
                isLogined: true,
                username: action.username,
                initials: action.username
            }
        case 'logout':
            return {
                isLogined: false
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, authInitState)

    const login = () => dispatch({
        type: 'login',
        username: 'vasuay pupkin',
        initials: 'VP'
    })

    const logout = () => dispatch({
        type: 'logout'
    })

    const value = {
        state: state,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}

