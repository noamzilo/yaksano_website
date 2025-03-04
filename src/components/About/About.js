// src/components/About/About.js
import parse from 'html-react-parser'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
	const { name, tagline, description } = about

	return (
		<section className='about section' id='about'>
			<div className='about__header'>
				{name && <h2 className='about__name'>{name}</h2>}
				{tagline && <h3 className='about__tagline'>{tagline}</h3>}
			</div>
			<div className='about__content'>
				<h4>Company Overview</h4>
				{parse(description)}
			</div>
		</section>
	)
}

export default About
