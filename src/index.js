import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext}  from './store/FirebaseContext'
import {BrowserRouter} from 'react-router-dom'
import { Firebase } from './firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{Firebase}}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FirebaseContext.Provider>
);
