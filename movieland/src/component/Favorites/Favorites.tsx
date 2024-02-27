import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { selectPosts } from '../../store/posts/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { useNavigate } from 'react-router-dom'
import { selectTheme } from '../../store/theme/selectors'
import { loadPostsAsyncAction } from '../../store/posts/actions'
import { saveIdAction, startOpenAction } from '../../store/content/actions'
import { useFavoriteState } from '../../store/favorites/selectors'

export const Favorites = () => {
    const { theme } = useSelector(selectTheme)

    const { limit } = useSelector(selectPosts)
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

