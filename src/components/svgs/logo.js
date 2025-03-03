import React from 'react';

const Logo = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 230 60"
		width="230"
		height="55">
		<g transform="translate(10, 0)"> {/* Moves the 'Y' closer to the text */}
			<path
				className="icon"
				d="M 35 50 L 35 30 M 35 30 L 20 10 M 35 30 L 50 10"
				fill="none"
				stroke="var(--clr-fg)"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<circle
				className="icon"
				cx="20"
				cy="10"
				r="3"
				fill="none"
				stroke="var(--clr-fg)"
				strokeWidth="3"
			/>
			<circle
				className="icon"
				cx="50"
				cy="10"
				r="3"
				fill="none"
				stroke="var(--clr-fg)"
				strokeWidth="3"
			/>
			<circle
				className="icon"
				cx="35"
				cy="30"
				r="3"
				fill="none"
				stroke="var(--clr-fg)"
				strokeWidth="3"
			/>
			<circle
				className="icon"
				cx="35"
				cy="50"
				r="3"
				fill="none"
				stroke="var(--clr-fg)"
				strokeWidth="3"
			/>
			<line
				className="icon"
				x1="20"
				y1="10"
				x2="35"
				y2="20"
				stroke="var(--clr-fg)"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<line
				className="icon"
				x1="50"
				y1="10"
				x2="35"
				y2="20"
				stroke="var(--clr-fg)"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</g>

		<text
			className="text"
			x="60"
			y="40"
			fontFamily="'Poppins', sans-serif"
			fontSize="32"
			fontWeight="bold"
			fill="var(--clr-fg)"
		>
			Yaksano
		</text>
	</svg>
);

export default Logo;
