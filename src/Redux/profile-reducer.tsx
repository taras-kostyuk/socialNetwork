import {ActionsTypes, PostType, RootStateType, StoreType} from "./sate";
export const addPostAC = (postMessageNew: string) => {
    return {
        type: "ADD-POST",
        postMessageNew: postMessageNew
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

export const profileReducer = (state:RootStateType, action:ActionsTypes)=> {
    if (action.type === "ADD-POST") {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: action.postMessageNew,
            likesCount: 0
        }
        state.profilePage.posts.push(newPost)
        state.profilePage.messageForNewPost = ""


    } else if (action.type === "CHANGE-NEW-TEXT") {
        state.profilePage.messageForNewPost = action.newText;

    }
    return state
}