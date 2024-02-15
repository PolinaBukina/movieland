import React, { ReactNode, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useThemeContext } from '../../helpers/themeContext'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { useSelector } from 'react-redux'
// import { selectTheme } from '../../store/theme/selectors'
// import LeftMenu from '../LeftMenu/LeftMenu'
import { selectMenu } from '../../store/menu/selectors'
import LeftMenu from '../Menu/LeftMenu/LeftMenu'
import { selectTheme } from '../../store/theme/selectors'
import RightMenu from '../Menu/RightMenu/RightMenu'
// import { CardPost3 } from '../CardPost3/CardPost3'

const Layout = () => {
    // const themeCtx = useThemeContext()
    const { theme } = useSelector(selectTheme)
    const { isOpened } = useSelector(selectMenu)

    return (
        <div className={theme}>

            <Header />
            <main className='main'>
                {/* <div className='header'> */}

                {/* </div> */}
                <RightMenu />
                <div className='leftMenu'>
                    <LeftMenu />
                </div>
                <div className='content'>
                    <Outlet />
                </div>
            </main>
            
            {/* <Footer /> */}
            {/* 
            <Header />
            <RightMenu />
            <LeftMenu />
            <main className='main'>
                <Outlet />
            </main>
            <Footer /> */}

        </div>
    )
}

export default Layout