import Logo from '../Logo/Logo';
import {
	StyledHeader,
	StyledLogoutWrapper,
} from '../../styles/components/Header/header';
import Button from '../../common/Button/Button';

const Header = () => {
	return (
		<StyledHeader>
			<Logo />
			<StyledLogoutWrapper>
				<div>Dave</div>
				<div>
					<Button text='logout' />
				</div>
			</StyledLogoutWrapper>
		</StyledHeader>
	);
};

export default Header;
