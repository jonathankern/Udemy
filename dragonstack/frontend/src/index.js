import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import './index.css';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };

const generationReducer = () => {
    return {
        generation: { generationId: DEFAULT_GENERATION }
    }
}

const store = createStore(generationReducer);

console.log('store', store);
console.log('store.getState()', store.getState())

render(
    <div>
        <h2>Dragon Stack from React</h2>
        <Generation />
        <Dragon />
    </div>,
    document.getElementById('root')
);