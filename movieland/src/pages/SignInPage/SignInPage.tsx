import React from 'react'
import styles from './styles.module.scss'
import { SignInForm } from '../../component/Forms/SignInForm/SignInForm'
import { Footer } from '../../component/Footer/Footer'

export const SignInPage = () => {
    return (
        <div className={styles.container}>
            <SignInForm />
            <Footer />
        </div>
    )
}