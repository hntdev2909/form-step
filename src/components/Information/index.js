import React, { useEffect, useState } from 'react';
import { Icons } from '../../themes';

import {
	InformationContainer,
	InformationBox,
	InformationControl,
	InformationLabel,
	InformationLabelValue,
	InformationButton,
	InformationTitle,
	InformationIcon,
	InformationPasswordBtn,
} from './Information.styles';

function Information({ currentStep, data }) {
	const [hidePassword, setHidePassword] = useState('');
	const [isHidePassword, setIsHidePassword] = useState(true);

	const handleShowPassword = () => {
		setIsHidePassword(!isHidePassword);
	};

	useEffect(() => {
		let tmpPassword = '';

		for (let i = 0; i < data.password?.length; i++) {
			tmpPassword += '*';
		}

		setHidePassword(tmpPassword);
	}, []);

	console.log(hidePassword);

	if (currentStep !== 3) return null;

	return (
		<InformationContainer>
			<InformationBox>
				<InformationControl>
					<InformationLabel>Email:</InformationLabel>
					<InformationLabelValue>{data.email}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Password:</InformationLabel>
					<InformationLabelValue>
						{isHidePassword ? data.password : hidePassword}{' '}
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
					<InformationLabelValue>{data.firstname}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Last name:</InformationLabel>
					<InformationLabelValue>{data.lastname}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Date of birth:</InformationLabel>
					<InformationLabelValue>{data.dob}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>ID number:</InformationLabel>
					<InformationLabelValue>{data.idnumber}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Address:</InformationLabel>
					<InformationLabelValue>{data.address}</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Phone number:</InformationLabel>
					<InformationLabelValue>{data.phonenumber}</InformationLabelValue>
				</InformationControl>
			</InformationBox>
		</InformationContainer>
	);
}

export default Information;
