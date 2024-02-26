import React, { MouseEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { selectPosts } from '../../store/posts/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, AppState } from '../../store/store'
import { Navigate, useNavigate } from 'react-router-dom'
import { selectTheme } from '../../store/theme/selectors'
import { loadPostsAsyncAction } from '../../store/posts/actions'
import { saveIdAction, startOpenAction } from '../../store/content/actions'
import { ShowMore } from '../Buttons/ShowMore/ShowMore'
import { ButtonPrimary } from '../Buttons/ButtonPrimary/ButtonPrimary'
import { useFavoriteState } from '../../store/favorites/selectors'

export const Favorites = () => {
    const [isModalActive, setModalActive] = useState(false)
    const { theme } = useSelector(selectTheme)

    const { postlist, limit, page } = useSelector(selectPosts)
    const { data } = useSelector(useFavoriteState)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(loadPostsAsyncAction())
    }, [limit])

    const handleOpen = (key: any) => {
        console.log(key)
        dispatch(saveIdAction(key))
        dispatch(startOpenAction())
        navigate(`/content:id`)
        document.documentElement.scrollTop = 0
    }

    return (
        <>
            {data.length === 0 ? (
                <div className={styles.placeholder}>

                </div>
            ) : (
                <div className={`${styles.cardContent} ${theme}`}>
                    {
                        data.map((item, index) => (
                            <div key={item.imdbID} className={styles.card} >
                                <div className={styles.allText}>
                                    <div className={styles.text}>
                                        <h1 className={styles.header} onClick={() => handleOpen(item.imdbID)}
                                            style={{
                                                color: theme === 'light' ? '#000000' : '',
                                            }}
                                        >
                                            {item.Title}
                                        </h1>
                                        <p className={styles.description}
                                            style={{
                                                color: theme === 'light' ? '#000000' : '',
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
            )}
        </>
    )
}

