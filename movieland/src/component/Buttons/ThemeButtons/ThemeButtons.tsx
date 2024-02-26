import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useThemeContext } from '../../../helpers/themeContext'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../../store/theme/selectors'
import { useDispatch } from 'react-redux'
import { setLightThemeAction, setDarkThemeAction } from '../../../store/theme/actions'
import { DarkIcon } from '../../Icons/DarkIcon'
import { LightIcon } from '../../Icons/LightIcon'

// type Props = {
//     theme: string
//     changeTheme: (theme: string) => void
// }


export const ThemeButtons = () => {
    // const { state, setLight, setDark } = useThemeContext()

    const { theme } = useSelector(selectTheme)
    const dispatch = useDispatch()

    const setDark = () => dispatch(setDarkThemeAction())
    const setLight = () => dispatch(setLightThemeAction())

    return (
        <div>
            <button
                // onClick={() => changeTheme('dark')}
                onClick={setDark}
                disabled={theme !== 'light'}
                className={styles.button}
                style={{ background: theme == 'light' ? '' : '#292929' }}
            >
                <DarkIcon disabled={theme === 'light'} />
            </button>

            <button
                // onClick={() => changeTheme('light')}
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
