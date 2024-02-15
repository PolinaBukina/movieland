import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setClose, setOpen } from '../../../store/menu/actions'
import { selectMenu } from '../../../store/menu/selectors'
import { FilterIcon } from '../../Icons/FilterIcon'
import styles from './styles.module.scss'

export const SearchControl = () => {
    const [isOpen, setIsOpen] = useState(false)
    // const { text } = useSearchState()

    const toggleTextField = () => {
        setIsOpen(!isOpen)
    }

    // const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    //     dispatch(saveTextAction(e.target.value))
    // }

    // const handleClear = () => {
    //     dispatch(saveTextAction(''))
    // }

    // const handleEnterSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         dispatch(startSearchAction())
    //         navigate('/search')
    //     }
    // }

    const handleFilter = () => {

    }

    const { isOpened } = useSelector(selectMenu)
    const dispatch = useDispatch()

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
                        // value={text}
                        className={styles.input}
                        // onChange={handleText}
                        // onKeyDown={handleEnterSearch}
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
