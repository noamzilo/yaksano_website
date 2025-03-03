import uniqid from 'uniqid'
import './Vertical.css'

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
						<div key={uniqid()} className='project'>
							<img
								src={`${process.env.PUBLIC_URL}/images/${project.image}`}
								alt={project.name}
								className='project__image'
							/>

							<div className='project__content'>
								<h3 className='project__title'>{project.name}</h3>
								{project.client && (
									<p className='project__client'>Client: {project.client}</p>
								)}
								<p className='project__description'>{project.description}</p>

								{project.results && (
									<ul className='project__results'>
										{project.results.map((result) => (
											<li key={uniqid()} className='project__result'>{result}</li>
										))}
									</ul>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Vertical 