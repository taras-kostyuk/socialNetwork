import {ActionsTypes, RootStateType, SidebarType} from "./store";
/*type InitialStateType = {

}*/
let initialState : SidebarType = {

}


export const sidebarReducer = (state:SidebarType = initialState , action:ActionsTypes)=> {
    return state
}