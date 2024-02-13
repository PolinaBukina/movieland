import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { combineReducers } from "redux"

import { authReducer } from "./auth/reducer"
import { registrationReducer } from "./registration/reduser"

const rootReducer = combineReducers({
    auth: authReducer,
    reg: registrationReducer
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