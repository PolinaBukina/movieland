import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useOpenState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.opencard
    )
    return selector
}