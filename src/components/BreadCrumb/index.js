import React, { useState } from 'react';

import {
	BreadCrumbLine,
	BreadCrumbContainer,
	BreadCrumbStep,
} from './BreadCrumb.styles';

function BreadCrumb({ currentStep }) {
	return (
		<BreadCrumbContainer>
			<BreadCrumbStep color="#8993f7">1</BreadCrumbStep>
			<BreadCrumbLine
				color={currentStep >= 2 ? '#8993f7' : '#cdd1f5'}
			></BreadCrumbLine>
			<BreadCrumbStep color={currentStep >= 2 ? '#8993f7' : '#cdd1f5'}>
				2
			</BreadCrumbStep>
			<BreadCrumbLine
				color={currentStep >= 3 ? '#8993f7' : '#cdd1f5'}
			></BreadCrumbLine>
			<BreadCrumbStep color={currentStep >= 3 ? '#8993f7' : '#cdd1f5'}>
				3
			</BreadCrumbStep>
		</BreadCrumbContainer>
	);
}

export default BreadCrumb;
