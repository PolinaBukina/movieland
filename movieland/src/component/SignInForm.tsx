// import React, { EventHandler, FormEvent, useEffect, useRef, useState } from 'react'
// // import { InputText } from '../../component/InputText/InputText'
// import styles from './styles.module.scss'
// // import { ButtonPrimary } from '../../component/ButtonPrimary/ButtonPrimary'
// // import { Title } from '../../component/Ttitle/Title'
// // import { BackToHomeButton } from '../../component/BackToHomeButton/BackToHomeButton'
// // import { useAppDispatch } from '../../helpers/useAppDispatch'
// // import { signInAction } from '../../store/auth/actions'
// // import { useAuthState } from '../../store/auth/selectors'
// // import { setEmailAction } from '../../store/registration/actions'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// // import { selectTheme } from '../../store/theme/selectors'

// type AuthType = {
//     email: string
//     password: string
//     detail: string
// }

// export const SignInForm = () => {
//     const inputRef = useRef<HTMLInputElement>(null)
//     const [data, setData] = useState<Partial<AuthType>>({})
//     const [errors, setErrors] = useState<Partial<AuthType>>({})
//     const dispatch = useAppDispatch()
//     const authState = useAuthState()
//     const { theme } = useSelector(selectTheme)

//     const navigate = useNavigate()

//     useEffect(() => {
//         setErrors({
//             email: authState.errors?.email
//                 ? authState.errors?.email[0]
//                 : undefined,
//             password: authState.errors?.password
//                 ? authState.errors?.password[0]
//                 : undefined
//         })
//     }, [authState.errors])

//     useEffect(() => {
//         if (authState.isAuthhorized) {
//             navigate('/')
//         }
//     })

//     useEffect(() => {
//         inputRef.current?.focus()
//     })

//     const signIn = (e: FormEvent<HTMLFormElement>): void => {
//         // debugger
//         e.preventDefault()
//         if ((e.target as HTMLInputElement)?.type !== 'submit') {
//             return
//         }

//         if (!data.email || !data.password) {
//             setErrors({
//                 ...errors,
//                 email: data.email ? undefined : 'Заполните Email',
//                 password: data.password ? undefined : 'Заполните Password'
//             })
//             return
//         }

//         if (data.email && data.password) {
//             dispatch(signInAction(data.email, data.password))
//         }
//     }

//     const clearErrors = () => setErrors({})

//     const handleEmail = (email: string) => {
//         setData({
//             ...data,
//             email: email
//         })
//         clearErrors()
//     }

//     const handlePassword = (password: string) => {
//         setData({
//             ...data,
//             password: password
//         })
//         clearErrors()
//     }

//     return (
//         // <div>
//         <form className={styles.form} onClick={signIn}>
//             <div className={`${styles.allInputs} ${theme}`}>

//                 {
//                     authState.errors?.detail && <div style={{ color: 'red' }}>
//                         {authState.errors.detail}
//                     </div>
//                 }
//                 {
//                     errors.email && <div style={{ color: 'red' }}>
//                         {errors.email}
//                     </div>
//                 }
//                 <InputText
//                     name={'Email'}
//                     type={'email'}
//                     placeholder={'Your Email'}
//                     // errors={errors.email}
//                     onChange={handleEmail}
//                 // ref1={inputRef}
//                 />
//                 {
//                     errors.password && <div style={{ color: 'red' }}>
//                         {errors.password}
//                     </div>
//                 }
//                 <InputText
//                     // errors={errors.password}
//                     name={'Password'}
//                     type={'password'}
//                     placeholder={'Your Password'}
//                     onChange={handlePassword}
//                 />
//             </div>
//             <NavLink
//                 to='/reset'
//                 className={styles.forgot}
//                 style={{
//                     color: theme === 'light' ? '' : '#FFFFFF'
//                 }}
//             >
//                 Forgot your password?
//             </NavLink>
//             <ButtonPrimary
//                 name={"Sign In"}
//                 // onClick={() => dispatch(signIn)}
//                 onClick={() => signIn}
//             />
//         </form>
//     )
// }

import React from 'react'

const SignInForm = () => {
    return (
        <div>

        </div>
    )
}

export default SignInForm
