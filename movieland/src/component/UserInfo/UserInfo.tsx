import React, { useReducer} from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectTheme } from '../../store/theme/selectors'
import { ArrowRightIcon } from '../Icons/ArrowRightIcon'
import { UserIcon } from '../Icons/UserIcon'
import styles from './styles.module.scss'

// создание редюсера
type LoginState = {
    isLogined: boolean
    username?: string
    initials?: string
}

type LoginAction = {
    type: string // здесь он всегда (положи деньги забери деньги)
    username?: string
    initials?: string
}

const loginInitState: LoginState = {
    isLogined: false,
    username: undefined,
    initials: undefined
}

//редюсер всегда принемает текущее состояние и возвращает новое состояние
const loginReducer = (state: LoginState, action: LoginAction): LoginState => { //state i action здесь всегда!! state - предыдущее состояние, или текущее на данный момент
    switch (action.type) {
        case 'login':
            return {
                isLogined: true,
                username: action.username,
                initials: action.initials
            }
        case 'logout':
            return {
                isLogined: false
            }
        default:
            return state
    }
}


export const UserInfo = () => {
    const [state, dispatch] = useReducer(loginReducer, loginInitState)
    const { theme } = useSelector(selectTheme)

    const login = () => dispatch({
        type: 'login',
        username: 'Polina Bukina',
        initials: 'PB'
    })

    const logout = () => dispatch({
        type: 'logout'
    })

    return (
        <div className={`${styles.userInfo} ${theme}`} onClick={() => state.isLogined ? logout() : login()}>
            {
                state.isLogined ? (
                    <>
                        <button className={styles.button}>
                            <span className={styles.symbols}
                                style={{
                                    color: theme === 'light' ? '#242426' : ''
                                }}
                            >
                                {state.initials}
                            </span>
                            <span
                                style={{
                                    color: theme === 'light' ? '#242426' : ''
                                }}
                            >
                                {state.username}
                            </span>
                            <ArrowRightIcon />
                            <nav className={styles.menu}
                                style={{
                                    background: theme === 'light' ? '#FFFFFF' : ''
                                }}
                            >
                                <ul className={styles.menuList}
                                >
                                    <button className={styles.buttonItem}>
                                        <NavLink to='/signin'>
                                            <li className={styles.item}
                                                style={{
                                                    color: theme === 'light' ? '#242426' : ''
                                                }}
                                            >
                                                Edit Profile
                                            </li>
                                        </NavLink>
                                    </button>
                                    <button className={styles.buttonItem}>
                                        <li className={styles.item} onClick={logout}
                                            style={{
                                                color: theme === 'light' ? '#242426' : ''
                                            }}
                                        >
                                            Log Out
                                        </li>
                                    </button>
                                </ul>
                            </nav>
                        </button>
                    </>
                ) : (
                    <button className={styles.button}>
                        <span className={styles.symbols}>
                            <UserIcon />
                        </span>
                        <span
                            style={{
                                color: theme === 'light' ? '#242426' : ''
                            }}>
                            Sign In
                        </span>
                        <ArrowRightIcon />
                    </button>
                )
            }

        </div>

    )
}