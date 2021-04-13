import formDataReducer from './formData';
import AlertReducer from './alert';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	formData: formDataReducer,
	alert: AlertReducer,
});

export default rootReducer;
