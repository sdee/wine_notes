import { SET_COMPONENT } from '../actions';

const component = (state = {}, action) => {
	switch (action.type) {
		case SET_COMPONENT: {
			const newState = Object.assign({}, state, {});
			newState[action.component] = action.rating;
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default component;
