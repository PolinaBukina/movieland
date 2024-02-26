import React, { MouseEvent, useEffect, useState } from 'react'
// import { ButtonThumbUpIcon } from '../ButtonThumbUp/ButtonThumbUpIcon'
// import { MoreIcon } from './MoreIcon'
import styles from './styles.module.scss'
// import { Icon } from '../ButtonWithIcon/Icon'
import { selectPosts } from '../../store/posts/selectors'
import { useSelector, useDispatch } from 'react-redux'
// import { BlogPostType } from '../../store/posts/types'
// import { loadPostsAsyncAction } from '../../store/posts/actions'
import { AppDispatch, AppState } from '../../store/store'
// import { ButtonThumbDownIcon } from '../ButtonThumbDown/ButtonThumbDownIcon'
import { Navigate, useNavigate } from 'react-router-dom'
// import { saveIdAction, startOpenAction } from '../../store/content/actions'
// import { useOpenState } from '../../store/content/selectors'
// import { Modal } from '../Modal/modal'
// import { useFavorites } from '../../store/favorite/selectors'
// import { addToFavoritesAction, addToFavoritesAsyncAction } from '../../store/favorite/actions'
// import { useOpenModalState } from '../../store/modal/selectors'
// import { clearImageAction, saveIdImageAction, startImageAction } from '../../store/modal/actions'
import { selectTheme } from '../../store/theme/selectors'
import { loadPostsAsyncAction } from '../../store/posts/actions'
import { saveIdAction, startOpenAction } from '../../store/content/actions'
import { ShowMore } from '../Buttons/ShowMore/ShowMore'
import { ButtonPrimary } from '../Buttons/ButtonPrimary/ButtonPrimary'

export const Card = () => {
    const [isModalActive, setModalActive] = useState(false)
    const { theme } = useSelector(selectTheme)

    const { postlist, limit, page } = useSelector(selectPosts)
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
            <div className={`${styles.cardContent} ${theme}`}
                style={{
                    color: theme === 'light' ? '' : '#000000'
                }}
            >
                {
                    postlist.map((item, index) => (
                        <div key={item.imdbID} className={styles.card} >
                            <div className={styles.allText}>
                                <div className={styles.text}>
                                    <h1 className={styles.header} onClick={() => handleOpen(item.imdbID)}
                                        style={{
                                            color: theme === 'light' ? '#000000' : ''
                                        }}
                                    >
                                        {item.Title}
                                    </h1>
                                    <p className={styles.description}
                                        style={{
                                            color: theme === 'light' ? '#000000' : ''
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
        </>
    )
}

