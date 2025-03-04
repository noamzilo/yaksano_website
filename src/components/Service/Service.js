// src/components/Service/Service.js
import uniqid from 'uniqid'
import './Service.css'
import Project from '../Project/Project'

const Service = ({ service }) => {
	const { id, title, description, projects, backgroundColor } = service

	return (
		<section
			id={id}
			className='service'
			style={{ backgroundColor }}
		>
			<div className='service__content'>
				<h2 className='service__title'>{title}</h2>
				<p className='service__description'>{description}</p>

				<div className='service__projects'>
					{projects.map((project) => (
						<Project key={uniqid()} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Service
