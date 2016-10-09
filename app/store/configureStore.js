
'use strict';

import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import devTools from 'remote-redux-devtools'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import promiseMiddleware from 'redux-promise';
export default function configureStore(onCompletion:()=>void):any {
	const enhancer = compose(
		applyMiddleware(thunk, promiseMiddleware),
		devTools({
	     	name: 'MCQ_APP', realtime: true
	    }),
	);

	let store = createStore(reducer, enhancer);
	persistStore(store, {storage: AsyncStorage}, onCompletion);

	return store
}
