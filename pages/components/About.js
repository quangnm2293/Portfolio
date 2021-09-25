import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useState } from 'react';

function About() {
	const [isWhyChooseMe, setIsWhyChooseMe] = useState(false);
	const [isWhat, setIsWhat] = useState(false);
	const [isMy, setIsMy] = useState(false);

	const handleWhyChooseMe = () => {
		const whyChooseMeEl = document.getElementById('whyChooseMe');

		whyChooseMeEl.classList.toggle('h-0');
		whyChooseMeEl.classList.toggle('h-32');
		whyChooseMeEl.classList.toggle('border');

		setIsWhyChooseMe(isWhyChooseMe ? false : true);
	};
	const handleWhatIDo = () => {
		const whatIDoEl = document.getElementById('whatIDo');

		whatIDoEl.classList.toggle('h-0');
		whatIDoEl.classList.toggle('h-32');
		whatIDoEl.classList.toggle('border');

		setIsWhat(isWhat ? false : true);
	};
	const handleMySpecialties = () => {
		const mySpecialtiesEl = document.getElementById('mySpecialties');

		mySpecialtiesEl.classList.toggle('h-0');
		mySpecialtiesEl.classList.toggle('h-32');
		mySpecialtiesEl.classList.toggle('border');

		setIsMy(isMy ? false : true);
	};

	return (
		<div className='my-10 lg:my-20 flex py-5 px-2 flex-col space-y-3 lg:space-y-0 lg:space-x-6 lg:flex-row'>
			<div className='lg:w-[45%] relative flex justify-center' data-aos='fade-right'>
				<Image
					src='https://res.cloudinary.com/dpgsqsnvm/image/upload/v1632204221/nextjs_media/rqk1i1upd9m5v2a6yzwz.jpg'
					alt='about'
					height='550px'
					width='550px'
					objectFit='contain'
				/>

				<div className='absolute hidden xl:block right-0 top-[13%]'>
					<Image
						src='https://res.cloudinary.com/dpgsqsnvm/image/upload/v1632204221/nextjs_media/rqk1i1upd9m5v2a6yzwz.jpg'
						alt='about'
						height='400px'
						width='550px'
					/>
				</div>
			</div>

			<div className='lg:w-[55%] p-5 flex flex-col space-y-3' data-aos='fade-left' id='aboutRight'>
				<p className='uppercase text-sm text-green-700 tracking-[4px]'>welcome & introduce</p>
				<p className='uppercase text-xl text-green-500 tracking-widest'>Hi, my name is Quang</p>
				<p className='text-green-700'>
					On her way she met a copy. The copy warned the Little Blind Text, that where it came from
					it would have been rewritten a thousand times and everything that was left from its origin
					would be the word "and" and the Little Blind Text should turn around and return to its
					own, safe country.
				</p>

				<div className='flex flex-col space-y-2'>
					<div className='flex flex-col'>
						<div
							className={`flex justify-between p-3 border border-gray-300 ${
								isWhyChooseMe ? 'bg-blue-400 text-white' : 'bg-gray-100'
							} cursor-pointer items-center`}
							onClick={handleWhyChooseMe}
						>
							<p className='uppercase'>why choose me?</p>
							{isWhyChooseMe ? (
								<MinusIcon
									className={`h-4 ${
										isWhyChooseMe ? 'text-white' : 'text-gray-600'
									}`}
								/>
							) : (
								<PlusIcon
									className={`h-4 ${
										isWhyChooseMe ? 'text-white' : 'text-gray-600'
									}`}
								/>
							)}
						</div>

						<div
							className='flex justify-between items-center overflow-hidden overflow-y-auto border-gray-300
                                               duration-500 h-0'
							id='whyChooseMe'
						>
							<div className='text-gray-500 p-3'>
								<p>
									Far far away, behind the word mountains, far from the countries
									Vokalia and Consonantia, there live the blind texts. Separated
									they live in Bookmarksgrove right at the coast of the Semantics, a
									large language ocean.
								</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col'>
						<div
							className={`flex justify-between p-3 border border-gray-300 ${
								isWhat ? 'bg-blue-400 text-white' : 'bg-gray-100'
							} cursor-pointer items-center`}
							onClick={handleWhatIDo}
						>
							<p className='uppercase'>what i do</p>
							{isWhat ? (
								<MinusIcon
									className={`h-4 ${isWhat ? 'text-white' : 'text-gray-600'}`}
								/>
							) : (
								<PlusIcon
									className={`h-4 ${isWhat ? 'text-white' : 'text-gray-600'}`}
								/>
							)}
						</div>

						<div
							className='flex justify-between items-center overflow-hidden overflow-y-auto border-gray-300
                                               duration-500 h-0'
							id='whatIDo'
						>
							<div className='text-gray-500 p-4'>
								<p>
									Far far away, behind the word mountains, far from the countries
									Vokalia and Consonantia, there live the blind texts. <br />
									Separated they live in Bookmarksgrove right at the coast of the
									Semantics, a large language ocean. Separated they live in
									Bookmarksgrove right Separated they live in Bookmarksgrove right
								</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col'>
						<div
							className={`flex justify-between p-3 border border-gray-300 ${
								isMy ? 'bg-blue-400 text-white' : 'bg-gray-100'
							} cursor-pointer items-center`}
							onClick={handleMySpecialties}
						>
							<p className='uppercase'>my specialties</p>
							{isMy ? (
								<MinusIcon className={`h-4 ${isMy ? 'text-white' : 'text-gray-600'}`} />
							) : (
								<PlusIcon className={`h-4 ${isMy ? 'text-white' : 'text-gray-600'}`} />
							)}
						</div>

						<div
							className='flex justify-between items-center overflow-hidden overflow-y-auto border-gray-300
                                               duration-500 h-0'
							id='mySpecialties'
						>
							<div className='text-gray-500 p-4'>
								<p>
									Far far away, behind the word mountains, far from the countries
									Vokalia and Consonantia, there live the blind texts. Separated
									they live in Bookmarksgrove right at the coast of the Semantics, a
									large language ocean.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
