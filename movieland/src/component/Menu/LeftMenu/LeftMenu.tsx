import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.scss'
// import { selectMenu } from '../../store/menu/selectors'
// import { UserInfo } from '../UserInfo/UserInfo'
// import { ThemeButtons } from '../ThemeButtons/ThemeButtons'
// import { ButtonSecondary } from '../ButtonSecondary/ButtonSecondary'
import { NavLink } from 'react-router-dom'
import { selectMenu } from '../../../store/menu/selectors'
import { useAuthState } from '../../../store/auth/selectors'
import { UserInfo } from '../../UserInfo/UserInfo'
import { ButtonSecondary } from '../../Buttons/ButtonSecondary/ButtonSecondary'
import { CloseIcon } from '../../Icons/CloseIcon'
import { setClose } from '../../../store/menu/actions'
import { HomeIcon } from '../../Icons/HomeIcon'
import { TrendsIcon } from '../../Icons/TrendsIcon'
import { FavoritesIcon } from '../../Icons/FavoritesIcon'
import { SettingsIcon } from '../../Icons/SettingsIcon'
import { Footer } from '../../Footer/Footer'
import { selectTheme } from '../../../store/theme/selectors'
// import { useAuthState } from '../../store/auth/selectors'

const LeftMenu = () => {
    const { isOpened } = useSelector(selectMenu)
    const { isAuthhorized } = useAuthState()

    const dispatch = useDispatch()
    const close = () => dispatch(setClose())

    const { theme } = useSelector(selectTheme)

    // if (!isOpened) {
    //     return null
    // }

    return (
        <div
            // className={`${styles.menu}`}
            className={`${styles.menu} ${theme}`}
            style={{ background: theme == 'light' ? '#FFFFFF' : '' }}
        >
            {/* <div className={styles.content}> */}
            <div className={styles.logo}>
                <p >movie
                    <span
                        style={{
                            color: theme === 'light' ? '#000000' : ''
                        }}
                    >
                        land
                    </span>
                </p>
            </div>
            <ul >

                <button className={styles.button}>
                    <NavLink to='/' >
                        <li
                            style={{
                                background: theme === 'light' ? '#FFFFFFF' : '',
                                color: theme === 'light' ? '#AFB2B6' : '',
                                fill: theme === 'light' ? '#AFB2B6' : ''
                            }}
                        >
                            <HomeIcon />
                            <p>
                                Home
                            </p>
                        </li>
                    </NavLink>
                </button>
                <button className={styles.button}>
                    <NavLink to='/trends' >
                        <li
                            style={{
                                background: theme === 'light' ? '#FFFFFFF' : '',
                                color: theme === 'light' ? '#AFB2B6' : '',
                                fill: theme === 'light' ? '#AFB2B6' : ''
                            }}
                        >
                            <TrendsIcon />
                            <p>
                                Trends
                            </p>
                        </li>
                    </NavLink>
                </button>
                <button className={styles.button}>
                    <NavLink to='/favorites' >
                        <li
                            style={{
                                background: theme === 'light' ? '#FFFFFFF' : '',
                                color: theme === 'light' ? '#AFB2B6' : '',
                                fill: theme === 'light' ? '#AFB2B6' : ''
                            }}
                        >
                            <FavoritesIcon />
                            <p>
                                Favorites
                            </p>
                        </li>
                    </NavLink>
                </button>
                <button className={styles.button}>
                    <NavLink to='/settings' >
                        <li
                            style={{
                                background: theme === 'light' ? '#FFFFFFF' : '',
                                color: theme === 'light' ? '#AFB2B6' : '',
                                fill: theme === 'light' ? '#AFB2B6' : ''
                            }}
                        >
                            <SettingsIcon />
                            <p>
                                Settings
                            </p>
                        </li>
                    </NavLink>
                </button>

            </ul>
            <Footer />
        </div>
    )
}

export default LeftMenu
