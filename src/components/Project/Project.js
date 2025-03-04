// src/components/Project/Project.js
import React from 'react'
import uniqid from 'uniqid'
import './Project.css'

const Project = ({ project }) => {
	const { name, client, description, image, results, livePreview } = project

	return (
		<div className='project' key={uniqid()}>
			{image && (
				<img
					src={`${process.env.PUBLIC_URL}/${image}`}
					alt={name}
					className='project__image'
				/>
			)}

			{livePreview ? (
				<a
					href={livePreview}
					className='project__title-link'
					target='_blank'
					rel='noopener noreferrer'
				>
					<h3 className='project__title'>{name}</h3>
				</a>
			) : (
				<h3 className='project__title'>{name}</h3>
			)}

			{client && <p className='project__client'>Client: {client}</p>}

			<p className='project__description'>{description}</p>

			{results && (
				<ul className='project__results'>
					{results.map((result) => (
						<li key={uniqid()} className='project__result'>
							{result}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Project
