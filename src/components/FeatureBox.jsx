import { boxData1, boxData2, boxData3 } from '../data/boxesData';
import { FeatureBoxItems } from './FeatureBoxItems';
export const FeatureBox = () => {
	return (
		<section className='pb-32 bg-gray-100'>
			<div className='relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7'>
				<div className='hidden absolute top-24 left-16 w-10/12 h-3 bg-cyan md:block'></div>
				<div className='absolute left-1/2 w-2 h-full -ml-1 bg-cyan md:hidden'></div>
				<div className='relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3'>
					<FeatureBoxItems img={boxData1.img} title={boxData1.title} text={boxData1.text} />
				</div>
				<div className='relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-8'>
					<FeatureBoxItems img={boxData2.img} title={boxData2.title} text={boxData2.text} />
				</div>
				<div className='relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-16'>
					<FeatureBoxItems img={boxData3.img} title={boxData3.title} text={boxData3.text} />
				</div>
			</div>
		</section>
	);
};
