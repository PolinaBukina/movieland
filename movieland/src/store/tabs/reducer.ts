import { TabAction, TabState } from "./types"

export const initState: TabState = {
    activeTab: 'All',
    activeIndex: 0,
    tabs: ['All', 'Favorites', 'Popular']
}

export const tabReducer = (state = initState, action: TabAction): TabState => { //state i action здесь всегда!! state - предыдущее состояние, или текущее на данный момент
    switch (action.type) {

        case 'SET_TAB':
            return {
                ...state,
                activeIndex: action.tabIndex,
                activeTab: state.tabs[action.tabIndex]
            }

        default:
            return state

    }
}