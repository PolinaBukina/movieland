import React from 'react'
import { Favorites } from '../../component/Favorites/Favorites'
import styles from './styles.module.scss'

export const FavoritesPage = () => {
    return (
        <div className={styles.container}>
            {/* <img src={}/> */}
            <Favorites />
        </div>
    )
}
