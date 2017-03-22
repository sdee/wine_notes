
/*
 * action types
 */
export const SET_RATING = 'SET_RATING';
export const LOAD_TASTING_SUCCESS = 'LOAD_TASTING_SUCCESS';
export const SAVE_TASTING = 'SAVE_TASTING';

/*
 * action creators
 */
export function setRating (component, status) {
	console.log("sliding");
	return { type: SET_RATING, component, status };
}

export function saveTasting (component, status) {
	console.log("saving");
	return { type: SAVE_TASTING, component, status };
}
