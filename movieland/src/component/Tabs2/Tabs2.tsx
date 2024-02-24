import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigate, NavigateFunction, useNavigate } from 'react-router-dom'
// import { setTabAction } from '../../store/tabs/actions'
// import { selectTabs } from '../../store/tabs/selectors'
import styles from './styles.module.scss'
import { selectTheme } from '../../store/theme/selectors'
import { selectTabs } from '../../store/tabs/selectors'
import { setTabAction } from '../../store/tabs/actions'


type Props = {
    text: string
    active?: boolean
    // navigate: () => void
    onTabClick: () => void
}

export const Tab = ({ text, active, onTabClick }: Props) => {
    const isActiveStyle = active ? styles.active : ''

    return (
        <div className={`${styles.tab} ${isActiveStyle}`} onClick={onTabClick}>
            {text}
        </div>
    )
}

export const Tabs2 = () => {
    // const [activeTabIndex, setActiveTabIndex] = useState(0)
    // const tabs = ['All', 'My favorites', 'Popular']

    const { tabs, activeIndex, activeTab } = useSelector(selectTabs)
    const { theme } = useSelector(selectTheme)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const changeTabHandler = (index: number) => {
        dispatch(setTabAction(index))
    }

    return (
        <div className={`${styles.all} ${theme}`}>
            <div className={styles.tabsWrapper}>
                <div className={styles.tabs}
                    style={{
                        color: theme === 'light' ? '' : '#FFFFFF'
                    }}
                >
                    {
                        tabs.map((currentTabName, index) => (
                            <Tab
                                key={currentTabName}
                                text={currentTabName}
                                active={index === activeIndex}
                                onTabClick={() => changeTabHandler(index)}
                            // navigate={() => navigateTabHandler(currentTabName)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
