import React from 'react'
import { useSelector } from 'react-redux'
import { InputText } from '../../component/InputText/InputText'
import { selectTheme } from '../../store/theme/selectors'
import { ThemeButtons } from '../Buttons/ThemeButtons/ThemeButtons'
import styles from './styles.module.scss'

export const Settings = () => {
    const { theme } = useSelector(selectTheme)

    return (
        <div className={`${styles.content} ${theme}`}>
            <div className={styles.profile}
                style={{
                    background: theme === 'light' ? '#FFFFFF' : ''
                }}
            >
                <h1 className={styles.header}
                    style={{
                        color: theme === 'light' ? '#000000' : ''
                    }}>
                    Profile
                </h1>
                <div className={styles.profileInfo}
                    style={{
                        background: theme === 'light' ? '#FFFFFF' : '',
                        color: theme === 'light' ? '#000000' : '',
                    }}
                >
                    <div
                        style={{
                            color: theme === 'light' ? '#000000' : '',
                            background: theme === 'light' ? '#F3F3F3' : ''
                        }}
                    >
                        <p>Polina Bukina</p>
                    </div>
                    <div
                        style={{
                            background: theme === 'light' ? '#F3F3F3' : '',
                            color: theme === 'light' ? '#000000' : ''
                        }}
                    >
                        <p>pbukina501@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={styles.password}
                style={{
                    background: theme === 'light' ? '#FFFFFF' : ''
                }}
            >
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
            <div className={styles.colorMode}
                style={{
                    background: theme === 'light' ? '#FFFFFF' : ''
                }}
            >
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
