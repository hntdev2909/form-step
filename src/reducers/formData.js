import * as nameTypeConstant from '../constant/nameTypeConstant';

const initialState = {
	stepOne: {
		email: '',
		password: '',
	},
	stepTwo: {
		fname: '',
		lname: '',
		dob: '',
		idnumber: '',
		address: '',
		phonenumber: '',
	},
};

const formDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case nameTypeConstant.ADD_INFO_LOGIN:
			return {
				...state,
				stepOne: {
					email: action.payload.email,
					password: action.payload.password,
				},
			};
		case nameTypeConstant.ADD_INFO_PROFILE:
			return {
				...state,
				stepTwo: {
					fname: action.payload.fname,
					lname: action.payload.lname,
					dob: action.payload.dob,
					idnumber: action.payload.idnumber,
					address: action.payload.address,
					phonenumber: action.payload.phonenumber,
				},
			};
		default:
			return state;
	}
};

export default formDataReducer;
