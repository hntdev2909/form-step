import React from 'react';

import {
	InformationContainer,
	InformationBox,
	InformationControl,
	InformationLabel,
	InformationLabelValue,
	InformationButton,
	InformationTitle,
} from './Information.styles';

function Information({ currentStep, data }) {
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
					<InformationLabelValue>{data.password}</InformationLabelValue>
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
