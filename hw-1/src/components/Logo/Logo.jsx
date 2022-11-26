import { LogoWrapper } from '../../styles/common/common';
import logoImg from '../../images/crashcourse-logo.png';

const Logo = () => {
	return (
		<LogoWrapper>
			<img src={logoImg} alt='logo' />
		</LogoWrapper>
	);
};

export default Logo;
