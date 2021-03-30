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

function SignInPage() {
	const [currentStep, setCurrentStep] = useState(1);
	const [error, setError] = useState({});
	const [data, setData] = useState({});

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

		// if (currentStep === 1 && checkStepOne) {
		// 	dispatch(addDataLogin(data));
		// 	setCurrentStep(currentStep + 1);
		// }

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

	return (
		<SignInPageContainer>
			<SignInMain>
				<SignInTitle>Create New Account</SignInTitle>
				<BreadCrumb currentStep={currentStep} />
				<SignInBox>
					<FormLogin
						currentStep={currentStep}
						handleChange={handleChange}
						// data={dataForm.stepOne}
					/>

					<FormInformation
						currentStep={currentStep}
						handleChange={handleChange}
						// data={dataForm.stepTwo}
					/>
					<Information
						// data={data}
						currentStep={currentStep}
					/>
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
						<SignInButton onClick={handleNextStep}>Submit</SignInButton>
					) : (
						<SignInButton onClick={handleNextStep}>Next Step</SignInButton>
					)}
				</SignInNavigation>
			</SignInMain>
		</SignInPageContainer>
	);
}

export default SignInPage;
