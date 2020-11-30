import React from "react"
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType } from "../../Redux/store";


type ProfilePropsType = {


    profilePage: ProfilePageType



    dispatch: (action: ActionsTypes) => void

}

export const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>

        <MyPosts profilePage={props.profilePage}
                 dispatch={props.dispatch}
        />
    </div>
}
