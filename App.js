import React, { useState } from 'react';
import Navigator from './navegacao/navigator'

import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import reduxThunk from 'redux-thunk';
import contatosReducers from './store/contatos-reducers';
import { init } from './helpers/db';

init().then(() => {
    console.log("Funfouu")
}).catch((err) => {
    console.log(`Não deu certo ${err}`)
})

const rootReducer = combineReducers({
    contatos: contatosReducers
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));


export default function App() {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>)
}