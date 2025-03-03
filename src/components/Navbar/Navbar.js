import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import './Navbar.css'

const Navbar = () => {
	const [showNavList, setShowNavList] = useState(false)

	const toggleNavList = () => setShowNavList(!showNavList)

	return (
		<nav className='center nav'>
			<a href='#contact' className='link link--nav'>
				Contact Us
			</a>

			<button
				type='button'
				onClick={toggleNavList}
				className='btn btn--icon nav__hamburger'
				aria-label='toggle navigation'
			>
				{showNavList ? <CloseIcon /> : <MenuIcon />}
			</button>
		</nav>
	)
}

export default Navbar
