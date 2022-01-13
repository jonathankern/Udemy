import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import { fetchAuthenticated } from "./actions/account";
import './index.css';

const history = createBrowserHistory();

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

// Don't render app until fetch authenticated request has completed 
store.dispatch(fetchAuthenticated())
    .then(() => {
        render(
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path='/' component={Root} />
                        <Route path='/account-dragons' component={AccountDragons} />
                    </Switch>
                </Router>
            </Provider>,
            document.getElementById('root')
        );
    });

