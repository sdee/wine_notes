
/*
 * action types
 */
export const SET_RATING = 'SET_RATING';
export const LOAD_TASTING_SUCCESS = 'LOAD_TASTING_SUCCESS';

/*
 * action creators
 */
export function setRating (component, status) {
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

data = {"berry": 7, "citrus": 1}

	const url = '/tasting/create';
	return (dispatch) => {
		fetch(url, {
			method: "post", body: JSON.stringify(data)
		})
		.then(response => { console.log(response); })
		.catch((error) => { console.log('request failed', error); });
	};
}
