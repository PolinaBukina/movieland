import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useFavoriteState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.favorite
    )
    return selector
}