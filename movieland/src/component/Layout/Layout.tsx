import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { useSelector } from 'react-redux'
import LeftMenu from '../Menu/LeftMenu/LeftMenu'
import { selectTheme } from '../../store/theme/selectors'
import { RightMenu } from '../Menu/RightMenu/RightMenu'

const Layout = () => {
    const { theme } = useSelector(selectTheme)

    return (
        <div className={theme}>
            <Header />
            <main className='main'>
                <RightMenu />
                <div className='leftMenu'>
                    <LeftMenu />
                </div>
                <div className='content'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Layout