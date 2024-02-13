export type AuthErrors = Partial<{
    email: string[]
    password: string[]
    detail: string
}>

export type AuthState = {
    isAuthhorized: boolean
    accessToken?: string
    errors?: AuthErrors
}

export type AuthAction = {
    type: string
    token?: string
    errors?: AuthErrors
}