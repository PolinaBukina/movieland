import { BurgerAction } from "./types"

export const setOpen = (): BurgerAction => ({
    type: 'open'
})

export const setClose = (): BurgerAction => ({
    type: 'close'
})
