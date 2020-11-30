import {DialogPageType} from "./store";

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

export  type ActionType = ReturnType<typeof sendMessage > | ReturnType<typeof updateNewMessageBody >
/*type InitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    updateNewMessageBody: string
    sendMessage: string
}*/

let initialState:DialogPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}

    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'YO'},
    ],
    updateNewMessageBody: "",
    sendMessage: ""


}

export const dialogReducer = (state:DialogPageType = initialState, action:ActionType) => {


    if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        state.updateNewMessageBody = action.body
    } else if (action.type === "SEND-MESSAGE") {
        let body = state.updateNewMessageBody
        state.updateNewMessageBody = ""
        state.messages.push({id: 6, message: body})
    }
    return state
}