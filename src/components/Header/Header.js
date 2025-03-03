import Navbar from '../Navbar/Navbar'
import './Header.css'
import Logo from '../svgs/logo'

const Header = () =>
(
	<header className='header'>
		<div className='header__container center'>
			<Logo />
			<Navbar />
		</div>
	</header>
)


export default Header
