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
import { useSelector, useDispatch } from 'react-redux';
import { addDataProfile } from '../../actions';

function FormInformation({ currentStep, handleChange }) {
	const dataForm = useSelector((state) => state.formData.stepTwo);
	const [fname, setFname] = useState(dataForm.fname);
	const [lname, setLname] = useState(dataForm.lname);
	const [dob, setDob] = useState(dataForm.dob);
	const [idnumber, setIdnumber] = useState(dataForm.idnumber);
	const [address, setAddress] = useState(dataForm.address);
	const [phonenumber, setPhonenumber] = useState(dataForm.phonenumber);

	useEffect(() => {
		dispatch(
			addDataProfile({ fname, lname, dob, idnumber, address, phonenumber })
		);
	}, [currentStep]);

	const dispatch = useDispatch();

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
						value={fname}
						onChange={(e) => setFname(e.target.value)}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Last name:</FormInfoLabel>
					<FormInfoInput
						name="lastname"
						value={lname}
						onChange={(e) => setLname(e.target.value)}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Date of birth:</FormInfoLabel>
					<FormInfoInput
						name="dob"
						value={dob}
						onChange={(e) => setDob(e.target.value)}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>ID number:</FormInfoLabel>
					<FormInfoInput
						name="idnumber"
						value={idnumber}
						onChange={(e) => setIdnumber(e.target.value)}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Address:</FormInfoLabel>
					<FormInfoInput
						name="address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</FormInfoControl>
				<FormInfoControl>
					<FormInfoLabel>Phone number:</FormInfoLabel>
					<FormInfoInput
						name="phonenumber"
						value={phonenumber}
						onChange={(e) => setPhonenumber(e.target.value)}
					/>
				</FormInfoControl>
			</FormInfoBox>
		</FormInfoContainer>
	);
}

export default FormInformation;
