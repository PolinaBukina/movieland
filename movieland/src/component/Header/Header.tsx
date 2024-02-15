import React from 'react'
import LeftMenu from '../Menu/LeftMenu/LeftMenu'
import { SearchControl } from '../Search/control/SearchControl'
import { UserInfo } from '../UserInfo/UserInfo'
import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            {/* <Burger /> */}
            {/* <div className={styles.logo}>
                <p >movie<span>land</span></p>
                <div className={styles.leftMenu}>

                </div>
            </div> */}
            {/* <LeftMenu /> */}
            <SearchControl />
            <UserInfo />

        </header>
    )
}