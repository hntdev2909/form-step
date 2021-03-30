import React, { useState, useEffect } from 'react';
import {
	FormLoginContainer,
	FormLoginBox,
	FormLoginControl,
	FormLoginLabel,
	FormLoginInput,
	FormLoginTitle,
} from './FormLogin.styles';
import { useSelector, useDispatch } from 'react-redux';
import { addDataLogin } from '../../actions';

function FormLogin({ currentStep, handleChange }) {
	const dataForm = useSelector((state) => state.formData.stepOne);
	const dispatch = useDispatch();
	const [email, setEmail] = useState(dataForm.email);
	const [password, setPassword] = useState(dataForm.password);

	useEffect(() => {
		dispatch(addDataLogin({ email, password }));
	}, [currentStep]);

	if (currentStep !== 1) {
		return null;
	}

	return (
		<FormLoginContainer>
			<FormLoginBox>
				<FormLoginControl>
					<FormLoginTitle>Sign Up</FormLoginTitle>
				</FormLoginControl>
				<FormLoginControl>
					<FormLoginLabel>Email:</FormLoginLabel>
					<FormLoginInput
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Nhập email"
						name="email"
					/>
				</FormLoginControl>
				<FormLoginControl>
					<FormLoginLabel>Password:</FormLoginLabel>
					<FormLoginInput
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Nhập mật khẩu"
					/>
				</FormLoginControl>
			</FormLoginBox>
		</FormLoginContainer>
	);
}

export default FormLogin;
