/*
 * action types
 */
export const SET_COMPONENT = 'SET_COMPONENT';
export const LOAD_TASTING_SUCCESS = 'LOAD_TASTING_SUCCESS';

/*
 * action creators
 */
export function setComponent (component, status) {
	return { type: SET_COMPONENT, component, status };
}

export function loadTastingSuccess(tasting) {
  return dispatch => {
    dispatch({ type: LOAD_TASTING_SUCCESS, tasting });
  };
}

//default all components to 0
export function loadTasting() {
	return (dispatch) =>
		fetch(`api/tasting`, {
			accept: 'application/json',
		})
    .then(response => response.json())
    .then(json => dispatch(loadTastingSuccess(json)))
		.catch(error => { console.log('request failed', error); });
}
