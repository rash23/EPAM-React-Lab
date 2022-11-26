import { StyledButton } from '../../styles/common/common';

const Button = (props) => {
	const { text } = props;

	return <StyledButton {...props}>{text}</StyledButton>;
};

export default Button;
