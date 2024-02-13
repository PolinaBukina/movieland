import React from 'react'
import { SignUpForm } from '../../component/Forms/SignUpForm/SignUpForm'
import styles from './styles.module.scss'

export const SignUpPage = () => {
    return (
        <div className={styles.container}>
            <SignUpForm />
        </div>
    )
}
