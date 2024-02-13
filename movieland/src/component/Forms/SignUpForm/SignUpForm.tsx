import {
    FormEvent,
    useEffect,
    useRef,
    useState
} from 'react'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { InputText } from '../../InputText/InputText'
import { ButtonPrimary } from '../../Buttons/ButtonPrimary/ButtonPrimary'
import { useRegState } from '../../../store/registration/selectors'
import { useAppDispatch } from '../../../helpers/useAppDispatch'
import {
    sendRegDataAction,
    setUsernameAction
} from '../../../store/registration/actions'
import { Title } from '../../Ttitle/Title'

type RegType = {
    username: string
    email: string
    password: string
    detail: string
}

export const SignUpForm = () => {
    const formData = useRegState()
    const dispatch = useAppDispatch()
    const [errors, setErrors] = useState<Partial<RegType>>({})
    const navigate = useNavigate()

    const [data, setData] = useState<Partial<RegType>>({})

    useEffect(() => {
        if (formData.isSuccecRegistration) {
            navigate('activate')
        }
    }, [formData])

    const clearErrors = () => setErrors({})

    const handleName = (username: string) => {
        setData({
            ...data,
            username: username
        })
        clearErrors()
    }

    const handleEmail = (email: string) => {
        setData({
            ...data,
            email: email
        })
        clearErrors()
    }

    const handlePassword = (password: string) => {
        setData({
            ...data,
            password: password
        })
        clearErrors()
    }

    const signUp = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type !== 'submit') {
            return
        }
        if (!data.username || !data.email || !data.password) {
            setErrors({
                ...errors,
                username: data.username ? undefined : 'Заполните Name',
                email: data.email ? undefined : 'Заполните Email',
                password: data.password ? undefined : 'Заполните Password'
            })
            return
        }

        if (data.email && data.password && data.username) {
            dispatch(sendRegDataAction())
        }
    }

    return (
        <form action="" className={styles.form} onClick={signUp}>
            <div>
                {
                    formData.isSuccecRegistration?.toString()
                }
            </div>
            <div>
                {
                    formData.isSuccecRegistration === false
                    && JSON.stringify(formData.errors)
                }
            </div>

            <div className={styles.allInputs}>
                <Title name={'Sign Up'} />
                {
                    formData.isSuccecRegistration?.toString()
                }

                <InputText
                    name={'Name'}
                    type={'text'}
                    placeholder={'Your Name'}
                    errors={errors.username}
                    value={formData.username}
                    onChange={(text: string) => {
                        dispatch(setUsernameAction(text))
                    }}
                />
                <InputText
                    name={'Email'}
                    type={'email'}
                    placeholder={'Your Email'}
                    errors={errors.email}
                    value={formData.email}
                    onChange={(text: string) => {
                        dispatch(setUsernameAction(text))
                    }}
                />
                <InputText
                    name={'Password'}
                    type={'password'}
                    placeholder={'Your Password'}
                    errors={errors.password}
                    value={formData.password}
                    onChange={(text: string) => {
                        dispatch(setUsernameAction(text))
                    }}
                />

                <InputText
                    name={'Confirm Password'}
                    type={'password'}
                    placeholder={'Confirm Password'}
                    errors={errors.password}
                    value={formData.password}
                    onChange={(text: string) => {
                        dispatch(setUsernameAction(text))
                    }}
                />
            </div>
            <ButtonPrimary
                name={"Sign Up"}
                onClick={() => signUp}
            />
            {/* <p className={styles.sign}>Already have an account? <NavLink to={'/signin'}>Sign in</NavLink></p> */}
            <NavLink
                to={'/signin'}
                className={styles.signin}
            >
                Already have an account? <span>Sign In</span>
            </NavLink>
        </form>
    )
}