import React from 'react'
import { Card } from '../../Card/Card'
import styles from './styles.module.scss'

type Props = {
    onClick?: () => void
}

export const ShowMore = (props: Props) => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <p>
                    Show more
                </p>
                <span className={styles.loader}></span>
            </button>
        </div>
    )
}