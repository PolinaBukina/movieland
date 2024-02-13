import React from 'react'
import { SearchControl } from '../Search/control/SearchControl'
import { UserInfo } from '../UserInfo/UserInfo'
import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <p >movie<span>land</span></p>
            </div>
            <SearchControl />
            <UserInfo />
        </header>
    )
}