/*
 * action types
 */
export const SET_COMPONENT = 'SET_COMPONENT';
export const LOAD_TASTING_SUCCESS = 'LOAD_TASTING_SUCCESS';
const components = require('../../data/wine.json');
/*
 * action creators
 */
export function setComponent (component, status) {
	return { type: SET_COMPONENT, component, status };
}

// export function loadTastingSuccess(tasting) {
//   return dispatch => {
//     dispatch({ type: LOAD_TASTING_SUCCESS, tasting });
//   };
// }

//TODO: default all components to 0
export function loadTasting() {
	return components;
}
