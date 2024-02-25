import React from 'react'
import styles from './styles.module.scss'
import { Card } from '../../component/Card/Card'
import { CardRec } from '../../component/CardRec/CardRec'

export const TrendsPage = () => {
    return (
        <div className={styles.container}>
            <CardRec />
        </div>
    )
}