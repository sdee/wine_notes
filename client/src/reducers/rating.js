import { SET_RATING } from '../actions';

const rating = (state = {}, action) => {
	console.log("inside reducer");
	console.log(state);
	switch (action.type) {
		case SET_RATING: {
			const newState = Object.assign({}, state, {});
			newState[action.component] = action.rating;
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default rating;
