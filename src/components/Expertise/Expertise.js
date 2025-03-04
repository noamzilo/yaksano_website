// src/components/Expertise/Expertise.js
import uniqid from 'uniqid'
import { expertise } from '../../portfolio'
import './Expertise.css'

const Expertise = () => {
	if (!expertise.length) return null

	return (
		<section className='section expertise' id='expertise'>
			<h2 className='section__title'>Expertise</h2>
			<ul className='expertise__list'>
				{expertise.map((item) => (
					<li key={uniqid()} className='expertise__list-item btn btn--plain'>
						{item}
					</li>
				))}
			</ul>
		</section>
	)
}

export default Expertise
