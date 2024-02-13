import React from 'react'
import styles from './styles.module.scss'
// import { selectTheme } from '../../store/theme/selectors'
// import { useSelector } from 'react-redux'

type Props = {
    name: string
}

export const Title = (props: Props) => {
    // const { theme } = useSelector(selectTheme)
    return (
        <h1
            // className={`${styles.title} ${theme}`}
            className={`${styles.title}`}
        // style={{
        //     color: theme === 'light' ? '' : '#FFFFFF'
        // }}
        >
            {props.name}
        </h1>
    )
}
