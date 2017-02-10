import { SET_RATING } from '../actions';
import _ from 'underscore';

const rating = (state = {}, action) => {
	switch (action.type) {
		case SET_RATING: {
			const newState = Object.assign([], state, []);
			// newState[action.component] = action.rating;
			_.values(newState).forEach(function (c, i) {
				if (c.name === action.component) {
					newState[i] = {"name": c.name, "quantity": action.status};
				};
			});
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default rating;

//don't want object of object for state want array!!!!