import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
//import  reducers  from './reducers/index'
import cartReducers from './reducers/CartReducers'


const reducerx = combineReducers({cartReducers});

export const Store = createStore( reducerx , applyMiddleware(thunk));