import React from 'react'
import { Content } from '../../component/Content/Content'

export const ContentPage = () => {
    return (
        <div>
            <Content />
        </div>
    )
}

// import React, { ChangeEvent, MouseEvent, useState } from 'react'
// import { Card } from '../../component/Card/Card'
// import { CardRec } from '../../component/CardRec/CardRec'
// import { FavoritesIcon } from '../../component/Icons/FavoritesIcon'
// import { ShareIcon } from '../../component/Icons/ShareIcon'
// import { useOpenState } from '../../store/content/selectors'
// import styles from './styles.module.scss'
// import clipboardCopy from 'clipboard-copy'
// import { saveFavoriteAction, startFavoriteAction } from '../../store/favorites/actions'
// import { useAppDispatch } from '../../helpers/useAppDispatch'
// import { useNavigate } from 'react-router-dom'
// import { BlogPostType } from '../../helpers/Types'

// type Props = {
//     onCopyBlock: (item: BlogPostType) => void;
// }

// export const ContentPage = (onCopyBlock: Props) => {
//     // const { Title, Year, imdbID, Type, Poster } = useOpenState()
//     const dispatch = useAppDispatch()

//     const {
//         imdbID,
//         Title,
//         Year,
//         Rated,
//         Released,
//         Runtime,
//         Genre,
//         Director,
//         Writer,
//         Actors,
//         Plot,
//         Language,
//         Country,
//         Awards,
//         Type,
//         Poster,
//         Ratings
//     } = useOpenState()

//     const handleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
//         console.log(imdbID)
//         dispatch(saveFavoriteAction('tt0103359'))
//         dispatch(startFavoriteAction())
//         navigate('/search')
//     }

//     const navigate = useNavigate()

//     // const handleEnterSearch = (e: KeyboardEvent<HTMLInputElement>) => {

//     //     // dispatch(startSearchAction())
//     //     // navigate('/search')

//     //     if (e.key === 'Enter') {

//     //     }
//     // }

//     // const handleCopyLink = () => {
//     //     const currentURL = window.location.href

//     //     // Копирование текущего URL в буфер обмена
//     //     clipboardCopy(currentURL)

//     //     // Можно добавить обратную связь или сообщение об успешном копировании
//     //     alert('Ссылка скопирована в буфер обмена: ' + currentURL)
//     // }

//     return (
//         <div className={styles.container}>
//             <div className={styles.image}>
//                 <img src={Poster} alt="" className={styles.image} />
//                 <div className={styles.buttons}>
//                     <button className={styles.button} onClick={handleFavorite}>
//                         <FavoritesIcon />
//                     </button>
//                     {/* <button className={styles.button} onClick={() => handleCopyLink}> */}
//                     <button className={styles.button}>
//                         <ShareIcon />
//                     </button>
//                 </div>
//             </div>
//             <div className={styles.content}>

//                 <div className={styles.header}>
//                     <p>
//                         {Type}
//                     </p>
//                     <h2>
//                         {Title}
//                     </h2>
//                 </div>

//                 <div className={styles.description}>
//                     {Plot}
//                     <div className={styles.text}>
//                         <p>Rated</p> <p>{Rated}</p>
//                         <p>Relased</p> {Released}
//                         <p>Runtime</p> {Runtime}
//                         <p>Genre</p> {Genre}
//                         <p>Acors</p> {Actors}
//                         <p>Language</p> {Language}
//                         <p>Country</p> {Country}
//                         <p>Awards</p> {Awards}
//                         <p>Director</p> {Director}
//                         <p>Writer</p> {Writer}
//                     </div>
//                 </div>

//                 <div className={styles.recommendations}>
//                     <h1>
//                         Recommendations
//                     </h1>
//                     <CardRec />
//                 </div>

//             </div>

//         </div>
//     )
// }

