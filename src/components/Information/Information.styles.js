import styled from 'styled-components';

const InformationIcon = styled.img`
	width: 100%;
`;

const InformationTitle = styled.h1`
	min-width: 750px;
	font-size: 1.8rem;
	padding-left: 50px;
	padding-top: 24px;
`;

const InformationButton = styled.span`
	display: block;
	width: 45px;
	height: 45px;
	padding: 10px;
	border-radius: 50%;
	transition: linear 0.1s;

	&:hover {
		cursor: pointer;
		background-color: #b9c0ff;
	}
`;

const InformationPasswordBtn = styled.div`
	position: absolute;
	right: 0;
`;
const InformationLabelValue = styled.label`
	flex: 1;
	font-size: 1.1rem;
	padding: 10px 4px;
	width: 100%;
	font-family: 'Montserrat';

	&:focus {
		outline-color: #8993f7;
	}
`;

const InformationLabel = styled.label`
	font-size: 1.2rem;
	width: 250px;
	font-weight: 500;
`;

const InformationControl = styled.div`
	display: flex;
	margin-bottom: 15px;
	align-items: center;
	justify-content: ${(props) => props.justifyContent};
	position: relative;
`;

const InformationBox = styled.div`
	min-width: 750px;
	margin: 0 auto;
	padding: 50px;
`;

const InformationContainer = styled.div`
	width: 100%;
	height: auto;
	background-color: white;
	padding: 30px;
	box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px,
		rgb(0 0 0 / 10%) 0px 25px 50px 0px;
	border-radius: 10px;
`;

export {
	InformationContainer,
	InformationBox,
	InformationControl,
	InformationLabel,
	InformationLabelValue,
	InformationButton,
	InformationTitle,
	InformationIcon,
	InformationPasswordBtn,
};
