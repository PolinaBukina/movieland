import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch} from '../../store/store'
import { useNavigate } from 'react-router-dom'
import { selectTheme } from '../../store/theme/selectors'
import { saveIdAction, startOpenAction } from '../../store/content/actions'
import { loadRecPostsAsyncAction } from '../../store/recposts/actions'
import { selectRecPosts } from '../../store/recposts/selectors'

export const CardRec = () => {
    const { theme } = useSelector(selectTheme)
    const { recpostlist, reclimit, page } = useSelector(selectRecPosts)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(loadRecPostsAsyncAction())
    }, [reclimit])

    const handleOpen = (key: any) => {
        console.log(key)
        dispatch(saveIdAction(key))
        dispatch(startOpenAction())
        navigate(`/content:id`)
        document.documentElement.scrollTop = 0
    }

    return (
        <div className={`${styles.cardContent} ${theme}`} >
            {
                recpostlist.map((item, index) => (
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
    )
}

