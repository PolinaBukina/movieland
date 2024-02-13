import React, { EventHandler, FormEvent, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../helpers/useAppDispatch'
import { useAuthState } from '../../../store/auth/selectors'
import { signInAction } from '../../../store/auth/actions'
import { ButtonPrimary } from '../../Buttons/ButtonPrimary/ButtonPrimary'
import { InputText } from '../../InputText/InputText'
import { Title } from '../../Ttitle/Title'

type AuthType = {
    email: string
    password: string
    detail: string
}

export const SignInForm = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [data, setData] = useState<Partial<AuthType>>({})
    const [errors, setErrors] = useState<Partial<AuthType>>({})
    const dispatch = useAppDispatch()
    const authState = useAuthState()
    // const { theme } = useSelector(selectTheme)

    const navigate = useNavigate()

    useEffect(() => {
        setErrors({
            email: authState.errors?.email
                ? authState.errors?.email[0]
                : undefined,
            password: authState.errors?.password
                ? authState.errors?.password[0]
                : undefined
        })
    }, [authState.errors])

    useEffect(() => {
        if (authState.isAuthhorized) {
            navigate('/')
        }
    })

    useEffect(() => {
        inputRef.current?.focus()
    })

    const signIn = (e: FormEvent<HTMLFormElement>): void => {
        // debugger
        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type !== 'submit') {
            return
        }

        if (!data.email || !data.password) {
            setErrors({
                ...errors,
                email: data.email ? undefined : 'Заполните Email',
                password: data.password ? undefined : 'Заполните Password'
            })
            return
        }

        if (data.email && data.password) {
            dispatch(signInAction(data.email, data.password))
        }
    }

    const clearErrors = () => setErrors({})

    const handleEmail = (email: string) => {
        setData({
            ...data,
            email: email
        })
        clearErrors()
    }

    const handlePassword = (password: string) => {
        setData({
            ...data,
            password: password
        })
        clearErrors()
    }

    return (
        // <div>
        <form className={styles.form} onClick={signIn}>
            {/* <div className={`${styles.allInputs} ${theme}`}> */}
            <div className={`${styles.allInputs}`}>
                <Title name={'Sign In'} />
                {
                    authState.errors?.detail && <div style={{ color: 'red' }}>
                        {authState.errors.detail}
                    </div>
                }


                <div className={styles.input}>
                    <InputText
                        name={'Email'}
                        type={'email'}
                        placeholder={'Your Email'}
                        errors={errors.email}
                        onChange={handleEmail}
                    // ref1={inputRef}
                    />
                </div>

                <div className={styles.input}>
                    <InputText
                        // errors={errors.password}
                        name={'Password'}
                        type={'password'}
                        placeholder={'Your Password'}
                        errors={errors.password}
                        onChange={handlePassword}
                    // style={{
                    //     border: 
                    // }}
                    />
                </div>
            </div>
            <NavLink
                to='/reset'
                className={styles.forgot}
            // style={{
            //     color: theme === 'light' ? '' : '#FFFFFF'
            // }}
            >
                Forgot your password?
            </NavLink>
            <ButtonPrimary
                name={"Sign In"}
                // onClick={() => dispatch(signIn)}
                onClick={() => signIn}
            />
            <NavLink
                to='/sigup'
                className={styles.signup}
            // style={{
            //     color: theme === 'light' ? '' : '#FFFFFF'
            // }}
            >
                Don’t have an account? <span>Sign Up</span>
            </NavLink>
        </form>
    )
}


