import React from 'react';

import {
	InformationContainer,
	InformationBox,
	InformationControl,
	InformationLabel,
	InformationLabelValue,
	InformationButton,
	InformationTitle,
} from './Information.styles';

function Information() {
	return (
		<InformationContainer>
			<InformationBox>
				<InformationControl>
					<InformationLabel>Email:</InformationLabel>
					<InformationLabelValue>hnthinh2909@gmail.com</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Password:</InformationLabel>
					<InformationLabelValue>*********</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>First name:</InformationLabel>
					<InformationLabelValue>Thinh</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Last name:</InformationLabel>
					<InformationLabelValue>Huynh Ngoc</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Date of birth:</InformationLabel>
					<InformationLabelValue>29/09/1997</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>ID number:</InformationLabel>
					<InformationLabelValue>192056828</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Address:</InformationLabel>
					<InformationLabelValue>Hue</InformationLabelValue>
				</InformationControl>
				<InformationControl>
					<InformationLabel>Phone number:</InformationLabel>
					<InformationLabelValue>0899236266</InformationLabelValue>
				</InformationControl>
			</InformationBox>
		</InformationContainer>
	);
}

export default Information;
