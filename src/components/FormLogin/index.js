import React, { useState, useEffect } from 'react';
import {
	FormLoginContainer,
	FormLoginBox,
	FormLoginControl,
	FormLoginLabel,
	FormLoginInput,
	FormLoginTitle,
} from './FormLogin.styles';

function FormLogin({ currentStep, handleChange, data }) {
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
						value={data?.email}
						onChange={handleChange}
						type="email"
						placeholder="Nhập email"
						name="email"
					/>
				</FormLoginControl>
				<FormLoginControl>
					<FormLoginLabel>Password:</FormLoginLabel>
					<FormLoginInput
						name="password"
						value={data?.password}
						onChange={handleChange}
						type="password"
						placeholder="Nhập mật khẩu"
					/>
				</FormLoginControl>
			</FormLoginBox>
		</FormLoginContainer>
	);
}

export default FormLogin;
