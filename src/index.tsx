import React from 'react';

import './index.css';
import { store} from "./Redux/sate";
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

store.subscribe(rerenderEntireTree)
rerenderEntireTree()

