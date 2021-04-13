import * as ConstantTypes from '../constant/nameTypeConstant';

const initialState = {
	isLoading: false,
	title: '',
	icon: '',
	button: '',
	dangerMode: false,
	timer: 2000,
};

const AlertReducer = (state = initialState, action) => {
	switch (action.type) {
		case ConstantTypes.ALERT_SUCCESS:
			return {
				...state,
				title: 'Success',
				icon: 'success',
				button: 'Confirm',
				dangerMode: false,
			};

		case ConstantTypes.ALERT_FAILURE:
			return {
				...state,
				title: 'Opps',
				icon: 'error',
				button: 'Retry',
				dangerMode: true,
			};

		case ConstantTypes.PENDING_API:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};

export default AlertReducer;
