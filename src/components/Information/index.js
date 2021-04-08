import React, { useEffect, useState } from 'react';
import { Icons } from '../../themes';

import {
	InformationContainer,
	InformationBox,
	InformationControl,
	InformationLabel,
	InformationLabelValue,
	InformationButton,
	InformationIcon,
	InformationPasswordBtn,
} from './Information.styles';
import { useSelector } from 'react-redux';

function Information({ currentStep }) {
	const [hidePassword, setHidePassword] = useState('');
	const [isHidePassword, setIsHidePassword] = useState(true);

	const data = useSelector((state) => state.formData);

	const handleShowPassword = () => {
		setIsHidePassword(!isHidePassword);
	};

	useEffect(() => {
		let tmpPassword = '';

		for (let i = 0; i < data.stepOne.password?.length; i++) {
			tmpPassword += '*';
		}

		setHidePassword(tmpPassword);
	}, []);

	if (currentStep !== 3) return null;

	return (
		<InformationContainer>
			<InformationBox>
				<InformationControl>
					<InformationLabel>Email:</InformationLabel>
					<InformationLabelValue>{data.stepOne.email}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Password:</InformationLabel>
					<InformationLabelValue>
						{isHidePassword ? data.stepOne.password : hidePassword}{' '}
					</InformationLabelValue>
					<InformationPasswordBtn>
						{isHidePassword ? (
							<InformationButton onClick={handleShowPassword}>
								<InformationIcon src={Icons.hideIcon?.default} />
							</InformationButton>
						) : (
							<InformationButton onClick={handleShowPassword}>
								<InformationIcon src={Icons.displayIcon?.default} />
							</InformationButton>
						)}
					</InformationPasswordBtn>
				</InformationControl>
				<InformationControl>
					<InformationLabel>First name:</InformationLabel>
					<InformationLabelValue>{data.stepTwo.fname}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Last name:</InformationLabel>
					<InformationLabelValue>{data.stepTwo.lname}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Date of birth:</InformationLabel>
					<InformationLabelValue>{data.stepTwo.dob}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>ID number:</InformationLabel>
					<InformationLabelValue>{data.stepTwo.idnumber}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Address:</InformationLabel>
					<InformationLabelValue>{data.stepTwo.address}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Phone number:</InformationLabel>
					<InformationLabelValue>
						{data.stepTwo.phonenumber}
					</InformationLabelValue>
				</InformationControl>
			</InformationBox>
		</InformationContainer>
	);
}

export default Information;
