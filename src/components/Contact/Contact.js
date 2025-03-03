import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
	if (!contact.email) return null

	return (
		<section className='section contact center' id='contact'>
			<h2 className='section__title'>Let’s Talk!</h2>
			<p>
				Have any questions or want to learn more about our AI and data solutions?
				We’d love to hear from you! Reach out and let’s explore how we can help your business grow.
			</p>
			<a href={`mailto:${contact.email}`}>
				<span type='button' className='btn btn--outline'>
					Email Us
				</span>
			</a>

			<div className='contact-info'>
				<div>
					<p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
				</div>
			</div>
		</section>
	)
}

export default Contact
