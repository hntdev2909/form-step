import React, { useState, useEffect } from 'react';
import {
	FormLogin,
	FormInformation,
	Information,
	BreadCrumb,
} from '../../components';
import {
	SignInPageContainer,
	SignInBox,
	SignInTitle,
	SignInNavigation,
	SignInButton,
	SignInMain,
} from './SignInPage.styles';
import { createUser } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';

function SignInPage() {
	const [currentStep, setCurrentStep] = useState(1);
	const [data, setData] = useState({});
	const dispatch = useDispatch();
	const formData = useSelector((state) => state.formData);
	const { title, button, icon, timer, dangerMode } = useSelector(
		(state) => state.alert
	);

	const handleChange = (event) => {
		const nameEvent = event.target.name;
		const valueEvent = event.target.value;

		setData({
			...data,
			[nameEvent]: valueEvent,
		});
	};

	const handleNextStep = () => {
		// const regexEmail = new RegExp(/^.+@.+$/);
		// const regexDOB = new RegExp(
		// 	/^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/
		// );
		// const regexFirstName = new RegExp(
		// 	/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g
		// );
		// const regexLastName = new RegExp(
		// 	/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g
		// );
		// const regexAddress = new RegExp(
		// 	/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g
		// );
		// const regexID = new RegExp(/^[0-9]{9,10}$/);
		// const regexPhoneNumber = new RegExp(/^[0-9]{10}$/);

		// const checkStepOne =
		// 	regexEmail.test(data.email) && data.password.length > 6;
		// const checkStepTwo =
		// 	regexFirstName.test(data.firstname) &&
		// 	regexLastName.test(data.lastname) &&
		// 	regexDOB.test(data.dob) &&
		// 	regexID.test(data.idnumber) &&
		// 	regexAddress.test(data.address) &&
		// 	regexPhoneNumber.test(data.phonenumber);

		if (currentStep === 1) {
			setCurrentStep(currentStep + 1);
		}
		if (currentStep === 2) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handlePreviousStep = () => {
		if (currentStep === 2) {
			setCurrentStep(currentStep - 1);
		}

		if (currentStep === 3) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSubmit = () => {
		dispatch(createUser({ ...formData.stepOne, ...formData.stepTwo }));
	};

	useEffect(() => {
		if (title && button) {
			swal({
				title: title,
				button: button,
				icon: icon,
				dangerMode: dangerMode,
				timer: timer,
			});
		}
	}, [title, button]);

	return (
		<SignInPageContainer>
			<SignInMain>
				<SignInTitle>Create New Account</SignInTitle>
				<BreadCrumb currentStep={currentStep} />
				<SignInBox>
					<FormLogin currentStep={currentStep} handleChange={handleChange} />

					<FormInformation
						currentStep={currentStep}
						handleChange={handleChange}
					/>
					<Information currentStep={currentStep} />
				</SignInBox>
				<SignInNavigation>
					{currentStep !== 1 && (
						<SignInButton
							bgColor="white"
							color="#8993f7"
							onClick={handlePreviousStep}
						>
							Previous Step
						</SignInButton>
					)}
					{currentStep === 3 ? (
						<SignInButton onClick={handleSubmit}>Submit</SignInButton>
					) : (
						<SignInButton onClick={handleNextStep}>Next Step</SignInButton>
					)}
				</SignInNavigation>
			</SignInMain>
		</SignInPageContainer>
	);
}

export default SignInPage;
