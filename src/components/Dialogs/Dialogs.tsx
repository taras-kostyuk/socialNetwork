import React from "react";
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessage, updateNewMessageBody} from "../../Redux/dialogs-reducer";
import {StoreType} from "../../Redux/store";
// import { sendMessage, StoreType} from "../../Redux/store";
// import {updateNewMessageBody} from "../../Redux/dialogs-reducer";

type DialogsPropsType = {
    store: StoreType

}

export const Dialogs = (props: DialogsPropsType) => {
let state = props.store.getState().dialogsPage
    let dialogsElements =
        state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements =
        state.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    /*let addMessage = () => {
        alert(newMessageElement.current?.value)
    }*/

    let newMessageBody = state.updateNewMessageBody
    let onSendMessageClick = () => {
props.store.dispatch(sendMessage())
    }
    let onNewMessageChange = (e:any) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBody(body))
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        placeholder="Enter your message"

                        value={newMessageBody}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>


            </div>
        </div>
    )
}
