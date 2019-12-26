import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './redux/reducers/index';

import './index.css';
import ProgramsPage from './containers/ProgramsPage';
import SectionPage from './containers/SectionPage';
import 'semantic-ui-css/semantic.min.css';

import * as serviceWorker from './serviceWorker';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
        }
        return (
            <Router>
            <Switch>
                <Route path="/programs" exact component={ProgramsPage} />
                <Route path="/programs/:program" component={SectionPage}/>
                <Route path="*" component={ProgramsPage} />
            </Switch> 
            </Router>
        );
      }


}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
