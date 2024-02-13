import { createContext, ReactNode, useContext, useReducer } from 'react'
// import { setDarkThemeAction, setLightThemeAction } from '../store/theme/actions'
// import { themeReducer, themeInitState } from '../store/theme/reducer'
// import { ThemeState } from '../store/theme/types'

type ThemeContextType = {
    // state: ThemeState
    setLight: () => void
    setDark: () => void
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType) //создание контекста

type ProviderProps = {
    children: ReactNode
}

export const ThemeContextProvider = ({ children }: ProviderProps) => {
    // const [state, dispatch] = useReducer(themeReducer, themeInitState)

    const value = {
        // state,
        // setLight: () => dispatch(setLightThemeAction()),
        // setDark: () => dispatch(setDarkThemeAction())
    }

    return (
        // <ThemeContext.Provider value={value}>
        //     {children}
        // </ThemeContext.Provider>
        <div>

        </div>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}



// с использование state

// import { createContext, ReactNode, useContext, useState } from 'react'

// type ThemeState = 'light' | 'dark'

// // const themeState: ThemeState = {
// //     theme: 'light'
// // }
// // const themeState: ThemeState = {} as ThemeState

// type ThemeContextType = {
//     state: ThemeState
//     setState: React.Dispatch<React.SetStateAction<ThemeState>>
// }

// export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType) //создание контекста

// type ProviderProps = {
//     // children: JSX.Element
//     children: ReactNode // позволяет пихать много элементов внурть нашего компонента
// }

// export const ThemeContextProvider = ({ children }: ProviderProps) => {
//     const [state, setState] = useState<ThemeState>('light')

//     const value = {
//         state,
//         setState
//     }

//     return (
//         <ThemeContext.Provider value={value}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// export const useThemeContext = () => {
//     return useContext(ThemeContext)
// }