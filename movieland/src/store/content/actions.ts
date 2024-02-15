import { BlogPostType } from "../posts/types"
import { AppThunk } from "../store"
import { OpenAction } from "./types"

export const saveIdAction = (id: string): OpenAction => {
    return {
        type: 'SAVE_OPEN_CARD',
        id: id
    }
}

export const saveOpenDataAction = (
    text: string,
    title: string,
    image: string
): OpenAction => {
    return {
        type: 'SAVE_OPEN_DATA',
        text: text,
        title: title,
        image: image
        // data: data
    }
}

export const startOpenAction = (): AppThunk => {
    return (dispatch, getState) => {
        const id = getState().opencard.id

        const url = `https://studapi.teachmeskills.by/blog/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(saveOpenDataAction(data.text, data.title, data.image))
                console.log(url)
                console.log(data)
            })
    }
}