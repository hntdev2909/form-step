import React, { useState } from 'react';
import { FormLogin, FormInformation, Information } from '../../components';
import {
	SignInPageContainer,
	SignInBox,
	SignInTitle,
	SignInNavigation,
	SignInButton,
	SignInMain,
} from './SignInPage.styles';

function SignInPage() {
	return (
		<SignInPageContainer>
			<SignInMain>
				<SignInTitle>Create New Account</SignInTitle>
				<SignInBox>
					<FormLogin />
					{/* <FormInformation />
					<Information /> */}
				</SignInBox>
				<SignInNavigation>
					<SignInButton bgColor="white" color="#8993f7">
						Previous Step
					</SignInButton>
					<SignInButton>Next Step</SignInButton>
				</SignInNavigation>
			</SignInMain>
		</SignInPageContainer>
	);
}

export default SignInPage;
