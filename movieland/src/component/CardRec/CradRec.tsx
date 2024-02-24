import React, { MouseEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { selectPosts } from '../../store/posts/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, AppState } from '../../store/store'
import { Navigate, useNavigate } from 'react-router-dom'
import { selectTheme } from '../../store/theme/selectors'
import { loadPostsAsyncAction } from '../../store/posts/actions'
import { saveIdAction, startOpenAction } from '../../store/content/actions'
import { loadRecPostsAsyncAction } from '../../store/recposts/actions'

export const CardRec = () => {
    // const [isModalActive, setModalActive] = useState(false)
    const { theme } = useSelector(selectTheme)

    const { postlist, limit, page } = useSelector(selectPosts)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(loadRecPostsAsyncAction())
    }, [limit])

    const handleOpen = (key: any) => {
        console.log(key)
        dispatch(saveIdAction(key))
        dispatch(startOpenAction())
        navigate(`/content:id`)
        document.documentElement.scrollTop = 0
    }

    // const handleAddFavorite = (key: any) => {
    //     dispatch(addToFavoritesAction(key))
    //     console.log(key)
    //     dispatch(addToFavoritesAsyncAction())
    //     // dispatch(favoritesArrayAction())
    // }

    return (
        // <div className={`${styles.cardContent} ${theme}`}>
        <div className={`${styles.cardContent} ${theme}`} >
            {
                postlist.map((item, index) => (
                    <div key={item.imdbID} className={styles.card} >
                        <div className={styles.allText}>
                            <div className={styles.text}>
                                <h1 className={styles.header} onClick={() => handleOpen(item.imdbID)}
                                    style={{
                                        color: theme === 'light' ? '' : '#FFFFFF'
                                    }}
                                >
                                    {item.Title}
                                </h1>
                                <p className={styles.description}
                                    style={{
                                        color: theme === 'light' ? '' : '#FFFFFF'
                                    }}
                                >
                                    {item.Type}
                                </p>
                            </div>
                            <div>
                                <img className={styles.image} src={item.Poster} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

