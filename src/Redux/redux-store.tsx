import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
let reducer = combineReducers({

    profileReducer:profileReducer,
    dialogReducer:dialogReducer,
    sidebarReducer:sidebarReducer

})
export  type RootStoreType = ReturnType<typeof  reducer>
export let store = createStore(reducer)