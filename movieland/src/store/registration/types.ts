export type RegErrors = {
    email?: string
    username?: string
    password?: string
}

export type RegistrationType = {
    username?: string
    email?: string
    password?: string

    isSuccecRegistration: boolean | null
    errors?: RegErrors 
}

export type RegAction = {
    type: string
    payload: string | RegErrors 
    // Pick<RegistartionType, 'errors'>
}