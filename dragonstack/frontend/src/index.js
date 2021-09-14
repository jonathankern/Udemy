import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import { generationReducer } from './reducers';
import { generationActionCreator } from './actions/generation';
import './index.css';

const store = createStore(
    generationReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log('store state update', store.getState())); // log current state of store, subscribe is a listener

fetch('http://localhost:3000/generation')
    .then(response => response.json())
    .then(json => {
        store.dispatch(generationActionCreator(json.generation))
    });

render(
    <Provider store={store}>
        <div>
            <h2>Dragon Stack from React</h2>
            <Generation />
            <Dragon />
        </div>
    </Provider>,
    document.getElementById('root')
);