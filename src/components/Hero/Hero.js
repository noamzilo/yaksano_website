// src/components/Hero/Hero.js

import './Hero.css'

const Hero = () => (
	<section className='hero' id='hero'>
		<div className='hero__content'>
			<h1 className='hero__title'>We Turn Data Into a Competitive Advantage</h1>
			<p className='hero__subtitle'>
				Harness the power of AI, Data Engineering, and Intelligent Automation to transform your business.
			</p>
			<div className='hero__buttons'>
				<a href='#contact' className='btn btn--outline'>
					Get a Consultation
				</a>
				<a href='#data-engineering' className='btn btn--plain'>
					Our Services
				</a>
			</div>
		</div>
	</section>
)

export default Hero
