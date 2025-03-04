// src/App.js
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Service from './components/Service/Service'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { services } from './portfolio'
import './App.css'

const App = () => {
	const [{ themeName }] = useContext(ThemeContext)

	return (
		<div id='top' className={`${themeName} app`}>
			<Header />

			<main>
				<About />
			</main>

			{services.map((service) => (
				<Service key={service.id} service={service} />
			))}

			<main>
				<Contact />
			</main>

			<Footer />
		</div>
	)
}

export default App
