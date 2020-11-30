import {PostType, ProfilePageType} from "./store";

export const addPostAC = (postMessageNew: string) => {
    return {type: "ADD-POST", postMessageNew: postMessageNew} as const
}
export const changeNewTextAC = (newText: string) => {
    return {type: "CHANGE-NEW-TEXT", newText: newText} as const
}

export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>

type initialStateType = {
    messageForNewPost: string
    posts: Array<PostType>
}
let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my firs post', likesCount: 45},
    ],
    messageForNewPost: ""
}
export const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    if (action.type === "ADD-POST") {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: action.postMessageNew,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.messageForNewPost = ""


    } else if (action.type === "CHANGE-NEW-TEXT") {
        state.messageForNewPost = action.newText;

    }
    return state
}