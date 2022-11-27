import styled from 'styled-components';

export const StyledButton = styled.button`
	color: #6a8728;
	background-color: #fff;
	font-size: 1em;
	padding: 0.25em 1em;
	border: 2px solid #6a8728;
	border-radius: 6px;
	&:hover {
		background-color: #6a8728;
		color: #fff;
	}
`;

export const StyledInput = styled.input`
	border: 2px solid orange;
	padding: 0.25em 1em;
	border-radius: 6px;
	width: 100%;
	font-size: 1em;
	&:hover {
		border-color: #6a8728;
	}
`;

export const StyledTextarea = styled.textarea`
	border: 2px solid orange;
	padding: 0.25em 1em;
	border-radius: 6px;
	width: 100%;
	font-size: 1em;
	&:hover {
		border-color: #6a8728;
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
