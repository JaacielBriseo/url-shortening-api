import { useState } from 'react';

export const Links = ({ links }) => {
	const [selected, setSelected] = useState(null);

	const captureLink = (event, index) => {
		navigator.clipboard.writeText(event.target.name);
		setSelected(index);
	};
	return (
		<>
			{links.map((link, index) => {
				return (
					<div
						key={link.url}
						className='flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row'
					>
						<p className='font-bold text-center text-veryDarkViolet md:text-left'>{link.url}</p>
						<div className='flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
							<div className='font-bold text-cyan'>{link.shortenUrl}</div>
							<button
								onClick={(event) => captureLink(event, index)}
								name={link.shortenUrl}
								className={`p-2 px-8 text-white rounded-lg hover:opacity-70 focus:outline-none ${
									index === selected ? 'bg-darkViolet' : 'bg-cyan'
								}`}
							>
								{index === selected ? 'Copied!' : 'Copy'}
							</button>
						</div>
					</div>
				);
			})}
		</>
	);
};
