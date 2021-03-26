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

function FormInformation() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [IdNumber, setIdNumber] = useState('');
	const [address, setAddress] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');

	return (
		<FormInfoContainer>
			<FormInfoTitle>Sign Up</FormInfoTitle>
			<FormInfoBox>
				<FormInfoControl>
					<FormInfoLabel>First name:</FormInfoLabel>
					<FormInfoInput
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Last name:</FormInfoLabel>
					<FormInfoInput
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Date of birth:</FormInfoLabel>
					<FormInfoInput
						value={dateOfBirth}
						onChange={(e) => setDateOfBirth(e.target.value)}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>ID number:</FormInfoLabel>
					<FormInfoInput
						value={IdNumber}
						onChange={(e) => setIdNumber(e.target.value)}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Address:</FormInfoLabel>
					<FormInfoInput
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Phone number:</FormInfoLabel>
					<FormInfoInput
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</FormInfoControl>
			</FormInfoBox>
		</FormInfoContainer>
	);
}

export default FormInformation;
