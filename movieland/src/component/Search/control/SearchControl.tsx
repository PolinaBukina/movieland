import React, { useState } from 'react'
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
                    <button className={styles.button} onClick={handleFilter} >
                        {/* <CancelIcon /> */}
                        <FilterIcon />
                    </button>
                    {/* <input type="button" value={'search'} onChange={handleSearch} /> */}
                </div>
            }
        </div>
    )
}
