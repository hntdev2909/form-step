import styled from 'styled-components';

const FormInfoTitle = styled.h1`
	min-width: 750px;
	font-size: 1.8rem;
	padding-left: 50px;
	padding-top: 24px;
`;

const FormInfoButton = styled.a`
	font-size: 1.15rem;
	// background-color: #6752d7;
	background-color: ${(props) => props.bgColor || '#8993f7'};
	color: white;
	padding: 12px 24px;
	border-radius: 5px;
	font-weight: 500;
	margin-top: 45px;
	margin-right: 0;
`;

const FormInfoInput = styled.input`
	flex: 1;
	font-size: 1.1rem;
	padding: 10px 4px;
	width: 100%;
	font-family: 'Montserrat';

	&:focus {
		outline-color: #8993f7;
	}
`;

const FormInfoLabel = styled.label`
	font-size: 1.2rem;
	width: 250px;
`;

const FormInfoControl = styled.div`
	display: flex;
	margin-bottom: 15px;
	align-items: center;
	justify-content: ${(props) => props.justifyContent};
`;

const FormInfoBox = styled.div`
	min-width: 750px;
	margin: 0 auto;
	padding: 50px;
`;

const FormInfoContainer = styled.div`
	width: 100%;
	height: auto;
	background-color: white;
	padding: 30px;
	box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px,
		rgb(0 0 0 / 10%) 0px 25px 50px 0px;
	border-radius: 10px;
`;

export {
	FormInfoContainer,
	FormInfoBox,
	FormInfoControl,
	FormInfoLabel,
	FormInfoInput,
	FormInfoButton,
	FormInfoTitle,
};
