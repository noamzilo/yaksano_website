import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
	if (!contact.email) return null

	return (
		<section className='section contact center' id='contact'>
			<h2 className='section__title'>Get in Touch</h2>
			<p className='contact__text'>
				Looking for AI and data science solutions? Let&apos;s work together to bring your ideas to life.
			</p>

			<div className='contact__info'>
				<p><strong>✔ Faster Ramp-Up:</strong> Get up and running quickly with minimal effort.</p>
				<p><strong>✔ Cutting-Edge Tech:</strong> Stay ahead with the latest AI advancements.</p>
				<p><strong>✔ Full Control:</strong> Own your data, strategy, and budget.</p>
				<p><strong>✔ Secure IP:</strong> Your innovations stay protected.</p>
			</div>

			<a href={`mailto:${contact.email}`} className='btn btn--outline'>
				Let&apos;s Talk!
			</a>
		</section>
	)
}

export default Contact
