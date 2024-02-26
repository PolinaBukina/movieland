import React, { FormEvent, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../helpers/useAppDispatch'
import { signInAction } from '../../../store/auth/actions'
import { ButtonPrimary } from '../../Buttons/ButtonPrimary/ButtonPrimary'
import { InputText } from '../../InputText/InputText'
import { Title } from '../../Ttitle/Title'

type AuthType = {
    email: string
    password: string
    detail: string
}

export const ResetForm = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [data, setData] = useState<Partial<AuthType>>({})
    const [errors, setErrors] = useState<Partial<AuthType>>({})
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        inputRef.current?.focus()
    })

    const resetHandle = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type !== 'submit') {
            return
        }

        if (!data.email) {
            setErrors({
                ...errors,
                email: data.email ? undefined : 'Заполните Email'
            })
            return
        }

        if (data.email) {
            dispatch(signInAction(data.email, ''))
        }

        navigate('/')
    }

    const clearErrors = () => setErrors({})

    const handleEmail = (email: string) => {
        setData({
            ...data,
            email: email
        })
        clearErrors()
    }

    return (
        <form action="" className={styles.form} onClick={resetHandle}>
            <Title name={'Reset password'} />
            <div className={styles.allInputs}>
                <InputText
                    name={'Email'}
                    type={'email'}
                    placeholder={'Your Email'}
                    errors={errors.email}
                    // ref1={inputRef}
                    onChange={handleEmail}
                />
            </div>
            <ButtonPrimary
                name={"Reset"}
                onClick={() => resetHandle}
            />
        </form>
    )
}