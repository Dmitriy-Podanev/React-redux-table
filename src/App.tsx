import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/app/store';
import {Routes} from "./Pages/Routes";
import {Router} from 'react-router-dom';
import {browserHistory} from "./browserHistory";


export function App() {

    return (
        <div className="App">
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Routes/>
                </Router>
            </Provider>
        </div>
    );
}


