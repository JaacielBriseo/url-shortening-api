import axios from 'axios';
import { useEffect, useState } from 'react';
import { Links } from './Links';

export const Form = () => {
	const [links, setLinks] = useState(() => {
		return JSON.parse(localStorage.getItem('urls')) || [];
	});
	const [url, setUrl] = useState('');

	const [error, setError] = useState(false);

	useEffect(() => {
		localStorage.setItem('urls', JSON.stringify(links));
	}, [links]);

	const onInputChange = ({ target }) => {
		setUrl(target.value);
	};

	const linkShortener = async (e) => {
		e.preventDefault();
		const resp = await axios
			.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
			.then(({ data }) => {
				setError(false)
				setLinks([
					{
						url: data.result.original_link,
						shortenUrl: data.result.short_link,
					},
					...links,
				]);
			})
			.catch(error=>{
				console.log(error)
				setError(true)
			})
	};
	return (
		<>
			<form
				onSubmit={linkShortener}
				className='relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3'
			>
				<input
					type='text'
					name='linkInput'
					onChange={onInputChange}
					placeholder='Shorten a link here'
					className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none ${
						error ? 'border-red' : ''
					}`}
				/>
				<button
					type='submit'
					className='px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2'
				>
					Shorten It!
				</button>
				{/* ERROR MESSAGES */}
				<div className='absolute left-7 bottom-3 text-red text-sm italic'>
					{error ? 'Please enter a valid link' : ''}
				</div>
			</form>
			<Links links={links} />
		</>
	);
};
