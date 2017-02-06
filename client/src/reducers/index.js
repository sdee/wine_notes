import { combineReducers } from 'redux';
import tasting from './tasting';
import component from './component';

const wine_notes = combineReducers({
	component,
	tasting
});

export default wine_notes;
