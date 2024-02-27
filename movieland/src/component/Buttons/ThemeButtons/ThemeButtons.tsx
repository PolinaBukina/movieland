import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../../store/theme/selectors'
import { useDispatch } from 'react-redux'
import { setLightThemeAction, setDarkThemeAction } from '../../../store/theme/actions'
import { DarkIcon } from '../../Icons/DarkIcon'
import { LightIcon } from '../../Icons/LightIcon'

export const ThemeButtons = () => {

    const { theme } = useSelector(selectTheme)
    const dispatch = useDispatch()

    const setDark = () => dispatch(setDarkThemeAction())
    const setLight = () => dispatch(setLightThemeAction())

    return (
        <div>
            <button
                onClick={setDark}
                disabled={theme !== 'light'}
                className={styles.button}
                style={{ background: theme == 'light' ? '' : '#292929' }}
            >
                <DarkIcon disabled={theme === 'light'} />
            </button>

            <button
                onClick={setLight}
                disabled={theme === 'light'}
                className={styles.button}
                style={{ background: theme == 'light' ? '' : '#292929' }}
            >
                <LightIcon disabled={theme !== 'light'} />
            </button>
        </div>
    )
}
