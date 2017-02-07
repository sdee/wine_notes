import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './App';
import './index.css';

const wine_components= require('../data/wine.json');

const store = createStore(rootReducer, initializeState(),
	composeWithDevTools(applyMiddleware(thunk))
);

function initializeState() {
	let ratings = [];
	wine_components.forEach(function(wc) { 
		console.log("wc");
		console.log(wc);

		ratings.push({"name": wc, "quantity":0});
	});
	return {"rating": ratings};
}

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


