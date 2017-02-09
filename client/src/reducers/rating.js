import { SET_RATING } from '../actions';
import _ from 'underscore';

const rating = (state = {}, action) => {
	switch (action.type) {
		case SET_RATING: {
			const newState = Object.assign({}, state, {});
			// newState[action.component] = action.rating;
			console.log(typeof(newState));
			console.log(_.values(newState));	
			_.values(newState).forEach(function (c, i) {
				console.log("component");
				console.log(c);
				console.log("action");
				console.log(action)
				if (c.name===action.component) {
					newState[i] = {"name": c.name, "quantity": action.status};
					console.log("new value>>>>>>>>>>>>>>>>>>>>");
					console.log(action.rating);
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