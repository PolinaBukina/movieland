import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.scss'
import { useSearchState } from '../../../store/search/selectors'
import { selectTheme } from '../../../store/theme/selectors'
import { AppDispatch } from '../../../store/store'
import { saveIdAction, startOpenAction } from '../../../store/content/actions'
import { useNavigate } from 'react-router-dom'

export const SearchResults = () => {
    const { text, data } = useSearchState()
    const { theme } = useSelector(selectTheme)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const handleOpen = (key: any) => {
        console.log(key)
        dispatch(saveIdAction(key))
        dispatch(startOpenAction())
        navigate(`/content:id`)
    }

    return (
        // <div className={`${styles.cardContent} ${theme}`} >
        <div className={styles.container}>
            <h2>
                Search results `{text}`
            </h2>

            <div className={`${styles.cardContent} ${theme}`} >
                {
                    data.map((item, index) => (
                        <div key={item.imdbID} className={styles.card} >
                            {/* <div key={item.id} className={styles.card}> */}
                            <div className={styles.allText}>
                                <div className={styles.text}>
                                    {/* <p className={styles.date}>
                                {item.Year}
                            </p> */}
                                    <h1 className={styles.header} onClick={() => handleOpen(item.imdbID)}
                                        style={{
                                            color: theme === 'light' ? '#000000' : ''
                                        }}
                                    >
                                        {item.Title}
                                    </h1>
                                    <p className={styles.description}
                                    // style={{
                                    //     color: theme === 'light' ? '' : '#FFFFFF'
                                    // }}
                                    >
                                        {item.Type}
                                    </p>
                                </div>
                                <div>
                                    {/* <img className={styles.image} src={item.image} onClick={() => handleModalOpen(item.id)} /> */}
                                    <img className={styles.image} src={item.Poster} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
