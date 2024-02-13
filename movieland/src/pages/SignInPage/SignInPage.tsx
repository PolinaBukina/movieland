import React from 'react'
import styles from './styles.module.scss'
import { SignInForm } from '../../component/Forms/SignInForm/SignInForm'

export const SignInPage = () => {
    return (
        <div className={styles.container}>
            <SignInForm />
        </div>
    )
}