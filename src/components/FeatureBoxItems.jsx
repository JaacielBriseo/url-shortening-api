export const FeatureBoxItems = ({ img, title, text }) => {
	return (
		<>
			{/* Image positioning */}
			<div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
				{/* Image container for background & center */}
				<div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
					<img src={img} alt='icon' />
				</div>
			</div>
			<h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>{title}</h5>
			<p className='text-center text-gray-400 md:text-left'>{text}</p>
		</>
	);
};
