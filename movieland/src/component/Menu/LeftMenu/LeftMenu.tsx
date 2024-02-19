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
// import { useAuthState } from '../../store/auth/selectors'
// import { selectTheme } from '../../store/theme/selectors'

const LeftMenu = () => {
    const { isOpened } = useSelector(selectMenu)
    const { isAuthhorized } = useAuthState()

    const dispatch = useDispatch()
    const close = () => dispatch(setClose())

    // const { theme } = useSelector(selectTheme)

    // if (!isOpened) {
    //     return null
    // }

    return (
        <div
            className={`${styles.menu}`}
        // className={`${styles.menu} ${theme}`}
        // style={{ background: theme == 'light' ? '#FFFFFF' : '#1e1d1d' }}
        >
            {/* <div className={styles.content}> */}
            <div className={styles.logo}>
                <p >movie<span>land</span></p>
                {/* <div className={styles.leftMenu}> */}

            </div>
            <ul >

                <button className={styles.button}>
                    <NavLink to='/' >
                        <li
                        // style={{
                        //     background: theme === 'light' ? '' : '#1e1d1d',
                        //     color: theme === 'light' ? '' : '#FFFFFF'
                        // }}
                        >
                            <HomeIcon /> Home
                        </li>
                    </NavLink>
                </button>
                <button className={styles.button}>
                    <NavLink to='/' >
                        <li
                        // style={{
                        //     background: theme === 'light' ? '' : '#1e1d1d',
                        //     color: theme === 'light' ? '' : '#FFFFFF'
                        // }}
                        >
                            <TrendsIcon /> Trends
                        </li>
                    </NavLink>
                </button>
                <button className={styles.button}>
                    <NavLink to='/' >
                        <li
                        // style={{
                        //     background: theme === 'light' ? '' : '#1e1d1d',
                        //     color: theme === 'light' ? '' : '#FFFFFF'
                        // }}
                        >
                            <FavoritesIcon /> Favorites
                        </li>
                    </NavLink>
                </button>
                <button className={styles.button}>
                    <NavLink to='/settings' >
                        <li
                        // style={{
                        //     background: theme === 'light' ? '' : '#1e1d1d',
                        //     color: theme === 'light' ? '' : '#FFFFFF'
                        // }}
                        >
                            <SettingsIcon /> Settings
                        </li>
                    </NavLink>
                </button>

            </ul>
            {/* <div>
                    {/* <ThemeButtons /> 
                    <NavLink to='/signup'>
                        <ButtonSecondary name={'Sign Up'} />
                    </NavLink>
                </div> */}

            <Footer />
            {/* </div> */}
        </div>
    )
}

export default LeftMenu
