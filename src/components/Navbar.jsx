import { useState } from 'react';
import { MobileMenu } from './';
import Logo from '../assets/logo.svg';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navToggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<nav className='relative container mx-auto p-6 '>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-20'>
						<img src={Logo} alt='logo' />
						<div className='hidden space-x-8 font-bold lg:flex'>
							<a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>
								Features
							</a>
							<a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>
								Pricing
							</a>
							<a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>
								Resources
							</a>
						</div>
					</div>
					<div className='hidden items-center space-x-6 font-bold text-grayishViolet lg:flex'>
						<div className='hover:text-veryDarkViolet'>Login</div>
						<a href='#' className='px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'>
							Sign Up
						</a>
					</div>
					<button onClick={navToggle} className={`block hamburger lg:hidden focus:outline-none ${isOpen && 'open'}`}>
						<span className='hamburger-top'></span>
						<span className='hamburger-middle'></span>
						<span className='hamburger-bottom'></span>
					</button>
				</div>
				<MobileMenu isOpen={isOpen} />
			</nav>
		</>
	);
};
