import React from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'

export const Settings = () => {
    return (
        <div className={styles.content}>
            <div className={styles.profile}>
                <h1 className={styles.header}>
                    Profile
                </h1>
                <div className={styles.profileInfo}>
                    <div>name</div>
                    <div>email</div>
                </div>
            </div>
            <div className={styles.password}>
                <h1 className={styles.header}>
                    Password
                </h1>
                <div className={styles.passwordInfo}>
                    <input />
                    <div className={styles.passwordNew}>
                        <input />
                        <input />
                    </div>
                </div>
            </div>
            <div className={styles.colorMode}>
                <h1 className={styles.header}>
                    Color Mode
                </h1>
                <div className={styles.switch}>
                    tuda-suda
                </div>
            </div>
        </div>
    )
}
