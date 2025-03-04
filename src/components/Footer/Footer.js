// src/components/Footer/Footer.js
import './Footer.css'

const Footer = () => (
	<footer className='footer'>
		<p className='footer__link'>
			&copy; {new Date().getFullYear()} Yaksano. All Rights Reserved.
		</p>
	</footer>
)

export default Footer
