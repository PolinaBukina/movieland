import React from 'react'
import styles from './styles.module.scss'

type Props = {
    name: string
    disabled?: boolean
    onClick?: () => void
}

export const ButtonPrimary = (props: Props) => {
    return (
        <button className={styles.button}>
            {props.name} {props.disabled}
        </button >
    )
}