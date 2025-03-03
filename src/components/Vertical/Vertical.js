import uniqid from 'uniqid'
import './Vertical.css'
import Project from '../Project/Project'

const Vertical = ({ vertical }) => {
	const { id, title, description, projects, backgroundColor } = vertical

	return (
		<section
			id={id}
			className='vertical'
			style={{ backgroundColor }}
		>
			<div className='vertical__content'>
				<h2 className='vertical__title'>{title}</h2>
				<p className='vertical__description'>{description}</p>

				<div className='vertical__projects'>
					{projects.map((project) => (
						<Project key={uniqid()} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Vertical 