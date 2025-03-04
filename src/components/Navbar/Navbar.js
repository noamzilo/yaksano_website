// src/components/Navbar/Navbar.js
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import './Navbar.css'

const Navbar = () => {
	const [showNavList, setShowNavList] = useState(false)
	const toggleNavList = () => setShowNavList(!showNavList)

	return (
		<nav className='center nav'>
			<ul className={`nav__list ${showNavList ? 'show' : ''}`}>
				<li className='nav__list-item'>
					<a href='#top' className='link link--nav'>
						Home
					</a>
				</li>
				<li className='nav__list-item'>
					<a href='#data-engineering' className='link link--nav'>
						Services
					</a>
				</li>
				<li className='nav__list-item'>
					<a href='#contact' className='link link--nav'>
						Contact
					</a>
				</li>
			</ul>

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
