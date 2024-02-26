import styles from './styles.module.scss'
import { useState } from 'react'
import { getByPlaceholderText } from '@testing-library/react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/theme/selectors'
// import { selectTheme } from '../../store/theme/selectors'

type Props = {
    name?: string
    placeholder: string
    type: string
    value?: string
    ref1?: React.RefObject<HTMLInputElement>
    onChange?: (text: string) => void

    errors?: string // добавить вывод ошибок 
}

export const InputText = ({ name, ref1, placeholder, type, value, errors, onChange }: Props) => {
    const [text, setText] = useState(value)

    const { theme } = useSelector(selectTheme)

    const func = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
        onChange && onChange(e.currentTarget.value)
    }

    return (
        <>
            <label className={`${styles.label} ${theme}`}
                style={{
                    background: theme === 'light' ? '#FFFFFF' : '',
                    color: theme === 'light' ? '#000000' : ''
                }}
            >
                <label
                // style={{
                //     color: theme === 'light' ? '#FFFFFF' : ''
                // }}
                >
                    {name}
                </label>
                <input
                    ref={ref1}
                    className={`${styles.input} ${errors ? styles.errorInput : ''}`}
                    type={type}
                    placeholder={placeholder}
                    onInput={func}
                    value={text}
                    style={{
                        background: theme === 'light' ? '#F3F3F3' : '',
                        // border: theme === 'light' ? '#black' : '',
                    }}
                // class={}
                // defaultValue={'прилоьная штука'}
                />
                {
                    errors && <div className={styles.errorMessage}>
                        {errors}
                    </div>
                }
            </label>
        </>
    )
}