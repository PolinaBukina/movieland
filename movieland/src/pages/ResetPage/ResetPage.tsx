import React from 'react'
import styles from './styles.module.scss'
import { ResetForm } from '../../component/Forms/ResetForm/ResetForm'
import { Footer } from '../../component/Footer/Footer'

export const ResetPage = () => {
    return (
        <div className={styles.container}>
            <ResetForm />
            <Footer />
        </div>
    )
}