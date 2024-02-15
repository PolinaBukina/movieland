import { BurgerAction, BurgerState } from "./types"

const burgerInitState: BurgerState = {
    isOpened: false
}

export const burgerReducer = (state = burgerInitState, action: BurgerAction): BurgerState => {
    switch (action.type) {
        case 'open':
            return {
                isOpened: true
            }
        case 'close':
            return {
                isOpened: false
            }
        default:
            return state
    }
}