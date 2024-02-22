import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { combineReducers } from "redux"

import { authReducer } from "./auth/reducer"
import { openCardReducer } from "./content/reducer"
import { favoriteReducer } from "./favorites/reducer"
import { burgerReducer } from "./menu/reducer"
import { postsReducer } from "./posts/reducer"
import { recPostsReducer } from "./recposts/reducer"
import { registrationReducer } from "./registration/reduser"
import { searchReducer } from "./search/reducer"
import { tabReducer } from "./tabs/reducer"
import { themeReducer } from "./theme/reducer"

const rootReducer = combineReducers({
    auth: authReducer,
    reg: registrationReducer,
    menu: burgerReducer,
    tabs: tabReducer,
    posts: postsReducer,
    recposts: recPostsReducer,
    theme: themeReducer,
    opencard: openCardReducer,
    search: searchReducer,
    favorite: favoriteReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(). после точки прописываются middleware logger и тд
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export {
    store as appStore
}