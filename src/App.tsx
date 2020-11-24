import React from 'react';


import './App.css';
import Header from "./components/Herader/Header";
import Navbar from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, store, StoreType} from "./Redux/sate";
import {Profile} from "./components/Profile/Profile";


type AppPropsType = {


    store: StoreType

}


export const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState()

    return (

        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path='/dialogs' render={() =>
                        <Dialogs
                            store={props.store}/>}/>



                    <Route path='/profile' render={() =>
                        <Profile
                            dispatch={props.store.dispatch.bind(props.store)}
                            profilePage={state.profilePage}
                            // addPost={props.store.addPost.bind(props.store)}
                            // changeNewText={props.store.changeNewText.bind(props.store)}
                        />}
                           messageForNewPost={state.profilePage.messageForNewPost}


                    />




                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>

                </div>


            </div>
        </BrowserRouter>

    )
}

