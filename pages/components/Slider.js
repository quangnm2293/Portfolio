import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function Slider() {
	const images = ['/slide1.png', '/slide2.png', '/slide3.png'];
	const [tab, setTab] = useState(0);

	const sliderInfoEl = document.getElementById('sliderInfo');
	const sliderEl = document.getElementById('slider');

	useEffect(() => {
		const interval = setInterval(() => {
			sliderEl?.classList.remove('animate-slide-left', 'animate-slide-right');
			sliderInfoEl?.classList.remove('animate-popUp');
			setTimeout(() => {
				setTab(tab === images.length - 1 ? 0 : tab + 1);
				sliderEl?.classList.add('animate-slide-left');
				sliderInfoEl?.classList.add('animate-popUp');
			}, 100);
		}, 5000);

		return () => clearInterval(interval);
	});

	const handlePrevious = () => {
		sliderEl?.classList.remove('animate-slide-right', 'animate-slide-left');
		sliderInfoEl?.classList.remove('animate-popUp');
		setTimeout(() => {
			setTab(tab === 0 ? images.length - 1 : tab - 1);
			sliderEl?.classList.add('animate-slide-right');
			sliderInfoEl?.classList.add('animate-popUp');
		}, 100);
	};
	const handleNext = () => {
		sliderEl?.classList.remove('animate-slide-left', 'animate-slide-right');
		sliderInfoEl?.classList.remove('animate-popUp');
		setTimeout(() => {
			setTab(tab === images.length - 1 ? 0 : tab + 1);
			sliderEl?.classList.add('animate-slide-left');
			sliderInfoEl?.classList.add('animate-popUp');
		}, 100);
	};
	return (
		<div>
			<div className='relative group overflow-hidden' id='slider'>
				<div className='animate-slide-left' id='slider'>
					<Image
						loading='lazy'
						src={images[tab]}
						alt={images[tab]}
						width='1920px'
						height='800px'
						className='object-fill '
					/>

					<div
						className='w-5 h-10 lg:w-10 lg:h-20 absolute bg-[#00000036] left-2 top-[40%] group-hover:flex items-center cursor-pointer hidden'
						onClick={handlePrevious}
					>
						<ChevronLeftIcon className='h-5 lg:h-10 text-white font-bold' />
					</div>
					<div
						className='w-5 h-10 lg:w-10 lg:h-20 absolute bg-[#00000036] right-2 top-[40%] group-hover:flex items-center cursor-pointer hidden'
						onClick={handleNext}
					>
						<ChevronRightIcon className='h-5 lg:h-10 text-white font-bold' />
					</div>
				</div>

				<div
					className='absolute w-2/3 md:w-2/5 shadow-sm h-1/2 lg:h-1/3 bg-[#ffffffa6] bottom-5 left-5 p-2 md:p-5 xl:p-8
                                    flex flex-col justify-between'
					id='sliderInfo'
				>
					<p className='sm:text-xl md:text-2xl xl:text-4xl text-green-500 tracking-widest'>
						Hi, I'm Quang
					</p>
					<p className='hidden sm:block text-green-700'>
						I enjoy coding and I want to be a developer
					</p>
					<a href='/NguyenMinhQuang_CV.pdf' download>
						<button className='border border-gray-500 text-blue-400 p-1 lg:p-2 self-start bg-gray-200'>
							DOWNLOAD MY CV &rarr;
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Slider;
