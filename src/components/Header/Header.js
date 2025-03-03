import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
	const { homepage, title } = header

	return (
		<header className='header'>
			<div className='header__container center'>
				<h3>
					{homepage ? (
						<a href={homepage} className='link'>
							{title}
						</a>
					) : (
						title
					)}
				</h3>
				<Navbar />
			</div>
		</header>
	)
}

export default Header
