import React from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/theme/selectors'
import styles from './styles.module.scss'

export const Footer = () => {
    const { theme } = useSelector(selectTheme)
    return (
        <>
            <footer>
                <div className={`${styles.footer} ${theme}`}>
                    <p
                        style={{
                            color: theme === 'light' ? '#000000' : '',
                            background: theme === 'light' ? '#FFFFFF' : ''
                        }}
                    >
                        © All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}