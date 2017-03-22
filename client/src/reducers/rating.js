import { SET_RATING, SAVE_TASTING } from '../actions';

const rating = (state = {}, action) => {
	switch (action.type) {
		case SET_RATING: {
			const newState = Object.assign([], state, []);
			newState.forEach(function (c, i) {
				if (c.name === action.component) {
					newState[i] = {"name": c.name, "quantity": action.status};
				};
			});
			return newState;
		}
		case SAVE_TASTING: {
			console.log("save tasting>>>>");
		}
		default: {
			return state;
		}
	}
};

export default rating;
