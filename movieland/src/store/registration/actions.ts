import { getPageInfo } from "../../helpers/getPageInfo"
import { BlogPostType } from "../../helpers/Types"
import { AppThunk } from "../store"
import { RegAction } from "./types"

export const setEmailAction = (email: string): RegAction => ({
    type: 'SET_REG_EMAIL',
    payload: email
})

export const setUsernameAction = (username: string): RegAction => ({
    type: 'SET_REG_USERNAME',
    payload: username
})

export const setPasswordAction = (password: string): RegAction => ({
    type: 'SET_REG_PASSWORD',
    payload: password
})

export const sendRegDataAction = (): AppThunk => {
    return (dispatch, getState) => {
        // return async(dispatch, getState) => {
        const formData = getState().reg

        const request = new Request('https://studapi.teachmeskills.by/auth/users/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json' //обязательно мы здесь указываем в каком формате
                },
                body: JSON.stringify({
                    "username": formData.username,
                    "email": formData.email,
                    "password": formData.password
                })
            }
        )

        // вариант 1 
        fetch(request)
            .then(async (res) => {
                const status = res.status
                return [await res.json(), status]
            })
            .then(([res, status]) => {
                if (status.toString()[0] === '2') {
                    dispatch({
                        type: 'REG_SUCCESS'
                    })
                }
                if (status.toString()[0] === '4') {
                    dispatch({
                        type: 'REG_FAILURE',
                        payload: res
                    })
                }
            })

    // вариант 2
    // const response = await fetch(request)
    // const result = await response.json()
    // if(status === 400){

    // }
    // if(status === 200) {}

}
}
