import styled from 'styled-components';

const SignInButton = styled.a`
	font-size: 1.35rem;
	font-weight: 500;
	background-color: ${(props) => props.bgColor || '#8993f7'};
	padding: 16px 24px;
	border-radius: 5px;
	color: ${(props) => props.color || 'white'};
	// border: 2px solid ${(props) => props.color || 'transparent'};
	margin-right: 15px;
	transition: filter linear 0.15s;

	&:hover {
		cursor: pointer;
		filter: brightness(90%);
	}
`;

const SignInNavigation = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
`;

const SignInTitle = styled.h2`
	font-size: 2.5rem;
	color: white;
`;

const SignInBox = styled.div`
	width: 100%;
`;

const SignInMain = styled.div`
	width: 850px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	margin: 0 auto;
`;

const SignInPageContainer = styled.div`
	background-image: url(https://cdn.dribbble.com/users/13449/screenshots/12078823/downloads/the_valley.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-attach: center;
	width: 100%;
	height: 100%;
`;

export {
	SignInPageContainer,
	SignInMain,
	SignInBox,
	SignInTitle,
	SignInNavigation,
	SignInButton,
};
