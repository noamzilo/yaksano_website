import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import parse from 'html-react-parser'


const About = () => {
	const { name, tagline, description, contact } = about

	return (
		<div className='about'>
			<div className='about__header'>
				{name && (
					<div className='title-container'>
						<h1 className='about__name'>{name}</h1>
					</div>
				)}

				{tagline && (
					<div className='tagline-container'>
						<h2 className='about__tagline'>{tagline}</h2>
					</div>
				)}
			</div>

			<div className='content-container'>
				<p className='about__desc'>{parse(description)}</p>
				<div className='about__contact center'>
					{contact && (
						<>
							{contact.linkedin && (
								<a
									href={contact.linkedin}
									aria-label='linkedin'
									className='link link--icon'
								>
									<LinkedInIcon />
								</a>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default About
