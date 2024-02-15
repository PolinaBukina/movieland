import React, { useContext, useReducer, useState } from 'react'
import { act } from 'react-dom/test-utils'
import { useAuthContext } from '../../helpers/authContext'
import { useAuthState } from '../../store/auth/selectors'
import { useRegState } from '../../store/registration/selectors'
import { ArrowRightIcon } from '../Icons/ArrowRightIcon'
import { UserIcon } from '../Icons/UserIcon'
import styles from './styles.module.scss'

type Props = {
    name: string
    symbols: string
}

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
    // const { name, symbols } = props
    //редюсер
    const [state, dispatch] = useReducer(loginReducer, loginInitState)
    // const { isAuthhorized } = useAuthState()
    // const [isLogined, setIsLogined] = useState(false)

    const { username } = useRegState()

    const login = () => dispatch({
        type: 'login',
        username: 'vasuay pupkin',
        initials: 'VP'
    })

    const logout = () => dispatch({
        type: 'logout'
    })

    return (
        // <button className={styles.button}>
        //     <p className={styles.symbols}>
        //         {props.symbols}
        //     </p>
        //     <p>
        //         {name}
        //     </p>
        // </button>

        // <div className={styles.userInfo} >
        <div className={styles.userInfo} onClick={() => state.isLogined ? logout() : login()}>
            {
                state.isLogined ? (
                    <>
                        <button className={styles.button}>
                            <span className={styles.symbols}>
                                {state.initials}
                            </span>
                            <span>
                                {state.username}
                            </span>
                            <ArrowRightIcon />
                            <nav className={styles.menu}>
                                <ul className={styles.menuList}>
                                    <button className={styles.buttonItem}>
                                        <li className={styles.item}>Edit Profile</li>
                                    </button>
                                    <button className={styles.buttonItem}>
                                        <li className={styles.item}>Log Out</li>
                                    </button>
                                </ul>
                            </nav>
                        </button> 
                    </>
                ) : (
                    // <button className={styles.human}>
                    <button className={styles.button}>
                        <span className={styles.symbols}>
                            <UserIcon />
                        </span>
                        <span>
                            Sign In
                        </span>
                        <ArrowRightIcon />
                    </button>
                    // </button>
                )
            }

        </div>

    )
}