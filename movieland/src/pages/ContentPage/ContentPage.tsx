import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { Card } from '../../component/Card/Card'
import { CardRec } from '../../component/CardRec/CradRec'
import { FavoritesIcon } from '../../component/Icons/FavoritesIcon'
import { ShareIcon } from '../../component/Icons/ShareIcon'
import { useOpenState } from '../../store/content/selectors'
import styles from './styles.module.scss'
import clipboardCopy from 'clipboard-copy'
import { saveFavoriteAction, startFavoriteAction } from '../../store/favorites/actions'
import { useAppDispatch } from '../../helpers/useAppDispatch'
import { useNavigate } from 'react-router-dom'

export const ContentPage = () => {
    // const { Title, Year, imdbID, Type, Poster } = useOpenState()
    const dispatch = useAppDispatch()

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

    const handleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(imdbID)
        dispatch(saveFavoriteAction('tt0103359'))
        dispatch(startFavoriteAction())
        navigate('/search')
    }

    const navigate = useNavigate()

    // const handleEnterSearch = (e: KeyboardEvent<HTMLInputElement>) => {

    //     // dispatch(startSearchAction())
    //     // navigate('/search')

    //     if (e.key === 'Enter') {

    //     }
    // }

    // const handleCopyLink = () => {
    //     const currentURL = window.location.href

    //     // Копирование текущего URL в буфер обмена
    //     clipboardCopy(currentURL)

    //     // Можно добавить обратную связь или сообщение об успешном копировании
    //     alert('Ссылка скопирована в буфер обмена: ' + currentURL)
    // }

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={Poster} alt="" className={styles.image} />
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={handleFavorite}>
                        <FavoritesIcon />
                    </button>
                    {/* <button className={styles.button} onClick={() => handleCopyLink}> */}
                    <button className={styles.button}>
                        <ShareIcon />
                    </button>
                </div>
            </div>
            <div className={styles.content}>

                <div className={styles.header}>
                    <p>
                        {Type}
                    </p>
                    <h2>
                        {Title}
                    </h2>
                </div>
                <div className={styles.description}>
                    {Plot}
                </div>
                <div className={styles.text}>
                    Rated {Rated} <br />
                    Relased {Released} <br />
                    Runtime {Runtime} <br />
                    Genre {Genre} <br />
                    Acors {Actors} <br />
                    Language {Language} <br />
                    Country {Country} <br />
                    Awards {Awards} <br />
                    Director {Director} <br />
                    Writes {Writer} <br />
                </div>

                <div className={styles.recommendations}>
                    <h1>
                        Recommendations
                    </h1>
                    <CardRec />
                </div>

            </div>

        </div>
    )
}
function copy(currentURL: string) {
    throw new Error('Function not implemented.')
}

