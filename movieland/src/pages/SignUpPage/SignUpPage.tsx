import React from 'react'
import { Footer } from '../../component/Footer/Footer'
import { SignUpForm } from '../../component/Forms/SignUpForm/SignUpForm'
import styles from './styles.module.scss'

export const SignUpPage = () => {
    return (
        <div className={styles.container}>
            <SignUpForm />
            <Footer />
        </div>
    )
}
