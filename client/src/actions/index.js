import { Provider } from 'react-redux'
import index from '../reducers'
import { createStore } from 'redux'
/*
 * action types
 */
export const SET_RATING = 'SET_RATING';
export const LOAD_TASTING_SUCCESS = 'LOAD_TASTING_SUCCESS';

/*
 * action creators
 */
export function setRating (component, status) {
	console.log("setRating");
	return { type: SET_RATING, component, status };
}
