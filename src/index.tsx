import React from 'react';

import './index.css';
import {store} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import {App} from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree();
})

