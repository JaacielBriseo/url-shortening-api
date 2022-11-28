import axios from 'axios';
import { useEffect, useState } from 'react';

export const Links = () => {
	const [links, setLinks] = useState(() => {
		return JSON.parse(localStorage.getItem('urls')) || [];
	});
	const [url, setUrl] = useState('');
	const onInputChange = ({ target }) => {
		setUrl(target.value);
	};
	const onClick = (e) => {
		e.preventDefault();
		const resp = axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`).then(({ data }) => {
			setLinks([
				{
					url: data.result.original_link,
					shortenUrl: data.result.short_link,
				},
				...links,
			]);
		});
	};

	useEffect(() => {
		localStorage.setItem('urls', JSON.stringify(links));
	}, [links]);

	return (
		<>
			<form className='relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3'>
				<input
					type='text'
					name='linkInput'
					onChange={onInputChange}
					placeholder='Shorten a link here'
					className='flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none'
				/>
				<button
					type='submit'
					onClick={onClick}
					className='px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2'
				>
					Shorten It!
				</button>
			</form>
			{links.map((link) => {
				return (
					<div
						key={link.url}
						className='flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row'
					>
						<p className='font-bold text-center text-veryDarkViolet md:text-left'>{link.url}</p>
						<div className='flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
							<div className='font-bold text-cyan'>{link.shortenUrl}</div>
							<button className='p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none'>
								Copy
							</button>
						</div>
					</div>
				);
			})}
		</>
	);
};
