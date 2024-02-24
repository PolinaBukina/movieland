import React from 'react'
import { useSelector } from 'react-redux'
// import { selectTheme } from '../../store/theme/selectors'
import styles from './styles.module.scss'

type Props = {
    name: string
    disabled?: boolean
    onClick?: () => void
}

export const ButtonSecondary = (props: Props) => {
    const { name, disabled } = props
    // const { theme } = useSelector(selectTheme)
    // const { theme } = useSelector()

    return (
        <button
            className={`${styles.button}`}
        // className={`${styles.button} ${theme}`}
        // style={{
        //     background: theme === 'light' ? '' : '#1e1d1d',
        //     color: theme === 'light' ? '' : '#FFFFFF'
        // }}
        >
            {props.name}
        </button>
    )
}