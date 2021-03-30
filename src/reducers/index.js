import formDataReducer from './formData';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	formData: formDataReducer,
});

export default rootReducer;
