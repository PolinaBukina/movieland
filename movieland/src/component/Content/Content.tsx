import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { CardRec } from '../../component/CardRec/CardRec'
import { FavoritesIcon } from '../../component/Icons/FavoritesIcon'
import { ShareIcon } from '../../component/Icons/ShareIcon'
import { useOpenState } from '../../store/content/selectors'
import styles from './styles.module.scss'
import { removeFavoriteAction, saveFavoriteAction, startFavoriteAction } from '../../store/favorites/actions'
import { useAppDispatch } from '../../helpers/useAppDispatch'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/theme/selectors'

export const Content = () => {
    const dispatch = useAppDispatch()
    const [isPressed, setIsPressed] = useState(false)
    const { theme } = useSelector(selectTheme)

    const {
        imdbID,
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        Awards,
        Type,
        Poster,
        Ratings
    } = useOpenState()

    const handleFavorite = (title: string, type: string) => {
        if (isPressed) {
            dispatch(removeFavoriteAction(title, type))
        } else {
            dispatch(saveFavoriteAction(title, type))
            dispatch(startFavoriteAction(title, type))
        }

        setIsPressed((prevState) => !prevState)
    }

    return (
        <div className={`${styles.container} ${theme}`}>
            <div className={styles.image}>
                <img src={Poster} alt="" className={styles.image} />
                <div className={styles.buttons}
                    style={{
                        background: theme === 'light' ? '#FFFFFF' : '',
                        border: theme === 'light' ? '#FFFFFF' : '',
                        // border: none
                    }}
                >
                    <button className={isPressed ? styles.normalButton : styles.button} onClick={() => handleFavorite(Title, Type)}
                        style={{
                            border: theme === 'light' ? '#FFFFFF' : '',
                        }}
                    >
                        <FavoritesIcon />
                    </button>
                    <button className={styles.button}
                        style={{
                            border: theme === 'light' ? '#FFFFFF' : '',
                            fill: theme === 'light' ? '#000000' : '',
                        }}
                    >
                        <ShareIcon />
                    </button>
                </div>
            </div>
            <div className={styles.content}>

                <div className={styles.header}
                    style={{
                        color: theme === 'light' ? '#000000' : '',
                    }}
                >
                    <p>
                        {Type}
                    </p>
                    <h2
                        style={{
                            color: theme === 'light' ? '#000000' : '',
                        }}
                    >
                        {Title}
                    </h2>
                </div>

                <div className={styles.description}
                    style={{
                        color: theme === 'light' ? '#000000' : '',
                    }}
                >
                    {Plot}
                    <div className={styles.text}
                        style={{
                            color: theme === 'light' ? '#000000' : '',
                        }}
                    >
                        <p>Rated</p> <p>{Rated}</p>
                        <p>Relased</p> {Released}
                        <p>Runtime</p> {Runtime}
                        <p>Genre</p> {Genre}
                        <p>Acors</p> {Actors}
                        <p>Language</p> {Language}
                        <p>Country</p> {Country}
                        <p>Awards</p> {Awards}
                        <p>Director</p> {Director}
                        <p>Writer</p> {Writer}
                    </div>
                </div>

                <div className={styles.recommendations}>
                    <h1
                        style={{
                            color: theme === 'light' ? '#000000' : '',
                        }}
                    >
                        Recommendations
                    </h1>
                    <CardRec />
                </div>

            </div>

        </div>
    )
}