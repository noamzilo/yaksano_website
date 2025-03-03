import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
	const { name, tagline, description, contact } = about

	return (
		<div className='about center'>
			{name && (
				<h1>
					<span className='about__name'>{name}</span>
				</h1>
			)}

			{tagline && <h2 className='about__tagline'>{tagline}</h2>}
			<p className='about__desc'>{description}</p>

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
	)
}

export default About
