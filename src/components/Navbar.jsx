import Logo from '../assets/logo.svg';

export const Navbar = () => {
	return (
		<>
			{/* Nav Container */}
			<nav className='relative container mx-auto p-6 '>
				{/* Flex container for all items */}
				<div className='flex items-center justify-between'>
					{/* Flex Container for logo img / menu */}
					<div className='flex items-center space-x-20'>
						{/* Logo */}
						<img src={Logo} alt='logo' />
						{/* Left Menu */}
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
					{/* Right buttons menu */}
					<div className='hidden items-center space-x-6 font-bold text-grayishViolet lg:flex'>
						<div className='hover:text-veryDarkViolet'>Login</div>
						<a href='#' className='px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'>
							Sign Up
						</a>
					</div>
					{/* TODO: Hamburger Menu  */}
				</div>
				{/* TODO: Mobile Menu */}
			</nav>
		</>
	);
};
