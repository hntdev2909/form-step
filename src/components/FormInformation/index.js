import React, { useState, useEffect } from 'react';
import {
	FormInfoContainer,
	FormInfoBox,
	FormInfoControl,
	FormInfoLabel,
	FormInfoInput,
	FormInfoButton,
	FormInfoTitle,
} from './FormInformation.styles';

function FormInformation({ currentStep, handleChange, data }) {
	if (currentStep !== 2) {
		return null;
	}

	return (
		<FormInfoContainer>
			<FormInfoTitle>Sign Up</FormInfoTitle>
			<FormInfoBox>
				<FormInfoControl>
					<FormInfoLabel>First name:</FormInfoLabel>
					<FormInfoInput
						name="firstname"
						value={data.firstname}
						onChange={handleChange}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Last name:</FormInfoLabel>
					<FormInfoInput
						name="lastname"
						value={data.lastname}
						onChange={handleChange}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Date of birth:</FormInfoLabel>
					<FormInfoInput name="dob" value={data.dob} onChange={handleChange} />
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>ID number:</FormInfoLabel>
					<FormInfoInput
						name="idnumber"
						value={data.idnumber}
						onChange={handleChange}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Address:</FormInfoLabel>
					<FormInfoInput
						name="address"
						value={data.address}
						onChange={handleChange}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Phone number:</FormInfoLabel>
					<FormInfoInput
						name="phonenumber"
						value={data.phonenumber}
						onChange={handleChange}
					/>
				</FormInfoControl>
			</FormInfoBox>
		</FormInfoContainer>
	);
}

export default FormInformation;
