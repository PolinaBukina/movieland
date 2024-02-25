import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPostsAsyncAction } from '../../../store/posts/actions'
import { selectPosts } from '../../../store/posts/selectors'
import { AppDispatch } from '../../../store/store'
import { Card } from '../../Card/Card'
import styles from './styles.module.scss'

type Props = {
    onClick?: () => void
}

export const ShowMore = (props: Props) => {
    const dispatch = useDispatch<AppDispatch>()
    const { postCount, page, limit } = useSelector(selectPosts)

    const onNextPage = () => {
        dispatch(loadPostsAsyncAction(page + 1))
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={onNextPage}>
                <p>
                    Show more
                </p>
                <span className={styles.loader}></span>
            </button>
        </div>
    )
}