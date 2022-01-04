import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import SwiperCore, { Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

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
			<div className="relative group overflow-hidden" id="slider">
				<Swiper navigation={true} className="mySwiper">
					<SwiperSlide>
						<Image
							src={'/slide1.png'}
							alt={images[tab]}
							width="1920px"
							height="800px"
							className="object-fill "
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={'/slide3.png'}
							alt={images[tab]}
							width="1920px"
							height="800px"
							className="object-fill "
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={'/slide2.png'}
							alt={images[tab]}
							width="1920px"
							height="800px"
							className="object-fill "
						/>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex justify-center items-center h-[800px]">
							<div className="flex space-y-6 flex-col">
								<p className="sm:text-xl md:text-2xl xl:text-4xl text-green-500 tracking-widest">
									Hi, I'm Quang
								</p>
								<p className="hidden sm:block text-green-700">I enjoy coding!</p>
								<a href="/NguyenMinhQuang_CV.pdf" download>
									<button className="border border-gray-500 text-blue-400 p-1 lg:p-2 self-start bg-gray-200">
										DOWNLOAD MY CV &rarr;
									</button>
								</a>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default Slider;
