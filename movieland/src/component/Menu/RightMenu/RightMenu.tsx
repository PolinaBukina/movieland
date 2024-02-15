import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.scss'
// import { selectMenu } from '../../store/menu/selectors'
// import { UserInfo } from '../UserInfo/UserInfo'
// import { ThemeButtons } from '../ThemeButtons/ThemeButtons'
// import { ButtonSecondary } from '../ButtonSecondary/ButtonSecondary'
import { NavLink } from 'react-router-dom'
import { selectMenu } from '../../../store/menu/selectors'
import { useAuthState } from '../../../store/auth/selectors'
import { UserInfo } from '../../UserInfo/UserInfo'
import { ButtonSecondary } from '../../Buttons/ButtonSecondary/ButtonSecondary'
// import { useAuthState } from '../../store/auth/selectors'
// import { selectTheme } from '../../store/theme/selectors'

// const RightMenu = () => {
//     const { isOpened } = useSelector(selectMenu)
//     const { isAuthhorized } = useAuthState()
//     // const { theme } = useSelector(selectTheme)

//     if (!isOpened) {
//         return null
//     }

//     // const [data, setData] = useState<BlogPostType[]>([])
//     // const url = 'https://mockside.vercel.app/api/images/?limit=4'

//     // useEffect(() => {
//     //     fetch(url)
//     //         .then(res => res.json())
//     //         .then(res => setData(res.items))
//     // }, [])

//     // return (
//     //     <div>
//     //         {
//     //             data.map(item => (
//     //                 <div>
//     //                     <img src={item.url} alt="картинка" />
//     //                 </div>
//     //             ))
//     //         }
//     //     </div>
//     // )

//     // const active = theme

//     return (
//         <div
//             className={`${styles.menu}`}
//         // className={`${styles.menu} ${theme}`}
//         // style={{ background: theme == 'light' ? '#FFFFFF' : '#1e1d1d' }}
//         >
//             <ul >
//                 {
//                     isAuthhorized && (
//                         <UserInfo />
//                     )
//                 }

//                 {/* {data.map((item, index) => (
//                     <button className={styles.button}>
//                         <li key={index}>{item}</li>
//                     </button>
//                 ))} */}
//                 {/* <NavLink to='/'>
//                     <button className={styles.button}>
//                         <li>Home</li>
//                     </button>
//                 </NavLink>
//                 <NavLink to='/addpost'>
//                     <button className={styles.button}>
//                         <li>Add post</li>
//                     </button>
//                 </NavLink> */}
//                 <button className={styles.button}>
//                     <NavLink to='/' >
//                         <li
//                         // style={{
//                         //     background: theme === 'light' ? '' : '#1e1d1d',
//                         //     color: theme === 'light' ? '' : '#FFFFFF'
//                         // }}
//                         >Home</li>
//                     </NavLink>
//                 </button>
//                 {
//                     isAuthhorized && (
//                         <button className={styles.button} >
//                             <NavLink to='/addpost'>
//                                 <li
//                                 // style={{
//                                 //     background: theme === 'light' ? '' : '#1e1d1d',
//                                 //     color: theme === 'light' ? '' : '#FFFFFF'
//                                 // }}
//                                 >Add post</li>
//                             </NavLink>
//                         </button>
//                     )
//                 }
//             </ul>
//             <div>
//                 {/* <ThemeButtons /> */}
//                 <NavLink to='/signup'>
//                     <ButtonSecondary name={'Sign Up'} />
//                 </NavLink>
//             </div>
//         </div>
//     )
// }

// export default RightMenu


import React from 'react'
import { CloseIcon } from '../../Icons/CloseIcon'
import { Tabs2 } from '../../Tabs2/Tabs2'
import { ButtonPrimary } from '../../Buttons/ButtonPrimary/ButtonPrimary'
import { setClose } from '../../../store/menu/actions'

const RightMenu = () => {
    const { isOpened } = useSelector(selectMenu)
    const { isAuthhorized } = useAuthState()
    const dispatch = useDispatch()
    const close = () => dispatch(setClose())

    if (!isOpened) {
        return null
    }

    return (
        <div className={styles.menu}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p>Filters</p>
                    <button className={styles.buttonClose} onClick={close} >
                        <CloseIcon />
                    </button>
                </div>
                <div className={styles.tab}>
                    <p>Sort by</p>
                    <Tabs2 />
                </div>
                <div className={styles.filterMovie}>
                    <div>
                        <p>Full or short movie name</p>
                        {/* <textarea /> */}
                        <input />
                    </div>
                    <div>
                        <p>Genre</p>
                        {/* <textarea /> */}
                        <input />
                    </div>
                    <div>
                        <p>Years</p>
                        <input />
                        <input />
                    </div>
                    <div>
                        <p>Rating</p>
                        <input />
                        <input />
                    </div>
                    <div>
                        <p>Country</p>
                        <select>
                            <option value="">-- Выберите город --</option>
                            <option value="petersburg">Санкт-Петербург</option>
                            <option value="samara">Самара</option>
                            <option value="perm">Пермь</option>
                            <option value="novosibirsk">Новосибирск</option>
                        </select>
                    </div>
                </div>
                <div className={styles.buttonsBottom}>
                    <ButtonSecondary name={'Clear filter'} />
                    <ButtonPrimary name={'Show results'} />
                </div>
            </div>
        </div>
    )
}

export default RightMenu
