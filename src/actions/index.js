import * as ConstantOfType from '../constant/nameTypeConstant';

export const addDataLogin = (value) => {
	return {
		type: ConstantOfType.ADD_INFO_LOGIN,
		payload: value,
	};
};

export const addDataProfile = (value) => {
	return {
		type: ConstantOfType.ADD_INFO_PROFILE,
		payload: value,
	};
};
