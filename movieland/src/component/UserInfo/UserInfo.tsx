import React, { useContext, useReducer, useState } from 'react'
import { act } from 'react-dom/test-utils'
import { useAuthContext } from '../../helpers/authContext'
import { useAuthState } from '../../store/auth/selectors'
import { useRegState } from '../../store/registration/selectors'
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
                            <span className={styles.symbols}> {state.initials} </span>
                            <span> {state.username} </span>
                        </button>
                        <nav className={styles.menu}>
                            <ul className={styles.menuList}>
                                <li className={styles.item}>Edit Profile</li>
                                <li className={styles.item}>Log Out</li>
                            </ul>
                        </nav>
                    </>
                ) : (
                    <button className={styles.human}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                    </button>
                )
            }

        </div>

    )
}