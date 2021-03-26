import React, { useState, useEffect } from 'react';
import {
	FormLoginContainer,
	FormLoginBox,
	FormLoginControl,
	FormLoginLabel,
	FormLoginInput,
	FormLoginTitle,
} from './FormLogin.styles';

function FormLogin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [error, setError] = useState('');

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
					/>
				</FormLoginControl>
				<FormLoginControl>
					<FormLoginLabel>Password:</FormLoginLabel>
					<FormLoginInput
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
