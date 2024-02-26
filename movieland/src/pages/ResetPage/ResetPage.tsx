import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { InputText } from '../../component/InputText/InputText'
import styles from './styles.module.scss'
import { Title } from '../../component/Ttitle/Title'
import { signInAction } from '../../store/auth/actions'
import { useAppDispatch } from '../../helpers/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { ButtonPrimary } from '../../component/Buttons/ButtonPrimary/ButtonPrimary'
import { ResetForm } from '../../component/Forms/ResetForm/ResetForm'
import { SignInForm } from '../../component/Forms/SignInForm/SignInForm'
import { Footer } from '../../component/Footer/Footer'

export const ResetPage = () => {
    return (
        <div className={styles.container}>
            <ResetForm />
            <Footer />
        </div>

    )
}