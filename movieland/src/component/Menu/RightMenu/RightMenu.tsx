import { useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { selectMenu } from '../../../store/menu/selectors'
import { ButtonSecondary } from '../../Buttons/ButtonSecondary/ButtonSecondary'

import React, { ChangeEvent, FormEvent, MouseEvent } from 'react'
import { CloseIcon } from '../../Icons/CloseIcon'
import { Tabs2 } from '../../Tabs2/Tabs2'
import { ButtonPrimary } from '../../Buttons/ButtonPrimary/ButtonPrimary'
import { setClose } from '../../../store/menu/actions'
import { useSearchState } from '../../../store/search/selectors'
import {
    clearTextAction,
    saveGenreAction,
    saveTextAction,
    startSearchAction,
    saveRatingsToAction,
    saveRatingsFromAction,
    saveYearsToAction,
    saveYearsFromAction,
    saveCountryAction
} from '../../../store/search/actions'
import { useAppDispatch } from '../../../helpers/useAppDispatch'
import { selectTheme } from '../../../store/theme/selectors'

export const RightMenu = () => {
    const { isOpened } = useSelector(selectMenu)
    const { theme } = useSelector(selectTheme)
    const dispatch = useAppDispatch()
    const close = () => dispatch(setClose())

    const { text, genre, yearsFrom, yearsTo, ratingFrom, ratingTo } = useSearchState()
    const navigate = useNavigate()

    const handleText = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(saveTextAction(e.target.value))
    }

    const handleGenre = (e: ChangeEvent<HTMLInputElement>) => { // 
        dispatch(saveGenreAction(e.target.value))
    }

    const handleCountry = (e: ChangeEvent<HTMLSelectElement>) => { // 
        dispatch(saveCountryAction(e.target.value)) //
    }

    const handleYearsFrom = (e: ChangeEvent<HTMLInputElement>) => { // 
        dispatch(saveYearsFromAction(e.target.value))
    }

    const handleYearsTo = (e: ChangeEvent<HTMLInputElement>) => { // 
        dispatch(saveYearsToAction(e.target.value))
    }

    const handleRatingFrom = (e: ChangeEvent<HTMLInputElement>) => { // 
        dispatch(saveRatingsFromAction(e.target.value))
    }

    const handleRatingTo = (e: ChangeEvent<HTMLInputElement>) => { // 
        dispatch(saveRatingsToAction(e.target.value))
    }

    const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type === 'submit') {
            dispatch(clearTextAction('', '', '', '', '', ''))
        }

    }

    const handleSearch = (e: FormEvent<HTMLFormElement>): void => {

        e.preventDefault()
        if ((e.target as HTMLInputElement)?.type === 'submit') {
            navigate('/search')
        }

        dispatch(startSearchAction()) //
    }

    if (!isOpened) {
        return null
    }

    return (
        <form className={`${styles.menu} ${theme}`} onClick={handleSearch}
            style={{
                background: theme === 'light' ? '#FFFFFF' : ''
            }}
        >
            <div className={styles.content}>
                <div className={styles.header}>
                    <p
                        style={{
                            color: theme === 'light' ? '#242426' : ''
                        }}
                    >
                        Filters
                    </p>
                    <button className={styles.buttonClose} onClick={close} >
                        <CloseIcon />
                    </button>
                </div>
                <div className={styles.tab}>
                    <p
                        style={{
                            color: theme === 'light' ? '#242426' : ''
                        }}
                    >
                        Sort by
                    </p>
                    <Tabs2 />
                </div>
                <div className={styles.filterMovie}>
                    <div>
                        <p
                            style={{
                                color: theme === 'light' ? '#242426' : ''
                            }}
                        >
                            Full or short movie name
                        </p>
                        <input
                            id={'search'}
                            type="text"
                            value={text}
                            className={styles.input}
                            onChange={handleText}
                            // onKeyDown={handleNameSearch}
                            placeholder={'Your Text'}
                        />
                    </div>
                    <div className={styles.country}>
                        <p
                            style={{
                                color: theme === 'light' ? '#242426' : ''
                            }}
                        >
                            Country
                        </p>
                        <select className={styles.select} onChange={handleCountry}>
                            <option className={styles.option} value="" >
                                Select Country
                            </option>
                            <option className={styles.option} value="Germany">
                                Germany
                            </option>
                            <option className={styles.option} value="United States">
                                United States
                            </option>
                            <option className={styles.option} value="Canada">
                                Canada
                            </option>
                            <option className={styles.option} value="Japan">
                                Japan
                            </option>
                        </select>
                    </div>
                    <div>
                        <p
                            style={{
                                color: theme === 'light' ? '#242426' : ''
                            }}
                        >
                            Genre
                        </p>
                        <input
                            id={'search1'}
                            type="text"
                            value={genre}
                            className={styles.input}
                            onChange={handleGenre}
                            // onKeyDown={handleGenreSearch}
                            placeholder={'Your Text'}
                        />
                    </div>
                    <div className={styles.years}>
                        <p
                            style={{
                                color: theme === 'light' ? '#242426' : ''
                            }}
                        >
                            Years
                        </p>
                        <div className={styles.yearsInput}>
                            <input
                                id={'search2'}
                                type="text"
                                value={yearsFrom}
                                className={styles.input}
                                onChange={handleYearsFrom}
                                // onKeyDown={handleEnterSearch}
                                placeholder={'From'}
                            />
                            <input
                                id={'search2'}
                                type="text"
                                value={yearsTo}
                                className={styles.input}
                                onChange={handleYearsTo}
                                // onKeyDown={handleEnterSearch}
                                placeholder={'To'}
                            />
                        </div>
                    </div>
                    <div className={styles.years}>
                        <p
                            style={{
                                color: theme === 'light' ? '#242426' : ''
                            }}
                        >
                            Rating
                        </p>
                        <div className={styles.yearsInput}>

                            <input
                                id={'search2'}
                                type="text"
                                value={ratingFrom}
                                className={styles.input}
                                onChange={handleRatingFrom}
                                // onKeyDown={handleEnterSearch}
                                placeholder={'From'}
                            />
                            <input
                                id={'search2'}
                                type="text"
                                value={ratingTo}
                                className={styles.input}
                                onChange={handleRatingTo}
                                // onKeyDown={handleEnterSearch}
                                placeholder={'To'}
                            />
                        </div>

                    </div>
                </div>

            </div>
            <div className={styles.buttonsBottom}>
                <ButtonSecondary name={'Clear filter'} onClick={() => handleClear} />
                <ButtonPrimary name={'Show results'} onClick={() => handleSearch} />
            </div>
        </form >
    )
}