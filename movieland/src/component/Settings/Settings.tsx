import React from 'react'
import { InputText } from '../../component/InputText/InputText'
import { ThemeButtons } from '../ThemeButtons/ThemeButtons'
import styles from './styles.module.scss'

export const Settings = () => {
    return (
        <div className={styles.content}>
            <div className={styles.profile}>
                <h1 className={styles.header}>
                    Profile
                </h1>
                <div className={styles.profileInfo}>
                    <div>
                        <p>Polina Bukina</p>
                    </div>
                    <div>
                        <p>pbukina501@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={styles.password}>
                <h1 className={styles.header}>
                    Password
                </h1>
                <div className={styles.passwordInfo}>
                    {/* <input /> */}
                    <div className={styles.passwordOld}>
                        <InputText
                            name={'Password'}
                            type={'text'}
                            placeholder={'Your Password'}
                        />
                    </div>
                    <div className={styles.passwordNew}>
                        <InputText
                            name={'New password'}
                            type={'password'}
                            placeholder={'Confirm your Password'}
                        />
                        <InputText
                            name={'Confirm your password'}
                            type={'password'}
                            placeholder={'Confirm your Password'}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.colorMode}>
                <h1 className={styles.header}>
                    Color Mode
                </h1>
                <div className={styles.switch}>
                    <p>
                        Use dark thema
                    </p>
                    <ThemeButtons />
                </div>
            </div>
        </div>
    )
}
