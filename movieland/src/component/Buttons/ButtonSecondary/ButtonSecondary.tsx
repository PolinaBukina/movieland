import React from 'react'
import styles from './styles.module.scss'

type Props = {
    name: string
    disabled?: boolean
    onClick?: () => void
}

export const ButtonSecondary = (props: Props) => {
    const { name, disabled } = props

    return (
        <button
            className={`${styles.button}`}
        >
            {props.name}
        </button>
    )
}