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
// import { setOpen } from '../../store/modal/actions'

export const Card = () => {
    // const { id } = useOpenState()
    // const { isOpened } = useSelector(openModal)
    // const dispatch = useDispatch()

    // if (!isOpened) {
    //     return null
    // }

    // const { image } = useOpenModalState()
    const [isModalActive, setModalActive] = useState(false)
    const { theme } = useSelector(selectTheme)

    // const handleModalOpen = (key: any) => {
    //     setModalActive(true)
    //     dispatch(saveIdImageAction(key))
    //     dispatch(startImageAction())
    //     console.log(key)
    // }

    // const handleModalClose = () => {
    //     dispatch(clearImageAction())
    //     setModalActive(false)
    // }

    const { postlist, limit, offset, page } = useSelector(selectPosts)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    // const imageUrl = useSelector((state: AppState) => state.modal.img)

    useEffect(() => {
        dispatch(loadPostsAsyncAction())
    }, [limit])

    const handleOpen = (key: any) => {
        console.log(key)
        dispatch(saveIdAction(key))
        dispatch(startOpenAction())
        navigate(`/content:id`)
    }

    // const handleAddFavorite = (key: any) => {
    //     dispatch(addToFavoritesAction(key))
    //     console.log(key)
    //     dispatch(addToFavoritesAsyncAction())
    //     // dispatch(favoritesArrayAction())
    // }

    // const { theme } = useSelector(selectTheme)

    return (
        // <div className={`${styles.cardContent} ${theme}`}>
        <div className={`${styles.cardContent} ${theme}`} >
            {
                postlist.map((item, index) => (
                    <div key={item.id} className={styles.card} >
                        {/* <div key={item.id} className={styles.card}> */}
                        <div className={styles.allText}>
                            <div className={styles.text}>
                                <p className={styles.date}>
                                    {item.date}
                                </p>
                                <h1 className={styles.header} onClick={() => handleOpen(item.id)}
                                    style={{
                                        color: theme === 'light' ? '' : '#FFFFFF'
                                    }}
                                >
                                    {item.title}
                                </h1>
                                <p className={styles.description}
                                    style={{
                                        color: theme === 'light' ? '' : '#FFFFFF'
                                    }}
                                >
                                    {item.text}
                                </p>
                            </div>
                            <div>
                                {/* <img className={styles.image} src={item.image} onClick={() => handleModalOpen(item.id)} /> */}
                                <img className={styles.image} src={item.image} />
                                {/* {isModalActive && (
                                    <Modal onClose={handleModalClose}>
                                        <img className={styles.image1} src={image} />
                                    </Modal>
                                )} */}
                            </div>
                        </div>

                        {/* <div className={styles.allButtons}>
                            <div className={styles.buttons}>
                                {/* <button onClick={() => handleAddFavorite(item.id)}>
                                <button onClick={() => handleAddFavorite(item.id)}>
                                    <Icon />
                                </button>
                                <button>
                                    <MoreIcon />
                                </button>
                            </div> */}
                        {/* </div> */}
                    </div>
                ))
            }
        </div>
    )
}
