import * as ConstantOfType from '../constant/nameTypeConstant';
import { API } from '../api/callAPI';

const addDataLogin = (value) => {
	return {
		type: ConstantOfType.ADD_INFO_LOGIN,
		payload: value,
	};
};

const addDataProfile = (value) => {
	return {
		type: ConstantOfType.ADD_INFO_PROFILE,
		payload: value,
	};
};

const alertSuccess = () => {
	return {
		type: ConstantOfType.ALERT_SUCCESS,
	};
};

const alertFailure = () => {
	return {
		type: ConstantOfType.ALERT_FAILURE,
	};
};

const pendingAPI = (bool) => {
	return {
		type: ConstantOfType.PENDING_API,
		payload: bool,
	};
};

const createUser = (data) => {
	return (dispatch) => {
		dispatch(pendingAPI(true));
		API.createUser(data)
			.then((res) => {
				dispatch(pendingAPI(false));
				dispatch(alertSuccess());
			})
			.catch((err) => {
				dispatch(pendingAPI(false));
				dispatch(alertFailure());
			});
	};
};

export { addDataLogin, addDataProfile, createUser };
