// src/components/Contact/Contact.js

import { useState } from 'react'
import { contact } from '../../portfolio'
import './Contact.css'
import StopwatchIcon from '../svgs/stopwatchIcon'
import DashboardIcon from '../svgs/dashboardIcon'
import LockIcon from '../svgs/lockIcon'
import MoneyBagIcon from '../svgs/moneyBagIcon'
import EmailIcon from '../svgs/emailIcon'

const Contact = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	})

	if (!contact.email) return null

	const handleSubmit = (e) => {
		e.preventDefault()
		alert('Message submitted!')
		// Here you could call an API or email service
		setFormState({ name: '', email: '', message: '' })
	}

	return (
		<section className='contact' id='contact'>
			<h2 className='section__title'>Get in Touch</h2>
			<p className='contact__text'>
				Looking for AI, data, and software solutions? Let’s work together to bring your ideas to life.
			</p>

			<div className='contact__info'>
				<div className='info-line'>
					<StopwatchIcon /><p>Minimize setup time and maximize impact</p>
				</div>
				<div className='info-line'>
					<DashboardIcon /><p>Build smarter solutions with state-of-the-art tech</p>
				</div>
				<div className='info-line'>
					<LockIcon /><p>Keep full ownership of your strategy, data, and budget</p>
				</div>
				<div className='info-line'>
					<MoneyBagIcon /><p>Your ideas remain yours — confidential and protected</p>
				</div>
			</div>

			{/* Existing "Mailto" link */}
			<a href={`mailto:${contact.email}`} className='btn btn--outline'>
				<div className='info-line'>
					<EmailIcon />
					<p>{contact.email}</p>
				</div>
			</a>

			{/* New simple contact form */}
			<form onSubmit={handleSubmit} className='contact__form'>
				<input
					type='text'
					placeholder='Your Name'
					value={formState.name}
					onChange={(e) => setFormState({ ...formState, name: e.target.value })}
					required
				/>
				<input
					type='email'
					placeholder='Your Email'
					value={formState.email}
					onChange={(e) => setFormState({ ...formState, email: e.target.value })}
					required
				/>
				<textarea
					placeholder='Your Message'
					value={formState.message}
					onChange={(e) => setFormState({ ...formState, message: e.target.value })}
					required
					rows='4'
				/>
				<button type='submit' className='btn btn--outline'>
					Send
				</button>
			</form>
		</section>
	)
}

export default Contact
