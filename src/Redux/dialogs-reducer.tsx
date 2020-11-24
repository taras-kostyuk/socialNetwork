import {ActionsTypes, PostType, RootStateType} from "./sate";

export const updateNewMessageBody = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const

}
export const sendMessage = () => {
    return {
        type: "SEND-MESSAGE",

    } as const
}

export const dialogReducer = (state:RootStateType, action:ActionsTypes) => {


    if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        state.dialogsPage.updateNewMessageBody = action.body
    } else if (action.type === "SEND-MESSAGE") {
        let body = state.dialogsPage.updateNewMessageBody
        state.dialogsPage.updateNewMessageBody = ""
        state.dialogsPage.messages.push({id: 6, message: body})
    }
    return state
}