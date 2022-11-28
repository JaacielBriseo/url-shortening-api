import { useEffect } from 'react';
import axios from 'axios';

import { HeroSection, Navbar } from './components';

export const UrlShorteningApp = () => {
	useEffect(() => {
		const resp = axios
			.get('https://api.shrtco.de/v2/shorten?url=https://portfolio-jb-v1.netlify.app/home')
			.then(({ data }) => console.log(data.result.short_link));
	}, []);

	return (
		<>
			<Navbar />
			<HeroSection />
		</>
	);
};
