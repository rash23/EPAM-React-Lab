import styled from 'styled-components';

export const StyledButton = styled.button`
	color: #6a8728;
	background-color: #fff;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid #6a8728;
	border-radius: 6px;
	&:hover {
		background-color: #6a8728;
		color: #fff;
	}
`;

export const LogoWrapper = styled.div`
	width: 140px;
	height: 60px;

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;
