const querystring = require('querystring');
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

querystring.stringify(data);
console.log(querystring.stringify(data));

	const url = '/tasting/create?'+querystring.stringify(data);
;
	return (dispatch) => {
		fetch(url, {
			method: 'POST'
		})
		.then(response => { console.log(response); })
		.catch((error) => { console.log('request failed', error); });
	};
}
