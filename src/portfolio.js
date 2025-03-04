// src/portfolio.js
const header = {
	// all the properties are optional - can be left empty or deleted
	homepage: 'https://yaksano.com',
	title: 'Yaksano',
}

const about = {
	// all the properties are optional - can be left empty or deleted
	name: 'Yaksano',
	tagline: 'Turn Your Data into a Competitive Advantage',
	description: `
		<p>Most companies sit on a goldmine of untapped data—few know how to extract real value from it.</p>
		
		<p>At <strong>Yaksano</strong>, we turn raw data into insights, automate workflows, and build intelligent software tailored to your needs.</p>

		<p>With expertise in <strong>AI, data engineering, machine learning, computer vision, and web development</strong>, we help you scale, optimize operations, and stay ahead of the competition.</p>
		<br/>
		<p><strong>Let’s build something game-changing.</strong></p>
	`,
	contact: {
		email: 'contact@yaksano.com',
		// linkedin: 'https://www.linkedin.com/company/yaksano',
	},
}

const services = [
	{
		id: 'data-engineering',
		title: 'Data Engineering',
		description: 'Building robust data pipelines and infrastructure to transform raw data into actionable insights.',
		backgroundColor: 'var(--clr-bg-alt)',
		projects: [
			{
				name: 'Automotive Data Pipeline',
				client: 'UVeye',
				description: 'Designed and implemented scalable data pipelines processing over 1 million images weekly. Automated data workflows reduced manual processing time by 95%.',
				image: 'uveye2.jpg',
				results: [
					'Processed 1M+ images weekly',
					'95% reduction in manual work',
					'10x pipeline performance improvement'
				],
				livePreview: 'https://www.uveye.com/blog/',
			},
			{
				name: 'Medical Data Processing System',
				client: 'EPD Solutions',
				description: 'Developed real-time cardiac mapping system processing complex medical data streams. Created automated workflows that transformed manual processes into efficient operations.',
				image: 'doctors1.jpg',
				results: [
					'Real-time data processing',
					'95% automation of manual tasks',
					'Enhanced clinical reliability'
				],
				livePreview: 'https://tinyurl.com/3far3csy',
			}
		]
	},
	{
		id: 'computer-vision',
		title: 'AI & Computer Vision',
		description: 'Developing advanced computer vision solutions for complex real-world challenges.',
		backgroundColor: 'var(--clr-bg)',
		projects: [
			{
				name: 'Automated Vehicle Inspection',
				client: 'UVeye',
				description: 'Implemented computer vision algorithms with 95% detection accuracy in automotive defect detection. Optimized image processing pipelines for real-time performance.',
				image: 'uveye1.jpg',
				results: [
					'95% detection accuracy',
					'Real-time processing',
					'Scalable deployment'
				],
				livePreview: 'https://www.uveye.com/blog/',
			},
			{
				name: 'Aerial Image Processing',
				client: 'Israel Air Force',
				description: 'Developed advanced image registration and processing system for aerial imagery, achieving 90% improvement in processing speed while maintaining accuracy.',
				image: 'f15.jpg',
				results: [
					'90% faster processing',
					'Enhanced accuracy',
					'Military-grade reliability'
				],
			}
		]
	},
	{
		id: 'web-development',
		title: 'Web Development & LLMs',
		description: 'Creating modern, scalable web applications with optimized costs.',
		backgroundColor: 'var(--clr-bg-alt)',
		projects: [
			{
				name: 'JustGptIt.com',
				description: 'Built a viral web application using modern cloud architecture and serverless technologies. Handles thousands of users with optimal performance and minimal costs.',
				image: 'justgptit.jpg',
				stack: ['React', 'Cloud Infrastructure', 'Serverless'],
				livePreview: 'https://justgptit.com',
				sourceCode: 'https://github.com/noamzilo/JustGptIt',
			},
			{
				name: 'AI Generated Content Websites',
				description: 'A network of sites that leverage AI for content generation. Monetized through ads, supporting 100K+ users monthly.',
				image: 'seo_site.jpg',
				stack: ['React', 'Python', 'Machine Learning'],
			}
		]
	}
]

const expertise = [
	// Core ML & Data Engineering
	'Machine Learning',
	'Deep Learning',
	'Computer Vision',
	'Data Engineering',
	'ETL Pipeline Design',
	'Time Series Analysis',
	'Signal Processing',

	// Programming Languages
	'Python',
	'C++',
	'SQL',

	// ML Frameworks & Libraries
	'PyTorch',
	'PyTorch Lightning',
	'TensorFlow',
	'Keras',
	'numpy',
	'pandas',

	// Cloud & Data Infrastructure
	'AWS',
	'S3',
	'BigQuery',
	'MongoDB',
	'ClearML',
	'Dataloop',

	// System Design & Architecture
	'Real-time Systems',
	'Distributed Systems',
	'Message Queues/Brkokers',
	'API Development',
	'System Integration',
	'Performance Optimization',

	// Development Tools & Practices
	'Git',
	'Docker',
	'CI/CD',
	'Agile Development',

	// Domain Knowledge
	'Image Processing',
	'Feature Engineering',
	'Data Modeling',
	'Embedded Systems',
]

const contact = {
	email: 'contact@yaksano.com',
}

export { header, about, services, expertise, contact }
