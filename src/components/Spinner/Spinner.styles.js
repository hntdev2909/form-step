import styled, { keyframes } from 'styled-components';

const cirlceAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerParent = styled.div`
	display: inline-block;
	width: 40px;
	height: 40px;

	&:after {
		content: ' ';
		display: block;
		width: 32px;
		height: 32px;
		margin: 8px;
		border-radius: 50%;
		border: 3px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: ${cirlceAnimation} 1.2s linear infinite;
	}
`;

export { SpinnerParent };
