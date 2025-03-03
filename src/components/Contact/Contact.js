import { contact } from '../../portfolio'
import './Contact.css'
import StopwatchIcon from '../svgs/stopwatchIcon'
import DashboardIcon from '../svgs/dashboardIcon'
import LockIcon from '../svgs/lockIcon'
import MoneyBagIcon from '../svgs/moneyBagIcon'
import EmailIcon from '../svgs/emailIcon'

const Contact = () => {
	if (!contact.email) return null

	return (
		<section className='section contact center' id='contact'>
			<h2 className='section__title'>Get in Touch</h2>
			<p className='contact__text'>
				Looking for AI, data and software solutions? Let&apos;s work together to bring your ideas to life.
			</p>

			<div className='contact__info'>
				<div className='info-line'>
					<StopwatchIcon /><p>Minimize setup time and maximize impact.</p>
				</div>
				<div className='info-line'>
					<DashboardIcon /><p>Build smarter solutions with state-of-the-art advancements.</p>
				</div>
				<div className='info-line'>
					<LockIcon /><p>Keep full ownership of your strategy, data, and budget.</p>
				</div>
				<div className='info-line'>
					<MoneyBagIcon /><p>Your ideas remain yours—confidential and protected.</p>
				</div>
			</div>

			<a href={`mailto:${contact.email}`} className='btn btn--outline'>
				<div className='info-line'>
					<EmailIcon />
					<p>contact@yaksano.com</p>
				</div>
			</a>
		</section>
	)
}

export default Contact
