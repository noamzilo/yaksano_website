import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Vertical from './components/Vertical/Vertical'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { verticals } from './portfolio'
import './App.css'

const App = () => {
	const [{ themeName }] = useContext(ThemeContext)

	return (
		<div id='top' className={`${themeName} app`}>
			<Header />

			<main>
				<About />
				{verticals.map((vertical) => (
					<Vertical key={vertical.id} vertical={vertical} />
				))}
				<Contact />
			</main>

			<Footer />
		</div>
	)
}

export default App
