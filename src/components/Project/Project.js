import React from 'react';
import uniqid from 'uniqid';
import './Project.css';

const Project = ({ project }) => (
	<div key={uniqid()} className='project'>
		{project.livePreview ? (
			<a href={project.livePreview} className='project__image-link' target='_blank' rel='noopener noreferrer'>
				<img
					src={`${process.env.PUBLIC_URL}/${project.image}`}
					alt={project.name}
					className='project__image'
				/>
			</a>
		) : (
			<img
				src={`${process.env.PUBLIC_URL}/${project.image}`}
				alt={project.name}
				className='project__image'
			/>
		)}

		<div className='project__content'>
			{project.livePreview ? (
				<a href={project.livePreview} className='project__title-link' target='_blank' rel='noopener noreferrer'>
					<h3 className='project__title'>{project.name}</h3>
				</a>
			) : (
				<h3 className='project__title'>{project.name}</h3>
			)}
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
);

export default Project; 