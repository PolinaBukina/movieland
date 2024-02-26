import React, { useEffect, useRef } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { Title } from '../../component/Ttitle/Title'
import { ButtonPrimary } from '../../component/Buttons/ButtonPrimary/ButtonPrimary'
import { Footer } from '../../component/Footer/Footer'

export const NewPasswordPage = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    })

    return (
        <>
            <div className={styles.container}>
                <form action="" className={styles.form}>
                    <Title name={'New Password'} />
                    <div className={styles.allInputs}>
                        <InputText
                            name={'Password'}
                            type={'text'}
                            placeholder={'Your Password'}
                            ref1={inputRef}
                        />
                        <InputText
                            name={'Confirm your password'}
                            type={'password'}
                            placeholder={'Confirm your Password'}
                        />
                    </div>
                    <ButtonPrimary name={"Set password"} />
                </form>
                <Footer />
            </div>
        </>
    )
}
