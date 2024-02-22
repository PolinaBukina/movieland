import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../helpers/useAppDispatch'
import { setClose, setOpen } from '../../../store/menu/actions'
import { selectMenu } from '../../../store/menu/selectors'
import { saveTextAction, startSearchAction } from '../../../store/search/actions'
import { useSearchState } from '../../../store/search/selectors'
import { FilterIcon } from '../../Icons/FilterIcon'
import styles from './styles.module.scss'

export const SearchControl = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { isOpened } = useSelector(selectMenu)
    const { text } = useSearchState()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const toggleTextField = () => {
        setIsOpen(!isOpen)
    }

    const handleText = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(saveTextAction(e.target.value))
    }

    // const handleClear = () => {
    //     dispatch(saveTextAction(''))
    // }

    const handleEnterSearch = (e: KeyboardEvent<HTMLInputElement>) => {

        // dispatch(startSearchAction())
        // navigate('/search')

        if (e.key === 'Enter') {
            dispatch(startSearchAction())
            navigate('/search')
        }
    }

    const handleFilter = () => {

    }

    const open = () => dispatch(setOpen())
    const close = () => dispatch(setClose())

    return (
        <div className={styles.container}>
            {
                // isOpen &&
                <div className={styles.containerSearch}>
                    <input
                        id={'search'}
                        type="text"
                        value={text}
                        className={styles.input}
                        onChange={handleText}
                        onKeyDown={handleEnterSearch}
                        placeholder={'Search...'}
                    />
                    <button className={styles.button} onClick={() => isOpened ? close() : open()} >
                        <FilterIcon />
                    </button>
                    {/* <input type="button" value={'search'} onChange={handleSearch} /> */}
                </div>
            }
        </div>
    )
}
