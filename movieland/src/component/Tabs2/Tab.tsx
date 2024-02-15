import React from 'react'
import styles from './styles.module.scss'

type Props = {
    children: string
    title: string
}

const Tab: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.tab}>
            {children}
        </div>
    )
}

export default Tab
