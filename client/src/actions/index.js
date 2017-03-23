
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

export function saveTasting (rating) {
	console.log("saving ...");
	console.log(rating);
	console.log(rating.berry);

	let data = {};

	rating.forEach(function(element) {
    data[element.name] = element.quantity
});
console.log("DATA");

console.log(data);

	const url = 'api/tasting/create';
	return (dispatch) => {
		fetch(url, {
			method: "post", body: JSON.stringify(data)
		})
		.then(response => response.json())
		// .then(json => dispatch(loadQuizSuccess(json)))
		.catch((error) => { console.log('request failed', error); });
	};
}
