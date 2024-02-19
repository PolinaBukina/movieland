import React from 'react'
import { InputText } from '../../component/InputText/InputText'
import { Settings } from '../../component/Settings/Settings'
import styles from './styles.module.scss'

const SettingsPage = () => {
    return (
        <div className={styles.container}>
            <Settings/>
        </div>
    )
}

export default SettingsPage
