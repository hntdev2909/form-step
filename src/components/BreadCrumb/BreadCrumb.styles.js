import styled from 'styled-components';

const BreadCrumbStep = styled.span`
	display: flex;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	font-size: 1.5rem;
	font-weight: 500;
	color: white;
	// background-color: #8993f7;
	padding: 5px;
	background-color: ${(props) => props.color};
	transition: linear 0.2s;
`;

const BreadCrumbLine = styled.div`
	flex: 1;
	height: 4px;
	background-color: ${(props) => props.color};
	transition: linear 0.2s;
`;

const BreadCrumbContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 50px;
`;

export { BreadCrumbLine, BreadCrumbContainer, BreadCrumbStep };
