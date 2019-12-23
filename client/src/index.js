import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from '../redux/'

import './index.css';
import ProgramsPage from './containers/Programs/ProgramsPage';
import 'semantic-ui-css/semantic.min.css'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<body>
<Router>
    <Switch>
        <Route path="/programs">
            <ProgramsPage /> 
        </Route>
    </Switch> 
</Router>
</body>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
