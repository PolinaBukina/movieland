import { AppThunk } from "../store"
import { AuthErrors } from "./types"

const refreshToken = 'AUTH_REFRESH_TOKEN'

export const signInSuccesAction = (token: string) => {
    return {
        type: 'AUTH_SUCCES',
        token: token
    }
}

export const signInFailAction = (errors: AuthErrors) => {
    return {
        type: 'AUTH_FAILURE',
        errors: errors
    }
}

export const signInAction = (email: string, password: string): AppThunk => {
    return (dispatch, getState) => {
        const request = new Request(
            'https://studapi.teachmeskills.by/auth/jwt/create/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            }
        )

        fetch(request)
            .then(async res => {
                const data = await res.json()
                return [data, res.status]
            })
            .then(([data, status]) => {
                if (status.toString()[0] === '2') {
                    localStorage.setItem(refreshToken, data.refresh)
                    dispatch(signInSuccesAction(data.access))
                }

                if (status.toString()[0] === '4') {
                    dispatch(signInFailAction(data))
                }
            })
    }
}

export const refreshAccessTokenAction = (callback?: () => void): AppThunk => {
    return (dispatch) => {
        const request = new Request(
            'https://studapi.teachmeskills.by/auth/jwt/refresh/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    "refresh": localStorage.getItem(refreshToken)
                })
            }
        )

        fetch(request)
            .then(async res => {
                const data = await res.json()
                return [data, res.status]
            })
            .then(([data, status]) => {
                if (status.toString()[0] === '2') {
                    // обновление в localstorage не нужно
                    dispatch(signInSuccesAction(data.access))
                    callback && callback()
                }

                if (status.toString()[0] === '4') {
                    dispatch(signInFailAction(data))
                }
            })
    }
}