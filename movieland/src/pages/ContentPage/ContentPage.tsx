import React from 'react'
import { FavoritesIcon } from '../../component/Icons/FavoritesIcon'
import { ShareIcon } from '../../component/Icons/ShareIcon'
import { useOpenState } from '../../store/content/selectors'
import styles from './styles.module.scss'

const ContentPage = () => {
    const { Title, Year, imdbID, Type, Poster } = useOpenState()

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={Poster} alt="" className={styles.image} />
                <div className={styles.buttons}>
                    <button className={styles.button}>
                        <FavoritesIcon />
                    </button>
                    <button className={styles.button}>
                        <ShareIcon />
                    </button>
                </div>
            </div>
            <div className={styles.content}>

                <p>
                    {Title}
                    {Year}
                    {imdbID}
                    {Type}
                </p>
            </div>
        </div>
    )
}

export default ContentPage
