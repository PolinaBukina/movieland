import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPostsAsyncAction } from '../../../store/posts/actions'
import { selectPosts } from '../../../store/posts/selectors'
import { AppDispatch } from '../../../store/store'
import { selectTheme } from '../../../store/theme/selectors'
import { Card } from '../../Card/Card'
import styles from './styles.module.scss'

type Props = {
    onClick?: () => void
}

export const ShowMore = (props: Props) => {
    const { theme } = useSelector(selectTheme)
    const dispatch = useDispatch<AppDispatch>()
    const { postCount, page, limit } = useSelector(selectPosts)

    const onNextPage = () => {
        dispatch(loadPostsAsyncAction(page + 1))
    }

    return (
        <div className={`${styles.container} ${theme}`}>
            <button className={styles.button} onClick={onNextPage}
                style={{
                    background: theme === 'light' ? '#AFB2B6' : '',
                    color: theme === 'light' ? '#FFFFFF' : '',
                    // border: none
                }}
            >
                <p>
                    Show more
                </p>
                <span className={styles.loader}></span>
            </button>
        </div>
    )
}